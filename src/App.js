import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FavoritePage from './Favorite/FavoritePage';
import Home from './Home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorite" element={<FavoritePage />}/>
      </Routes>
    </Router>
  );
}

export default App;
