import React from 'react';
import profileImg from '../imgs/bio2.jpg';


const Home = () => {
  return (
    <main>
      <div className="text-container">
        <div className='main-title-container'>
          <div className='main-title-container__line'>
            <h1 class="typewriter-text">CHIAKI</h1>
          </div>
          
         
          <p className='main-title'>A Front-End Developer</p>
          <p className='main-desc'>Hi! I’m Chiaki Yamada, a self-taught web developer with a passion for creating intuitive and functional websites and applications.  <br></br>
          I’m excited to continue learning and growing as a front-end developer and look forward to contributing to exciting projects in the future!
          </p>
        </div>
        <div className='main-img-container'>
          <img src={profileImg} className='main-img' alt='main-img'></img>
        </div>
      </div>
    </main>

  )
}
export default Home;
