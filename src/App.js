import Router from "./Router";
import './styles/App.scss'
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from "./components/Home/Home";
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
