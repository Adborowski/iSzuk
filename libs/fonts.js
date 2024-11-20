import * as Font from "expo-font";

export async function loadFonts() {
  await Font.loadAsync({
    "Mona-Light": require("../assets/fonts/MonaSans-Light.ttf"),
    "Mona-Medium": require("../assets/fonts/MonaSans-Medium.ttf"),
    "Mona-SemiBold": require("../assets/fonts/MonaSans-SemiBold.ttf"),
    "Mona-Bold": require("../assets/fonts/MonaSans-Bold.ttf"),
    "Basteleur-Moonlight": require("../assets/fonts/Basteleur-Moonlight.ttf"),
    Basteleur: require("../assets/fonts/Basteleur-Bold.ttf"),
  });
}
