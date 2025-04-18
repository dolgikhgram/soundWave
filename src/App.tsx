import styles from "./App.module.css";
import Header from "./Components/Header/Header.tsx";
import MainMenu from "./Components/Content/MainMenu/MainMenu.tsx";
import Opportunities from "./Components/Content/Opportunities/Opportunities.tsx";
import Tariff from "./Components/Content/Tariff/Tariff.tsx";
import Questions from "./Components/Content/Questions/Questions.tsx";
import Footer from "./Components/Footer/Footer.tsx";
function App() {

  return (
    <div className={styles.content}>
        <Header/>
        <MainMenu/>
        <Opportunities/>
        <Tariff/>
        <Questions/>
        <Footer/>
    </div>
  )
}

export default App
