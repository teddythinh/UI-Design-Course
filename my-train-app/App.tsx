import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@rneui/themed";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <NavigationContainer>
            <HomeScreen />
            <StatusBar />
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
