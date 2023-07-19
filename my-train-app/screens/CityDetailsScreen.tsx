import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const CityDetailsScreen: React.FC = () => {
  return (
    <>
      <Stack.Navigator initialRouteName="CityDetails">
        <Stack.Screen
          name="detailsCity"
          component={() => (
            <View>
              <Text>CityDetailsScreen</Text>
            </View>
          )}
          options={{
            headerShown: false,
          }}
        />

      </Stack.Navigator>
    </>
  );
};

export default CityDetailsScreen;
