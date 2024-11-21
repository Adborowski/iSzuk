import { View } from "react-native";
import AlbumCard from "../components/AlbumCard";
import SoundPlayerList from "../components/SoundPlayerList";

const MusicScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View>
        <AlbumCard albumId={"120koni"} />
      </View>
      <View style={{ flex: 2 }}>
        <SoundPlayerList albumId={"120koni"} />
      </View>
    </View>
  );
};

export default MusicScreen;
