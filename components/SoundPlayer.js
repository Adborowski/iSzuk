import { useEffect, useState, useContext } from "react";
import { View, Text, Pressable, PlatformColor } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FavoritesContext } from "../store/context/favorites-context";
import TypeLabel from "./TypeLabel";
import { PlayerContext } from "../store/context/player-context";

const SoundPlayer = ({ soundData }) => {
  const favoritesContext = useContext(FavoritesContext);
  const playerContext = useContext(PlayerContext);
  const { sound, soundId, isPlaying, playSound, stopSound } =
    useContext(PlayerContext);
  const { favoriteIds, addFavorite, removeFavorite } = favoritesContext;
  const isFavorite = favoriteIds.includes(soundData.id);

  return (
    <View
      style={{
        justifyContent: "center",
        flexDirection: "row",
        gap: 12,
        marginHorizontal: 12,
        marginBottom: 6,
      }}
    >
      <Pressable
        onPress={() => {
          playSound(soundData.id);
        }}
        style={({ pressed }) => {
          return {
            opacity: pressed ? 0.75 : 1,
          };
        }}
      >
        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            backgroundColor:
              isPlaying && soundData.id === soundId
                ? PlatformColor("systemOrange")
                : PlatformColor("systemGray4"),
            padding: 24,
            borderRadius: 12,
            overflow: "hidden",
            fontFamily: "Basteleur-Moonlight",
            flex: 1,
            minWidth: 300,
          }}
        >
          {soundData ? soundData.label : "X"}
        </Text>
        <TypeLabel type={soundData.type} />
      </Pressable>
      <Pressable
        onPress={() => {
          if (!favoriteIds.includes(soundData.id)) {
            addFavorite(soundData.id);
          } else {
            removeFavorite(soundData.id);
          }
        }}
        style={{ flex: 1 }}
      >
        <View
          style={{
            flex: 1,
            borderRadius: 12,
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Ionicons
            style={{
              margin: "auto",
              color: isFavorite
                ? PlatformColor("systemOrange")
                : PlatformColor("systemGray4"),
              borderRadius: 10,
              padding: 6,
              overflow: "hidden",
            }}
            size={32}
            name={"star"}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default SoundPlayer;
