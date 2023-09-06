import React, { useState } from "react";
import { View, Pressable, StyleSheet, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import {
  Text,
  Button,
} from "@ui-kitten/components";
// import {
//   CardField,
//   useStripe,
//   initStripe,
//   usePaymentSheet,
// } from "@stripe/stripe-react-native";

import PassengerBasicInformation from "../components/PassengerBasicInformation";


type Props = {
  navigation: any;
};

const TrainBookingInformationScreen: React.FC<Props> = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  
  return (
    <>
      <View
        style={{
          // justifyContent: "center",
          // alignItems: "center",

          // Paddings to handle safe area
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: 85,
            marginLeft: 20,
            justifyContent: "space-between",
          }}
        >
          <Pressable onPress={() => navigation.goBack()}>
            <FontAwesomeIcon icon={faChevronLeft} size={25} />
          </Pressable>
          <Text category="h4">Thông tin cơ bản</Text>
        </View>
        <ScrollView>
        <View style={{ margin: 20 }}>
          <PassengerBasicInformation />
          <PassengerBasicInformation />
          <PassengerBasicInformation />

          <Button
            style={{ marginTop: 20 }}
            onPress={() => navigation.navigate("PaymentMethod")}
            >
            Thanh toán
          </Button>

          {/* <CardField
            postalCodeEnabled={false}
            placeholders={{
              number: "4242 4242 4242 4242",
            }}
            cardStyle={{
              backgroundColor: "#FFFFFF",
              textColor: "#000000",
            }}
            style={{
              width: "100%",
              height: 50,
              marginVertical: 30,
            }}
            onCardChange={(cardDetails) => {
              console.log("cardDetails", cardDetails);
            }}
            onFocus={(focusedField) => {
              console.log("focusField", focusedField);
            }}
          /> */}
        </View>
          </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  select: {
    marginBottom: 10,
  },
});

export default TrainBookingInformationScreen;
