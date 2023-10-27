import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
  filteredNotes: [],
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNotes: (state, action) => {
      const newNote = {
        id: Math.random() * 1000,
        content: action.payload.text,
      };
      state.notes = [...state.notes, newNote];
    },
    removeNote: (state, action) => {
      state.notes = state.notes.filter((note) => note === action.payload.id);
    },
    searchNotes: (state, action) => {
      state.filteredNotes = state.notes.filter((note) =>
        note.content.startsWith(action.payload.search)
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNotes, removeNote } = notesSlice.actions;

export default notesSlice.reducer;
