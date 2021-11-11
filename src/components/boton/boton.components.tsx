import React from "react";
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
    <Button
      style={{ elevation: 0 }}
      contentStyle={{ height: h ? h : "auto" }}
      mode="contained"
      color={colors.PRINCIPAL}
      labelStyle={{ fontSize: size > 0 ? size : 14 }}
      children={title}
      onTouchStart={action}
    />
  );
}
