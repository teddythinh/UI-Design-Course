import React, { createRef, useState, useRef } from "react";
import {
  View,
  TextInput,
  ImageBackground,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Image, Text, Input, Button } from "@rneui/themed";
//import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import cities from "../assets/cities";
import styles from "../stylesheet/styles";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const URI =
  "https://lp-cms-production.imgix.net/2021-01/shutterstockRF_718619590.jpg";

const URI2 =
  "https://bcp.cdnchinhphu.vn/Uploaded/phanthuytrang/2020_09_29/IMG_5815.JPG";

interface HomeScreenProps {
  navigation: any;
}

// TODO: Add carousel
const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const [text, onChangeText] = useState("");

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Image source={{ uri: URI }} style={styles.URI} />
          {/* <Input
          placeholder="BẠN MUỐN ĐI ĐÂU?"
          ref={input}
          rightIcon={{ name: "search"}}
          style={styles.inputText}
          inputContainerStyle={{ borderBottomWidth: 0, width: 300 }}
        /> */}
          <TextInput
            placeholder="BẠN MUỐN ĐI ĐÂU?"
            style={styles.inputText}
            onChangeText={onChangeText}
            value={text}
          />
          <Text>Bạn muốn đặt phương tiện di chuyển?</Text>
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

          <Text>Những tỉnh thành nổi tiếng</Text>

            <FlatList
              data={cities}
              //style={styles.list}
              renderItem={({ item }) => (
                <Image
                  source={{ uri: item.imgUrl }}
                  style={styles.URI2}
                  // containerStyle={styles.item}
                  // PlaceholderContent={<ActivityIndicator />}
                  // onPress={() => navigation.navigate('CityDetailsScreen', {item: item})}
                />
              )}
              scrollEnabled={false}
            />
        </View>
      </ScrollView>
    </>
  );
};

export default HomeScreen;
