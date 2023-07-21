import React from "react";
import { StyleSheet } from "react-native";
import {
  Datepicker,
  Icon,
  IconElement,
  Layout,
  DatepickerProps,
} from "@ui-kitten/components";
import dayjs from "dayjs";

const CalendarIcon = (props): IconElement => (
  <Icon {...props} name="calendar" />
);

const useDatepickerState = (initialDate = null): DatepickerProps => {
  const [date, setDate] = React.useState(initialDate);
  return { date, onSelect: setDate };
};

const now = dayjs();

export const ArrivalDatepicker = (): React.ReactElement => {
  const [date, setDate] = React.useState(new Date());
  const boundingPickerState = useDatepickerState();
  const minPickerState = useDatepickerState();
  return (
    <Layout style={styles.container} level="1">
      <Datepicker
        label="Ngày về"
        placeholder="Chọn ngày"
        date={date}
        onSelect={(nextDate) => setDate(nextDate)}
        accessoryRight={CalendarIcon}
        boundingMonth={false}
        {...boundingPickerState}
        min={now.toDate()}
        {...minPickerState}
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

export default ArrivalDatepicker;