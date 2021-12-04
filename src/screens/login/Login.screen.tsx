import React, { useEffect, useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";
import { Button, HelperText, Switch, TextInput } from "react-native-paper";
import colors from "../../../assets/colors";
import Boton from "../../components/Boton/Boton.components";
import Icon from "react-native-vector-icons/FontAwesome5";
import styles from "./Login.styles";
import auth from "../../../firebase";
import { useDispatch } from "react-redux";
import loaderAction from "../../redux/actions/LoaderAction";
import { signInWithEmailAndPassword } from "firebase/auth";
import { validateEmail } from "../../utils/validateEmail";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface IProps {
  navigation: any;
}

export default function Login(props: IProps) {
  const { navigation } = props;
  const [hidePass, setHidePass] = useState(true);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [pass, setPass] = useState("");
  const [passError, setPassError] = useState("");
  const [recordarme, setRecordarme] = useState(false);
  const dispatch = useDispatch();

  const retrieveData = async () => {
    auth.onAuthStateChanged((user) => {
      dispatch(loaderAction(false));
      if (user) {
        navigation.navigate("DrawerNavigator");
      }
    });
  };

  const login = () => {
    setPassError("");
    if (email === "") {
      setEmailError("Campo vacio.");
    } else if (!validateEmail(email)) {
      setEmailError("Email Incorrecto.");
    } else {
      setEmailError("");
    }
    if (pass === "") {
      setPassError("Campo vacio.");
    }
    if (emailError === "") {
      dispatch(loaderAction(true));

      signInWithEmailAndPassword(auth, email, pass)
        .then(() => {
          recuerdame();
          navigation.navigate("DrawerNavigator");
        })
        .catch((error) => {
          if (error.code === "auth/invalid-email" && pass === "") {
            setEmailError("Email Incorrecto.");
          }

          if (error.code === "auth/wrong-password") {
            setPassError("Contraseña incorrecta.");
          }
          if (error.code === "auth/user-not-found") {
            setPassError("Email o contraseña incorrecta");
            setEmailError(" ");
          }
        })
        .finally(() => {
          dispatch(loaderAction(false));
        });
    }
  };

  const recuerdame = async () => {
    if (recordarme) {
      await AsyncStorage.setItem("email", email);
      await AsyncStorage.setItem("pass", pass);
    } else {
      await AsyncStorage.removeItem("email");
      await AsyncStorage.removeItem("pass");
    }
  };

  const initRecuerdame = async () => {
    let passAux = await AsyncStorage.getItem("pass");
    let emailAux = await AsyncStorage.getItem("email");

    if (passAux || emailAux) {
      setEmail(emailAux);
      setPass(passAux);
      setRecordarme(true);
    }
  };

  useEffect(() => {
    initRecuerdame();
    dispatch(loaderAction(true));
    retrieveData();
  }, []);

  return (
    <ScrollView>
      <View style={styles.boxGeneral}>
        <View style={styles.minH}>
          <Image
            style={styles.img}
            source={require("../../../assets/images/flor.png")}
          />
          <Text style={styles.title}>Siempre Bella</Text>
        </View>
        <View style={styles.boxGeneral2}>
          <TextInput
            theme={{
              colors: {
                primary: colors.PRINCIPAL,
                background: colors.BLANCO,
                error: "red",
                text: emailError === "" ? "#000" : "red",
              },
            }}
            error={emailError === "" ? false : true}
            value={email}
            onChangeText={setEmail}
            mode="outlined"
            label="Email"
          />
          <HelperText
            style={{
              color: "red",
            }}
            type="error"
            visible={emailError === "" ? false : true}
          >
            {emailError}
          </HelperText>
          <TextInput
            theme={{
              colors: {
                primary: colors.PRINCIPAL,
                background: colors.BLANCO,
                error: "red",
                text: passError === "" ? "#000" : "red",
              },
            }}
            mode="outlined"
            label="Contraseña"
            value={pass}
            error={passError === "" ? false : true}
            onChangeText={setPass}
            secureTextEntry={hidePass}
            right={
              <TextInput.Icon
                name={() => (
                  <Pressable onTouchStart={() => setHidePass(!hidePass)}>
                    <Icon
                      name={hidePass ? "eye-slash" : "eye"}
                      size={20}
                      color={passError === "" ? "#757575" : "red"}
                    />
                  </Pressable>
                )}
              />
            }
          />

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <HelperText
              style={{
                color: "red",
              }}
              type="error"
              visible={passError === "" ? false : true}
            >
              {passError}
            </HelperText>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: 16, marginRight: 2, color: "#757575" }}>
                Recordar
              </Text>
              <Switch
                value={recordarme}
                onTouchStart={() => {
                  setRecordarme(!recordarme),
                    setTimeout(() => recuerdame(), 1000);
                }}
                color={colors.PRINCIPAL}
              />
            </View>
          </View>
          <View style={styles.boxBoton}>
            <View style={styles.ingresar}>
              <Boton title="Ingresar" action={login} />
            </View>
            <View style={{ flex: 1 }}>
              <Button
                style={{ elevation: 0 }}
                contentStyle={{ height: 37 }}
                mode="contained"
                color={colors.PRINCIPAL}
                labelStyle={styles.labelS}
                children={"Registrar"}
                onPress={() => navigation.navigate("Registrar")}
              />
            </View>
          </View>

          <View style={styles.mb}>
            <Button
              icon={() => (
                <Icon name={"facebook"} size={20} color={colors.BLANCO} />
              )}
              style={styles.elev}
              mode="contained"
              color={colors.FACEBOOK}
              onPress={() => console.log("")}
            >
              Ingresar con Facebook
            </Button>
          </View>
          <View>
            <Button
              icon={() => (
                <Image
                  style={styles.imgG}
                  source={require("../../../assets/images/gmail.jpg")}
                />
              )}
              style={styles.elev}
              mode="contained"
              color={colors.GMAIL}
              onPress={() => console.log("")}
            >
              Ingresar con Gmail  
            </Button>
          </View>

          <Text
            style={{
              fontSize: 16,
              textAlign: "center",
              marginTop: 20,
              color: "#757575",
            }}
            onPress={() => navigation.navigate("ResetPass")}
          >
            ¿Olvidaste tu contraseña?
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
