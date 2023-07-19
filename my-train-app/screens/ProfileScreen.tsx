import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Avatar } from "@ui-kitten/components";
import { SafeAreaView } from "react-native-safe-area-context";

type AvatarData = {
  img_url: string;
};

const avatars: AvatarData[] = [
  {
    img_url: "https://mdbcdn.b-cdn.net/img/new/avatars/2.webp",
  },
];

type AvatarProps = {};

const ProfileScreen: React.FC<AvatarProps> = () => {
  return (
    <>
    <SafeAreaView>
<View style={styles.container}>
        <Avatar
          source={{ uri: avatars[0].img_url }}
          size="giant"
        />
      </View>
    </SafeAreaView>
      
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    marginTop: 50,
  }
});

export default ProfileScreen;
