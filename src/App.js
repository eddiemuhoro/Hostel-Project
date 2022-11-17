import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar/NavBar';
import Home from './components/landingPage/Home';
import Services from './components/Services/Services';
import About from './components/about/About';
import Gallery from './components/gallery/Gallery';
import Contact from './components/contacts/Contact';

function App() {
  return (
    <div className="App">
     <NavBar />
     <Home  />
     <Services/>
     <About />
     <Gallery />

     <Contact />
    </div>
  );
}

export default App;
