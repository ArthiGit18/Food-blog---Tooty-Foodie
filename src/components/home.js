import React from 'react';
import Hero from '../pages/hero';
import { Navbar } from '../pages/navbar';
import { Trending } from '../pages/trending';
import { American } from '../pages/american';
import { Indian } from '../pages/indian';
import Video from '../pages/video';
import { Feedback } from '../pages/feedback';
import { Subscribe } from '../pages/subscribe';
import { Footer } from '../pages/footer';
import Copyright from '../pages/copyright';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Trending />
      <American />
      <Indian />
      <Video />
      <Feedback />
      <Subscribe />
      <Footer />
      <Copyright />
      {/* <a href="/hero">Go to Hero</a> */}
    </div>
  );
};

export default Home;
