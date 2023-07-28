import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@rneui/themed";
import MainNavigator from "./navigator/MainNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { enableLatestRenderer } from "react-native-maps";

enableLatestRenderer();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      {/* SafeAreaProvider is for iOS */}
      <SafeAreaProvider>
        <ThemeProvider>
          <NavigationContainer>
            <IconRegistry icons={EvaIconsPack} />
            <ApplicationProvider {...eva} theme={eva.light}>
              <MainNavigator />
              <StatusBar style="auto" />
            </ApplicationProvider>
          </NavigationContainer>
        </ThemeProvider>
      </SafeAreaProvider>
    </>
  );
}
