import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import stations from "../assets/trainStation";

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
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          showsCompass={true}
          showsMyLocationButton={true}
        >
          {stations.map((station) => (
            <Marker
              key={station.name}
              coordinate={{
                latitude: station.lat,
                longitude: station.lng,
              }}
              title={station.name}
              description={station.address}
            ></Marker>
          ))}
        </MapView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    //  height: 400,
    //  width: 400,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default CityDetailsScreen;
