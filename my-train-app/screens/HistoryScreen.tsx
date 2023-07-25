import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TabBar, Tab, Icon, TabBarProps } from "@ui-kitten/components";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";

import UpComingScreen from "./UpComingScreen";
import HistorySubScreen from "./HistorySubScreen";

const { Navigator, Screen } = createMaterialTopTabNavigator();

const UpcomingIcon = (props) => <Icon {...props} name="clock-outline" />;

const HistoryIcon = (props) => <Icon {...props} name="archive-outline" />;

const useTabBarState = (initialState = 0): Partial<TabBarProps> => {
  const [selectedIndex, setSelectedIndex] = React.useState(initialState);
  return { selectedIndex, onSelect: setSelectedIndex };
};

const TopTabBar = ({ navigation, state }) => (
  <TabBar
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <Tab title="HISTORY" icon={HistoryIcon} />
    <Tab title="UPCOMING" icon={UpcomingIcon} />
  </TabBar>
);

const TabNavigator = () => (
  <Navigator tabBar={(props) => <TopTabBar {...props} />}>
    <Screen name="SubHistory" component={HistorySubScreen} />
    <Screen name="Upcoming" component={UpComingScreen} />
  </Navigator>
);

const HistoryScreen: React.FC = () => {
  const tabBarState = useTabBarState();
  return (
    <>
    <SafeAreaView style={{ flex: 1 }}>
    <TabNavigator />
    </SafeAreaView>
    </>
  );
};

export default HistoryScreen;
