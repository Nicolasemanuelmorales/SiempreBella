import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import CardTurno from "../../components/CardTurno/CardTurno.components";
import Boton from "../../components/boton/boton.components";
import ModalGeneral from "../../components/Modal/ModalGeneral.components";
import AgregarTurno from "../../components/AgregarTurno/AgregarTurno.components";
import styles from "./Turnos.styles";
import turnos from "../../../assets/turnos";

export default function Turnos() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <ScrollView>
      <ModalGeneral
        children={<AgregarTurno actionCancel={() => setOpenModal(false)} />}
        open={openModal}
      />
      <View style={styles.agregar}>
        <Boton h={30} title="Agregar turno" action={() => setOpenModal(true)} />
      </View>
      <View style={styles.margen}>
        {turnos.map((item, key) => {
          return <CardTurno key={key} data={item} />;
        })}
      </View>
    </ScrollView>
  );
}
