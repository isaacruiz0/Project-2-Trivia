import './App.css';
// Component Imports
import Category from './Category Components/Category';
import GenKnoDiff from './Category Components/GenKnoDiff';
import EasyQuestions from './Category Components/EasyQuestions';
import Header from './Category Components/Header';
import Footer from './Category Components/Footer';
// Router Imports
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
      <Header />

        <Routes>
          <Route path="/" element = {<Category />} />
          <Route path="/Difficulty" element = {<GenKnoDiff />} />
          <Route path="/Questions" element = {<EasyQuestions />} />
        </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
