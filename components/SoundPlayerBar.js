import {
  Text,
  View,
  StyleSheet,
  Pressable,
  PlatformColor,
  Animated,
  useAnimatedValue,
} from "react-native";
import { useContext, useState, useEffect } from "react";
import { PlayerContext } from "../store/context/player-context";
import { sounds } from "../libs/sounds";
import Ionicons from "@expo/vector-icons/Ionicons";
import { customColors } from "../libs/colors";

// bar on top of bottom tabs that shows live status of the played sound
const SoundPlayerBar = () => {
  const { sound, soundId, isPlaying, completion, playSound, stopSound } =
    useContext(PlayerContext);

  const soundData = sounds.filter((sound) => sound.id === soundId)[0];
  const progressBarWidth = completion * 100 + "%";

  if (isPlaying) {
    return (
      <Animated.View style={[styles.container]}>
        <Text style={styles.text}>
          <Text style={styles.subtext}>Utwór: </Text>
          {soundData.label}
        </Text>
        <View style={styles.progressBarWrapper}>
          <View style={[styles.progressBar, { width: progressBarWidth }]} />
        </View>
        <Pressable
          onPress={() => {
            stopSound();
          }}
          style={styles.button}
        >
          <Text style={styles.buttonLabel}>
            <Ionicons size={29} name="close-circle" />
          </Text>
        </Pressable>
      </Animated.View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 12,
  },
  text: {
    maxHeight: 20,
    fontFamily: "Basteleur",
  },
  subtext: {
    fontFamily: "Basteleur-Moonlight",
  },
  button: {
    width: 36,
    height: 36,
    justifyContent: "center",
  },
  buttonLabel: {
    textAlign: "center",
  },
  progressBarWrapper: {
    borderWidth: 1,
    borderColor: "black",
    height: 6,
    width: 72,
  },
  progressBar: {
    backgroundColor: "black",
    height: "100%",
  },
});

export default SoundPlayerBar;
