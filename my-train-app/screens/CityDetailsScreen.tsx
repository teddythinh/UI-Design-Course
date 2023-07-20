import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";


const CityDetailsScreen: React.FC = () => {
  return (
    <>
        <View style={styles.container}>
          {/* <MapView style={styles.map} provider={PROVIDER_GOOGLE} /> */}
          <MapView style={styles.map} provider={PROVIDER_GOOGLE} />
        </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default CityDetailsScreen;
