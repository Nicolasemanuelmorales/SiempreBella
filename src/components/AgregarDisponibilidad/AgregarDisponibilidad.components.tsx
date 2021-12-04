import React, { useState } from "react";
import { Platform } from "react-native";

interface IProps {
  actionCancel: () => void;
}

export default function AgregarDisponibilidad(props: IProps) {
  const { actionCancel } = props;
  const [date, setDate] = useState(new Date("2020-08-25"));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  return null;
}
