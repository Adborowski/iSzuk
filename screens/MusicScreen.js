import { Text, View } from "react-native";
import AlbumCard from "../components/AlbumCard";
import SoundPlayerList from "../components/SoundPlayerList";

const MusicScreen = () => {
  return (
    <View>
      <AlbumCard albumId={"120koni"} />
      <SoundPlayerList albumId={"120koni"} />
    </View>
  );
};

export default MusicScreen;
