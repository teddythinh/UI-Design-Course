import React, { useState } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import {
  Text,
  Input,
  CheckBox,
  IndexPath,
  Select,
  SelectItem,
  Button,
  Icon,
  IconElement,
} from "@ui-kitten/components";

import AutocompleteTrainStation from "../components/AutoCompleteTrainStation";
import DepartureDatepicker from "../components/DepartureDatePicker";
import ArrivalDatepicker from "../components/ArrivalDatePicker";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import PersonCounter from "../components/PersonCounter";

interface BookingScreenProps {
  navigation: any;
}

const data = [
  "Người lớn",
  "Trẻ em (1-6 tuổi)",
  "Trẻ em (6-10 tuổi)",
  "Sinh viên",
  "Người cao tuổi (từ 60 tuổi)",
];

const searchIcon = (props): IconElement => (
  <Icon {...props} name="search-outline" />
);

const TrainbookingScreen: React.FC<BookingScreenProps> = ({ navigation }) => {
  const [value, setValue] = useState("");
  const [checked, setChecked] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState<IndexPath>(
    new IndexPath(0)
  );
  const displayValue = data[selectedIndex.row];
  const renderOption = (title): React.ReactElement => (
    <SelectItem title={title} />
  );

  const [press, setPress] = useState(false);
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
          <Text category="h4">Tìm kiếm</Text>
        </View>

        <View style={styles.departureStation}>
          <Text category="h6">Ga đi</Text>
          <AutocompleteTrainStation />
        </View>
        <View style={styles.arrivalStation}>
          <Text category="h6">Ga đến</Text>
          <AutocompleteTrainStation />
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <CheckBox
            checked={checked}
            onChange={(nextChecked) => {
              setChecked(nextChecked);
            }}
          >
            Khứ hồi
          </CheckBox>
        </View>

        {checked ? (
          <View>
            <Text style={{ marginLeft: 20 }} category="h6">
              Ngày đi
            </Text>
            <DepartureDatepicker />
            <Text style={{ marginLeft: 20 }} category="h6">
              Ngày về
            </Text>
            <ArrivalDatepicker />
          </View>
        ) : (
          <View>
            <Text style={{ marginLeft: 20 }} category="h6">
              Ngày đi
            </Text>
            <DepartureDatepicker />
          </View>
        )}

        <View style={styles.selectedPassenger}>
          <Text category="h6">Hành khách</Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              justifyContent: "space-between",
            }}
          >
            <Text style={{ marginLeft: 20, marginTop: 20 }} category="s1">
              Người lớn
            </Text>
            <PersonCounter />
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              justifyContent: "space-between",
            }}
          >
            <Text style={{ marginLeft: 20, marginTop: 20 }} category="s1">
              Trẻ em (1-6 tuổi)
            </Text>
            <PersonCounter />
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              justifyContent: "space-between",
            }}
          >
            <Text style={{ marginLeft: 20, marginTop: 20 }} category="s1">
              Trẻ em (6-10 tuổi)
            </Text>
            <PersonCounter />
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              justifyContent: "space-between",
            }}
          >
            <Text style={{ marginLeft: 20, marginTop: 20 }} category="s1">
              Sinh viên
            </Text>
            <PersonCounter />
          </View>

          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              justifyContent: "space-between",
            }}
          >
            <Text style={{ marginLeft: 20, marginTop: 20 }} category="s1">
              Người cao tuổi (từ 60 tuổi)
            </Text>
            <PersonCounter />
          </View>
          <Button
            style={styles.button}
            accessoryLeft={searchIcon}
            onPress={() => navigation.navigate("TrainBookingSeat")}
          >
            Tìm kiếm
          </Button>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  departureStation: {
    marginTop: 20,
    marginLeft: 20,
  },
  arrivalStation: {
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 20,
  },
  datepicker: {
    margin: 20,
  },
  selectedPassenger: {
    height: 128,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
  button: {
    marginTop: 10,
  },
});

export default TrainbookingScreen;
