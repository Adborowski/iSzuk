import { Image, Text, View, StyleSheet } from "react-native";
import { albums } from "../libs/sounds";

const AlbumCard = ({ albumId, style }) => {
  const album = albums.filter((album) => album.id === albumId)[0];
  console.log(album);
  if (album) {
    return (
      <View style={{ ...style }}>
        <Image style={styles.albumCover} source={album.imageUrl} />
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
  albumCover: {
    width: 200,
    height: 200,
    margin: "auto",
    marginTop: 12,
  },
});

export default AlbumCard;
