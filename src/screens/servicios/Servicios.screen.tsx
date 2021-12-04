import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import colors from "../../../assets/colors";
import styles from "../servicios/Servicios.styles";
import Servicio from "../../models/Servicio";
import compareValues from "../../utils/sort";
import Icon from "react-native-vector-icons/FontAwesome5";
import servicios from "../../../assets/mocks/serviciosMock";

interface IProps {
  navigation: any;
}

export default function Servicios(props: IProps) {
  const { navigation } = props;

  return (
    <ScrollView>
      <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
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
