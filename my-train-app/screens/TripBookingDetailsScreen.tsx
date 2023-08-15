import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Text } from "@ui-kitten/components";
import { TextInput, Button } from "react-native-paper";

type props = {
  navigation: any;
};

const TripBookingDetailScreen: React.FC<props> = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [text, setText] = React.useState("");
  return (
    <>
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
          <TextInput
            mode="outlined"
            label="Tiêu đề"
            placeholder="Chuyến đi Hàn Quốc"
          ></TextInput>
          <View
            style={{
              flexDirection: "row",
              marginTop: 20,
              marginBottom: 20,
              justifyContent: "space-between",
            }}
          >
            <Button mode="contained-tonal" onPress={(e) => {}}>
              Press me
            </Button>
            <Button mode="contained-tonal" onPress={(e) => {}}>
              Hello
            </Button>
            <Button mode="contained-tonal" onPress={(e) => {}}>
              Hello
            </Button>
            <Button mode="contained-tonal" onPress={(e) => {}}>
              Hello
            </Button>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default TripBookingDetailScreen;
