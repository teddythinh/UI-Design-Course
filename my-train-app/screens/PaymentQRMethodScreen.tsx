import React from "react";
import { View, StyleSheet, Pressable, ActivityIndicator } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Text, Card, Button, Modal } from "@ui-kitten/components";
import { Image } from "@rneui/themed";

type Props = {
  navigation: any;
};

const BASE_URI =
  "https://img.vietqr.io/image/vietcombank-0123456789-print.png?amount=1000000&addInfo=tien%20ve%20tau&accountName=Thinh%20Pham";

const PaymentQRMethodScreen: React.FC<Props> = ({ navigation }) => {
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
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginRight: 80,
            marginLeft: 20,
            justifyContent: "space-between",
          }}
        >
          <Pressable onPress={() => navigation.goBack()}>
            <FontAwesomeIcon icon={faChevronLeft} size={25} />
          </Pressable>
          <Text category="h5">Tiến hành thanh toán</Text>
        </View>
        <View style={styles.containter}>
          <Image source={{ uri: BASE_URI }} style={styles.img} />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 20
          }}
        >
          <Button status="warning" onPress={() => navigation.navigate("PaymentMethod")}>
            Quay lại
          </Button>
          <Button status="success" onPress={() => navigation.navigate("PaymentSuccess")}>
            Tôi đã thanh toán
          </Button>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containter: {
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 350,
    height: 600,
  },
});

export default PaymentQRMethodScreen;
