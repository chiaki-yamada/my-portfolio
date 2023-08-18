import React from 'react'
import schoolWebsite from '../imgs/vjls-jh.jpg'
import movieWatchlist from '../imgs/movie-watchlist.jpg'
import recipeApp from '../imgs/recipe.jpg'
import bestGourmetWebsite from '../imgs/best-gourmet.jpg'
import ecSite from '../imgs/ecsite.jpg'


function Works() {
  return (
    <main>
      <h1 className='title'>WORKS</h1>
      <p className='works-intro'>Here are some of my works in web design and front-end development focusing on user-friendly design.</p>

      <div className='works-container'>
        <div className='work'>
          <img src={schoolWebsite} className='work-img' alt='work-img'></img>
          <h3 className='site-title'>School Website</h3>
          <p className='site-desc'>Explore the WordPress website that I helped design, focusing on consistency and a well-structured layout, while also creating engaging content. This mobile-friendly website offers easy navigation and provides an enjoyable browsing experience.</p>
          <a href='https://vjls-jh.com/' className='btn' target="_blank" rel="noreferrer">See the site</a>  
        </div>

        <div className='work'>
          <img src={bestGourmetWebsite} className='work-img' alt='work-img'></img>
          <h3 className='site-title'>Company Website</h3>
          <p className='site-desc'>Explore the sample website of an actual coffee company based in BC that I redesigned and rebuilt using WordPress. I aimed to create a modern, simple, and easy-to-navigate site that effectively showcases the company's unique points and features.</p>
          <a href='https://best-gourmet-coffee.netlify.app' className='btn coffee-btn' target="_blank" rel="noreferrer">See the site</a>
          <a href='https://drive.google.com/file/d/15nCqZB0VfOOUNYu3wb-lwIM0uo1dMA_p/view?usp=sharing' className='btn coffee-btn' target="_blank" rel="noreferrer">Project</a>
        </div>

        <div className='work'>
          <img src={ecSite} className='work-img' alt='work-img'></img>
          <h3 className='site-title'>E-Commerce Website</h3>
          <p className='site-desc'>Explore the sample website of an actual coffee company based in BC that I redesigned and rebuilt using WordPress. I aimed to create a modern, simple, and easy-to-navigate site that effectively showcases the company's unique points and features.</p>
          <a href='https://cplusgear.chiakiy.com/' className='btn coffee-btn' target="_blank" rel="noreferrer">See the site</a>
          <a href='https://drive.google.com/file/d/15nCqZB0VfOOUNYu3wb-lwIM0uo1dMA_p/view?usp=sharing' className='btn coffee-btn' target="_blank" rel="noreferrer">Project</a>
        </div>

        <div className='work'>
          <img src={movieWatchlist} className='work-img' alt='work-img'></img>
          <h3 className='site-title'>Movie Watchlist</h3>
          <p className='site-desc'>Check out my React-based movie watchlist using API data, where you can serch your favorite films and save them to your list for future viewing!</p>
          <a href='https://movie-watchlist-cy.netlify.app' className='btn' target="_blank" rel="noreferrer">See the site</a>
        </div>

        <div className='work'>
          <img src={recipeApp} className='work-img' alt='work-img'></img>
          <h3 className='site-title'>Recipe App</h3>
          <p className='site-desc'>Check my recipe app designed for me and my partner as an international couple and vegetable lover! Easy to find our favorites and get ingredients and instructions without reading long summaries commonly found on recipe websites!</p>
          <a href='https://foodie-recipe-cy.netlify.app' className='btn' target="_blank" rel="noreferrer">See the site</a>
        </div>

        

      </div>
    </main>
  )
}

export default Works;