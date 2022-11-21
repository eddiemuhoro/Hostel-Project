import './App.css';
import NavBar from './components/navBar/NavBar';
import Home from './components/landingPage/Home';
import Services from './components/Services/Services';
import About from './components/about/About';
import Gallery from './components/gallery/Gallery';
import Contact from './components/contacts/Contact';
import Map from './components/Map';
import Footer from './components/Footer/Jfooter';
import Comment from './components/comments/Comment';
import Rooms from './components/Rooms/Rooms';
function App() {
  return (
    <div className="App">
     <NavBar />
     <Home  />
     <Services/>
     <About />
     <Gallery />
     <Rooms />
      <Comment />
     <Contact />
     <Map/>
     <Footer />
    </div>
  );
}

export default App;
