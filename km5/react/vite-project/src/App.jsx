import { useState } from "react";
import Canvas from "./components/GifsGrid";
import SearchBar from "./components/SearchBar";
import GifSearchContext from "./context/gifSearchContext";

function App() {
  const [searchText, setSearchText] = useState();

  return (
    <GifSearchContext.Provider value={{ searchText, setSearchText }}>
      <SearchBar />
      <Canvas />
    </GifSearchContext.Provider>
  );
}

export default App;
