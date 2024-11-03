import React from 'react'
import "../../css/Home.css"
import Social from './Social'
import Data from './Data'
import Img from '../../assets/noBackgrnd.png';

function Home() {
  return (
    <section className="home section" id="home">
        <div className="home__container container grid">
            <div className="home__content grid">
                <Social/>
                <div className="home__data">
                    <Data/>
                </div>
                <div className="home__image">
            <img 
              src={Img} 
              alt="Random" 
              className="home__img" 
            />
          </div>
            </div>
        </div>
    </section>
  )
}

export default Home