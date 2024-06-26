import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// STYLES
import "@style/global.scss";

// DEV DEPENDENCIES
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
