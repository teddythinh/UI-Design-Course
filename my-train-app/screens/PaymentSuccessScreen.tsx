import React, { useState } from "react";
import { View, Image, StyleSheet, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text, Button, Card, Divider } from "@ui-kitten/components";

import TicketCard from "../components/TicketCard";

type Props = {
  navigation: any;
};

const PaymentSuccessScreen: React.FC<Props> = ({ navigation }) => {
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
        <View style={styles.viewContainer}>
          <Text category="h5" status="success" style={{ marginBottom: 10}}>
            Xác nhận giao dịch
          </Text>
        </View>

        <ScrollView>
          <View style={styles.viewContainer}>
            <TicketCard />
            <TicketCard />
            <TicketCard />
          </View>
          <Button
            style={styles.button}
            onPress={() => navigation.navigate("Home")}
          >
            Trở về trang chủ
          </Button>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "90%",
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    width: 170,
    height: 170,
    justifyContent: "center",
    alignSelf: "center",
    borderWidth: 0.3,
  },
  button: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 70,
  },
});

export default PaymentSuccessScreen;
