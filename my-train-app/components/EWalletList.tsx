import React from "react";
import { View, Image, StyleSheet, Pressable } from "react-native";
import { Text } from "@ui-kitten/components";
import ewallet from "../assets/ewallet";

const EWalletList = () => {
  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 10 }}>
      {ewallet.map((wallet, index) => (
        <View
          key={index}
          style={{
            width: "33%",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Pressable>
            <Image source={{ uri: wallet.logo }} style={styles.image} />
          </Pressable>
          <Text category="s2" style={{ textAlign: "center", marginTop: 3 }}>
            {wallet.name}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    borderRadius: 20,
    borderWidth: 0.7,
  },
});

export default EWalletList;
