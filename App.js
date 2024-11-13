import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MusicScreen from "./screens/MusicScreen";
import { handleFonts } from "./libs/fonts";
import SamplesScreen from "./screens/SamplesScreen";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import FavoritesContextProvider from "./store/context/favorites-context";
import FavoritesScreen from "./screens/FavoritesScreen";
import ChatScreen from "./screens/ChatScreen";
import { customColors } from "./libs/colors";
import PlayerContextProvider from "./store/context/player-context";
import ChatContextProvider from "./store/context/chat-context";
import SoundPlayerBar from "./components/SoundPlayerBar";
const BottomTab = createBottomTabNavigator();

export default function App() {
  // https://reactnavigation.org/docs/drawer-navigator/
  handleFonts();
  const iconSize = 18;

  return (
    <ChatContextProvider>
      <PlayerContextProvider>
        <FavoritesContextProvider>
          <NavigationContainer>
            <BottomTab.Navigator
              initialRouteName={"SamplesScreen"}
              tabBar={(props) => {
                return (
                  <View>
                    <SoundPlayerBar />
                    <BottomTabBar {...props} />
                  </View>
                );
              }}
              screenOptions={(props) => {
                return {
                  headerStyle: {
                    backgroundColor: customColors.orange,
                  },
                  headerTitleStyle: {
                    fontFamily: "Basteleur",
                  },
                  tabBarIcon: ({ color, size }) => {
                    return (
                      <Ionicons
                        size={iconSize}
                        color={color}
                        name="musical-note"
                      />
                    );
                  },
                  tabBarStyle: {
                    backgroundColor: customColors.orange,
                  },
                  tabBarLabelStyle: {
                    fontSize: 12,
                    fontFamily: "Basteleur-Moonlight",
                  },
                  tabBarInactiveTintColor: "black",
                };
              }}
            >
              <BottomTab.Screen
                name={"MusicScreen"}
                component={MusicScreen}
                options={{
                  title: "Muzyka",
                  tabBarIcon: ({ size, color }) => (
                    <Ionicons
                      color={color}
                      size={iconSize}
                      name="musical-notes"
                    />
                  ),
                }}
              />
              <BottomTab.Screen
                name={"SamplesScreen"}
                component={SamplesScreen}
                options={{
                  title: "Sample",
                }}
              />
              <BottomTab.Screen
                name={"FavoriteScreen"}
                component={FavoritesScreen}
                options={{
                  title: "Ulubione",
                  tabBarIcon: ({ color, size }) => {
                    return (
                      <Ionicons size={iconSize} color={color} name="heart" />
                    );
                  },
                }}
              />
              <BottomTab.Screen
                name={"ChatScreen"}
                component={ChatScreen}
                options={{
                  title: "Czat",
                  tabBarIcon: ({ color, size }) => {
                    return (
                      <Ionicons
                        size={iconSize}
                        color={color}
                        name="chatbubble-ellipses"
                      />
                    );
                  },
                }}
              />
            </BottomTab.Navigator>
          </NavigationContainer>
        </FavoritesContextProvider>
      </PlayerContextProvider>
    </ChatContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
