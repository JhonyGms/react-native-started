import { Box, Button, Text, View } from "native-base";
import React, { Component } from "react";

const HomeScreen = (props: any) => {
  const { navigation } = props;

  const goToPage = () => {
    navigation.navigate("Settings");
  };

  return (
    <Box flex={1} bg="#fff" alignItems="center" justifyContent="flex-start">
      <View>
        <Text>HOME</Text>
        <Text>HOME</Text>
        <Text>HOME</Text>
        <Text>HOME</Text>
        <Text>HOME</Text>
        <Text>HOME</Text>
        <Text>HOME</Text>
        <Text>HOME</Text>
        <Text>HOME</Text>
        <Button onPress={goToPage}>Ir ah ajustes</Button>
      </View>
    </Box>
  );
};

export default HomeScreen;
