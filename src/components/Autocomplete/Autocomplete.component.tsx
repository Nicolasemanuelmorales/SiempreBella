import React, { useEffect, useState } from "react";
import { View, Text, Platform, Pressable } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";
import { Chip, ProgressBar, TextInput } from "react-native-paper";
import styles from "./Autocomplete.style";
import colors from "../../../assets/colors";

interface IProps {
  label: string;
  valueSeleccionado: (value: any) => void;
  data: any[];
  multiple?: boolean;
  onylDrop?: boolean;
  deshablitar?: boolean;
}

function Autocomplete(props: IProps) {
  const {
    label,
    valueSeleccionado,
    data,
    multiple = false,
    onylDrop = false,
    deshablitar = false,
  } = props;
  const [valueSelected, setValueSelected] = useState("");
  const [valueSelectedMulltiple, setValueSelectedMulltiple] = useState<any[]>(
    []
  );
  const [isOpen, setOpen] = React.useState(false);
  const [dataSet, setDataSet] = React.useState(data);
  const [dataAux, setDataAux] = React.useState(data);

  const onPressItemHandler = (itemValue: any) => {
    if (multiple) {
      if (!valueSelectedMulltiple.includes(itemValue)) {
        setValueSelectedMulltiple([...valueSelectedMulltiple, itemValue]);
        valueSeleccionado(valueSelectedMulltiple);
      }
    } else {
      valueSeleccionado(itemValue);
      setValueSelected(itemValue);
      setOpen(false);
    }
  };

  const onChangeValue = () => {
    // let aux: any[] = data.filter(
    //   (item) => item.toLowerCase().indexOf(valueSelected.toLowerCase()) > -1
    // );
    // setDataSet(aux);
    if (valueSelected == "") {
      setDataSet(dataAux);
    }
  };

  useEffect(onChangeValue, [valueSelected]);

  const deleteToArray = (text: any) => {
    setValueSelectedMulltiple(
      valueSelectedMulltiple.filter((item) => item !== text)
    );
  };

  return (
    <View style={styles.boxGeneral}>
      {!onylDrop ? (
        <TextInput
          theme={{
            colors: {
              primary: colors.PRINCIPAL,
              background: colors.BLANCO,
              error: "red",
            },
          }}
          showSoftInputOnFocus={false}
          value={valueSelected}
          onChangeText={(text) => {
            setValueSelected(text), onChangeValue();
          }}
          onTouchStart={() => {
            deshablitar ? null : setOpen(!isOpen);
          }}
          label={label}
          mode="outlined"
          style={styles.textStyle}
          multiline={false}
          editable={true}
          right={
            <TextInput.Icon
              name={() => (
                <FontAwesome
                  onPress={() => (deshablitar ? null : setOpen(!isOpen))}
                  name={isOpen ? "angle-up" : "angle-down"}
                  color={"#9B9B9B"}
                  size={20}
                  style={styles.triangle}
                />
              )}
            />
          }
        />
      ) : (
        <View
          onTouchStart={() => (deshablitar ? null : setOpen(!isOpen))}
          style={deshablitar ? styles.inputDisabled : styles.input}
        >
          <View
            style={[
              styles.placeHolder,
              {
                backgroundColor:
                  valueSelected == "" ? "transparent" : colors.BLANCO,
              },
            ]}
          >
            <Text style={styles.label}>{valueSelected == "" ? "" : label}</Text>
          </View>
          <Text
            style={{
              color: valueSelected == "" ? "rgba(0, 0, 0, 0.54)" : "black",
              fontSize: 16,
            }}
          >
            {valueSelected == "" ? label : valueSelected}
          </Text>
          <View style={styles.row}>
            {multiple ? (
              <Text style={styles.timeMultiple} children={"15 MIN"} />
            ) : null}
            <FontAwesome
              onPress={() => (deshablitar ? null : setOpen(!isOpen))}
              name={isOpen ? "angle-up" : "angle-down"}
              color={"#9B9B9B"}
              size={20}
              style={styles.triangle}
            />
          </View>
        </View>
      )}

      {isOpen ? (
        <View>
          <View style={styles.cajaDesplegable}>
            <ScrollView nestedScrollEnabled={true}>
              {dataSet.length === 0 ? (
                <Pressable
                  onPress={() => {
                    setOpen(false);
                  }}
                >
                  <Text style={[styles.textStyle, styles.menuOptionStyle]}>
                    Sin resultados
                  </Text>
                </Pressable>
              ) : (
                dataSet.slice(0, 100).map((item: any, key: any) => (
                  <Pressable
                    onPress={() => {
                      onPressItemHandler(item);
                    }}
                    key={`item-${key}`}
                    style={styles.menuOptionStyle}
                  >
                    <Text
                      style={styles.textStyle}
                      key={`item-${key}`}
                    >{`${item}`}</Text>
                  </Pressable>
                ))
              )}
            </ScrollView>
          </View>
        </View>
      ) : null}
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-start",
        }}
      >
        {!multiple
          ? null
          : valueSelectedMulltiple.map((item: any, key: number) => {
              return (
                <View key={key} style={{ marginRight: 10 }}>
                  <Chip
                    key={key}
                    style={{
                      marginTop: 20,
                      alignSelf: "center",
                    }}
                    onClose={() => deleteToArray(item)}
                  >
                    {item}
                  </Chip>
                </View>
              );
            })}
      </View>
    </View>
  );
}

export default Autocomplete;
