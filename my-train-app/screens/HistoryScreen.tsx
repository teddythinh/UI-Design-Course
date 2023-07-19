import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  TabBar,
  Tab,
  Icon,
  IconElement,
  TabBarProps,
} from "@ui-kitten/components";
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
    <Tab title="UPCOMING" icon={UpcomingIcon} />
    <Tab title="HISTORY" icon={HistoryIcon} />
  </TabBar>
);

const TabNavigator = () => (
  <Navigator tabBar={(props) => <TopTabBar {...props} />}>
    <Screen name="Upcoming" component={UpComingScreen} />
    <Screen name="SubHistory" component={HistorySubScreen} />
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