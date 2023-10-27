import { useSelector } from "react-redux";

const ReduxNotesList = () => {
  const notes = useSelector((state) => state.notes.notes);
  return (
    <div>
      {notes.map((note) => (
        <div key={note.id}>{note.content}</div>
      ))}
    </div>
  );
};

export default ReduxNotesList;
