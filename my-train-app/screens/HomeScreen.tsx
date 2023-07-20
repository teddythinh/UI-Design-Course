import React, { createRef, useState, useRef, useEffect } from "react";
import {
  View,
  ImageBackground,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Image, Text, Button, Tile } from "@rneui/themed";
import { Input } from "@ui-kitten/components/ui";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { AutocompleteSimpleUsageShowcase } from "../components/AutoComplete";
import dayjs from "dayjs";
import isLeapYear from "dayjs/plugin/isLeapYear";
import "dayjs/locale/vi";

import cities from "../assets/cities";
import styles from "../stylesheet/styles";

dayjs.extend(isLeapYear);
dayjs.locale("vi");

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

  return (
    <>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <Image source={{ uri: URI }} style={styles.URI} />
            <Text style={{ margin: 5, fontSize: 20 }}>
              {date.format("dddd, DD MMMM")}
            </Text>
            <Text style={{ margin: 5, fontSize: 20 }}>
              {date.format("HH:mm:ss")}
            </Text>
            {/* <Input
              placeholder="BẠN MUỐN ĐI ĐÂU?"
              ref={input}
              rightIcon={{ name: "search"}}
              style={styles.inputText}
              inputContainerStyle={{ borderBottomWidth: 0, width: 300 }}
            /> */}
            {/* <Input
              placeholder="BẠN MUỐN ĐI ĐÂU?"
              style={styles.inputText}
              onChangeText={onChangeText}
              value={text}
            /> */}
            <AutocompleteSimpleUsageShowcase />
            <Text style={{ margin: 10 }}>
              Bạn muốn đặt phương tiện di chuyển?
            </Text>
            <ImageBackground source={{ uri: URI2 }} style={styles.URI2}>
              <Button
                title="Đặt tàu ngay"
                buttonStyle={styles.button}
                containerStyle={{
                  width: 142,
                  marginHorizontal: 10,
                  marginVertical: 10,
                }}
              />
            </ImageBackground>

            {/* <FlatList
            data={cities}
            //style={styles.list}
            renderItem={({ item }) => (
              <Image
                source={{ uri: item.imgUrl }}
                style={styles.URI2}
                // containerStyle={styles.item}
                PlaceholderContent={<ActivityIndicator />}
                // onPress={() => navigation.navigate('CityDetails')}
              />
            )}
            scrollEnabled={false}
          /> */}
            <Text style={{ margin: 10 }}>Những tỉnh thành nổi tiếng</Text>
            <FlatList
              data={cities}
              scrollEnabled={false}
              renderItem={({ item }) => (
                <Tile
                  imageSrc={{ uri: item.imgUrl }}
                  imageContainerStyle={{ borderRadius: 10 }}
                  activeOpacity={1}
                  width={300}
                  title={item.title}
                  titleStyle={{ fontSize: 20, fontWeight: "bold" }}
                  onPress={() => navigation.navigate("CityDetails")}
                />
              )}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
