import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { MyWorks } from "./components/myworks/MyWorks";
import { Skils } from "./components/skils/Skils";
import s from './components/header/Header.module.css'

function App() {
  return (
    <div className={s.App}>
      <Header />
      <Main />
      <Skils />
      <MyWorks/>
      <div>Block1</div>
      <div>Block2</div>
      <div>Block3</div>
      <div>Block4</div>
      <div>Block5</div>
      <div>Footer</div>
    </div>
  );
}

export default App;
