import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import CardTurno from "../../components/CardTurno/CardTurno.components";
import Boton from "../../components/Boton/boton.components";
import ModalGeneral from "../../components/Modal/ModalGeneral.components";
import AgregarTurno from "../../components/AgregarTurno/AgregarTurno.components";
interface IProps {
  navigation: any;
}

export default function MisTurnos(props: IProps) {
  const { navigation } = props;
  const [openModal, setOpenModal] = useState(false);

  return (
    <ScrollView>
      <ModalGeneral
        children={<AgregarTurno actionCancel={() => setOpenModal(false)} />}
        open={openModal}
      />
      <View style={{ marginTop: 20, width: "90%", alignSelf: "center" }}>
        <Boton title="Agregar turno" action={() => setOpenModal(true)} />
      </View>
      <View style={{ marginBottom: 20 }}>
        <CardTurno />
        <CardTurno />
        <CardTurno />
        <CardTurno />
      </View>
    </ScrollView>
  );
}
