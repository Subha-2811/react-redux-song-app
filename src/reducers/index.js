import { combineReducers } from "redux";

const songsReducers = () => {
  return [
    {
      title: "Shayad",
      duration: "4:07",
    },
    {
      title: "Bolna",
      duration: "3:33",
    },
    {
      title: "Samjhawan",
      duration: "4:29",
    },
    {
      title: "Hawayein",
      duration: "4:49",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducers,
  selectedSong: selectedSongReducer,
});
