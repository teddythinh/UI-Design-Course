import React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { Text } from "@ui-kitten/components";

// create a counter that can be used to increase or decrease the number of people
// it has 2 buttons: increase and decrease
// using state to store the number of people

const PersonCounter: React.FC = () => {
    const [count, setCount] = React.useState(1);

    const increase = () => {
        setCount(count + 1);
    };

    const decrease = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <View style={styles.container}>
            <Pressable onPress={decrease} style={styles.decreaseButton}>
                <Text category="h6">-</Text>
            </Pressable>
            <View style={styles.counter}>
                <Text category="h6">{count}</Text>
            </View>
            <Pressable onPress={increase} style={styles.increaseButton}>
                <Text category="h6">+</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 10,
  },
  increaseButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#00E096",
    justifyContent: "center",
    alignItems: "center",
  },
  decreaseButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FF6868",
    justifyContent: "center",
    alignItems: "center",
  },
  counter: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
});

export default PersonCounter;