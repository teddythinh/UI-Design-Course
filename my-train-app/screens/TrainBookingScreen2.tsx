import React, { useMemo, useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableHighlight,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Text, Button, ButtonGroup } from "@ui-kitten/components";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

type BookingScreen2Props = {
  navigation: any;
};

const TrainBookingScreen2: React.FC<BookingScreen2Props> = ({ navigation }) => {
  return (
    <SafeAreaView>
      <TouchableHighlight onPress={() => navigation.goBack()}>
        <View>
          <FontAwesomeIcon
            icon={faChevronLeft}
            style={styles.backChevron}
            size={25}
          />
        </View>
      </TouchableHighlight>
      <View style={styles.container}>
        <Text category="h4" style={styles.title}>
          Chọn thời gian
        </Text>
      </View>
      <View style={{ margin: 20 }}>
        <Text category="h6">Thời gian còn lại:</Text>
      </View>

      <View style={styles.container}>
        <Text category="h6" style={{ margin: 10 }}>
          Số hiệu tàu
        </Text>
      </View>
      <View style={styles.tau}>
        <ButtonGroup>
          <Button>SE2</Button>
          <Button>SE4</Button>
          <Button>SE6</Button>
          <Button>SE8</Button>
        </ButtonGroup>
      </View>

      <View style={styles.container}>
        <Text category="h6" style={{ margin: 10 }}>
          Toa tàu
        </Text>
      </View>
      <View style={styles.tau}>
        <ButtonGroup status='info'>
          <Button>SE2</Button>
          <Button>SE4</Button>
          <Button>SE6</Button>
          <Button>SE8</Button>
        </ButtonGroup>
      </View>

      <View style={styles.container}>
        <Text category="h6" style={{ margin: 10 }}>
          Khoang tàu
        </Text>
      </View>
      <View style={styles.tau}>
        <ButtonGroup status='success'>
          <Button>SE2</Button>
          <Button>SE4</Button>
          <Button>SE6</Button>
          <Button>SE8</Button>
        </ButtonGroup>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  backChevron: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 1,
  },
  title: {
    fontSize: 30,
    marginTop: 14,
  },
  tau: {
    alignItems: "center",
  },
});

export default TrainBookingScreen2;
