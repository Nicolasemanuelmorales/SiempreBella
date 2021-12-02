import React, { useState } from "react";
import { Text, View } from "react-native";
import colors from "../../../assets/colors";
import disponibilidadMock from "../../../assets/disponibilidadMock";
import Boton from "../../components/Boton/Boton.components";
import Disponibilidad from "../../models/Disponibilidad";
import styles from "./Disponibilidad.styles";

export default function DisponibilidadScreen() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <View style={styles.agregar}>
        <Boton
          title="Agregar Disponibilidad"
          action={() => {
            setOpenModal(true);
          }}
        />
      </View>
      <View style={styles.boxGeneral}>
        {disponibilidadMock.map((item: Disponibilidad, key) => {
          return (
            <View style={styles.boxDispo} key={key}>
              <Text style={{ alignItems: "center" }}>{item.Fecha}</Text>
              <View style={{ flexDirection: "column" }}>
                {item.Horarios.map((value, key2) => {
                  return <Text key={key2}>{value.desde}</Text>;
                })}
              </View>
            </View>
          );
        })}
      </View>
    </>
  );
}
