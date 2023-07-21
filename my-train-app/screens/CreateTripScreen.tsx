import React from "react";
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image, Button } from "@rneui/themed";
import HomeScreen from "./HomeScreen";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

interface HomeScreenProps {
  navigation: any;
}

const CreateTripScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <TouchableHighlight onPress={() => navigation.goBack()}>
            <View>
              <FontAwesomeIcon
                icon={faChevronLeft}
                style={styles.backChevron}
                size={25}
              />
            </View>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backChevron: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 1,
  },
});

export default CreateTripScreen;
