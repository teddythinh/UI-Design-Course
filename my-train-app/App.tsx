import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@rneui/themed";
import MainScreen from "./screens/MainScreen";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "./screens/SearchScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <ThemeProvider>
          <NavigationContainer>
            {/* <Stack.Navigator>
              <Stack.Screen name="Main" component={MainScreen} />
              <Stack.Screen name="Search" component={SearchScreen} />
            </Stack.Navigator> */}
            <MainScreen />
            <StatusBar style="auto" />
          </NavigationContainer>
        </ThemeProvider>
      </SafeAreaProvider>
    </>
  );
}
