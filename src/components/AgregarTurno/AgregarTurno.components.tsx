import React from "react";
import { Text, View } from "react-native";
import { TextInput, Chip, ProgressBar } from "react-native-paper";
import colors from "../../../assets/colors";
import Boton from "../boton/boton.components";
import Autocomplete from "../Autocomplete/Autocomplete.component";

interface IProps {
  actionCancel: () => void;
}

export default function AgregarTurno(props: IProps) {
  const { actionCancel } = props;
  const [servicios, setServicios] = React.useState("");

  return (
    <View style={{ width: "100%" }}>
      <Text
        children={"AGREGAR TURNO"}
        style={{
          textAlign: "center",
          fontSize: 16,
          fontWeight: "bold",
          color: colors.PRINCIPAL,

          marginTop: 20,
        }}
      />
      <View
        style={{
          width: "100%",
          backgroundColor: colors.PRINCIPAL,
          padding: 10,
          borderRadius: 10,
          marginBottom: 20,
          marginTop: 20,
        }}
      >
        <Text
          style={{ color: colors.BLANCO }}
          children={
            "ATENCIÓN!!! Cada servicio tiene un tiempo de trabajo en minutos. Dependiendo la suma de todos los servicios seleccionados se habilitaran los horarios disponibles."
          }
        />
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: "80%" }}>
          <ProgressBar
            style={{ marginTop: 8, width: "90%", alignSelf: "center" }}
            progress={0.75}
            color={colors.PRINCIPAL}
          />
        </View>
        <View style={{ width: "20%" }}>
          <Text
            style={{
              textAlign: "center",
              color: colors.PRINCIPAL,
              fontWeight: "bold",
            }}
            children={"15 MIN"}
          />
        </View>
      </View>
      <Autocomplete
        multiple
        valueSeleccionado={setServicios}
        data={[
          "Cavado",
          "Media Pierna",
          "Pierna entera",
          "Pecho",
          "Brazoz",
          "Glúteo",
          "Espalda",
          "Media Espalda",
          "Axila",
          "Bozo",
        ]}
        label="Servicios"
      />

      <View style={{ width: "100%", marginTop: 20 }}>
        <Autocomplete
          valueSeleccionado={setServicios}
          data={[
            "10:00",
            "10:15",
            "10:30",
            "10:45",
            "11:00",
            "11:15",
            "10:30",
            "10:45",
          ]}
          label="Fecha"
        />
      </View>
      <View style={{ width: "100%", marginTop: 20 }}>
        <Autocomplete
          valueSeleccionado={setServicios}
          data={[
            "Lunes 20/10",
            "Martes 21/10",
            "Miercoles 22/10",
            "Viernes 24/10",
            "Lunes 27/10",
            "Martes 28/10",
            "Miercoles 29/10",
          ]}
          label="Horario"
        />
      </View>
      <View style={{ width: "100%", marginTop: 20 }}>
        <Autocomplete
          valueSeleccionado={setServicios}
          data={["Mercado Pago", "Home Banking", "Efectivo"]}
          label="Método de pago"
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
        }}
      >
        <View style={{ flex: 1, marginRight: 10 }}>
          <Boton title="Cancelar" action={actionCancel} />
        </View>
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Boton title="Agregar" action={() => console.log("")} />
        </View>
      </View>
    </View>
  );
}
