import { sendPasswordResetEmail } from "@firebase/auth";
import React, { useState } from "react";
import { Alert, Text, View } from "react-native";
import { HelperText, TextInput } from "react-native-paper";
import { useDispatch } from "react-redux";
import colors from "../../../assets/colors";
import auth from "../../../firebase";
import Boton from "../../components/Boton/Boton.components";
import loaderAction from "../../redux/actions/LoaderAction";
import { validateEmail } from "../../utils/validateEmail";
interface IProps {
  navigation: any;
}

export default function ResetPass(props: IProps) {
  const { navigation } = props;
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const dispatch = useDispatch();

  const resetPassword = () => {
    dispatch(loaderAction(true));
    if (email === "") {
      setEmailError("Campo vacio.");
    } else if (!validateEmail(email)) {
      setEmailError("Email Incorrecto.");
    } else {
      setEmailError("");
    }
    if (emailError === "") {
      sendPasswordResetEmail(auth, email)
        .then(() => navigation.navigate("Login"))
        .catch((error) => {
          if (error.code === "auth/invalid-email") {
            setEmailError("Email Incorrecto.");
          }
        })
        .finally(() => {
          dispatch(loaderAction(false));
        });
    }
  };

  return (
    <View style={{ marginHorizontal: 20, marginTop: 20 }}>
      <Text style={{ marginBottom: 20, fontSize: 16 }}>
        Ingrese su correo electronico y le enviaremos un link para poder cambiar
        la contraseña.
      </Text>
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

      <Boton title="Enviar" action={resetPassword} />
    </View>
  );
}
