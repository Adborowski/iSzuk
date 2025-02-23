import { View, FlatList } from "react-native";
import SoundPlayer from "../components/SoundPlayer";
import { sounds } from "../libs/sounds";
const SoundPlayerList = ({ soundIds, type, albumId, style }) => {
  let data = sounds; // use whole lib by default

  if (soundIds) {
    data = sounds.filter((sound) => soundIds.includes(sound.id));
  }

  if (type) {
    data = data.filter((sound) => sound.type === type);
  }

  if (albumId) {
    data = data.filter((sound) => sound.albumId === albumId);
  }

  return (
    <FlatList
      style={{ marginVertical: 12 }}
      numColumns={1}
      data={data}
      renderItem={(soundData) => {
        return <SoundPlayer soundData={soundData.item} />;
      }}
    />
  );
};

export default SoundPlayerList;
