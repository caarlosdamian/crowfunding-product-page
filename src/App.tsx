import { useState } from "react";
import "./App.scss";
import { Header } from "./sections/header/Header";
import { Top } from "./sections/top/Top";

function App() {
  const [showMenu, setshowMenu] = useState(false);
  return (
    <main className={`main ${(showMenu && "active") || ""}`}>
      <Header setshowMenu={setshowMenu} showMenu={showMenu} />
      <Top showMenu={showMenu}/>
    </main>
  );
}

export default App;
