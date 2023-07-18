import React from "react";
import { SafeAreaView } from "react-native";
import { Image } from "@rneui/themed";

const URI =
  "https://lp-cms-production.imgix.net/2021-01/shutterstockRF_718619590.jpg";

const SearchScreen: React.FC = () => {
  return (
    <>
      <SafeAreaView>
        <Image source={{ uri: URI }} style={{ width: 200, height: 400 }} />
      </SafeAreaView>
    </>
  );
};

export default SearchScreen;
