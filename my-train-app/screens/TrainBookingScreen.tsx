import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
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

  if (!checked) {
    return (
      <>
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
          <View style={styles.departureStation}>
            <Text category="h6">Ga đi</Text>
            <AutocompleteTrainStation />
          </View>
          <View style={styles.arrivalStation}>
            <Text category="h6">Ga đến</Text>
            <AutocompleteTrainStation />
          </View>
          <View style={styles.container}>
            <CheckBox
              checked={checked}
              onChange={(nextChecked) => {
                setChecked(nextChecked);
              }}
            >
              Khứ hồi
            </CheckBox>
          </View>
          <View>
            <DepartureDatepicker />
          </View>
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
            <Button accessoryLeft={searchIcon} onPress={() => navigation.navigate("TrainBooking2")}>Tìm kiếm</Button>
          </View>
        </SafeAreaView>
      </>
    );
  } else {
    return (
      <>
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
          <View style={styles.departureStation}>
            <Text category="h6">Ga đi</Text>
            <AutocompleteTrainStation />
          </View>
          <View style={styles.arrivalStation}>
            <Text category="h6">Ga đến</Text>
            <AutocompleteTrainStation />
          </View>
          <View style={styles.container}>
            <CheckBox
              checked={checked}
              onChange={(nextChecked) => {
                setChecked(nextChecked);
              }}
            >
              Khứ hồi
            </CheckBox>
          </View>
          <View>
            <DepartureDatepicker />
            <ArrivalDatepicker />
          </View>
          <View style={styles.selectedPassenger}>
            <Text category="h6">Hành khách</Text>
            <Select
              style={{ marginTop: 10 }}
              value={displayValue}
              selectedIndex={selectedIndex}
              multiSelect={true}
              onSelect={(index: IndexPath) => setSelectedIndex(index)}
            >
              {data.map(renderOption)}
            </Select>
          </View>
          <View style={styles.button}>
            <Button accessoryLeft={searchIcon} onPress={() => setPress(true)}>Tìm kiếm</Button>
          </View>
        </SafeAreaView>
      </>
    );
  }
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
  justifyContent: 'flex-end',
 },
});

export default TrainbookingScreen;
