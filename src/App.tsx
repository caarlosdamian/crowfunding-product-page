import { useSelector } from "react-redux";
import { Header } from "./sections/header/Header";
import { Top } from "./sections/top/Top";
import "./App.scss";
import { Middle } from "./sections/middle/Middle";
import { Main } from "./sections/main/Main";

function App() {
  const { menuActive } = useSelector((state: any) => state.toggle);
  return (
    <main className={`main ${(menuActive && "active") || ""}`}>
      <Header />
      <Top showMenu={menuActive} />
      <Middle/>
      <Main/>
    </main>
  );
}

export default App;
