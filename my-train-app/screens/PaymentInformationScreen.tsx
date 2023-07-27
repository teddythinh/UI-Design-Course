import React, { useState } from "react";
import { View, StyleSheet, Pressable, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Text, Input } from "@ui-kitten/components";

import banks from "../assets/banks";

type Props = {
  navigation: any;
};

const PaymentInformationScreen: React.FC<Props> = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [bankId, setBankId] = useState("");
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
          <Text category="h5">Thông tin thanh toán</Text>
        </View>

        <View style={styles.bank}>
          <Image
            style={styles.bankImg}
            source={{ uri: banks[0].logo }}
            width={70}
            height={70}
          />
          <Text category="h5">{banks[0].name}</Text>
        </View>
        <View style={{ margin: 20 }}>
          <Text category="h6" style={{ marginBottom: 10 }}>
            Họ và tên
          </Text>
          <Input
            style={{ marginBottom: 20 }}
            placeholder="Nguyễn Văn A"
            value={name}
            onChangeText={(nextValue) => setName(nextValue)}
          />
          <Text category="h6" style={{ marginBottom: 10 }}>
            Số điện thoại
          </Text>
          <Input
            style={{ marginBottom: 20 }}
            placeholder=""
            value={number}
            onChangeText={(nextValue) => setNumber(nextValue)}
          />
          <Text category="h6" style={{ marginBottom: 10 }}>
            Số tài khoản
          </Text>
          <Input
            style={{ marginBottom: 20 }}
            placeholder=""
            value={bankId}
            onChangeText={(nextValue) => setBankId(nextValue)}
          />
          <View style={{flexDirection: "row", justifyContent: "space-between"}}>
          <Text style={{ marginBottom: 10 }} category="h6" >
            Số tiền thanh toán
          </Text>
          <Text style={{ color: "red" }} category="h6">1.000.000đ</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    marginLeft: 20,
    marginTop: 20,
  },
  bank: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 90,
    marginRight: 75,
    marginTop: 20,
    justifyContent: "space-between",
  },
  bankImg: {
    width: 55,
    height: 55,
    borderRadius: 10,
    borderWidth: 0.7,
  },
});

export default PaymentInformationScreen;
