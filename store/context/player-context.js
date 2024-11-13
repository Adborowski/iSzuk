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
    await sound.playAsync();
    setSound(sound);

    sound.setOnPlaybackStatusUpdate((status) => {
      setIsPlaying(status.isPlaying);
    });
  }

  const stopSound = () => {
    setIsPlaying(false);
  };

  const value = {
    sound: sound,
    soundId: soundId,
    isPlaying: isPlaying,
    playSound: playSound,
    stopSound: stopSound,
  };
  return (
    <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
  );
}

export default PlayerContextProvider;
