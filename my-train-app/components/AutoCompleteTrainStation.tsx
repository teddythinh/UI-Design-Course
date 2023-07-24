import React, { useCallback } from "react";
import {
  Autocomplete,
  AutocompleteItem,
  TextProps,
} from "@ui-kitten/components";
import { RenderProp } from "@ui-kitten/components/devsupport";
import { StyleSheet } from "react-native";

import trainStation from "../assets/trainStation";


const filter = (
  item: { name: string; address: string; phone?: string, lat?: number, lng?: number, img: string },
  query: string
): boolean => item.name.toLowerCase().includes(query.toLowerCase());

export const AutocompleteTrainStation = (): React.ReactElement => {
  const [value, setValue] = React.useState(null);
  const [data, setData] = React.useState(trainStation);

  const onSelect = useCallback(
    (index: string | number): void => {
      setValue(data[index].name);
    },
    [data]
  );

  const onChangeText = useCallback((query: any): void => {
    setValue(query);
    setData(trainStation.filter((item) => filter(item, query)));
  }, []);

  const renderOption = (
    item: { name: RenderProp<TextProps> | React.ReactText },
    index: React.Key
  ): React.ReactElement => <AutocompleteItem key={index} title={item.name} />;

  return (
    <Autocomplete
      placeholder=""
      value={value}
      placement="inner top"
      onSelect={onSelect}
      onChangeText={onChangeText}
      status="primary"
      style={styles.inputText}
    >
      {data.map(renderOption)}
    </Autocomplete>
  );
};

const styles = StyleSheet.create({
    inputText: {
        width: 330,
        marginTop: 10,
    },
});

export default AutocompleteTrainStation;
