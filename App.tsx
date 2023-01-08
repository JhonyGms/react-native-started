import * as React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";

import RouterStack from "./src/routers/RouterStack";
import RouterDrawer from "./src/routers/RouterDrawer";
import RouterTab from "./src/routers/RouterTab";

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <RouterDrawer />
        {/* <RouterTab /> */}
        {/* <RouterStack /> */}
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
