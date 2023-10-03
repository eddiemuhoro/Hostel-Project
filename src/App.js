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
import Colors from './components/tests/Colors';
function App() {
  return (
    <div className="App">
     <NavBar />
    <Colors />
     <Map/>
     <Footer />
    </div>
  );
}

export default App;
