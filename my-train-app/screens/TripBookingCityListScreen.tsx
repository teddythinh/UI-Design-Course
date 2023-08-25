import React from "react";
import { Card, List, Text } from "react-native-paper";
import { View, ScrollView, Pressable } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import cities from "../assets/cities";

type Props = {
  navigation: any;
};

const TripBookingCityListScreen: React.FC<Props> = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <>
      <View
        style={{
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        }}
      >
        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: 55,
              marginLeft: 20,
              justifyContent: "space-between",
            }}
          >
            <Pressable onPress={() => navigation.goBack()}>
              <FontAwesomeIcon icon={faChevronLeft} size={25} />
            </Pressable>
            <Text variant="headlineSmall">Danh sách các thành phố</Text>
          </View>

          <List.Section>
            {cities.map((city) => (
              <Pressable onPress={(e) => {}}>
                <Card
                  style={{
                    marginLeft: 20,
                    marginRight: 20,
                    marginBottom: 10,
                  }}
                >
                  <Card.Cover
                    source={{ uri: city.imgUrl }}
                    style={{
                      height: 200,
                      width: 330,
                      marginTop: 10,
                      alignSelf: "center",
                    }}
                  />
                  <Card.Content>
                    <Text variant="headlineSmall">{city.title}</Text>
                    <Text
                      variant="bodyMedium"
                      style={{
                        textAlign: "justify",
                      }}
                    >
                      {city.introduction}
                    </Text>
                  </Card.Content>
                </Card>
              </Pressable>
            ))}
          </List.Section>
        </ScrollView>
      </View>
    </>
  );
};

export default TripBookingCityListScreen;
