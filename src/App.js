import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Partner from "./components/Partners/Partner";
import Popular from './components/Popular/Popular';
import Featured from "./components/Featured/Featured";
import Get from './components/Get/Get';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Partner />
      <Popular />
      <Featured />
      <Get/>
      <Footer/>
    </div>
  );
}

export default App;
