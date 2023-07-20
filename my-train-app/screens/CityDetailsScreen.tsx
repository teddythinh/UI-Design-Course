import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const CityDetailsScreen: React.FC = () => {
  return (
    <>
      <SafeAreaView>
        <View>
          <Text>CityDetailsScreen</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default CityDetailsScreen;
