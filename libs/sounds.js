const allSounds = [
  {
    id: "s1",
    type: "sample",
    label: "Fiesta",
    sound: require("../assets/sounds/tiszke-1.wav"),
  },
  {
    id: "s2",
    type: "sample",
    label: "W Tej Klasie",
    sound: require("../assets/sounds/tiszke-2.wav"),
  },
  {
    id: "s3",
    type: "sample",
    label: "Miał Farta",
    sound: require("../assets/sounds/tiszke-3.wav"),
  },
  {
    id: "s4",
    type: "sample",
    label: "Ściema",
    sound: require("../assets/sounds/tiszke-4.wav"),
  },
  {
    id: "s5",
    type: "sample",
    label: "Daj Światła Trochę",
    sound: require("../assets/sounds/tiszke-7.wav"),
  },
  {
    id: "s6",
    type: "sample",
    label: "Telewizor",
    sound: require("../assets/sounds/tiszke-8.wav"),
  },
  {
    id: "s7",
    type: "sample",
    label: "O Co Chodzi",
    sound: require("../assets/sounds/tiszke-9.wav"),
  },
  {
    id: "s8",
    type: "sample",
    label: "Wieczorem",
    sound: require("../assets/sounds/tiszke-10.wav"),
  },
  {
    id: "s9",
    type: "sample",
    label: "Śmiech Sary",
    sound: require("../assets/sounds/tiszke-11.wav"),
  },
  {
    id: "s10",
    type: "sample",
    label: "Damianku",
    sound: require("../assets/sounds/tiszke-13.wav"),
  },
  {
    id: "s11",
    type: "sample",
    label: "Srakulinka",
    sound: require("../assets/sounds/tiszke-14.wav"),
  },
  {
    id: "s12",
    type: "sample",
    label: "Nie-e",
    sound: require("../assets/sounds/tiszke-16.wav"),
  },
  {
    id: "s13",
    type: "sample",
    label: "Farba",
    sound: require("../assets/sounds/tiszke-17.wav"),
  },
  {
    id: "s14",
    type: "music",
    albumId: "120koni",
    label: "Evil Szwedzka",
    sound: require("../assets/sounds/song-1.mp3"),
  },
];

export let sounds = allSounds;

export let samples = allSounds.filter((sound) => sound.type === "sample");

const isSorted = true; // set false for dev
if (isSorted) {
  sounds = allSounds.sort((a, b) => {
    let textA = a.label;
    let textB = b.label;
    return textA < textB ? -1 : textA > textB ? 1 : 0;
  });
}

export const albums = [
  {
    id: "120koni",
    title: "120 Koni",
    imageUrl: require("../assets/120koni.jpg"),
  },
];
