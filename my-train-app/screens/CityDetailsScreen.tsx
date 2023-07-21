import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet, Platform } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

// iOS permissions
// PERMISSIONS.IOS.LOCATION_ALWAYS;
// PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;

const CityDetailsScreen: React.FC = () => {

  return (
    <>
      <View style={styles.container}>
        {/* Apple Maps for iOS and Google Maps for Android */}
        <MapView
          style={styles.map}
          provider="google"
          showsUserLocation={true}
          showsCompass={true}
          showsMyLocationButton={true}
        />
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
