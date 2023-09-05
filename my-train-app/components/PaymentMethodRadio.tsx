import React from "react";
import { Radio, RadioGroup, Avatar } from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";

const momoIcon = require("../assets/momoLogo.jpeg");
const vnpayIcon = require("../assets/vnpayLogo.png");
const napasIcon = require("../assets/napasLogo.png");
const visaIcon = require("../assets/visaLogo.jpeg");
const cashIcon = require("../assets/cashLogo.png");

const PaymentMethodRadio: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
    <RadioGroup
      selectedIndex={selectedIndex}
      onChange={(index) => setSelectedIndex(index)}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Avatar source={momoIcon} shape="rounded" style={{ marginRight: 20 }} />
        <Radio style={styles.radio}>Ví MoMo</Radio>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Avatar
          source={vnpayIcon}
          shape="rounded"
          style={{ marginRight: 20 }}
        />
        <Radio style={styles.radio}>VNPAY</Radio>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Avatar
          source={napasIcon}
          shape="rounded"
          style={{ marginRight: 20 }}
        />
        <Radio style={styles.radio}>Thẻ tín dụng/ghi nợ nội địa</Radio>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Avatar source={visaIcon} shape="rounded" style={{ marginRight: 20 }} />
        <Radio style={styles.radio}>Thẻ tín dụng/ghi nợ quốc tế</Radio>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Avatar source={cashIcon} shape="rounded" style={{ marginRight: 20 }} />
        <Radio style={styles.radio}>Thanh toán tiền mặt</Radio>
      </View>
    </RadioGroup>
  );
};

const styles = StyleSheet.create({
  radio: {
    margin: 2,
  },
});

export default PaymentMethodRadio;
