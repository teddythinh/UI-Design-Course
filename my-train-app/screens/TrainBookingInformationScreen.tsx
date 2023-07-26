import React, { useState, useEffect } from "react";
import { View, Pressable, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import {
  Text,
  Input,
  IndexPath,
  Select,
  SelectItem,
  Button,
} from "@ui-kitten/components";
import {
  CardField,
  useStripe,
  initStripe,
  usePaymentSheet,
} from "@stripe/stripe-react-native";

import BirthdayDatepicker from "../components/BirthdayDatePicker";

const data = [
  "Người lớn",
  "Trẻ em (1-10 tuổi)",
  "Sinh viên",
  "Người cao tuổi (từ 60 tuổi)",
];

type Props = {
  navigation: any;
};

const TrainBookingInformationScreen: React.FC<Props> = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  const [selectedIndex, setSelectedIndex] = useState<IndexPath>(
    new IndexPath(0)
  );
  const displayValue = data[selectedIndex.row];
  const renderOption = (title): React.ReactElement => (
    <SelectItem title={title} />
  );
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
        <View style={{ margin: 20 }}>
          <Text category="h6" style={{ marginBottom: 10 }}>
            Họ và tên
          </Text>
          <Input
            style={{ marginBottom: 10 }}
            placeholder="Nguyễn Văn A"
            value={name}
            onChangeText={(nextValue) => setName(nextValue)}
          />
          <Text category="h6" style={{ marginBottom: 10 }}>
            Đối tượng
          </Text>
          <Select
            style={styles.select}
            placeholder="Default"
            value={displayValue}
            selectedIndex={selectedIndex}
            onSelect={(index: IndexPath) => setSelectedIndex(index)}
          >
            {data.map(renderOption)}
          </Select>
          {selectedIndex.row === 0 ? (
            <>
              <Text category="h6" style={{ marginBottom: 10 }}>
                CCCD/CMND
              </Text>
              <Input
                style={{ marginBottom: 10 }}
                value={id}
                onChangeText={(nextValue) => setId(nextValue)}
              />
            </>
          ) : selectedIndex.row === 1 ? (
            <>
              <Text category="h6">Ngày sinh</Text>
              <BirthdayDatepicker />
            </>
          ) : selectedIndex.row === 2 ? (
            <>
              <Text category="h6" style={{ marginBottom: 10 }}>
                CCCD/CMND
              </Text>
              <Input
                style={{ marginBottom: 10 }}
                value={id}
                onChangeText={(nextValue) => setId(nextValue)}
              />
            </>
          ) : (
            <>
              <Text category="h6">Ngày sinh</Text>
              <BirthdayDatepicker />
            </>
          )}

          <Button style={{ marginTop: 20 }} onPress={() => navigation.navigate("PaymentMethod")}>Thanh toán</Button>

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
