import { useEffect, useState } from "react";
import api from "../services/api";

const songsArray = () => {
  const [song, setSong] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await api.get("/songs");
        setSongs(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSongs();
  }, []);
};
export default songsArray;
