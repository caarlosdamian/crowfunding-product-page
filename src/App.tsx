import { useSelector } from "react-redux";
import { Header } from "./sections/header/Header";
import { Top } from "./sections/top/Top";
import "./App.scss";
import { Middle } from "./sections/middle/Middle";
import { Main } from "./sections/main/Main";
import { Modal } from "./components/modal/Modal";
import { Overlay } from "./components/overlay/Overlay";

function App() {
  const { menuActive,modal } = useSelector((state: any) => state.toggle);
  return (
    <main className={`main ${(menuActive && "active") || ""}`}>
     {menuActive && <Overlay/>}
     {modal && <Overlay/>}

      {modal &&  <Modal/>}
     
      <Header />
      <Top showMenu={menuActive} />
      <Middle/>
      <Main/>
    </main>
  );
}

export default App;
