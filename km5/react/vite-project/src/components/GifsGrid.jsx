import { Gif } from "@giphy/react-components";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { useContext, useEffect, useState } from "react";
import GifSearchContext from "../context/gifSearchContext";

const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_API_KEY);

const fetchSearch = async (query) => {
  let result;

  if (query) {
    result = await gf.search(query, { limit: 9 });
  } else {
    result = await gf.trending({ limit: 9 });
  }

  const data = result?.data || [];

  return data;
};

const GifsGrid = () => {
  const { searchText } = useContext(GifSearchContext);

  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchSearch(searchText)
      .then((data) => setGifs(data))
      .finally(setLoading(false));
  }, [searchText]);

  if (loading) return "loading...";

  return (
    <div>
      {gifs.map((gif) => (
        <Gif key={gif.id} gif={gif} width={200} />
      ))}
    </div>
  );
};

export default GifsGrid;
