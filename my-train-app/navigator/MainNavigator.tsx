import React from "react";
import { Text, SafeAreaView } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image } from "@rneui/themed";
import TabNavigator from "./TabNavigator";
import TrainbookingScreen from "../screens/TrainBookingScreen";

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
        <Stack.Screen name="TrainBooking" component={TrainbookingScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </>
  );
};

export default MainNavigator;
