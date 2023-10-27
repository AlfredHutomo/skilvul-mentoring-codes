import { createBrowserRouter } from "react-router-dom";

import ContextExamplePage from "../pages/ContextExamplePage";
import ReduxExamplePage from "../pages/ReduxExamplePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/context",
    element: <ContextExamplePage />,
  },
  {
    path: "/redux",
    element: <ReduxExamplePage />,
  },
]);

export default router;
