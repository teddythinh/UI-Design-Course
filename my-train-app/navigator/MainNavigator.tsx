import React from "react";
import { Text, SafeAreaView } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image } from "@rneui/themed";
import TabNavigator from "./TabNavigator";
import TrainbookingScreen from "../screens/TrainBookingSearchScreen";
import TrainBookingSeatScreen from "../screens/TrainBookingSeatScreen";
import TrainBookingInformationScreen from "../screens/TrainBookingInformationScreen";
import PaymentMethodScreen from "../screens/PaymentMethodScreen";


const Stack = createNativeStackNavigator();

const MainNavigator: React.FC = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="TrainBookingSearch" component={TrainbookingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TrainBookingSeat" component={TrainBookingSeatScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TrainBookingInformation" component={TrainBookingInformationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PaymentMethod" component={PaymentMethodScreen} options={{ headerShown: false}} />
      </Stack.Navigator>
    </>
  );
};

export default MainNavigator;
