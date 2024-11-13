import { View, Text, FlatList, SafeAreaView } from "react-native";
import SoundPlayer from "../components/SoundPlayer";
import { sounds } from "../libs/sounds";
import SoundPlayerList from "../components/SoundPlayerList";
const SamplesScreen = () => {
  const data = sounds;

  return (
    <View>
      <SoundPlayerList type={"sample"} />
    </View>
  );
};

export default SamplesScreen;
