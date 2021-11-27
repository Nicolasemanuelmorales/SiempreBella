import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import colors from "../../../assets/colors";
import styles from "./Precio.styles";
import Servicio from "../../models/Servicio";
import compareValues from "../../utils/sort";
import Icon from "react-native-vector-icons/FontAwesome5";
import ModalGeneral from "../../components/Modal/ModalGeneral.components";
import Boton from "../../components/boton/boton.components";

interface IProps {
  navigation: any;
}

export default function Precio(props: IProps) {
  const { navigation } = props;

  const [eliminar, setEliminar] = useState<Servicio>({
    categoria: "Depilacion",
    nombre: "Pelvis completa",
    precio: "200",
    descanso: "15",
    tiempo: "20",
  });
  const [open, isOpen] = useState(false);

  const array: Servicio[] = [
    {
      categoria: "Depilacion",
      nombre: "Pelvis completa",
      precio: "200",
      descanso: "15",
      tiempo: "20",
    },
    {
      categoria: "Depilacion",
      nombre: "Tira",
      precio: "200",
      descanso: "15",
      tiempo: "20",
    },
    {
      categoria: "Depilacion",
      nombre: "Cavado",
      precio: "200",
      descanso: "15",
      tiempo: "20",
    },
    {
      categoria: "Depilacion",
      nombre: "Cavado profundo",
      precio: "200",
      descanso: "15",
      tiempo: "20",
    },
    {
      categoria: "Depilacion",
      nombre: "Media Pierna",
      precio: "200",
      descanso: "15",
      tiempo: "20",
    },
    {
      categoria: "Depilacion",
      nombre: "Pierna entera",
      precio: "200",
      descanso: "15",
      tiempo: "20",
    },
    {
      categoria: "Depilacion",
      nombre: "Pecho",
      precio: "200",
      descanso: "15",
      tiempo: "20",
    },
    {
      categoria: "Depilacion",
      nombre: "Brazos",
      precio: "200",
      descanso: "15",
      tiempo: "20",
    },
    {
      categoria: "Depilacion",
      nombre: "Glúteo",
      precio: "200",
      descanso: "15",
      tiempo: "20",
    },
    {
      categoria: "Reiki",
      nombre: "Clase",
      precio: "200",
      descanso: "15",
      tiempo: "20",
    },
    {
      categoria: "Reiki",
      nombre: "Curso",
      precio: "200",
      descanso: "15",
      tiempo: "20",
    },
    {
      categoria: "Otros",
      nombre: "Peeling corporal",
      precio: "200",
      descanso: "15",
      tiempo: "20",
    },
    {
      categoria: "Otros",
      nombre: "Limpieza de cutis",
      precio: "200",
      descanso: "15",
      tiempo: "20",
    },
  ];

  return (
    <ScrollView style={{ marginBottom: 20 }}>
      <ModalGeneral
        children={
          <View>
            <Text>¿Esta seguro que desea elmiminar este servicio?</Text>
            <Text
              style={{
                color: colors.PRINCIPAL,
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              {eliminar.nombre} de $ {eliminar.precio}
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
      <View style={{ paddingHorizontal: 20 }}>
        {array
          .sort(compareValues("categoria", "asc"))
          .map((item: Servicio, index: any) => {
            return (
              <View key={`titulo2w-${index}`}>
                {index === 0 ? (
                  <Text style={styles.title} key={`item-${index}`}>
                    {item.categoria}
                  </Text>
                ) : array.sort(compareValues("categoria", "asc"))[index - 1]
                    .categoria !== item.categoria ? (
                  <Text style={styles.title} key={`titulo1-${index}`}>
                    {item.categoria}
                  </Text>
                ) : null}
                <View style={styles.boxService} key={`titulo2-${index}`}>
                  <Pressable
                    onPress={() => {
                      setEliminar(item), isOpen(true);
                    }}
                  >
                    <Icon
                      style={{
                        marginRight: 10,
                        display: "flex",
                        alignSelf: "center",
                      }}
                      name={"trash"}
                      size={16}
                      color={colors.PRINCIPAL}
                    />
                  </Pressable>
                  <Icon
                    style={{
                      marginRight: 10,
                      display: "flex",
                      alignSelf: "center",
                    }}
                    name={"edit"}
                    size={16}
                    color={colors.PRINCIPAL}
                  />
                  <Text
                    key={`titulo3-${index}`}
                    style={{
                      maxWidth: "60%",
                      display: "flex",
                      alignSelf: "center",
                    }}
                  >
                    {item.nombre}
                  </Text>
                  <View key={`linea-${index}`} style={styles.linea}></View>
                  <View style={{ display: "flex", alignSelf: "center" }}>
                    <Text key={`precio-${index}`}>$ {item.precio}</Text>
                  </View>
                </View>
              </View>
            );
          })}
      </View>
    </ScrollView>
  );
}
