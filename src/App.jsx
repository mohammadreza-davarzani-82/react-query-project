import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Home from "./containers/Home/Home";
import React from "react";
import { useStore } from "./shared/util/themeStore";
function App() {
  const queryClient = new QueryClient();
  // const stateTheme = useStore((state) => state.stateTheme)
  // console.log(stateTheme)

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <Home />
        </div>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </div>
  );
}

export default App;
