import './App.css';
import { NavBar } from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './Components/Banner';
import { Skills } from './Components/Skills';
import { Project } from './Components/Project';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';
import { Newsletter } from './Components/Newsletter';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Project />
      <Contact />
      {/* <Newsletter /> */}
      <Footer />
    </div>
  );
}

export default App;
