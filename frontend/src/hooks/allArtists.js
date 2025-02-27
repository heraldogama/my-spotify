import { useEffect, useState } from "react";
import api from "../services/api";

const artistArray = () => {
  const [artist, setArtist] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await api.get("/artists");
        setArtist(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchArtists();
  }, []);
};
export default artistArray;
