import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Text, Card, Divider } from "@ui-kitten/components";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const testqr = require("../assets/testqr.png");

const TicketCard: React.FC = () => {
  return (
    <>
      <Card style={styles.card} status="success">
        <View style={styles.viewContainer}>
          <FontAwesomeIcon icon={faCircleCheck} size={60} color="green" />
          <Text style={{ margin: 10 }} category="h6" status="success">
            Chuyển tiền thành công
          </Text>
        </View>
        <View style={styles.content}>
          <Text category="s1">Số tiền</Text>
          <Text category="s1">1.000.000đ</Text>
        </View>
        <View style={styles.content}>
          <Text category="s1">Phí giao dịch</Text>
          <Text category="s1">Miễn phí</Text>
        </View>
        <View style={styles.content}>
          <Text category="s1">Mã giao dịch</Text>
          <Text category="s1">20201118181445</Text>
        </View>
        <Divider />
        <View style={styles.content}>
          <Text category="s1">Số hiệu tàu</Text>
          <Text category="s1">SE2</Text>
        </View>
        <View style={styles.content}>
          <Text category="s1">Ga đi</Text>
          <Text category="s1">Sài Gòn</Text>
        </View>
        <View style={styles.content}>
          <Text category="s1">Ga đến</Text>
          <Text category="s1">Hà Nội</Text>
        </View>
        <View style={styles.content}>
          <Text category="s1">Số toa</Text>
          <Text category="s1">01</Text>
        </View>
        <View style={styles.content}>
          <Text category="s1">Số ghế</Text>
          <Text category="s1">23</Text>
        </View>
        <Image style={styles.image} source={testqr} />
      </Card>
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
  },
});

export default TicketCard;
