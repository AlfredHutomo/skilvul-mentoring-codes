import { useContext } from "react";
import GifSearchContext from "../context/gifSearchContext";

const SearchBar = () => {
  const { searchText, setSearchText } = useContext(GifSearchContext);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search GIF"
        onChange={handleChange}
        value={searchText}
      />
    </div>
  );
};

export default SearchBar;
