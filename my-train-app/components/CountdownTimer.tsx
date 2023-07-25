import dayjs, { Dayjs } from "dayjs";
import duration from "dayjs/plugin/duration";
import React, { useMemo, useState } from "react";

dayjs.extend(duration);

interface CountdownProps {
  endTime: Dayjs;
}

const Countdown: React.FC<CountdownProps> = ({ endTime }) => {
  const [time, setTime] = useState<string>();

  useMemo(() => {
    var currentTime = dayjs();
    var diffTime = endTime.unix() - currentTime.unix();

    var duration = dayjs.duration(diffTime * 1000, "milliseconds");
    var interval = 1000;
    const twoDP = (n: number) => (n > 9 ? n : "0" + n);

    setInterval(function () {
      duration = dayjs.duration(
        duration.asMilliseconds() - interval,
        "milliseconds"
      );
      let timestamp = `${
        duration.days() && duration.days() + "d "
      }${duration.hours()}h ${twoDP(duration.minutes())}m ${twoDP(
        duration.seconds()
      )}s`;
      setTime(timestamp);
    }, interval);
  }, [endTime]);
  return <>{time}</>;
};

export default Countdown;