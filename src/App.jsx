import { QueryClient, QueryClientProvider } from "react-query";
import Users from "./containers/Users/Users";
import {ReactQueryDevtools} from "react-query/devtools"

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Users />
      </div>
      <ReactQueryDevtools/> 
    </QueryClientProvider>
  );
}

export default App;
