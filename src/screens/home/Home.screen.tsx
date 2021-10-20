import React from "react";
import { View } from "react-native";
import Boton from "../../components/boton/boton.components";

interface IProps {
  navigation: any;
}

export default function Home(props: IProps) {
  const { navigation } = props;

  return (
    <View style={{ marginTop: 50, width: "50%", alignSelf: "center" }}>
      <Boton title={"Home"} action={() => navigation.navigate("Servicios")} />
    </View>
  );
}
