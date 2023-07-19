import React from "react";
import { Text, SafeAreaView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "@rneui/themed";

import HomeScreen from "../screens/HomeScreen";
import HistoryScreen from "../screens/HistoryScreen";
import SearchScreen from "../screens/SearchScreen";
import CityDetailsScreen from "../screens/CityDetailsScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          options={{ headerShown: false, tabBarIcon: () => <Text>🏠</Text> }}
          component={HomeScreen}
        />
        <Tab.Screen
          name="History"
          options={{ headerShown: false, tabBarIcon: () => <Text>🔙</Text> }}
          component={HistoryScreen}
        />
        <Tab.Screen
          name="Search"
          options={{ headerShown: false, tabBarIcon: () => <Text>🔎</Text> }}
          component={SearchScreen}
        />
        <Tab.Screen
          name="Attractions"
          options={{ headerShown: false, tabBarIcon: () => <Text>🏞️</Text> }}
          component={CityDetailsScreen}
        />
        <Tab.Screen
          name="Account"
          options={{
            title: "My Profile",
            headerShown: false,
            tabBarIcon: ({ size, focused, color }) => {
              return (
                <Image
                  style={{ width: size, height: size, borderRadius: 50 }}
                  source={{
                    uri: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
                  }}
                />
              );
            },
          }}
          component={ProfileScreen}
        />
      </Tab.Navigator>
    </>
  );
};

export default TabNavigator;
