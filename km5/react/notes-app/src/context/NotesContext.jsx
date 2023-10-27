/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const NotesContext = createContext(null);

const NotesProvider = (props) => {
  const [notes, setNotes] = useState([]);

  const addNotes = (text) => {
    const newNotes = {
      id: Math.random() * 1000,
      content: text,
    };
    setNotes((prevNotes) => [...prevNotes, newNotes]);
  };

  const removeNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((notes) => notes === id));
  };

  return (
    <NotesContext.Provider value={{ notes, addNotes, removeNote }}>
      {props.children}
    </NotesContext.Provider>
  );
};

export default NotesProvider;
