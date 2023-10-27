import { useState } from "react";
import useNotes from "../hooks/useNotes";
import ContextNotesList from "../components/ContextNotesList";

const ContextExamplePage = () => {
  const [inputValue, setInputValue] = useState();

  const { addNotes } = useNotes();

  const handleCreateNote = () => addNotes(inputValue);

  return (
    <div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleCreateNote}>Create Note</button>
      </div>
      <ContextNotesList />
    </div>
  );
};

export default ContextExamplePage;
