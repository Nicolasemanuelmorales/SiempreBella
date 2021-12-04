import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import colors from "../../../assets/colors";
import disponibilidadMock from "../../../assets/disponibilidadMock";
import Boton from "../../components/Boton/Boton.components";
import Disponibilidad from "../../models/Disponibilidad";
import styles from "./Disponibilidad.styles";
import Icon from "react-native-vector-icons/FontAwesome5";
import ModalGeneral from "../../components/Modal/ModalGeneral.components";
import AgregarDisponibilidad from "../../components/AgregarDisponibilidad/AgregarDisponibilidad.components";

export default function DisponibilidadScreen() {
  const [openModal, setOpenModal] = useState(false);
  const [eliminar, setEliminar] = useState();

  return (
    <>
      <ModalGeneral
        children={
          <AgregarDisponibilidad actionCancel={() => setOpenModal(false)} />
        }
        open={openModal}
      />
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
                  return (
                    <Text key={key2}>
                      {value.desde} - {value.hasta}
                    </Text>
                  );
                })}
              </View>
              <View style={{ flexDirection: "row" }}>
                <Pressable
                  onPress={() => {
                    setOpenModal(true);
                  }}
                >
                  <Icon
                    style={styles.icono}
                    name={"edit"}
                    size={16}
                    color={colors.PRINCIPAL}
                  />
                </Pressable>

                <Pressable
                  onPress={() => {
                    console.log("");
                  }}
                >
                  <Icon
                    style={styles.icono}
                    name={"trash"}
                    size={16}
                    color={colors.PRINCIPAL}
                  />
                </Pressable>
              </View>
            </View>
          );
        })}
      </View>
    </>
  );
}
