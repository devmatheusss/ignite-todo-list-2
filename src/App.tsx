import React from "react";
import { Main } from "./layout/Main";

import Logo from "./assets/logo.svg";

function App() {
  return (
    <div className="min-h-screen pb-12 dark:bg-base-gray-600 dark:text-base-gray-100 bg-base-gray-100 text-base-gray-700">
      <header className="h-[200px] bg-base-gray-700 flex justify-center items-center">
        <img src={Logo} alt="To Do Logo" />
      </header>
      <Main />
    </div>
  );
}

export default App;
