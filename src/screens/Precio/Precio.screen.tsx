import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import colors from "../../../assets/colors";
import styles from "./Precio.styles";
import Servicio from "../../models/Servicio";
import compareValues from "../../utils/sort";
import Icon from "react-native-vector-icons/FontAwesome5";
import ModalGeneral from "../../components/Modal/ModalGeneral.components";
import Boton from "../../components/boton/boton.components";
import AgregarServicio from "../../components/AgregarServicio/AgregarServicio.components";
import servicios from "../../../assets/serviciosMock";

interface IProps {
  navigation: any;
}

export default function Precio(props: IProps) {
  const { navigation } = props;

  const [eliminar, setEliminar] = useState<Servicio>({
    id: 100,
    categoria: "Depilacion",
    nombre: "Pelvis completa",
    precio: "200",
    descanso: "15",
    tiempo: "20",
  });
  const [open, isOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <ScrollView style={{ marginBottom: 20 }}>
      <ModalGeneral
        children={
          <View style={{ alignItems: "center" }}>
            <Text>¿Esta seguro que desea elmiminar este servicio?</Text>
            <Text style={styles.modalDelete}>
              {eliminar.nombre} por ${eliminar.precio}
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
      <ModalGeneral
        children={<AgregarServicio actionCancel={() => setOpenModal(false)} />}
        open={openModal}
      />
      <View style={styles.agregar}>
        <Boton
          h={30}
          title="Agregar Servicio"
          action={() => setOpenModal(true)}
        />
      </View>

      <View style={{ paddingHorizontal: 20 }}>
        {servicios
          .sort(compareValues("categoria", "asc"))
          .map((item: Servicio, index: any) => {
            return (
              <View key={`titulo2w-${index}`}>
                {index === 0 ? (
                  <Text style={styles.title}>{item.categoria}</Text>
                ) : servicios.sort(compareValues("categoria", "asc"))[index - 1]
                    .categoria !== item.categoria ? (
                  <Text style={styles.title}>{item.categoria}</Text>
                ) : null}
                <View style={styles.boxService}>
                  <Pressable
                    onTouchStart={() => {
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
                  <Icon
                    style={styles.icono}
                    name={"edit"}
                    size={16}
                    color={colors.PRINCIPAL}
                  />
                  <Text style={styles.nombreService}>{item.nombre}</Text>
                  <View style={styles.linea}></View>
                  <View style={styles.price}>
                    <Text>$ {item.precio}</Text>
                  </View>
                </View>
              </View>
            );
          })}
      </View>
    </ScrollView>
  );
}
