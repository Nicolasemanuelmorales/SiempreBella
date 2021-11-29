import React, { useEffect } from "react";
import { Text, View } from "react-native";
import Boton from "../boton/boton.components";
import styles from "./AgregarServicio.styles";
import { TextInput } from "react-native-paper";
import Servicio from "../../models/Servicio";

interface IProps {
  actionCancel: () => void;
  data?: Servicio;
  edit?: boolean;
}

export default function AgregarServicio(props: IProps) {
  const { actionCancel, data = undefined, edit = false } = props;
  const [categoria, setCategoria] = React.useState("");
  const [nombre, setNombre] = React.useState("");
  const [precio, setPrecio] = React.useState("");
  const [descanso, setDescanso] = React.useState("");
  const [tiempo, setTiempo] = React.useState("");

  const GuardarServicio = () => {
    console.log("");
  };

  useEffect(() => {
    edit
      ? (setCategoria(data.categoria),
        setNombre(data.nombre),
        setPrecio(data.precio),
        setTiempo(data.tiempo),
        setDescanso(data.descanso))
      : null;
  }, [edit]);

  return (
    <View>
      <Text
        children={edit ? "MODIFICAR SERVICIO" : "AGREGAR SERVICIO"}
        style={styles.title}
      />

      <TextInput
        style={styles.boxAutocomplete}
        mode="outlined"
        label="Categoria"
        value={categoria}
        onChangeText={setCategoria}
      />

      <TextInput
        style={styles.boxAutocomplete}
        mode="outlined"
        label="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />

      <TextInput
        style={styles.boxAutocomplete}
        mode="outlined"
        label="Precio"
        value={precio}
        onChangeText={setPrecio}
      />

      <TextInput
        style={styles.boxAutocomplete}
        mode="outlined"
        label="Descanso"
        value={descanso}
        onChangeText={setDescanso}
      />
      <TextInput
        style={styles.boxAutocomplete}
        mode="outlined"
        label="Tiempo"
        value={tiempo}
        onChangeText={setTiempo}
      />

      <View style={styles.botonera}>
        <View style={styles.boxBoton}>
          <Boton title="Cancelar" action={actionCancel} />
        </View>
        <View style={styles.boxBoton}>
          <Boton
            title={edit ? "Modificar" : "Guardar"}
            action={GuardarServicio}
          />
        </View>
      </View>
    </View>
  );
}
