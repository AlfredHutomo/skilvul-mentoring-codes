import useNotes from "../hooks/useNotes";

const ContextNotesList = () => {
  const { notes } = useNotes();

  return (
    <div>
      {notes.map((note) => (
        <div key={note.id}>{note.content}</div>
      ))}
    </div>
  );
};

export default ContextNotesList;
