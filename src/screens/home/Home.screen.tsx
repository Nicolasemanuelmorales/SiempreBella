import React from "react";
import { Image, Text, View } from "react-native";
import promoMock from "../../../assets/mocks/promoMock";
import Promo from "../../models/Promo";

interface IProps {
  navigation: any;
}

export default function Home(props: IProps) {
  const { navigation } = props;

  return promoMock.map((item: Promo, key) => {
    return (
      <View key={key}>
        <Text>{item.img}</Text>
        {/* <Image
          style={{ width: "100%", height: 50 }}
          source={require(item.img)}
        /> */}
      </View>
    );
  });
}
