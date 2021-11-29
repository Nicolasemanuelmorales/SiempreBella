import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import Boton from "../../components/boton/boton.components";
import ModalGeneral from "../../components/Modal/ModalGeneral.components";
import AgregarTurno from "../../components/AgregarTurno/AgregarTurno.components";
import styles from "./Turnos.styles";
import turnos from "../../../assets/turnosMock";
import colors from "../../../assets/colors";
import Icon from "react-native-vector-icons/FontAwesome5";
import Servicio from "../../models/Servicio";
import Turno from "../../models/Turno";
import turno from "../../../assets/turnoMock";

export default function Turnos() {
  const [openModal, setOpenModal] = useState(false);
  const [open, isOpen] = useState(false);
  const [eliminar, setEliminar] = useState<Turno>(turno);
  const [editar, setEditar] = useState(false);

  const sumarPrecio = (item: Servicio[]) => {
    let suma = 0;
    item.map((item) => {
      suma += parseInt(item.precio);
    });
    return suma;
  };
  const sumarTiempo = (item: Servicio[]) => {
    let suma = 0;
    item.map((item) => {
      suma += parseInt(item.tiempo);
    });
    return suma;
  };

  return (
    <ScrollView>
      <ModalGeneral
        children={
          <AgregarTurno
            data={editar ? turno : undefined}
            actionCancel={() => setOpenModal(false)}
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
          h={30}
          title="Agregar turno"
          action={() => {
            setOpenModal(true), setEditar(false);
          }}
        />
      </View>

      <View style={styles.filter}>
        <View style={styles.boton}>
          <View style={styles.fil}>
            <Text style={styles.textFilter}>Hoy</Text>
          </View>
        </View>
        <View style={styles.boton}>
          <View style={styles.fil}>
            <Text style={styles.textFilter}>Mañana</Text>
          </View>
        </View>
        <View style={styles.boton}>
          <View style={styles.fil}>
            <Text style={styles.textFilter}>Semana</Text>
          </View>
        </View>
        <View style={styles.boton}>
          <View style={styles.fil}>
            <Text style={styles.textFilter}>Mes</Text>
          </View>
        </View>
      </View>

      {turnos.map((item, key) => {
        return (
          <View key={key} style={styles.boxGeneral}>
            <Text>{item.hora}</Text>
            <View style={styles.time}>
              <Text style={styles.tiempo}>{sumarTiempo(item.servicios)}M</Text>
              <Text style={styles.diner}>${sumarPrecio(item.servicios)}</Text>
            </View>
            <View style={styles.name}>
              {item.servicios.map((item2, key2) => {
                return (
                  <Text key={key2} style={{ textAlign: "center" }}>
                    {item2.nombre}
                  </Text>
                );
              })}
            </View>
            <Pressable
              onPress={() => {
                setEditar(true), setOpenModal(true);
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
                setEliminar(item), isOpen(true);
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
        );
      })}
    </ScrollView>
  );
}
