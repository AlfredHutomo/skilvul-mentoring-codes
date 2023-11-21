import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import UserProvider from "./contexts/UserContext.tsx";
import DoctorProvider from "./contexts/DoctorProvider.tsx";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <DoctorProvider>
          <App />
        </DoctorProvider>
      </UserProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
