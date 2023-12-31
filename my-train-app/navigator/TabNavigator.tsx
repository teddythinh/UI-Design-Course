import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "@rneui/themed";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLandmark, faClockRotateLeft, faMagnifyingGlass, faHouse } from "@fortawesome/free-solid-svg-icons";

import HomeScreen from "../screens/HomeScreen";
import HistoryScreen from "../screens/HistoryScreen";
import SearchScreen from "../screens/SearchScreen";
import CityDetailsScreen from "../screens/CityDetailsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import TripBookingDetailScreen from "../screens/TripBookingDetailsScreen";

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          options={{ headerShown: false, tabBarIcon: () => <FontAwesomeIcon icon={faHouse} size={25} color="orange" /> }}
          component={HomeScreen}
        />
        <Tab.Screen
          name="History"
          options={{ headerShown: false, tabBarIcon: () => <FontAwesomeIcon icon={faClockRotateLeft} size={25} color="green" /> }}
          component={HistoryScreen}
        />
        {/* <Tab.Screen
          name="Search"
          options={{ headerShown: false, tabBarIcon: () => <FontAwesomeIcon icon={faMagnifyingGlass} size={25} color="red" /> }}
          component={SearchScreen}
        /> */}
        <Tab.Screen
          name="Search"
          options={{ headerShown: false, tabBarIcon: () => <FontAwesomeIcon icon={faMagnifyingGlass} size={25} color="red" /> }}
          component={TripBookingDetailScreen}
        />
        <Tab.Screen
          name="Attractions"
          options={{ headerShown: false, tabBarIcon: () => <FontAwesomeIcon icon={faLandmark} size={25} color="blue" /> }}
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
