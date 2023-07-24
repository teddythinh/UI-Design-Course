import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import dayjs from 'dayjs';

const CountdownTimer = () => {
  const [deadline, setDeadline] = useState(dayjs());
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = dayjs();
      const remainingTime = deadline.diff(now);

      const daysRemaining = remainingTime.days();
      const hoursRemaining = remainingTime.hours();
      const minutesRemaining = remainingTime.minutes();
      const secondsRemaining = remainingTime.seconds();

      setDays(daysRemaining);
      setHours(hoursRemaining);
      setMinutes(minutesRemaining);
      setSeconds(secondsRemaining);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.text}>Days Remaining: {days}</Text>
        <Text style={styles.text}>Hours Remaining: {hours}</Text>
        <Text style={styles.text}>Minutes Remaining: {minutes}</Text>
        <Text style={styles.text}>Seconds Remaining: {seconds}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
});

export default CountdownTimer;
