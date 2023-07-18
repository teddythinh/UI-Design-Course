import React, { createRef, useState, useRef } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  ImageBackground,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Image, Text, Input, Button } from "@rneui/themed";
//import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import cities from "./cities";

const URI =
  "https://lp-cms-production.imgix.net/2021-01/shutterstockRF_718619590.jpg";

const URI2 =
  "https://bcp.cdnchinhphu.vn/Uploaded/phanthuytrang/2020_09_29/IMG_5815.JPG";

// TODO: Add carousel
const HomeScreen: React.FC = () => {
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
          <FlatList
            data={cities}
            //style={styles.list}
            renderItem={({ item }) => (
              <Image
                source={{ uri: item.imgUrl }}
                style={styles.URI2}
                // containerStyle={styles.item}
                PlaceholderContent={<ActivityIndicator />}
              />
            )}
          />
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  URI: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginTop: 20,
    overflow: "hidden",
  },
  URI2: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginTop: 5,
    overflow: "hidden",
  },
  inputText: {
    height: 40,
    margin: 12,
    width: 250,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
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
    borderRadius: 10,
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

export default HomeScreen;
