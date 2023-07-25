import React, { useMemo, useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableHighlight,
  Pressable,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import {
  Text,
  Button,
  ButtonGroup,
  Icon,
  IconElement,
} from "@ui-kitten/components";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { useSafeAreaInsets } from "react-native-safe-area-context";

dayjs.extend(duration);

type BookingScreen2Props = {
  navigation: any;
};

const searchIcon = (props): IconElement => (
  <Icon {...props} name="search-outline" />
);

const TrainBookingSeatScreen: React.FC<BookingScreen2Props> = ({
  navigation,
}) => {
  const insets = useSafeAreaInsets();
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
            marginRight: 130,
            marginLeft: 20,
            justifyContent: "space-between",
          }}
        >
          <Pressable onPress={() => navigation.goBack()}>
            <FontAwesomeIcon icon={faChevronLeft} size={25} />
          </Pressable>
          <Text category="h4">Chọn chỗ</Text>
        </View>
        <Text style={styles.timeLeft} category="h6">Thời gian còn lại:</Text>

        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text category="h6" style={styles.trainId}>
            Số hiệu tàu
          </Text>
          <ButtonGroup>
            <Button>SE2</Button>
            <Button>SE4</Button>
            <Button>SE6</Button>
            <Button>SE8</Button>
          </ButtonGroup>
          <Text category="h6" style={{ margin: 10 }}>
            Toa tàu
          </Text>
          <ButtonGroup status="info">
            <Button>Toa 1</Button>
            <Button>Toa 2</Button>
            <Button>Toa 3</Button>
            <Button>Toa 4</Button>
          </ButtonGroup>
          <Text category="h6" style={{ margin: 10 }}>
            Khoang tàu
          </Text>
          <ButtonGroup status="success">
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button>7</Button>
          </ButtonGroup>
          <Button
            style={styles.button}
            accessoryLeft={searchIcon}
            onPress={() => navigation.navigate("TrainBookingInformation")}
          >
            Tìm kiếm
          </Button>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  timeLeft: {
    margin: 20,
  },
  trainId: {
    margin: 10
  },
  button: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    justifyContent: "flex-end",
  },

});

export default TrainBookingSeatScreen;
