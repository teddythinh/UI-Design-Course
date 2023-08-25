import React, { useState } from "react";
import { Card, Button, Text } from "@ui-kitten/components";
import { StyleSheet, View, ScrollView, FlatList } from "react-native";
import { Image, AirbnbRating } from "@rneui/themed";
import dayjs from "dayjs";
import Icon from "react-native-vector-icons/FontAwesome";
import { FAB } from "react-native-paper";

import history from "../assets/history";

type Props = {
  history;
  navigation: any;
};

const HistorySubScreen: React.FC<Props> = ({
  history: any,
  navigation,
}): React.ReactElement => {
  const [date, setDate] = useState(dayjs());
  const [startDate, setStartDate] = useState(dayjs());
  const [endDate, setEndDate] = useState(dayjs());
  const data = history;

  var customParseFormat = require("dayjs/plugin/customParseFormat");
  dayjs.extend(customParseFormat);
  return (
    <>
      <ScrollView>
        <View>
          <FlatList
            data={history}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <Card style={styles.card}>
                <Image
                  source={{ uri: item.img }}
                  style={{ width: 330, height: 200, borderRadius: 10 }}
                />
                <Text category="h6" style={{ marginTop: 10 }}>
                  {item.title}
                </Text>
                <Text
                  style={{ marginBottom: 10, marginTop: 10, fontSize: 20 }}
                >{`${item.startDate} - ${item.endDate}`}</Text>
                <AirbnbRating
                  defaultRating={4}
                  isDisabled={true}
                  showRating={false}
                  size={20}
                  ratingContainerStyle={{ marginBottom: 10 }}
                />
                <View style={[styles.footerContainer]}>
                  <Button
                    style={styles.footerControl}
                    size="small"
                    status="basic"
                  >
                    BỎ QUA
                  </Button>
                  <Button style={styles.footerControl} size="small">
                    ĐÁNH GIÁ
                  </Button>
                </View>
              </Card>
            )}
          />
        </View>
      </ScrollView>
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => {
          navigation.navigate("TripBookingAdd");
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 5,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  footerControl: {
    marginHorizontal: 3,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});

export default HistorySubScreen;
