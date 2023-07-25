import React, { useState } from "react";
import { SafeAreaView, View, StyleSheet, Pressable } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image } from "@rneui/themed";
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

import HomeScreen from "./HomeScreen";
import AutocompleteTrainStation from "../components/AutoCompleteTrainStation";
import DepartureDatepicker from "../components/DepartureDatePicker";
import ArrivalDatepicker from "../components/ArrivalDatePicker";
import { useSafeAreaInsets } from "react-native-safe-area-context";
interface BookingScreenProps {
  navigation: any;
}

const data = [
  "Người lớn",
  "Trẻ em (1-10 tuổi)",
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
            <DepartureDatepicker />
            <ArrivalDatepicker />
          </View>
        ) : (
          <View>
            <DepartureDatepicker />
          </View>
        )}
        <View style={styles.selectedPassenger}>
          <Text category="h6">Hành khách</Text>
          <Select
            style={{ marginTop: 10 }}
            placeholder=" "
            value={displayValue}
            multiSelect={true}
            selectedIndex={selectedIndex}
            onSelect={(index: IndexPath) => setSelectedIndex(index)}
          >
            {data.map(renderOption)}
          </Select>
        </View>
        <View style={styles.button}>
          <Button
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
    margin: 20,
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
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    flex: 1,
    justifyContent: "flex-end",
  },
});

export default TrainbookingScreen;
