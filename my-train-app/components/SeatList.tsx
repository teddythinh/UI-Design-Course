import React, { useState, useEffect } from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft, faCouch } from "@fortawesome/free-solid-svg-icons";
import { Text } from "@ui-kitten/components";

// make a component called Seat, has 3 props: seatNumber, isBooked, isSelecting, isAvailable
const Seat = ({ seatNumber }) => {
  const [isSelected, setIsSelected] = useState(false);
  const [isAvailable, setIsAvailable] = useState(true);
  const [isBooked, setIsBooked] = useState(false);
  const [isSelecting, setIsSelecting] = useState(false);

  const iconColor = () => {
    if (isBooked) {
      return "blue";
    } else if (isSelected) {
      return "red";
    } else {
      return "gray";
    }
  };

  return (
    <View style={{ margin: 20 }}>
      <Pressable
        onPress={() => {
          setIsSelected(!isSelected);
        }}
      >
        <FontAwesomeIcon icon={faCouch} size={50} color={iconColor()} />
      </Pressable>
    </View>
  );
};

// make a component called SeatList, has 3 rows and 2 columns
const SeatList = () => {
  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        <Text category="h4" style={{ marginTop: 30 }}>
          Tầng 3
        </Text>
        <Seat seatNumber={1} />
        <Seat seatNumber={2} />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text category="h4" style={{ marginTop: 30 }}>
          Tầng 2
        </Text>
        <Seat seatNumber={3} />
        <Seat seatNumber={4} />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text category="h4" style={{ marginTop: 30, marginLeft: 3 }}>
          Tầng 1
        </Text>
        <FontAwesomeIcon
          icon={faCouch}
          size={50}
          color="blue"
          style={{ margin: 20 }}
        />
        <FontAwesomeIcon
          icon={faCouch}
          size={50}
          color="blue"
          style={{ margin: 20 }}
        />
      </View>
    </View>
  );
};

export default SeatList;
