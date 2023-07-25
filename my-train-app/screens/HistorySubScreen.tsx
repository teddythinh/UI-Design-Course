import React, { useState } from "react";
import { Layout, Card, List, Button, Text } from "@ui-kitten/components";
import {
  ListRenderItemInfo,
  StyleSheet,
  View,
  ViewProps,
  ScrollView,
  FlatList,
} from "react-native";
import { Image, FAB, ListItem } from "@rneui/themed";
import dayjs from "dayjs";
import Icon from "react-native-vector-icons/FontAwesome";

import history from "../assets/history";

const HistorySubScreen = (props: { history: any }): React.ReactElement => {
  const [date, setDate] = useState(dayjs());
  const [startDate, setStartDate] = useState(dayjs());
  const [endDate, setEndDate] = useState(dayjs());
  const data = props.history;

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
                  style={{ width: 320, height: 200, borderRadius: 10 }}
                />
                <Text category="h6" style={{ marginTop: 10 }}>
                  {item.title}
                </Text>
                <Text
                  style={{ marginBottom: 10, marginTop: 10, fontSize: 20 }}
                >{`${item.startDate} - ${item.endDate}`}</Text>
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
        color={"#47EAE0"}
        style={{ position: "absolute", bottom: 20, right: 20 }}
      >
        <Icon name="plus" size={30} color="#fff" />
      </FAB>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 2,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  footerControl: {
    marginHorizontal: 2,
  },
});

export default HistorySubScreen;
