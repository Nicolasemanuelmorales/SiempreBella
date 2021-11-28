import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import Boton from "../../components/boton/boton.components";
import ModalGeneral from "../../components/Modal/ModalGeneral.components";
import AgregarTurno from "../../components/AgregarTurno/AgregarTurno.components";
import styles from "./Turnos.styles";
import turnos from "../../../assets/turnos";
import colors from "../../../assets/colors";
import Icon from "react-native-vector-icons/FontAwesome5";
import Servicio from "../../models/Servicio";

export default function Turnos() {
  const [openModal, setOpenModal] = useState(false);

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
        children={<AgregarTurno actionCancel={() => setOpenModal(false)} />}
        open={openModal}
      />
      <View style={styles.agregar}>
        <Boton h={30} title="Agregar turno" action={() => setOpenModal(true)} />
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
              {item.servicios.map((item, key) => {
                return (
                  <Text key={key} style={{ textAlign: "center" }}>
                    {item.nombre}
                  </Text>
                );
              })}
            </View>
            <Icon
              style={styles.icono}
              name={"edit"}
              size={16}
              color={colors.PRINCIPAL}
            />
            <Icon
              style={styles.icono}
              name={"trash"}
              size={16}
              color={colors.PRINCIPAL}
            />
          </View>
        );
      })}
    </ScrollView>
  );
}
