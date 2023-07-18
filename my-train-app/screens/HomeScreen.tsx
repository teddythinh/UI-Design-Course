import React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SettingsScreen from "./SettingsScreen";
import SearchScreen from "./SearchScreen";

const Tab = createBottomTabNavigator();

const HomeScreen: React.FC = () => {
  return (
    <>
      
      <Tab.Navigator>
        <Tab.Screen
          name="Search"
          options={{ tabBarIcon: () => <Text>🔎</Text> }}
          component={SearchScreen}
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

export default HomeScreen;
