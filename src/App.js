import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Main from './components/main';
import About from './components/about'
import Recipes from './components/recipes';
import Nonveg from './components/recipeMenu/nonVeg';
import Veg from './components/recipeMenu/veg';

function App() {
  return (
    <Router>
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/hero" element={<Hero />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipe/nonVeg" element={<Nonveg />} />
          <Route path="/recipe/veg" element={<Veg />} />
        </Routes>
      </Main>
    </Router>
  );
}

export default App;
