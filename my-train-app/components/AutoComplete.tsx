import React, { useCallback } from 'react';
import { Autocomplete, AutocompleteItem } from '@ui-kitten/components';
import cities from '../assets/cities';
import styles from '../stylesheet/styles';

const filter = (item, query): boolean => item.title.toLowerCase().includes(query.toLowerCase());

export const AutocompleteSimpleUsageShowcase = (): React.ReactElement => {

  const [value, setValue] = React.useState(null);
  const [data, setData] = React.useState(cities);

  const onSelect = useCallback((index): void => {
    setValue(data[index].title);
  }, [data]);

  const onChangeText = useCallback((query): void => {
    setValue(query);
    setData(cities.filter(item => filter(item, query)));
  }, []);

  const renderOption = (item, index): React.ReactElement => (
    <AutocompleteItem
      key={index}
      title={item.title}
    />
  );

  return (
    <Autocomplete
      placeholder='BẠN MUỐN ĐI ĐÂU?'
      value={value}
      placement='inner top'
      onSelect={onSelect}
      onChangeText={onChangeText}
      status='primary'
      style={styles.inputText}
    >
      {data.map(renderOption)}
    </Autocomplete>
  );
};

export default AutocompleteSimpleUsageShowcase;