import React from "react";
import { View, Pressable, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Text, Button, Icon, IconElement } from "@ui-kitten/components";
import BankList from "../components/BankList";
import PaymentMethodRadio from "../components/PaymentMethodRadio";
// import EWalletList from "../components/EWalletList";

const checkIcon = (props): IconElement => (
  <Icon {...props} name="checkmark-circle-2-outline" />
);

type Props = {
  navigation: any;
};

const PaymentMethodScreen: React.FC<Props> = ({ navigation }) => {
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
            marginRight: 55,
            marginLeft: 20,
            justifyContent: "space-between",
          }}
        >
          <Pressable onPress={() => navigation.goBack()}>
            <FontAwesomeIcon icon={faChevronLeft} size={25} />
          </Pressable>
          <Text category="h5">Phương thức thanh toán</Text>
        </View>
        <View style={styles.title}>
          {/* <Text category="h4" style={{ color: "blue" }}>
            Các ngân hàng
          </Text>
          <BankList /> */}
          <PaymentMethodRadio />
        </View>
        
        {/* <View style={styles.title}>
        <Text category="h4" style={{color: "blue"}}>Các ví điện tử</Text>
        </View>
        <EWalletList/> */}
        <View style={{ height: 20, marginLeft: 20, marginRight: 20 }}>
          <Button accessoryLeft={checkIcon} onPress={() => navigation.navigate("PaymentConfirm")}>Xác nhận</Button>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
});

export default PaymentMethodScreen;
