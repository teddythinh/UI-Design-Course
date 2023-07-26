import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@rneui/themed";
import MainNavigator from "./navigator/MainNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import { StripeProvider } from "@stripe/stripe-react-native";
import { enableLatestRenderer } from "react-native-maps";

enableLatestRenderer();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StripeProvider
        publishableKey="pk_test_51MtX9KEmVvTC3GSYptQMDslDbY0F4ZLNBD1GSbjIeaL8FXIPYOrJiDnifK14b7lO4LygheQ3Dl136P051EvFG3yk00QNXiW3cY"
        merchantIdentifier="merchant.com.my-train"
      >
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
      </StripeProvider>
    </>
  );
}
