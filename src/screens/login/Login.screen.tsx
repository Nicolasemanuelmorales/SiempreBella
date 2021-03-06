import React, { useEffect, useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
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
            setPassError("Contrase??a incorrecta.");
          }
          if (error.code === "auth/user-not-found") {
            setPassError("Email o contrase??a incorrecta");
            setEmailError("??");
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
            label="Contrase??a"
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
            <View style={styles.boxRecordar}>
              <Text style={styles.recor}>Recordar</Text>
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
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => navigation.navigate("Registrar")}
              >
                <Button
                  style={{ elevation: 0 }}
                  contentStyle={{ height: 37 }}
                  mode="contained"
                  color={colors.PRINCIPAL}
                  labelStyle={styles.labelS}
                  children={"Registrar"}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.mb}>
            <TouchableOpacity activeOpacity={1} onPress={() => console.log("")}>
              <Button
                icon={() => (
                  <Icon name={"facebook"} size={20} color={colors.BLANCO} />
                )}
                labelStyle={styles.fFM}
                style={styles.elev}
                mode="contained"
                color={colors.FACEBOOK}
              >
                Ingresar con Facebook
              </Button>
            </TouchableOpacity>
          </View>
          <TouchableOpacity activeOpacity={1} onPress={() => console.log("")}>
            <Button
              icon={() => (
                <Image
                  style={styles.imgG}
                  source={require("../../../assets/images/gmail.jpg")}
                />
              )}
              labelStyle={styles.fFM}
              style={styles.elev}
              mode="contained"
              color={colors.GMAIL}
            >
              Ingresar con Gmail????
            </Button>
          </TouchableOpacity>

          <Text
            style={styles.olvPass}
            onPress={() => navigation.navigate("ResetPass")}
          >
            ??Olvidaste tu contrase??a?
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
