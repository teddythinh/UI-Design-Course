import React, { useState } from "react";
import { Layout, Card, List, Button, Text } from "@ui-kitten/components";
import {
  ListRenderItemInfo,
  StyleSheet,
  View,
  ViewProps,
  ScrollView,
} from "react-native";
import { Image, FAB } from "@rneui/themed";
import dayjs from "dayjs";

import history from "../assets/history";

const Header = (props: ViewProps): React.ReactElement => (
  <View {...props}>
    <Image
      source={{ uri: history[0].img }}
      style={{ width: 350, height: 200 }}
    />
  </View>
);

const HistorySubScreen = (props: ViewProps): React.ReactElement => {
  const [date, setDate] = useState(dayjs());
  const [startDate, setStartDate] = useState(dayjs());
  const [endDate, setEndDate] = useState(dayjs());

  var customParseFormat = require("dayjs/plugin/customParseFormat");
  dayjs.extend(customParseFormat);
  return (
    <>
        <ScrollView>
          <Card style={styles.card} header={Header}>
            <Text category="h6">Tham quan Đà Nẵng</Text>
            <Text
              style={{ marginBottom: 10, marginTop: 10, fontSize: 20 }}
            >{`${startDate.format("04/05/2023")} - ${endDate.format(
              "10/05/2023"
            )}`}</Text>
            <View {...props} style={[props.style, styles.footerContainer]}>
              <Button style={styles.footerControl} size="small" status="basic">
                BỎ QUA
              </Button>
              <Button style={styles.footerControl} size="small">
                ĐÁNH GIÁ
              </Button>
            </View>
          </Card>

          <Card style={styles.card} header={Header}>
            <Text category="h6">Tham quan Đà Nẵng</Text>
            <Text
              style={{ marginBottom: 10, marginTop: 10, fontSize: 20 }}
            >{`${startDate.format("04/05/2023")} - ${endDate.format(
              "10/05/2023"
            )}`}</Text>
            <View {...props} style={[props.style, styles.footerContainer]}>
              <Button style={styles.footerControl} size="small" status="basic">
                BỎ QUA
              </Button>
              <Button style={styles.footerControl} size="small">
                ĐÁNH GIÁ
              </Button>
            </View>
          </Card>

          <Card style={styles.card} header={Header}>
            <Text category="h6">Tham quan Đà Nẵng</Text>
            <Text
              style={{ marginBottom: 10, marginTop: 10, fontSize: 20 }}
            >{`${startDate.format("04/05/2023")} - ${endDate.format(
              "10/05/2023"
            )}`}</Text>
            <View {...props} style={[props.style, styles.footerContainer]}>
              <Button style={styles.footerControl} size="small" status="basic">
                BỎ QUA
              </Button>
              <Button style={styles.footerControl} size="small">
                ĐÁNH GIÁ
              </Button>
            </View>
          </Card>

          <Card style={styles.card} header={Header}>
            <Text category="h6">Tham quan Đà Nẵng</Text>
            <Text
              style={{ marginBottom: 10, marginTop: 10, fontSize: 20 }}
            >{`${startDate.format("04/05/2023")} - ${endDate.format(
              "10/05/2023"
            )}`}</Text>
            <View {...props} style={[props.style, styles.footerContainer]}>
              <Button style={styles.footerControl} size="small" status="basic">
                BỎ QUA
              </Button>
              <Button style={styles.footerControl} size="small">
                ĐÁNH GIÁ
              </Button>
            </View>
          </Card>

          <Card style={styles.card} header={Header}>
            <Text category="h6">Tham quan Đà Nẵng</Text>
            <Text
              style={{ marginBottom: 10, marginTop: 10, fontSize: 20 }}
            >{`${startDate.format("04/05/2023")} - ${endDate.format(
              "10/05/2023"
            )}`}</Text>
            <View {...props} style={[props.style, styles.footerContainer]}>
              <Button style={styles.footerControl} size="small" status="basic">
                BỎ QUA
              </Button>
              <Button style={styles.footerControl} size="small">
                ĐÁNH GIÁ
              </Button>
            </View>
          </Card>
        </ScrollView>
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
