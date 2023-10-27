// Import store cara Redux
import { Provider } from "react-redux";
import { store } from "./store";

// Import context
import NotesProvider from "./context/NotesContext";

import { RouterProvider } from "react-router-dom";
import router from "./constants/router";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <NotesProvider>
        <RouterProvider router={router} />
      </NotesProvider>
    </Provider>
  );
}

export default App;
