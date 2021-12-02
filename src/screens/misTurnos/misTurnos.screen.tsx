import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import CardTurno from "../../components/CardTurno/CardTurno.components";
import Boton from "../../components/Boton/Boton.components";
import ModalGeneral from "../../components/Modal/ModalGeneral.components";
import AgregarTurno from "../../components/AgregarTurno/AgregarTurno.components";
import styles from "./misTurnos.styles";
import turnos from "../../../assets/turnosMock";
import turno from "../../../assets/turnoMock";
import Turno from "../../models/Turno";
import Servicio from "../../models/Servicio";
import { Button } from "react-native-paper";
import colors from "../../../assets/colors";

export default function MisTurnos() {
  const [openModal, setOpenModal] = useState(false);
  const [editar, setEditar] = useState(false);
  const [eliminar, setEliminar] = useState<Turno>(turno);
  const [open, isOpen] = useState(false);

  const sumarPrecio = (item: Servicio[]) => {
    let suma = 0;
    item.map((item) => {
      suma += parseInt(item.precio);
    });
    return suma;
  };

  const cancelar = (item: Turno) => {
    setEliminar(item);
    isOpen(true);
  };
  const modificar = (item: boolean) => {
    setEditar(item);
    setOpenModal(true);
  };

  useEffect(() => {
    editar ? setOpenModal(true) : null;
  }, [editar]);

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
      <ModalGeneral
        children={
          <View style={{ alignItems: "center" }}>
            <Text>¿Esta seguro que desea elmiminar este turno?</Text>
            <Text style={styles.modalDelete}>
              {eliminar.fecha} {eliminar.hora} por $
              {sumarPrecio(eliminar.servicios)}
            </Text>
            <View style={styles.botonera}>
              <View style={styles.boxBoton}>
                <Boton title="Aceptar" action={() => isOpen(false)} />
              </View>
              <View style={styles.boxBoton}>
                <Boton title="Cancelar" action={() => isOpen(false)} />
              </View>
            </View>
          </View>
        }
        open={open}
      />
      <View style={styles.agregar}>
        <Boton
          title="Agregar turno"
          action={() => {
            setOpenModal(true), setEditar(false);
          }}
        />
      </View>
      <View style={styles.margen}>
        {turnos.map((item, key) => {
          return (
            <CardTurno
              actionCancel={cancelar}
              action={modificar}
              key={key}
              data={item}
            />
          );
        })}
      </View>
    </ScrollView>
  );
}
