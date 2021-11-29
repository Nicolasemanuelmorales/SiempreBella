import React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import colors from "../../../assets/colors";
import Turno from "../../models/Turno";
import Boton from "../boton/boton.components";
import styles from "./CardTurno.styles";

interface IProps {
  navigation?: any;
  data: Turno;
  action?: (value: any) => void;
  actionCancel: (value: any) => void;
}

export default function CardTurno(props: IProps) {
  const { navigation, data, action, actionCancel } = props;

  const sumarPrecio = () => {
    let suma = 0;
    data.servicios.map((item) => {
      suma += parseInt(item.precio);
    });
    return suma;
  };

  return (
    <View style={styles.boxGeneral}>
      <View style={styles.boxFecha}>
        <Text style={styles.Semana}>OCT</Text>
        <Text style={styles.Numero}>25</Text>
        <Text style={styles.hora}> {data.hora}</Text>
      </View>
      <View style={styles.boxServicio}>
        <View style={styles.servicios}>
          <Text style={styles.textoService}>
            {data !== undefined
              ? data.servicios.map((item, key) => {
                  return (key > 0 ? " | " : "") + item.nombre;
                })
              : null}
          </Text>
          <View style={styles.flexR}>
            <Text style={styles.pagoB}>Método de pago:</Text>
            <Text style={styles.pagoL}>{data.metodoPago}.</Text>
          </View>
          <View style={styles.flexR2}>
            <Text style={styles.pagoB}>Total:</Text>
            <Text style={styles.pagoL}>$ {sumarPrecio()}.</Text>
          </View>
        </View>
        <View style={styles.boton}>
          <Button
            mode="outlined"
            color={colors.PRINCIPAL}
            style={styles.cancel}
            contentStyle={{ height: 21 }}
            labelStyle={{
              marginTop: 0,
              marginBottom: 0,
              marginLeft: 4,
              marginRight: 4,
              textDecorationLine: "underline",
            }}
            onPress={() => {
              actionCancel(data);
            }}
          >
            CANCELAR
          </Button>
          <Boton
            size={13}
            h={25}
            title="Modificar"
            action={() => action(true)}
          />
        </View>
      </View>
    </View>
  );
}
