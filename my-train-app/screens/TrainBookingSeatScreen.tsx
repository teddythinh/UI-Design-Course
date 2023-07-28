import React, { useState, useEffect } from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft, faCouch } from "@fortawesome/free-solid-svg-icons";
import { Text, Button, Icon, IconElement } from "@ui-kitten/components";
import { ButtonGroup } from "@rneui/themed";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SeatList from "../components/SeatList";

dayjs.extend(duration);

type Props = {
  navigation: any;
};

const searchIcon = (props): IconElement => (
  <Icon {...props} name="search-outline" />
);

let timer: any = () => {};

const TrainBookingSeatScreen: React.FC<Props> = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const [trainId, setTrainId] = useState(0);
  const [trainBugie, setTrainBugie] = useState(0);
  const [trainCabin, setTrainCabin] = useState(0);
  const [timeLeft, setTimeLeft] = useState(
    dayjs.duration(5, "minutes").asSeconds()
  );

  const startTimer = () => {
    timer = setTimeout(() => {
      if (timeLeft <= 0) {
        clearTimeout(timer);
        return false;
      }
      setTimeLeft(timeLeft - 1);
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => clearTimeout(timer);
  });
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
        <Text style={styles.timeLeft} category="h6">
          Thời gian còn lại: {timeLeft} giây
        </Text>

        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text category="h6" style={styles.trainId}>
            Số hiệu tàu
          </Text>
          <ButtonGroup
            buttons={["SE2", "SE4", "SE6", "SE8"]}
            selectedIndex={trainId}
            onPress={(value) => {
              setTrainId(value);
            }}
          />
          <Text category="h6" style={{ margin: 10 }}>
            Toa tàu
          </Text>
          {/* <ButtonGroup status="info">
            <Button>Toa 1</Button>
            <Button>Toa 2</Button>
            <Button>Toa 3</Button>
            <Button>Toa 4</Button>
          </ButtonGroup> */}
          <ButtonGroup
            buttons={["Toa 1", "Toa 2", "Toa 3", "Toa 4"]}
            selectedIndex={trainBugie}
            onPress={(value) => {
              setTrainBugie(value);
            }}
          />
          <Text category="h6" style={{ margin: 10 }}>
            Khoang tàu
          </Text>
          {/* <ButtonGroup status="success">
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button>7</Button>
          </ButtonGroup> */}
          <ButtonGroup
            buttons={["Khoang 1", "Khoang 2", "Khoang 3", "Khoang 4"]}
            selectedIndex={trainCabin}
            onPress={(value) => {
              setTrainCabin(value);
            }}
          />
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Text category="s1" style={{ marginTop: 2 }}>
              Còn trống
            </Text>
            <FontAwesomeIcon
              icon={faCouch}
              size={25}
              color="gray"
              style={{ marginRight: 5, marginLeft: 5 }}
            />
            <Text category="s1" style={{ marginTop: 2 }}>
              Đang chọn
            </Text>
            <FontAwesomeIcon
              icon={faCouch}
              size={25}
              color="red"
              style={{ marginRight: 5, marginLeft: 5 }}
            />
            <Text category="s1" style={{ marginTop: 2 }}>
              Đã được đặt
            </Text>
            <FontAwesomeIcon
              icon={faCouch}
              size={25}
              color="blue"
              style={{ marginLeft: 5 }}
            />
          </View>
          <SeatList />
        </View>
        <Button
          style={styles.button}
          accessoryLeft={searchIcon}
          onPress={() => navigation.navigate("TrainBookingInformation")}
        >
          Tìm kiếm
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  timeLeft: {
    margin: 20,
    color: "red",
  },
  trainId: {
    margin: 10,
  },
  button: {
    margin: 20,
  },
});

export default TrainBookingSeatScreen;
