import React, { useState } from "react";
import { StyleSheet } from "react-native";
import {
  Layout,
  RangeDatepicker,
  Icon,
  IconElement,
  DatepickerProps,
} from "@ui-kitten/components";
import dayjs from "dayjs";
import moment from "moment";

const CalendarIcon = (props): IconElement => (
  <Icon {...props} name="calendar" />
);

const useDatepickerState = (initialDate = null): DatepickerProps => {
  const [date, setDate] = React.useState(initialDate);
  return { date, onSelect: setDate };
};

const now = dayjs();

const DateRangeDatePicker: React.FC = () => {
  const [range, setRange] = useState({});
  const boundingPickerState = useDatepickerState();
  const minPickerState = useDatepickerState();

  return (
    <Layout style={styles.container} level="1">
      <RangeDatepicker
        range={range}
        placeholder={"Chọn ngày"}
        accessoryRight={CalendarIcon}
        boundingMonth={false}
        {...boundingPickerState}
        min={now.toDate()}
        {...minPickerState}
        onSelect={(nextRange) => setRange(nextRange)}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#f5f5f5",
  },
});

export default DateRangeDatePicker;

