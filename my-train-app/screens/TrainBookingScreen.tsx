import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image, Button } from "@rneui/themed";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Text, Input, CheckBox } from "@ui-kitten/components";

import HomeScreen from "./HomeScreen";
import AutocompleteTrainStation from "../components/AutoCompleteTrainStation";
import DepartureDatepicker from "../components/DepartureDatePicker";
import ArrivalDatepicker from "../components/ArrivalDatePicker";

interface HomeScreenProps {
  navigation: any;
}

const TrainbookingScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [value, setValue] = useState("");
  const [checked, setChecked] = useState(false);

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
            <ArrivalDatepicker/>
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
});

export default TrainbookingScreen;
