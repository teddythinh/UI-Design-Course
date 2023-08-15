import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@rneui/themed";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { enableLatestRenderer } from "react-native-maps";
import { AppRegistry } from "react-native";
import { PaperProvider } from "react-native-paper";
import { MD3LightTheme as DefaultTheme } from "react-native-paper";

import { expo } from "./app.json";
import MainNavigator from "./navigator/MainNavigator";

const appName = expo.name;
console.log(appName);

enableLatestRenderer();

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "tomato",
    secondary: "yellow",
  },
};

export default function App() {
  return (
    <>
      {/* SafeAreaProvider is for iOS */}
      <SafeAreaProvider>
        <ThemeProvider>
          <NavigationContainer>
            <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider {...eva} theme={eva.light}>
              <PaperProvider>
                <MainNavigator />
                <StatusBar style="auto" />
              </PaperProvider>
            </ApplicationProvider>
          </NavigationContainer>
        </ThemeProvider>
      </SafeAreaProvider>
    </>
  );
}

AppRegistry.registerComponent(appName, () => App);
