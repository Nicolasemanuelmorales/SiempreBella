import React from "react";
import { Drawer } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import styles from "./DrawerContent.styles";
import colors from "../../../assets/colors";
import auth from "../../../firebase";
import { signOut } from "firebase/auth";
import { StatusBar } from "expo-status-bar";
import { useDispatch } from "react-redux";
import loaderAction from "../../redux/actions/LoaderAction";

interface IProps {
  navigation: any;
}

function DrawerNavigatorContent({ navigation }: IProps) {
  const dispatch = useDispatch();

  const storeData = async () => {
    dispatch(loaderAction(true));
    signOut(auth)
      .then(() => {
        navigation.reset({
          routes: [{ name: "Login" }],
        });
      })
      .finally(() => {
        dispatch(loaderAction(false));
      });
  };

  return (
    <>
      <StatusBar backgroundColor={colors.PRINCIPAL} />
      <Drawer.Section style={styles.prin}>
        <View style={styles.headerDrawer}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              navigation.reset({
                routes: [{ name: "Home" }],
              });
            }}
          >
            <View style={styles.circulo}>
              <Image
                style={styles.img}
                source={require("../../../assets/images/flor.png")}
              />
            </View>
          </TouchableOpacity>

          <View style={styles.headerTitulo}>
            <Text style={styles.title}>Siempre Bella</Text>
          </View>
        </View>
      </Drawer.Section>
      <DrawerContentScrollView {...navigation}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            navigation.reset({
              routes: [{ name: "Home" }],
            });
          }}
        >
          <Drawer.Item
            label={<Text style={styles.inactive}>Inicio</Text>}
            style={[styles.drawerStyle, { marginTop: 0 }]}
            icon={() => (
              <Icon
                style={styles.icon}
                name={"home"}
                size={22}
                color={colors.PRINCIPAL}
              />
            )}
          />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            navigation.reset({
              routes: [{ name: "Servicios" }],
            });
          }}
        >
          <Drawer.Item
            label={<Text style={styles.inactive}>Servicios</Text>}
            style={styles.drawerStyle}
            icon={() => (
              <Icon
                style={styles.icon}
                name={"hands-helping"}
                size={22}
                color={colors.PRINCIPAL}
              />
            )}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            navigation.reset({
              routes: [{ name: "MisTurnos" }],
            });
          }}
        >
          <Drawer.Item
            label={<Text style={styles.inactive}>Mis Turnos</Text>}
            style={styles.drawerStyle}
            icon={() => (
              <Icon
                style={styles.icon}
                name={"calendar-alt"}
                solid
                size={22}
                color={colors.PRINCIPAL}
              />
            )}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            navigation.reset({
              routes: [{ name: "Turnos" }],
            });
          }}
        >
          <Drawer.Item
            label={<Text style={styles.inactive}>Turnos</Text>}
            style={styles.drawerStyle}
            icon={() => (
              <Icon
                style={styles.icon}
                name={"tools"}
                size={22}
                color={colors.PRINCIPAL}
              />
            )}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            navigation.reset({
              routes: [{ name: "Disponibilidad" }],
            });
          }}
        >
          <Drawer.Item
            label={<Text style={styles.inactive}>Disponibilidad</Text>}
            style={styles.drawerStyle}
            icon={() => (
              <Icon
                style={styles.icon}
                name={"clock"}
                solid
                size={22}
                color={colors.PRINCIPAL}
              />
            )}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            navigation.reset({
              routes: [{ name: "Precio" }],
            });
          }}
        >
          <Drawer.Item
            label={<Text style={styles.inactive}>Servicios</Text>}
            style={styles.drawerStyle}
            icon={() => (
              <Icon
                style={styles.icon}
                name={"hand-holding-usd"}
                solid
                size={22}
                color={colors.PRINCIPAL}
              />
            )}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            navigation.reset({
              routes: [{ name: "Login" }],
            });
          }}
        >
          <Drawer.Item
            label={<Text style={styles.inactive}>Estadistica</Text>}
            style={styles.drawerStyle}
            icon={() => (
              <Icon
                style={styles.icon}
                name={"chart-pie"}
                solid
                size={22}
                color={colors.PRINCIPAL}
              />
            )}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            storeData();
          }}
        >
          <Drawer.Item
            active
            label={<Text style={styles.inactive}>Cerrar Sesión</Text>}
            style={styles.drawerStyle}
            icon={() => (
              <Icon
                style={styles.icon}
                name={"sign-out-alt"}
                solid
                size={22}
                color={colors.PRINCIPAL}
              />
            )}
          />
        </TouchableOpacity>
      </DrawerContentScrollView>
    </>
  );
}

export default DrawerNavigatorContent;
