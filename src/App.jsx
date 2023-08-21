import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Home from "./containers/Home/Home";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
function App() {
  const queryClient = new QueryClient();


  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <Navbar />
          <Home />
        </div>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </div>
  );
}

export default App;
