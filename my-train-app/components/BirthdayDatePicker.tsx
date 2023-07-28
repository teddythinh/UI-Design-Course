import React from "react";
import { StyleSheet } from "react-native";
import {
  Datepicker,
  Icon,
  IconElement,
  Layout,
  DatepickerProps,
} from "@ui-kitten/components";
import moment from "moment";
import { MomentDateService } from '@ui-kitten/moment';

const dateService = new MomentDateService();

const CalendarIcon = (props): IconElement => (
  <Icon {...props} name="calendar" />
);

const useDatepickerState = (initialDate = null): DatepickerProps => {
  const [date, setDate] = React.useState(initialDate);
  return { date, onSelect: setDate };
};

export const BirthdayDatepicker = (): React.ReactElement => {
  const [date, setDate] = React.useState(moment());
  const boundingPickerState = useDatepickerState();
  return (
    <Layout style={styles.container} level="1">
      <Datepicker
        placeholder="Chọn ngày"
        date={date}
        dateService={dateService}
        onSelect={(nextDate: moment.Moment) => setDate(nextDate)}
        accessoryRight={CalendarIcon}
        boundingMonth={false}
        {...boundingPickerState}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#f5f5f5",
  },
});

export default BirthdayDatepicker;
