import React from "react";
import { Drawer } from "react-native-paper";
import Icon from "react-native-fontawesome-pro";
import { View, Text } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import styles from "./DrawerContent.styles";

interface IProps {
  navigation: any;
}

function DrawerNavigatorContent({ navigation }: IProps) {
  return (
    <>
      <DrawerContentScrollView {...navigation}>
        <Drawer.Section>
          <View style={styles.headerDrawer}>
            <View style={styles.circulo}>
              <Icon name={"user"} size={20} color={"blue"} />
            </View>
            <View style={styles.headerTitulo}>
              <Text>Siempre Bella</Text>
            </View>
          </View>
        </Drawer.Section>
        <Drawer.Item
          label="Inicio"
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={styles.drawerStyle}
          icon={() => <Icon name={"user"} size={20} color={"blue"} />}
        />
        <Drawer.Item
          label="Servicios"
          onPress={() => {
            navigation.navigate("Servicios");
          }}
          style={styles.drawerStyle}
          icon={() => <Icon name={"user"} size={20} color={"blue"} />}
        />

        <Drawer.Item
          label="Mis Turnos"
          onPress={() => {
            navigation.navigate("Mis Turnos");
          }}
          style={styles.drawerStyle}
          icon={() => <Icon name={"user"} size={20} color={"blue"} />}
        />
        <Drawer.Item
          label="Admin"
          onPress={() => {
            navigation.navigate("Admin");
          }}
          style={styles.drawerStyle}
          icon={() => <Icon name={"user"} size={20} color={"blue"} />}
        />
        <Drawer.Item
          label="Cerrar Sesión"
          onPress={() => {
            navigation.navigate("Cerrar Sesión");
          }}
          style={styles.drawerStyle}
          icon={() => <Icon name={"user"} size={20} color={"blue"} />}
        />
      </DrawerContentScrollView>
    </>
  );
}

export default DrawerNavigatorContent;
