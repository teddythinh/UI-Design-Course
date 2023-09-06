import React, { useState, useEffect } from "react";
import {
  View,
  ImageBackground,
  ScrollView,
  FlatList,
  StyleSheet,
  Pressable,
} from "react-native";
import { Image, Button, Tile } from "@rneui/themed";
import { Text } from "@ui-kitten/components";
import { AutocompleteCities } from "../components/AutoCompleteCities";
import dayjs from "dayjs";
import isLeapYear from "dayjs/plugin/isLeapYear";
import "dayjs/locale/vi";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as Localization from "expo-localization";
import { I18n } from "i18n-js";
import updateLocale from "dayjs/plugin/updateLocale";

import cities from "../assets/cities";
import { supportedLanguage } from "../i18n/supportedLanguage";

dayjs.extend(isLeapYear);
dayjs.locale("vi");
dayjs.extend(updateLocale);
dayjs.updateLocale("vi", {
  weekdays: [
    "Chủ nhật",
    "Thứ hai",
    "Thứ ba",
    "Thứ tư",
    "Thứ năm",
    "Thứ sáu",
    "Thứ bảy",
  ],
});

const i18n = new I18n(supportedLanguage);
i18n.locale = Localization.locale;
i18n.enableFallback = true;
i18n.defaultLocale = "vi";

const URI =
  "https://lp-cms-production.imgix.net/2021-01/shutterstockRF_718619590.jpg";

const URI2 =
  "https://bcp.cdnchinhphu.vn/Uploaded/phanthuytrang/2020_09_29/IMG_5815.JPG";

interface HomeScreenProps {
  navigation: any;
}

const filter = ({ item, query }: any): boolean =>
  item.title.toLowerCase().includes(query.toLowerCase());

// TODO: Add carousel
const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [text, onChangeText] = useState("");
  const [date, setDate] = useState(dayjs());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(dayjs());
    }, 1000 * 1); // 1 second = 1000 milliseconds
    return () => clearInterval(timer);
  }, []);

  const insets = useSafeAreaInsets();

  return (
    <>
      <ScrollView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingTop: insets.top,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          }}
        >
          <Image source={{ uri: URI }} style={styles.URI} />
          <Text
            category="h5"
            style={{ marginTop: 5, color: "#34AEF9" }}
          >
            {date.format("dddd, DD MMMM")}
          </Text>
          <Text
            category="h6"
            style={{ margin: 5, fontSize: 25, color: "orange" }}
          >
            {date.format("HH:mm")}
          </Text>
          <AutocompleteCities />
          <Text category="h6" style={{ margin: 10 }}>
            {/* Bạn muốn đặt phương tiện di chuyển? */}
            {i18n.t("welcome")}
          </Text>
          <Pressable onPress={() => navigation.navigate("TrainBookingSearch")}>
            <ImageBackground source={{ uri: URI2 }} style={styles.URI2}>
              <Button
                title={i18n.t("book")}
                buttonStyle={styles.button}
                containerStyle={{
                  width: 142,
                  marginHorizontal: 10,
                  marginVertical: 10,
                }}
                titleStyle={{ fontSize: 20, fontWeight: "bold" }}
                onPress={() => navigation.navigate("TrainBookingSearch")}
              />
            </ImageBackground>
          </Pressable>

          <Text category="h6" style={{ margin: 10 }}>
            {/* Những tỉnh thành nổi tiếng */}
            {i18n.t("favCities")}
          </Text>
          <FlatList
            data={cities}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <Tile
                imageSrc={{ uri: item.imgUrl }}
                imageContainerStyle={{ borderRadius: 10 }}
                activeOpacity={1}
                width={350}
                title={item.title}
                titleStyle={{
                  fontSize: 20,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
                // onPress={() => navigation.navigate("CityDetails")}
              />
            )}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  URI: {
    width: 350,
    height: 200,
    borderRadius: 10,
    overflow: "hidden",
  },
  URI2: {
    width: 350,
    height: 200,
    borderRadius: 10,
    marginTop: 5,
    overflow: "hidden",
  },
  inputText: {
    margin: 10,
    width: 280,
  },
  textInImage: {
    // position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    botton: 0,
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    padding: 10,
    margin: 12,
    width: 142,
    backgroundColor: "#FF6868",
    borderRadius: 10,
    overflow: "hidden",
  },
  button: {
    backgroundColor: "#FF6868",
    padding: 10,
    borderRadius: 5,
  },
  list: {
    width: "100%",
    backgroundColor: "#000",
  },
  item: {
    width: "100%",
    aspectRatio: 1,
    flex: 1,
  },
});
