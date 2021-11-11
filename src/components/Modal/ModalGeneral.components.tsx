import React from "react";
import { Modal, Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import styles from "./ModalGeneral.styles";

interface IProps {
  open: any;
  children: JSX.Element;
}

export default function ModalGeneral(props: IProps) {
  const { open, children } = props;

  return (
    <Modal animationType="fade" transparent={true} visible={open}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {children}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}
