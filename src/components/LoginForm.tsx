import React from "react";
import { Keyboard } from "react-native";

import {
  FormControl,
  Input,
  Stack,
  Text,
  Divider,
  Box,
  WarningOutlineIcon,
  ScrollView,
  Center,
  NativeBaseProvider,
} from "native-base";
const LoginForm = () => {
  return (
    <Box w="100%">
      <FormControl isRequired>
        <Stack mx="4">
          <FormControl.Label>Password</FormControl.Label>
          <Input
            _light={{
              bg: "coolGray.100",
              _hover: {
                bg: "coolGray.200",
              },
              _focus: {
                bg: "coolGray.200:alpha.70",
              },
            }}
            _dark={{
              bg: "coolGray.800",
              _hover: {
                bg: "coolGray.900",
              },
              _focus: {
                bg: "coolGray.900:alpha.70",
              },
            }}
            shadow={2}
            type="password"
            defaultValue="12345"
            placeholder="password"
            onSubmitEditing={Keyboard.dismiss}
          />
          <FormControl.HelperText>
            Must be atleast 6 characters.
          </FormControl.HelperText>
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Atleast 6 characters are required.
          </FormControl.ErrorMessage>
        </Stack>
      </FormControl>
    </Box>
  );
};

export default LoginForm;
