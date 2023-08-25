import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Text } from "@ui-kitten/components";
import { TextInput, Button, Chip } from "react-native-paper";
import { ScrollView } from "react-native";

import StartDatePicker from "../components/StartDatePicker";
import EndDatepicker from "../components/EndDatePicker";

type props = {
  navigation: any;
};

const TripBookingDetailScreen: React.FC<props> = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [text, setText] = React.useState("");
  return (
    <>
      <ScrollView>
        <View
          style={{
            paddingTop: insets.top,
            paddingLeft: insets.left,
            paddingRight: insets.right,
            paddingBottom: insets.bottom,
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
            <Text category="h4">Mốc thời gian mới</Text>
          </View>
          <View style={{ margin: 20 }}>
            <TextInput mode="outlined" label="Tiêu đề"></TextInput>
            <Text
              style={{
                marginTop: 10,
                marginBottom: 10,
                textAlign: "center",
              }}
              category="h6"
            >
              Phân loại
            </Text>
            <View
              style={{
                flexDirection: "row",
                marginBottom: 10,
                justifyContent: "space-evenly",
              }}
            >
              <Chip onPress={(e) => {}}>Tham quan</Chip>
              <Chip onPress={(e) => {}}>Ăn uống</Chip>
              <Chip onPress={(e) => {}}>Khách sạn</Chip>
            </View>
          </View>
          <Text style={{ marginLeft: 20, marginBottom: 10 }} category="h6">
            Thời gian
          </Text>
          <View>
            <Text style={{ marginLeft: 20 }}>Bắt đầu</Text>
            <StartDatePicker />
          </View>
          <View>
            <Text style={{ marginLeft: 20 }}>Kết thúc</Text>
            <EndDatepicker />
          </View>

          <View style={{ marginLeft: 20, marginRight: 20 }}>
            <Text
              style={{
                marginTop: 10,
              }}
              category="h6"
            >
              Ghi chú
            </Text>
            <TextInput mode="outlined" multiline></TextInput>
            <Text
              style={{
                marginTop: 10,
              }}
              category="h6"
            >
              Các thông tin chi tiết
            </Text>
            <TextInput label="Địa điểm" mode="outlined" disabled={true} />
            <View
              style={{
                flexDirection: "row",
                marginBottom: 20,
                justifyContent: "space-between",
              }}
            >
              <Button
                style={{
                  marginTop: 10,
                }}
                mode="contained-tonal"
                onPress={() => navigation.navigate("Attractions")}
              >
                Mở bản đồ
              </Button>
              <Button
                style={{
                  marginTop: 10,
                }}
                mode="contained-tonal"
                onPress={() => navigation.navigate("TripBookingCityList")}
              >
                Xem danh sách có sẵn
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default TripBookingDetailScreen;
