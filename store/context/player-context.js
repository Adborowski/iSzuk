import { Audio } from "expo-av";
import { createContext, useState, useEffect } from "react";
import { sounds } from "../../libs/sounds";

export const PlayerContext = createContext({
  isPlaying: false,
  sound: "",
  playSound: () => {},
  stopSound: () => {},
});

function PlayerContextProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [sound, setSound] = useState(null);
  const [soundId, setSoundId] = useState(null);
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  async function playSound(soundId) {
    setSoundId(soundId);
    const soundData = sounds.filter((sound) => sound.id === soundId)[0];
    const { sound } = await Audio.Sound.createAsync(soundData.sound);

    console.log("Playing:", soundData.label);
    setSound(sound);
    await sound.playAsync();

    sound.setOnPlaybackStatusUpdate((status) => {
      let completion = 0;

      if (status.positionMillis && status.playableDurationMillis) {
        completion = status.positionMillis / status.playableDurationMillis;
        completion = Math.round(completion * 100) / 100;
      }
      setCompletion(completion ?? 0);
      setIsPlaying(status.isPlaying);
    });
  }

  async function stopSound() {
    await sound.stopAsync();
    setIsPlaying(false);
  }

  const value = {
    sound: sound,
    soundId: soundId,
    completion: completion,
    isPlaying: isPlaying,
    playSound: playSound,
    stopSound: stopSound,
  };
  return (
    <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
  );
}

export default PlayerContextProvider;
