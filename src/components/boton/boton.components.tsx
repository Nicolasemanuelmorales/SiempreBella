import React from "react";
import { Button } from "react-native-paper";
import colors from "../../../assets/colors";

interface IProps {
  action: () => void;
  title: string;
}

export default function Boton(props: IProps) {
  const { action, title } = props;

  return (
    <Button
      style={{ elevation: 0 }}
      mode="contained"
      color={colors.PRINCIPAL}
      children={title}
      onTouchEnd={action}
    />
  );
}
