import React from 'react'
import danielBio from '../imgs/daniel.jpg'
import dariusBio from '../imgs/darius.jpg'
import mikaBio from '../imgs/mika.jpg'
import kaneiBio from '../imgs/kanei.jpg'

function Reference() {
  return (
    <main>
      <h1 className='title'>REFERENCE</h1>
      <div className='references'>

        <div className='reference'>
          <div>
            <img src={danielBio} className='bio-img' alt='bio-img'></img>
          </div>
          <div className='bio'>
            <h3 className='bio-name'>Daniel Campbel</h3>
            <h4 className='bio-title'>Web Developer/Artist</h4>
            <p className='bio-text'>"Working with Chiaki was a pleasure. She learned new skills very quickly and was always a joy to collaborate with. I'd work with her anytime."</p>
          </div>
        </div>

        <div className='reference'>
          <div>
            <img src={dariusBio} className='bio-img' alt='bio-img'></img>
          </div>
          <div className='bio'>
            <h3 className='bio-name'>Darius Maze</h3>
            <h4 className='bio-title'>VJLS-JH<br></br>Excective Director</h4>
            <p className='bio-text'>“Chiaki was a fantastic member of the team at VJLS-JH and helped us to develop a strong, consistent visual and brand identity for the organization. They were very collaborative and well organized as they developed all of our marketing materials, including a new website refresh that brought improvements to accessibility, navigation, and customer engagement. I look forward to working with them again in the future and highly recommend them as a communications professional and web developer.”</p>
          </div>
        </div>

        <div className='reference'>
          <div>
            <img src={mikaBio} className='bio-img' alt='bio-img'></img>
          </div>
          <div className='bio'>
            <h3 className='bio-name'>Mika Embury</h3>
            <h4 className='bio-title'>VJLS-JH<br></br>People and Culture Coordinator</h4>
            <p className='bio-text'>"I loved working with Chiaki! She is hardworking, reliable, and fun. She brings her unique, international, multicultural experience to the workplace, greatly benefiting our organizational culture. Chiaki was also key in developing and launching our new website, bringing a ton of positive attention to our organization and programs!"</p>
          </div>
        </div>

        <div className='reference'>
          <div>
            <img src={kaneiBio} className='bio-img' alt='bio-img'></img>
          </div>
          <div className='bio'>
            <h3 className='bio-name'>Kanei Ou</h3>
            <h4 className='bio-title'>VJLS-JH<br></br>Accounting Coordinator</h4>
            <p className='bio-text'>“I worked with Chiaki for about a year and I witnessed her single-handedly launching our organization's new website. Through the project, she demonstrated her good sense of color and strong communication skills with third-party developers. She's easy to talk to and a true team player. “</p>
          </div>
        </div>



      </div>
    </main>
  )
}

export default Reference
