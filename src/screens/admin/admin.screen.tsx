import React from "react";
import { Button, View } from "react-native";

interface IProps {
  navigation: any;
}

export default function Admin(props: IProps) {
  const { navigation } = props;

  return (
    <View style={{ marginTop: 50 }}>
      <Button title={"Admin"} onPress={() => navigation.navigate("Login")} />
    </View>
  );
}
