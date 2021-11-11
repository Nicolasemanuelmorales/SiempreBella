import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import colors from "../../../assets/colors";
import Boton from "../../components/Boton/boton.components";
import Icon from "react-native-vector-icons/FontAwesome5";
import styles from "./Login.styles";

interface IProps {
  navigation: any;
}

export default function Login(props: IProps) {
  const { navigation } = props;
  const [hidePass, setHidePass] = useState(true);

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

          <View style={styles.boxBoton}>
            <View style={styles.ingresar}>
              <Boton
                title="Ingresar"
                action={() => navigation.navigate("DrawerNavigator")}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Boton
                title="Registrar"
                action={() => navigation.navigate("DrawerNavigator")}
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
              onTouchEnd={() => navigation.navigate("DrawerNavigator")}
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
              onTouchEnd={() => navigation.navigate("DrawerNavigator")}
            >
                Ingresar con Gmail  
            </Button>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
