import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import colors from "../../../assets/colors";
import Boton from "../../components/boton/boton.components";
import Icon from "react-native-vector-icons/FontAwesome5";
import styles from "./Registrar.styles";

interface IProps {
  navigation: any;
}

export default function Registrar(props: IProps) {
  const { navigation } = props;
  const [hidePass, setHidePass] = useState(true);
  const [hidePassRepeat, setHidePassRepeat] = useState(true);

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
          <View style={styles.mb}>
            <TextInput
              theme={{
                colors: {
                  primary: colors.PRINCIPAL,
                  background: colors.BLANCO,
                },
              }}
              mode="outlined"
              label="Email"
            />
          </View>

          <View style={styles.mb25}>
            <TextInput
              theme={{
                colors: {
                  primary: colors.PRINCIPAL,
                  background: colors.BLANCO,
                },
              }}
              mode="outlined"
              label="Contraseña"
              secureTextEntry={hidePass}
              right={
                <TextInput.Icon
                  onPress={() => setHidePass(!hidePass)}
                  name={() => (
                    <Icon
                      name={hidePass ? "eye-slash" : "eye"}
                      size={20}
                      color={colors.PRINCIPAL}
                    />
                  )}
                />
              }
            />
          </View>
          <View style={styles.mb25}>
            <TextInput
              theme={{
                colors: {
                  primary: colors.PRINCIPAL,
                  background: colors.BLANCO,
                },
              }}
              mode="outlined"
              label="Repetir contraseña"
              secureTextEntry={hidePassRepeat}
              right={
                <TextInput.Icon
                  onPress={() => setHidePassRepeat(!hidePassRepeat)}
                  name={() => (
                    <Icon
                      name={hidePassRepeat ? "eye-slash" : "eye"}
                      size={20}
                      color={colors.PRINCIPAL}
                    />
                  )}
                />
              }
            />
          </View>

          <View style={styles.boxBoton}>
            <View style={styles.ingresar}>
              <Boton
                title="Cancelar"
                action={() => navigation.navigate("Login")}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Boton title="Registrar" action={() => console.log("")} />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
