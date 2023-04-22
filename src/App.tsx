import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Main } from "./layout/Main";

import Logo from "./assets/logo.svg";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen pb-12 bg-base-gray-600 text-base-gray-100">
        <header className="h-[200px] bg-base-gray-700 flex justify-center items-center">
          <img src={Logo} alt="To Do Logo" />
        </header>
        <Main />
      </div>
    </QueryClientProvider>
  );
}

export default App;
