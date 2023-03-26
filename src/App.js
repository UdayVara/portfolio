
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Porfolio from './Components/Porfolio';
import Skills from './Components/Skills';
import './index.css';

function App() {
  return (
      <>
          <Navbar name="Uday Vara"/>
          <Home />
          <About />
          <Skills />
          <Porfolio />
          <Contact />
      </>
  );
}

export default App;




