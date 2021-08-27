import React from "react";
import { Button, View } from "react-native";

interface IProps {
  navigation: any;
}

export default function MisTurnos(props: IProps) {
  const { navigation } = props;

  return (
    <View style={{ marginTop: 50 }}>
      <Button
        title={"MisTurnos"}
        onPress={() => navigation.navigate("Admin")}
      />
    </View>
  );
}
