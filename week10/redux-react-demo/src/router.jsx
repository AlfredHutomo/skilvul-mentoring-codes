import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";

import HomePage from './pages/HomePage.jsx';
import ActivePage from './pages/ActivePage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';

import Layout from './components/Layout.jsx';
import CompletedPage from './pages/CompletedPage.jsx';
import AllPage from './pages/AllPage.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />} errorElement={<ErrorPage />}>
        <Route index={true} element={<AllPage />} />
        <Route path='active' element={<ActivePage />} />
        <Route path='completed' element={<CompletedPage />} />
      </Route>
      <Route path='/pure-react' element={<HomePage />} />
    </>
  )
);

export default router;
