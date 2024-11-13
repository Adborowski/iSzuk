import { Image, StyleSheet, View } from "react-native";
import { SvgUri } from "react-native-svg";

const TiszukIcon = ({ size }) => {
  const styles = StyleSheet.create({
    container: {
      width: size,
      height: size,
    },
    image: {
      width: size,
      height: size,
    },
  });

  return (
    <View style={styles.container}>
      {/* <Image style={styles.image} source={require("../assets/tiszuk.png")} /> */}
      <SvgUri width="100%" height="100%" uri="https://file.io/SRMhkMJwwIhC" />
    </View>
  );
};

export default TiszukIcon;
