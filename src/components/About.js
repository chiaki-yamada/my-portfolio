import React from 'react'
import htmlIcon from '../imgs/html.svg'
import cssIcon from '../imgs/css.svg'
import javascriptIcon from '../imgs/javascript.svg'
import reactIcon from '../imgs/react.svg'
import bootstrapIcon from '../imgs/bootstrap.svg'
import figmaIcon from '../imgs/figma.svg'
import wordpressIcon from '../imgs/wordpress.svg'
import photoshopIcon from '../imgs/photoshop.svg'

function About() {
  return (
    <main>
      <h1 className='title'>ABOUT</h1>
      <div className="about-container">       
        <h2>Konnichiwa!</h2>
        <p>Hi I’m Chiaki, a self-taught web developer with a passion for creating intuitive and functional websites.</p> 
        <p>My coding journey began when I was in my previous role as a communications coordinator. I had the opportunity to work with a front-end developer to build and design a new website from the ground up tailored to the needs of the organization. Watching the site take shape was very exciting, and it left me with a burning desire to learn more about web development. <br></br>Since then, I started taking courses to gain the skills necessary to create a website on my own and have been studying at every chance I got. Recently, I completed <a href='https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/71780354' target="_blank" rel="noreferrer">a formal degree</a> in front-end web development.</p>
        <p>I believe my previouse role in creating social media, newsletters, and website posts also helped me home in on my eye for design and creative abilities. </p>
        <p>I’m excited to continue learning and growing as a front-end developer and look forward to contributing to exciting projects in the future!</p>
      
      </div>

      <div className="skills-container">
        <h2>Skills</h2>
        <ul>
          <li>Proficient with HTML, CSS, JavaScript, React, Bootstrap</li>
          <li>Creating responsive design and mobile-first websites</li>
          <li>Building applications using API data</li>
          <li>Utilizing AI tools such as GitHub Copilot </li>
          <li>Proficient with WordPress to manage website</li>
          <li>Designing mockups and wireframes with Figma</li>
          <li>Creating and editing images with Photoshop</li>
        </ul>
        <div className='skills-icon'>
          <img src={htmlIcon} className='icon' alt='html-icon'></img>
          <img src={cssIcon} className='icon' alt='css-icon'></img>
          <img src={javascriptIcon} className='icon' alt='javascript-icon'></img>
          <img src={reactIcon} className='icon' alt='react-icon'></img>
          <img src={bootstrapIcon} className='icon' alt='bootstrap-icon'></img>
          <img src={wordpressIcon} className='icon' alt='wordpress-icon'></img>
          <img src={figmaIcon} className='icon' alt='figma-icon'></img>
          <img src={photoshopIcon} className='icon' alt='photoshop-icon'></img>
          
        </div>
      </div>

      <div className="work-container">
        <h2>Experience</h2>

        <div className='work-experience'>
          <div className='work-title'>
            <h3>Communications Coordinator</h3>
            <p>Vancouver Japanese Language School and Japanese Hall, Vancouver, Canada<br></br>2022 Jun- 2023 Mar</p>
          </div>
          <div className='work-desc'>
            <p>Lead a new website launch project for a 110+ year old organization that provides day care, Japanese programs from children to adults and community events. After the new website went live, I was fully responsible for updating and maintaining the site using WordPress. I was also responsible for designing and creating social media posts, monthly e-newsletters, as well as creating posters for internal and external distribution to expand the organization's programs and activities. </p>
          </div>
        </div>

        <div className='work-experience'>
          <div className='work-title'>
            <h3>Translator/Administrator</h3>
            <p>Vancouver Japanese Language School and Japanese Hall, Vancouver, Canada<br></br>2021 Apr- 2022 May</p>
          </div>
          <div className='work-desc'>
            <p>In charge of translating internal and external letters, website contents, articles for e-newsletter and social media from English to Japanese and vice versa, as well as administrative tasks such as managing registrations closely working with manager and accountant.</p>
          </div>
        </div>

        <div className='work-experience'>
          <div className='work-title'>
            <h3>Public Servant -Public School Administration</h3>
            <p>Yamatsuri Junior High School, Fukushima, Japan<br></br>2009 Apr - 2013 Mar</p>
            <p>Tominari Elementary School, Fukushima, Japan<br></br>2013 Apr - 2018 Mar</p>
          </div>
          <div className='work-desc'>
            <p>In charge of a wide range of duties for public schools with around 30 teachers and 200 students. Fully responsible for financial accounting and budget management and acting as the first point of contact for the school board, students’ guardians as well as visitors.</p>
          </div>
        </div>
      </div>

    </main>
  )
}

export default About;