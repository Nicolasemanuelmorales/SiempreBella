import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import CardTurno from "../../components/CardTurno/CardTurno.components";
import Boton from "../../components/boton/boton.components";
import ModalGeneral from "../../components/Modal/ModalGeneral.components";
import AgregarTurno from "../../components/AgregarTurno/AgregarTurno.components";
import styles from "./misTurnos.styles";
import turnos from "../../../assets/turnosMock";
import turno from "../../../assets/turnoMock";

export default function MisTurnos() {
  const [openModal, setOpenModal] = useState(false);
  const [editar, setEditar] = useState(false);

  return (
    <ScrollView>
      <ModalGeneral
        children={
          <AgregarTurno
            data={editar ? turno : undefined}
            actionCancel={() => {
              setEditar(false), setOpenModal(false);
            }}
          />
        }
        open={openModal}
      />
      <View style={styles.agregar}>
        <Boton h={30} title="Agregar turno" action={() => setOpenModal(true)} />
      </View>
      <View style={styles.margen}>
        {turnos.map((item, key) => {
          return <CardTurno action={setEditar} key={key} data={item} />;
        })}
      </View>
    </ScrollView>
  );
}
