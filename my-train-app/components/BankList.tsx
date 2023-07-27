import React, { useState } from "react";
import { View, Image, Pressable } from "react-native";
import { Text } from "@ui-kitten/components";
import banks from "../assets/banks";

const Bank = ({ bankName, logo }) => {
  const [isSelected, setIsSelected] = useState(false);

  const changeColor = () => {
    if (isSelected) {
      return "red";
    } else {
      return "black";
    }
  };

  return (
    <View style={{ margin: 10 }}>
      <Pressable
        onPress={() => {
          setIsSelected(!isSelected);
        }}
      >
        <Image
          source={{ uri: logo }}
          style={{
            width: 70,
            height: 70,
            borderRadius: 20,
            borderWidth: 2,
            borderColor: changeColor(),
          }}
        />
      </Pressable>
    </View>
  );
}

const BankList = () => {
  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 10 }}>
      {banks.map((bank, index) => (
        <View
          key={index}
          style={{
            width: "33%",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <Bank bankName={bank.name} logo={bank.logo} />
          <Text category="s2" style={{ textAlign: "center" }}>
            {bank.name}
          </Text>
        </View>
      ))}
    </View>
  );
}


export default BankList;
