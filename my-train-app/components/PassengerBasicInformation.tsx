import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  Text,
  Input,
  IndexPath,
  Select,
  SelectItem,
} from "@ui-kitten/components";

import BirthdayDatepicker from "../components/BirthdayDatePicker";

const data = [
  "Người lớn",
  "Trẻ em (1-10 tuổi)",
  "Sinh viên",
  "Người cao tuổi (từ 60 tuổi)",
];

const PassengerBasicInformation: React.FC = () => {
    const [name, setName] = useState("");
    const [id, setId] = useState("");

    const [selectedIndex, setSelectedIndex] = useState<IndexPath>(
      new IndexPath(0)
    );
    const displayValue = data[selectedIndex.row];
    const renderOption = (title): React.ReactElement => (
      <SelectItem title={title} />
    );
    
    return (
      <>
        <Text category="h6" style={{ marginBottom: 10 }}>
          Họ và tên
        </Text>
        <Input
          style={{ marginBottom: 10 }}
          placeholder="Nguyễn Văn A"
          value={name}
          onChangeText={(nextValue) => setName(nextValue)}
        />
        <Text category="h6" style={{ marginBottom: 10 }}>
          Đối tượng
        </Text>
        <Select
          id="select"
          style={styles.select}
          placeholder="Default"
          value={displayValue}
          selectedIndex={selectedIndex}
          onSelect={(index: IndexPath) => setSelectedIndex(index)}
        >
          {data.map(renderOption)}
        </Select>
        {selectedIndex.row === 0 ? (
          <>
            <Text category="h6" style={{ marginBottom: 10 }}>
              CCCD/CMND
            </Text>
            <Input
              style={{ marginBottom: 10 }}
              value={id}
              onChangeText={(nextValue) => setId(nextValue)}
            />
          </>
        ) : selectedIndex.row === 1 ? (
          <>
            <Text category="h6">Ngày sinh</Text>
            <BirthdayDatepicker />
          </>
        ) : selectedIndex.row === 2 ? (
          <>
            <Text category="h6" style={{ marginBottom: 10 }}>
              CCCD/CMND
            </Text>
            <Input
              style={{ marginBottom: 10 }}
              value={id}
              onChangeText={(nextValue) => setId(nextValue)}
            />
          </>
        ) : selectedIndex.row === 3 ? (
          <>
            <Text category="h6">Ngày sinh</Text>
            <BirthdayDatepicker />
            <Text category="h6" style={{ marginBottom: 10 }}>
              CCCD/CMND
            </Text>
            <Input
              style={{ marginBottom: 10 }}
              value={id}
              onChangeText={(nextValue) => setId(nextValue)}
            />
          </>
        ) : null}
      </>
    );
}

const styles = StyleSheet.create({
  select: {
    marginBottom: 10,
  },
});

export default PassengerBasicInformation;