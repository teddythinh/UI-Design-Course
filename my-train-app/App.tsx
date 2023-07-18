import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@rneui/themed";
import MainScreen from "./screens/MainScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <NavigationContainer>
            <MainScreen />
            <StatusBar />
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
