import { Text, View, Button } from "native-base";
import React, { Component } from "react";

const SettingsScreen = (props: any) => {
  const { navigation } = props;

  const goToPage = () => {
    navigation.navigate("Home");
  };
  return (
    <View>
      <Text>hi</Text>
      <Button onPress={goToPage}>Ir ah ajustes</Button>
    </View>
  );
};

export default SettingsScreen;
