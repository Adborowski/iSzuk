import { Image, Text, View, StyleSheet } from "react-native";
import { albums } from "../libs/sounds";

const AlbumCard = ({ albumId }) => {
  const album = albums.filter((album) => album.id === albumId)[0];
  if (album) {
    return (
      <View>
        <View style={styles.coverWrapper}>
          <Image style={styles.albumCover} source={album.imageUrl} />
        </View>
      </View>
    );
  }

  return (
    <View>
      <Text>Album not found</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  coverWrapper: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 16,
  },
  albumCover: {
    width: 366,
    height: 366,
  },
});

export default AlbumCard;
