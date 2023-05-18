import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";

import "./index.css"

import HomePage from './pages/HomePage.jsx';
import TodoPage from './pages/TodoPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';

import App from './App.jsx';
import Layout from './components/Layout.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} errorElement={<ErrorPage/>}>
      <Route index={true} element={<HomePage/>} />
      <Route path='todo' element={<TodoPage />} />
      <Route path='app' element={<App />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
