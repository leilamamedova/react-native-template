import React from "react";

import { View, Text } from "react-native";

import useTranslate from "@/hooks/useTranslate";
import { styles } from "@/screens/Home/styles";

export const Home = (): React.ReactElement => {
  const { translate } = useTranslate();

  return (
    <View style={styles.container}>
      <Text>{translate("home.header")}</Text>
    </View>
  );
};
