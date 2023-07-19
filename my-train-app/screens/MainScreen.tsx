import React from "react";
import { Text, SafeAreaView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Image } from "@rneui/themed";

import AccountScreen from "./AccountScreen";
import HomeScreen from "./HomeScreen";
import HistoryScreen from "./HistoryScreen";
import SearchScreen from "./SearchScreen";

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
          name="History"
          options={{ tabBarIcon: () => <Text>🔙</Text> }}
          component={HistoryScreen}
        />
        <Tab.Screen
          name="Search"
          options={{ tabBarIcon: () => <Text>🔎</Text> }}
          component={SearchScreen}
        />
        <Tab.Screen
          name="Account"
          options={{
            title: "My Profile",
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
          component={AccountScreen}
        />
      </Tab.Navigator>
    </>
  );
};

export default MainScreen;
