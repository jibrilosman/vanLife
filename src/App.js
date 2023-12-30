import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from  './pages/home/Home';
import About from './pages/about/About';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Layout />} >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
