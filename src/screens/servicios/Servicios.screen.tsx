import React from "react";
import { Text, View } from "react-native";
import colors from "../../../assets/colors";

interface IProps {
  navigation: any;
}

export default function Servicios(props: IProps) {
  const { navigation } = props;

  const array = [
    "Cavado",
    "Media Pierna",
    "Pierna entera",
    "Pecho",
    "Brazos",
    "Glúteo",
    "Espalda",
    "Media Espalda",
    "Axila",
    "Bozo",
  ];

  return (
    <View style={{ padding: 20 }}>
      <Text
        style={{
          color: colors.PRINCIPAL,
          fontWeight: "bold",
          marginBottom: 5,
          fontSize: 16,
        }}
      >
        Depilación
      </Text>
      {array.map((item: any, key: any) => {
        return (
          <View
            style={{
              marginTop: 10,
              borderTopWidth: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 5,
              paddingTop: 10,
              marginHorizontal: 10,
              borderColor: colors.PRINCIPAL,
            }}
            key={key}
          >
            <Text key={key}>{item}</Text>
            <Text key={key + 100}>$ 150</Text>
          </View>
        );
      })}
    </View>
  );
}
