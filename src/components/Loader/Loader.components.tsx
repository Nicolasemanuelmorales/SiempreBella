import * as React from "react";
import { ActivityIndicator } from "react-native-paper";
import { View } from "react-native";
import styles from "./Loader.styles";
import colors from "../../../assets/colors";

interface ILoader {
  open: boolean;
}

function Loader(props: ILoader) {
  const { open } = props;

  return open ? (
    <View style={styles.boxGeneral}>
      <ActivityIndicator
        style={{ flex: 1, justifyContent: "center" }}
        hidesWhenStopped={false}
        size={50}
        color={colors.PRINCIPAL}
      />
    </View>
  ) : (
    <></>
  );
}

export default Loader;
