import React from 'react'
import schoolWebsite from '../imgs/vjls-jh.jpg'
import movieWatchlist from '../imgs/movie-watchlist.jpg'

function Works() {
  return (
    <main>
      <h1 className='title'>WORKS</h1>
      <p className='works-intro'>Here are some of my works in web design and front-end development focusing on user-friendly design.</p>

      <div className='works-container'>
        <div className='work'>
          <img src={schoolWebsite} className='work-img' alt='work-img'></img>
          <h3 className='site-title'>School Website</h3>
          <p className='site-desc'>Explore the website that I helped design and created contents focusing on having a well-structured and mobile-friendly website that is easy to navigate.</p>
          <a href='https://vjls-jh.com/' className='btn' target="_blank" rel="noreferrer">See the site</a>
  
        </div>

        <div className='work'>
          <img src={movieWatchlist} className='work-img' alt='work-img'></img>
          <h3 className='site-title'>Movie Watchlist</h3>
          <p className='site-desc'>Check out my React-based movie watchlist using API data, where you can serch your favorite films and save them to your list for future viewing!</p>
          <a href='https://movie-watchlist-cy.netlify.app' className='btn' target="_blank" rel="noreferrer">See the site</a>
        </div>

        <div className='work'>
          <img src={movieWatchlist} className='work-img' alt='work-img'></img>
          <h3 className='site-title'>Movie Watchlist</h3>
          <p className='site-desc'>Check my recipe app designed for me and my partner as an international couple and vegetable lover! Easy to find our favorites and get ingredients and instructions without reading long summaries commonly found on recipe websites!</p>
          <a href='https://movie-watchlist-cy.netlify.app' className='btn' target="_blank" rel="noreferrer">See the site</a>
        </div>

      </div>
    </main>
  )
}

export default Works;