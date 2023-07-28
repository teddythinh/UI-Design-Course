import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabNavigator from "./TabNavigator";
import TrainbookingScreen from "../screens/TrainBookingSearchScreen";
import TrainBookingSeatScreen from "../screens/TrainBookingSeatScreen";
import TrainBookingInformationScreen from "../screens/TrainBookingInformationScreen";
import PaymentMethodScreen from "../screens/PaymentMethodScreen";
import PaymentInformationScreen from "../screens/PaymentInformationScreen";
import PaymentConfirmScreen from "../screens/PaymentConfirmScreen";
import PaymentSuccessScreen from "../screens/PaymentSuccessScreen";
import TripBookingAddScreen from "../screens/TripBookingAddScreen";

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
        <Stack.Screen name="PaymentInformation" component={PaymentInformationScreen} options={{ headerShown: false}} />
        <Stack.Screen name="PaymentConfirm" component={PaymentConfirmScreen} options={{ headerShown: false}} />
        <Stack.Screen name="PaymentSuccess" component={PaymentSuccessScreen} options={{ headerShown: false}} />
        <Stack.Screen name="TripBookingAdd" component={TripBookingAddScreen} options={{ headerShown: false}} />
        
      </Stack.Navigator>
    </>
  );
};

export default MainNavigator;
