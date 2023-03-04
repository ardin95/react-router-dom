import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import { PrivateRoute } from './components/navigation';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/Notfound';

const App = () => {
  return (
    <>
    <Router>
      <Routes>
        {/* jikan salah */}
        <Route path='/home' element={<Home />} />

        {/* jika benar */}
        <Route exact path='/' element={<PrivateRoute />}>
        <Route path='/about/:username' element={<About />} />
        </Route>
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
