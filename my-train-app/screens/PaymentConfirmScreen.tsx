import React, { useState } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Text, Card, Button, Modal } from "@ui-kitten/components";
import OTPInputView from "@twotalltotems/react-native-otp-input";

type Props = {
  navigation: any;
};

const PaymentConfirmScreen: React.FC<Props> = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [visible, setVisible] = useState(false);
  const [code, setCode] = useState("");

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
          <Text category="h5">Xác nhận thanh toán</Text>
        </View>
        <View style={styles.paymentContainer}>
          <Card style={styles.card} status="info">
            <Text
              category="h5"
              style={{
                justifyContent: "center",
                textAlign: "center",
                margin: 20,
                marginTop: 70,
              }}
            >
              Thông tin giao dịch
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 3,
              }}
            >
              <Text>Thông tin vé</Text>
              <Text style={{ fontWeight: "bold" }}>Tàu SE02</Text>
            </View>
            <View>
              <Text
                style={{
                  textAlign: "right",
                  fontWeight: "bold",
                  marginBottom: 3,
                }}
              >
                Toa 01
              </Text>
              <Text
                style={{
                  textAlign: "right",
                  fontWeight: "bold",
                  marginBottom: 20,
                }}
              >
                Ghế 23
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 20,
              }}
            >
              <Text>Người gửi</Text>
              <Text>Nguyễn Văn A</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 20,
              }}
            >
              <Text>Số tài khoản</Text>
              <Text>0123456789</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 20,
              }}
            >
              <Text>Ngân hàng</Text>
              <Text>Vietcombank</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text category="h6" style={{ fontWeight: "bold" }}>
                Số tiền
              </Text>
              <Text category="h6" style={{ fontWeight: "bold", color: "red" }}>
                1.000.000đ
              </Text>
            </View>
          </Card>
        </View>
        <Button
          style={{ margin: 30 }}
          onPress={() => setVisible(true)}
        >
          Xác nhận
        </Button>
        <Modal visible={visible}>
          <Card disabled={true}>
            <Text
              category="h5"
              style={{ textAlign: "center", marginBottom: 10 }}
            >
              Xác thực mã OTP
            </Text>
            <Text style={{ textAlign: "center" }}>
              Quý khách vui lòng nhập mã OTP đã được gửi về số điện thoại
              090*****09
            </Text>
            <OTPInputView
              pinCount={4}
              code={code}
              onCodeChanged={(code) => {
                setCode(code);
              }}
              style={{ width: "80%", height: 100, alignSelf: "center" }}
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
              autoFocusOnLoad
              keyboardAppearance="default"
              keyboardType="number-pad"
              onCodeFilled={(code) => {
                console.log(`Code is ${code}, you are good to go!`);
              }}
            />
            <Button
              onPress={() => {
                setVisible(false);
                navigation.navigate("PaymentSuccess");
              }}
            >
              Xác thực
            </Button>
          </Card>
        </Modal>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  paymentContainer: {
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  card: {
    margin: 10,
    borderRadius: 10,
    width: "100%",
    height: "80%",
  },
  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },
  underlineStyleHighLighted: {
    borderColor: "red",
    color: "black",
  },
});

export default PaymentConfirmScreen;
