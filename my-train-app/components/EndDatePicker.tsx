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
import moment from "moment";
import { MomentDateService } from "@ui-kitten/moment";

const dateService = new MomentDateService();

const CalendarIcon = (props): IconElement => (
  <Icon {...props} name="calendar" />
);

const useDatepickerState = (initialDate = null): DatepickerProps => {
  const [date, setDate] = React.useState(initialDate);
  return { date, onSelect: setDate };
};

const now = dayjs();

export const EndDatepicker = (): React.ReactElement => {
  const [date, setDate] = React.useState(moment());
  const boundingPickerState = useDatepickerState();
  const minPickerState = useDatepickerState();
  return (
    <Layout style={styles.container} level="1">
      <Datepicker
        placeholder="Chọn ngày"
        date={date}
        onSelect={(nextDate: moment.Moment) => setDate(nextDate)}
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
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "#f5f5f5",
  },
});

export default EndDatepicker;
