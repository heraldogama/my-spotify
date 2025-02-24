import axios from "axios";

const baseURL = "http://localhost:3001";

const resArtists = await axios.get(`${baseURL}/artists`);
const resSongs = await axios.get(`${baseURL}/songs`);

export const artistArray = resArtists.data;
export const songsArray = resSongs.data;
