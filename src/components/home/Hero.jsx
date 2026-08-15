import React from 'react'

const Hero = () => {
  return (
    <>
      <div className="content">
        <h1 className="title">
          <span className='build'>Build.</span>
          <span className='grow'>Grow.</span>
          <span className='transform'>Transform.</span>
        </h1>
        <p className="subtitle">Powerful web, app & marketing solutions designed to help businesses grow online.</p>
        <div className="hero-buttons">
          <button className="btn btn-primary">Get Free Consultation</button>
          <button className="btn btn-secondary">Services</button>
        </div>
      </div>
    </>
  );
};

export default Hero;