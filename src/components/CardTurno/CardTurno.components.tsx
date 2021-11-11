import React from "react";
import { Text, View } from "react-native";
import colors from "../../../assets/colors";
import Boton from "../Boton/boton.components";
import styles from "./CardTurno.styles";

interface IProps {
  navigation?: any;
}

export default function CardTurno(props: IProps) {
  const { navigation } = props;

  return (
    <View style={styles.boxGeneral}>
      <View style={styles.boxFecha}>
        <Text style={styles.Semana}>OCT</Text>
        <Text style={styles.Numero}>25</Text>
        <Text style={styles.hora}> 12:30 AM</Text>
      </View>
      <View style={styles.boxServicio}>
        <View style={styles.servicios}>
          <Text style={styles.textoService}>
            Pierna entera | Media pierna | Cavado
          </Text>
          <View style={styles.flexR}>
            <Text style={styles.pagoB}>Método de pago:</Text>
            <Text style={styles.pagoL}>Mercado Pago.</Text>
          </View>
        </View>
        <View style={styles.boton}>
          <Text style={styles.cancel}>CANCELAR</Text>
          <Boton
            size={13}
            h={25}
            title="Modificar"
            action={() => console.log("")}
          />
        </View>
      </View>
    </View>
  );
}
