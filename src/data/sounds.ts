export type MediaItem = {
  title: string;
  collection: string;
  section: string;
  type: "audio" | "video";
  source: string;
  description?: string;
  format?: string;
  duration?: string;
  poster?: string;
};

export const sounds: MediaItem[] = [
  {
    title: "午夜电台",
    collection: "Hunter Roulette OST",
    section: "大厅",
    type: "audio",
    source: "/Media/Sounds/HunterRouletteOST/Lobby/午夜电台.mp3",
    format: "MP3",
  },
  {
    title: "圣诞变奏曲·一",
    collection: "Hunter Roulette OST",
    section: "大厅",
    type: "audio",
    source: "/Media/Sounds/HunterRouletteOST/Lobby/圣诞变奏曲·一.mp3",
    format: "MP3",
  },
  {
    title: "圣诞变奏曲·二",
    collection: "Hunter Roulette OST",
    section: "大厅",
    type: "audio",
    source: "/Media/Sounds/HunterRouletteOST/Lobby/圣诞变奏曲·二.mp3",
    format: "MP3",
  },
  {
    title: "未来漫游者",
    collection: "Hunter Roulette OST",
    section: "大厅",
    type: "audio",
    source: "/Media/Sounds/HunterRouletteOST/Lobby/未来漫游者.mp3",
    format: "MP3",
  },
  {
    title: "罪恶猎手",
    collection: "Hunter Roulette OST",
    section: "大厅",
    type: "audio",
    source: "/Media/Sounds/HunterRouletteOST/Lobby/罪恶猎手.mp3",
    format: "MP3",
  },
  {
    title: "Every Day I Ride or Die",
    collection: "Hunter Roulette OST",
    section: "登录",
    type: "audio",
    source: "/Media/Sounds/HunterRouletteOST/Login/Every Day I Ride or Die.mp3",
    format: "MP3",
  },
  {
    title: "For Christmas",
    collection: "Hunter Roulette OST",
    section: "登录",
    type: "audio",
    source: "/Media/Sounds/HunterRouletteOST/Login/For Christmas.mp3",
    format: "MP3",
  },
];
