import React from "react";
import { Button } from "react-native-paper";
import colors from "../../../assets/colors";

interface IProps {
  action: () => void;
  title: string;
  h?: number;
}

export default function Boton(props: IProps) {
  const { action, title, h } = props;

  return (
    <Button
      style={{ elevation: 0 }}
      contentStyle={{ height: h ? h : "auto" }}
      mode="contained"
      color={colors.PRINCIPAL}
      children={title}
      onTouchEnd={action}
    />
  );
}
