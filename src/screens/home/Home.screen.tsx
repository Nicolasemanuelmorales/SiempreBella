import React from "react";
import { Button, View } from "react-native";

interface IProps {
  navigation: any;
}

export default function Home(props: IProps) {
  const { navigation } = props;

  return (
    <View style={{ marginTop: 50 }}>
      <Button title={"Home"} onPress={() => navigation.navigate("Login")} />
    </View>
  );
}
