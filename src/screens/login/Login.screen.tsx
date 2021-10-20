import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import colors from "../../../assets/colors";
import Boton from "../../components/boton/boton.components";
import Icon from "react-native-vector-icons/FontAwesome5";

interface IProps {
  navigation: any;
}

export default function Login(props: IProps) {
  const { navigation } = props;
  const [hidePass, setHidePass] = useState(true);

  return (
    <View style={{ flex: 10, justifyContent: "center" }}>
      <View style={{ flex: 2.5 }}>
        <Image
          style={{ width: 150, height: 150, alignSelf: "center" }}
          source={require("../../../assets/images/flor.png")}
        />
        <Text
          style={{
            fontSize: 40,
            fontWeight: "bold",
            color: colors.PRINCIPAL,
            textAlign: "center",
            marginTop: -20,
          }}
        >
          Siempre Bella
        </Text>
      </View>
      <View style={{ flex: 8.5, width: "90%", alignSelf: "center" }}>
        <View style={{ marginBottom: 20 }}>
          <TextInput
            theme={{
              colors: { primary: colors.PRINCIPAL, background: colors.BLANCO },
            }}
            mode="outlined"
            label="Email"
          />
        </View>

        <View style={{ marginBottom: 20 }}>
          <TextInput
            theme={{
              colors: { primary: colors.PRINCIPAL, background: colors.BLANCO },
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

        <View
          style={{
            marginBottom: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flex: 1, marginRight: 20 }}>
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
        <View style={{ marginBottom: 20 }}>
          <Button
            style={{ elevation: 0 }}
            mode="contained"
            color="#dc4a38"
            onTouchEnd={() => navigation.navigate("DrawerNavigator")}
          >
            Ingresar con Gmail
          </Button>
        </View>
        <View style={{ marginBottom: 20 }}>
          <Button
            style={{ elevation: 0 }}
            mode="contained"
            color="#4665b5"
            onTouchEnd={() => navigation.navigate("DrawerNavigator")}
          >
            Ingresar con Facebook
          </Button>
        </View>
      </View>
    </View>
  );
}
