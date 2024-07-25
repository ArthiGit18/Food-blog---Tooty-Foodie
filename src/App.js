import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Main from './components/main';
import About from './pages/about';

function App() {
  return (
    <Router>
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/hero" element={<Hero />} /> */}
          <Route path="/about" element={<About />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
        </Routes>
      </Main>
    </Router>
  );
}

export default App;
