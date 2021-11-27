import React, { useEffect } from "react";
import { Text, View } from "react-native";
import colors from "../../../assets/colors";
import Boton from "../boton/boton.components";
import Autocomplete from "../Autocomplete/Autocomplete.component";
import styles from "./AgregarTurno.styles";

interface IProps {
  actionCancel: () => void;
}

export default function AgregarTurno(props: IProps) {
  const { actionCancel } = props;
  const [servicios, setServicios] = React.useState();
  const [fecha, setFecha] = React.useState("");
  const [horario, setHorario] = React.useState("");
  const [metodoPago, setMetodoPago] = React.useState("");
  const [disableFecha, setDisableFecha] = React.useState(true);
  const [disableHorario, setDisableHorario] = React.useState(true);

  const GuardarTurno = () => {
    console.log("");
  };

  const updateFecha = () => {
    console.log("");
  };
  useEffect(() => updateFecha, [servicios]);

  const updateHorario = () => {
    console.log("");
  };
  useEffect(() => updateHorario, [fecha]);

  return (
    <View style={{ width: "100%" }}>
      <Text children={"AGREGAR TURNO"} style={styles.title} />

      <View style={styles.atencion}>
        <Text style={{ color: colors.BLANCO }}>
          ATENCIÓN!!! Cada servicio tiene un tiempo de trabajo en minutos.
          Dependiendo la suma de todos los servicios seleccionados se
          habilitaran los horarios disponibles.
        </Text>
      </View>

      <Autocomplete
        multiple
        onylDrop
        valueSeleccionado={setServicios}
        data={[
          "Cavado",
          "Media Pierna",
          "Pierna entera",
          "Pecho",
          "Brazos",
          "Glúteo",
          "Espalda",
          "Media Espalda",
          "Axila",
          "Bozo",
        ]}
        label="Servicios"
      />

      <View style={styles.boxAutocomplete}>
        <Autocomplete
          valueSeleccionado={setFecha}
          onylDrop
          deshablitar={disableFecha}
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

      <View style={styles.boxAutocomplete}>
        <Autocomplete
          onylDrop
          deshablitar={disableHorario}
          valueSeleccionado={setHorario}
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

      <View style={styles.boxAutocomplete}>
        <Autocomplete
          onylDrop
          valueSeleccionado={setMetodoPago}
          data={["Mercado Pago", "Home Banking", "Efectivo"]}
          label="Método de pago"
        />
      </View>

      <View style={styles.botonera}>
        <View style={styles.boxBoton}>
          <Boton title="Cancelar" action={actionCancel} />
        </View>
        <View style={styles.boxBoton}>
          <Boton title="Agregar" action={() => GuardarTurno()} />
        </View>
      </View>
    </View>
  );
}
