import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { HelperText, TextInput } from "react-native-paper";
import colors from "../../../assets/colors";
import Boton from "../../components/Boton/Boton.components";
import Icon from "react-native-vector-icons/FontAwesome5";
import styles from "./Registrar.styles";
import auth from "../../../firebase";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { useDispatch } from "react-redux";
import loaderAction from "../../redux/actions/LoaderAction";
import { validateEmail } from "../../utils/validateEmail";

interface IProps {
  navigation: any;
}

export default function Registrar(props: IProps) {
  const { navigation } = props;
  const [hidePass, setHidePass] = useState(true);
  const [hidePassRepeat, setHidePassRepeat] = useState(true);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [secondPass, setSecondPass] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const [secondPassError, setSecondPassError] = useState("");
  const dispatch = useDispatch();

  const registrar = () => {
    setEmailError("");
    setPassError("");
    setSecondPassError("");
    if (pass !== secondPass) {
      setSecondPassError("La contraseña no coincide.");
    }
    if (email === "") {
      setEmailError("Campo vacio.");
    } else if (!validateEmail(email)) {
      setEmailError("Email Incorrecto.");
    }
    if (pass === "") {
      setPassError("Campo vacio.");
    } else if (pass.length < 8) {
      setPassError("Minimo 8 caracteres.");
    }
    if (secondPass === "") {
      setSecondPassError("Campo vacio.");
    }
    if (
      emailError === "" &&
      passError === "" &&
      secondPassError === "" &&
      email !== "" &&
      pass !== "" &&
      secondPass !== ""
    ) {
      dispatch(loaderAction(true));
      createUserWithEmailAndPassword(auth, email, pass)
        .then((user) => {
          navigation.navigate("Login");
          dispatch(loaderAction(false));
        })
        .catch((error) => {
          if (error.code === "auth/invalid-email") {
            setEmailError("Email Incorrecto.");
          }
          if (error.code === "auth/email-already-in-use") {
            setEmailError("Email registrado.");
          }
          if (error.code === "auth/weak-password") {
            setPassError("Minimo 8 caracteres.");
          }
        });
    }
  };

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
              },
            }}
            onChangeText={setEmail}
            mode="outlined"
            label="Email"
            error={emailError === "" ? false : true}
            value={email}
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
            onChangeText={setPass}
            secureTextEntry={hidePass}
            error={passError === "" ? false : true}
            right={
              <TextInput.Icon
                onPress={() => setHidePass(!hidePass)}
                name={() => (
                  <Icon
                    name={hidePass ? "eye-slash" : "eye"}
                    size={20}
                    color={"#757575"}
                  />
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
          <TextInput
            theme={{
              colors: {
                primary: colors.PRINCIPAL,
                background: colors.BLANCO,
                error: "red",
              },
            }}
            mode="outlined"
            error={secondPassError === "" ? false : true}
            onChangeText={setSecondPass}
            value={secondPass}
            label="Repetir contraseña"
            secureTextEntry={hidePassRepeat}
            right={
              <TextInput.Icon
                onPress={() => setHidePassRepeat(!hidePassRepeat)}
                name={() => (
                  <Icon
                    name={hidePassRepeat ? "eye-slash" : "eye"}
                    size={20}
                    color={"#757575"}
                  />
                )}
              />
            }
          />
          <HelperText
            style={{
              color: "red",
            }}
            type="error"
            visible={secondPassError === "" ? false : true}
          >
            {secondPassError}
          </HelperText>

          <View style={styles.boxBoton}>
            <View style={styles.ingresar}>
              <Boton
                title="Cancelar"
                action={() => navigation.navigate("Login")}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Boton title="Registrar" action={() => registrar()} />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
