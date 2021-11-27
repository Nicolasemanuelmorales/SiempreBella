import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import colors from "../../../assets/colors";
import styles from "../servicios/Servicios.styles";
import Servicio from "../../models/Servicio";
import compareValues from "../../utils/sort";
interface IProps {
  navigation: any;
}

export default function Servicios(props: IProps) {
  const { navigation } = props;

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
      categoria: "Otros",
      nombre: "Clase de Reiki",
      precio: "200",
      descanso: "15",
      tiempo: "20",
    },
    {
      categoria: "Otros",
      nombre: "Curso de Reiki",
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
      <View style={{ paddingHorizontal: 20 }}>
        {array
          .sort(compareValues("categoria", "asc"))
          .map((item: Servicio, key: number) => {
            return (
              <>
                {key === 0 ? (
                  <Text style={styles.title} key={`item-${key}`}>
                    {item.categoria}
                  </Text>
                ) : array.sort(compareValues("categoria", "asc"))[key - 1]
                    .categoria !== item.categoria ? (
                  <Text style={styles.title} key={`titulo1-${key}`}>
                    {item.categoria}
                  </Text>
                ) : null}
                <View style={styles.boxService} key={`titulo2-${key}`}>
                  <Text key={`titulo3-${key}`}>{item.nombre}</Text>
                  <View
                    key={`linea-${key}`}
                    style={{
                      height: 1.5,
                      flex: 1,
                      backgroundColor: colors.PRINCIPAL,
                      marginTop: 10,
                      marginHorizontal: 10,
                    }}
                  ></View>
                  <Text key={`precio-${key}`}>$ {item.precio}</Text>
                </View>
              </>
            );
          })}
      </View>
    </ScrollView>
  );
}
