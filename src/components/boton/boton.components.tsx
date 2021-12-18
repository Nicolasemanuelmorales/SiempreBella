import React from "react";
import { TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
import colors from "../../../assets/colors";

interface IProps {
  action: () => void;
  title: string;
  h?: number;
  size?: number;
}

export default function Boton(props: IProps) {
  const { action, title, h, size } = props;

  return (
    <TouchableOpacity activeOpacity={1} onPress={action}>
      <Button
        style={{ elevation: 0 }}
        contentStyle={{ height: h ? h : 37 }}
        mode="contained"
        color={colors.PRINCIPAL}
        labelStyle={{
          fontFamily: "RMedium",
          fontSize: size > 0 ? size : 14,
          marginTop: 0,
          marginBottom: 0,
          marginLeft: 6,
          marginRight: 6,
        }}
        children={title}
      />
    </TouchableOpacity>
  );
}
