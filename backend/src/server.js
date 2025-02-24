import app from "./app.js";
// import { newArtistArray, newSongArray } from "./insertmany.js";
import { database } from "./config/connection.js";

const PORT = 3001;

app.get("/", (req, res) => {
  res.send("root");
});
app.get("/artists", async (req, res) => {
  res.send(await database.collection("artists").find({}).toArray());
});
app.get("/songs", async (req, res) => {
  res.send(await database.collection("songs").find({}).toArray());
});

app.listen(PORT, () => {
  console.log(`Servidor está ativo na porta ${PORT}`);
});
// const countArtist = database.collection("artists").countDocuments();
// const countSong = database.collection("songs").countDocuments();
// if (countArtist && countSong === 0) {
//   const responseArtists = await database
//     .collection("artists")
//     .insertMany(newArtistArray);

//   const responseSongs = await database
//     .collection("songs")
//     .insertMany(newSongArray);
// }
// console.log("Registros já incluídos nas Collections");
// else {
//   await database.collection("artists").deleteMany({});
//   await database.collection("songs").deleteMany({});
// }
