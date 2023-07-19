import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
    },
    URI: {
      width: 300,
      height: 200,
      borderRadius: 10,
      marginTop: 20,
      overflow: "hidden",
    },
    URI2: {
      width: 300,
      height: 200,
      borderRadius: 10,
      marginTop: 5,
      overflow: "hidden",
    },
    inputText: {
      margin: 10,
      width: 280,
    },
    textInImage: {
      // position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      botton: 0,
      fontSize: 20,
      fontWeight: "bold",
      justifyContent: "center",
      alignItems: "center",
      borderWidth: 1,
      padding: 10,
      margin: 12,
      width: 142,
      backgroundColor: "#FF6868",
      borderRadius: 10,
      overflow: "hidden",
    },
    button: {
      backgroundColor: "#FF6868",
      padding: 10,
      borderRadius: 10,
    },
    list: {
      width: "100%",
      backgroundColor: "#000",
    },
    item: {
      width: "100%",
      aspectRatio: 1,
      flex: 1,
    },
  });

  export default styles;