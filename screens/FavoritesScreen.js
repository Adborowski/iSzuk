import { Text, View } from "react-native";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import SoundPlayerList from "../components/SoundPlayerList";

const FavoritesScreen = () => {
  const { favoriteIds } = useContext(FavoritesContext);

  return (
    <View>
      <SoundPlayerList soundIds={favoriteIds} />
    </View>
  );
};

export default FavoritesScreen;
