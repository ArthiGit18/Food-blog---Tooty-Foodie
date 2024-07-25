import React from 'react';
import { Navbar } from './navbar';

const About = () => {


  return (
    <div>
      <Navbar />
      <div className='container'>
        <div className=' about-wrapper row'>
          <div className='about-img col-lg-6 d-grid'>
            <img src="" alt="My Image" />
          </div>
          <div className='about-content col-lg-6 d-grid'>
            <h2>Hi! I'm A.Arthi</h2>
            <p>Officia consectetur enim dolore dolor culpa tempor aliquip magna pariatur eiusmod non. Labore consectetur adipisicing nostrud Lorem exercitation fugiat commodo id. Velit sit ad et voluptate commodo. Voluptate ad nulla veniam nostrud anim ullamco dolore sit. Incididunt culpa deserunt deserunt elit incididunt ea aliqua culpa officia. Magna dolor aute sunt dolore cillum et duis minim. Non reprehenderit qui ea commodo deserunt labore ut sit consequat sint sint minim.</p>
          </div>
        </div>

        <div className='about-contact row'>
          <div className='col-lg-4'>
            <h4>Phone Num</h4>
            <p>0000000</p>
          </div>
          <div className='col-lg-4'>
            <h4>Phone Num</h4>
            <p>0000000</p>
          </div>
          <div className='col-lg-4'>
            <h4>Phone Num</h4>
            <p>0000000</p>
          </div>
        </div>

        <div className="about-quote my-5">
          <h4>Get a Quote</h4>
          <div className="col-lg-12">
            <form>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Your Name" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="Your Email" />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input type="tel" className="form-control" id="phone" placeholder="Your Phone Number" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="3" placeholder="Your Message"></textarea>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
