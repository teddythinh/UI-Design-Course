import React, { useState } from "react";
import { View, StyleSheet, Pressable, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Text, Input, Button } from "@ui-kitten/components";
import { FAB } from "react-native-paper";

import MyFAB from "../components/MyFAB";
import TodoList from "../components/TodoList";

type Props = {
  navigation: any;
};

const TripBookingAddScreen: React.FC<Props> = ({ navigation }) => {
  const insets = useSafeAreaInsets();
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
        <View style={{ marginLeft: 20 }}>
          <Pressable onPress={() => navigation.goBack()}>
            <FontAwesomeIcon icon={faChevronLeft} size={25} />
          </Pressable>
        </View>
        <Text category="h5" style={{ textAlign: "right", margin: 20 }}>
          Tham quan Đà Nẵng
        </Text>
        <View style={styles.todolist}>
          <TodoList />
        </View>
      </View>
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => console.log("Pressed")}
      />
    </>
  );
};

const styles = StyleSheet.create({
  todolist: {
    margin: 20,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  }
});

export default TripBookingAddScreen;
