import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// DEV DEPENDENCIES
import { QueryClientProvider, QueryClienter } from "@tanstack/react-query";

const queryClient = new QueryClienter();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
