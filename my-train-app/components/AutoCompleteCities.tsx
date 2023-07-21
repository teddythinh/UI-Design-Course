import React, { useCallback } from "react";
import {
  Autocomplete,
  AutocompleteItem,
  TextProps,
} from "@ui-kitten/components";
import cities from "../assets/cities";
import styles from "../stylesheet/styles";
import { RenderProp } from "@ui-kitten/components/devsupport";

const filter = (
  item: { title: any; body?: string; imgUrl?: string },
  query: string
): boolean => item.title.toLowerCase().includes(query.toLowerCase());

export const AutocompleteCities = (): React.ReactElement => {
  const [value, setValue] = React.useState(null);
  const [data, setData] = React.useState(cities);

  const onSelect = useCallback(
    (index: string | number): void => {
      setValue(data[index].title);
    },
    [data]
  );

  const onChangeText = useCallback((query: any): void => {
    setValue(query);
    setData(cities.filter((item) => filter(item, query)));
  }, []);

  const renderOption = (
    item: { title: RenderProp<TextProps> | React.ReactText },
    index: React.Key
  ): React.ReactElement => <AutocompleteItem key={index} title={item.title} />;

  return (
    <Autocomplete
      placeholder="BẠN MUỐN ĐI ĐÂU?"
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

export default AutocompleteCities;
