import React from "react";
import { Text, SafeAreaView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SettingsScreen from "./SettingsScreen";
import HomeScreen from "./HomeScreen";

const Tab = createBottomTabNavigator();

const MainScreen: React.FC = () => {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          options={{ tabBarIcon: () => <Text>🏠</Text> }}
          component={HomeScreen}
        />
        <Tab.Screen
          name="Settings"
          options={{ tabBarIcon: () => <Text>👷</Text> }}
          component={SettingsScreen}
        />
      </Tab.Navigator>
    </>
  );
};

export default MainScreen;
