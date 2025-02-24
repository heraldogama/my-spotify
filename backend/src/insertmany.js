import { artistArray } from "../../frontend/src/assets/database/artists.js";
import { songsArray } from "../../frontend/src/assets/database/songs.js";
import { database } from "./config/connection.js";

const newArtistArray = artistArray.map((currentArtistObj) => {
  const newArtistObj = { ...currentArtistObj };
  delete newArtistObj.id;

  // console.log(newArtistObj);

  return newArtistObj;
});

const newSongArray = songsArray.map((currentSongObj) => {
  const newSongObj = { ...currentSongObj };
  delete newSongObj.id;

  // console.log(newSongObj);

  return newSongObj;
});

// console.log(newArtistArray);
// console.log(newSongArray);

const responseArtists = await database
  .collection("artists")
  .insertMany(newArtistArray);

const responseSongs = await database
  .collection("songs")
  .insertMany(newSongArray);

console.log(responseArtists);
console.log(responseSongs);
export { newArtistArray, newSongArray };
