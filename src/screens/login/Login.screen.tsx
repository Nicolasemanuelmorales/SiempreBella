import React, { useEffect, useState } from "react";
import {
  AsyncStorage,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { Button, HelperText, TextInput } from "react-native-paper";
import colors from "../../../assets/colors";
import Boton from "../../components/Boton/Boton.components";
import Icon from "react-native-vector-icons/FontAwesome5";
import styles from "./Login.styles";
import { auth } from "../../../firebase";
import { useDispatch, useSelector } from "react-redux";
import loaderAction from "../../redux/actions/LoaderAction";
import Loader from "../../components/Loader/Loader.components";
import { IRootState } from "../../redux/reducers/rootReducer";

interface IProps {
  navigation: any;
}

export default function Login(props: IProps) {
  const { navigation } = props;
  const [hidePass, setHidePass] = useState(true);
  const [email, setEmail] = useState("prueba1@prueba.com");
  const [pass, setPass] = useState("prueba01");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const dispatch = useDispatch();
  const loader = useSelector((state: IRootState) => state.loader.value);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const storeData = async () => {
    await AsyncStorage.setItem("log", "in");
  };

  const retrieveData = async () => {
    dispatch(loaderAction(true));

    await AsyncStorage.getItem("log")
      .then((item) => {
        item ? navigation.navigate("DrawerNavigator") : null;
      })
      .finally(() => {
        dispatch(loaderAction(false));
      });
  };

  useEffect(() => {
    retrieveData();
  }, []);

  const login = () => {
    dispatch(loaderAction(true));
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
      auth
        .signInWithEmailAndPassword(email, pass)
        .then(() => {
          storeData(), navigation.navigate("DrawerNavigator");
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

  return (
    <>
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
                        color={colors.PRINCIPAL}
                      />
                    </Pressable>
                  )}
                />
              }
            />
            <HelperText
              style={{
                color: "red",
              }}
              type="error"
              visible={passError === "" ? false : true}
            >
              {passError}
            </HelperText>
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
                onPress={() => navigation.navigate("DrawerNavigator")}
              >
                Ingresar con Facebook
              </Button>
            </View>
            <View style={styles.mb}>
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
                onPress={() => navigation.navigate("DrawerNavigator")}
              >
                  Ingresar con Gmail  
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
      <Loader open={loader} />
    </>
  );
}
