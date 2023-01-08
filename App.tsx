import React from "react";
import LoginForm from "./src/components/LoginForm";
import { StyleSheet, View } from "react-native";
import Saludar from "./src/components/Saludar";
import { NativeBaseProvider, Box, Text } from "native-base";

const App = () => {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
        <LoginForm />
        <Saludar firstname="juan" lastname="garcia" />
      </Box>
    </NativeBaseProvider>
  );
};

export default App;
