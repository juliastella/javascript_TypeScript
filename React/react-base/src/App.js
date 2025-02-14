import React from "react";

import Header from "./components/Header";
import GlobalStyles from "./styles/GlobalStyles";

import Routes from "./routes";


function App() {
  return (
    <>
      <GlobalStyles /> {/* Renderize o GlobalStyles primeiro */}
      <Header />
      <Routes />
    </>
  );
}

export default App;
