import React from "react";
import { Button, ScrollView, Text, View } from "react-native";
import colors from "../../../assets/colors";
import CardTurno from "../../components/CardTurno/CardTurno.components";

interface IProps {
  navigation: any;
}

export default function MisTurnos(props: IProps) {
  const { navigation } = props;

  return (
    <ScrollView>
      <View style={{ marginBottom: 20 }}>
        <CardTurno />
        <CardTurno />
        <CardTurno />
        <CardTurno />
      </View>
    </ScrollView>
  );
}
