import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Paintings from '../src/Components/Paintings/Paintings'
import Landing from '../src/Components/Landing/Landing'
import Biocv from '../src/Components/Biocv/Biocv'
import Contact from '../src/Components/Contact/Contact'
import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing/>}/>
        <Route exact path="/paintings" element={<Paintings/>}/>
        <Route exact path="/bio" element={<Biocv/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
