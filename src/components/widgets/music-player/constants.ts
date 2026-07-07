import type { Song } from "./types";

export const STORAGE_KEY_VOLUME = "music-player-volume";

export const DEFAULT_VOLUME = 0.7;

export const LOCAL_PLAYLIST: Song[] = [
  {
    id: 1,
    title: "願い～あの頃のキミへ～",
    artist: "當山みれい",
    cover: "assets/music/cover/qiyuan.webp",
    url: "assets/music/url/qiyuan.mp3",
    duration: 0,
  },
  {
    id: 2,
    title: "败犬女主太多了！ED「LOVE2000」",
    artist: "遠野ひかる",
    cover: "assets/music/cover/baiquan.webp",
    url: "assets/music/url/baiquan.mp3",
    duration: 240,
  },
  {
    id: 3,
    title: "DAMIDAMI",
    artist: "ZZZ",
    cover: "assets/music/cover/dami.webp",
    url: "assets/music/url/DAMIDAMI.mp3",
    duration: 180,
  },
  {
    id: 4,
    title: "打上花火",
    artist: "Daoko×米津玄師",
    cover: "assets/music/cover/fire.webp",
    url: "assets/music/url/fire.mp3",
    duration: 200,
  },
  {
    id: 5,
    title: "花の塔",
    artist: "酸欠少女",
    cover: "assets/music/cover/hua.webp",
    url: "assets/music/url/hua.mp3",
    duration: 200,
  },
];

export const DEFAULT_SONG: Song = {
  title: "Sample Song",
  artist: "Sample Artist",
  cover: "/favicon/favicon.ico",
  url: "",
  duration: 0,
  id: 0,
};

export const DEFAULT_METING_API =
  "https://www.bilibili.uno/api?server=:server&type=:type&id=:id&auth=:auth&r=:r";
export const DEFAULT_METING_ID = "14164869977";
export const DEFAULT_METING_SERVER = "netease";
export const DEFAULT_METING_TYPE = "playlist";

export const ERROR_DISPLAY_DURATION = 3000;
export const SKIP_ERROR_DELAY = 1000;
