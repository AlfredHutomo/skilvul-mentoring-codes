import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";

import HomePage from './pages/HomePage.jsx';

import ErrorPage from './pages/ErrorPage.jsx';

import TodoLayout from './components/TodoLayout.jsx';
import CompletedPage from './pages/todos/CompletedPage.jsx';
import ActivePage from './pages/todos/ActivePage.jsx';
import AllPage from './pages/todos/AllPage.jsx';
import ApiPage from "./pages/ApiPage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index={true} element={<ApiPage/>}/>
      <Route path='todo' element={<TodoLayout />} errorElement={<ErrorPage />}>
        <Route index={true} element={<AllPage />} />
        <Route path='active' element={<ActivePage />} />
        <Route path='completed' element={<CompletedPage />} />
      </Route>
      <Route path='/pure-react' element={<HomePage />} />
    </>
  )
);

export default router;
