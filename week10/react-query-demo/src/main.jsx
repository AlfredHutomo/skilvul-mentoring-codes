import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query';

import {
  RouterProvider,
} from "react-router-dom";

import router from "./configurations/router";
import { setupStore } from './configurations/store';

import "./styles/index.css"

const queryClient = new QueryClient;
const store = setupStore();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
