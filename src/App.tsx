import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { MyWorks } from "./components/myworks/MyWorks";
import { Skils } from "./components/skils/Skils";
import s from './components/header/Header.module.css'
import { DownBack } from "./components/downback/DownBack";

function App() {
  return (
    <div className={s.App}>
      <Header />
      <Main />
      <Skils />
      <MyWorks/>
      <DownBack/>
    </div>
  );
}

export default App;
