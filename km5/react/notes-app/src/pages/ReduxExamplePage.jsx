import { useState } from "react";
import { useDispatch } from "react-redux";

import { addNotes } from "../slices/notesSlices";
import ReduxNotesList from "../components/ReduxNotesList";

const ReduxExamplePage = () => {
  const [inputValue, setInputValue] = useState();

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={() => dispatch(addNotes({ text: inputValue }))}>
          Create Note
        </button>
      </div>
      <ReduxNotesList />
    </div>
  );
};

export default ReduxExamplePage;
