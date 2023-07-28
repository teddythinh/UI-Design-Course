import React, { useState } from "react";
import { View, StyleSheet, Pressable, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Text, Input, Button } from "@ui-kitten/components";

type Props = {
  navigation: any;
};

const TripBookingAddScreen: React.FC<Props> = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  return (
    <>
      <View
        style={{
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        }}
      >
        <View style={{ marginLeft: 20 }}>
          <Pressable onPress={() => navigation.goBack()}>
            <FontAwesomeIcon icon={faChevronLeft} size={25} />
          </Pressable>
        </View>
        <Text style={{textAlign: "right", margin: 20}}>Tham quan Đà Nẵng</Text>
      </View>
    </>
  );
};

export default TripBookingAddScreen;
