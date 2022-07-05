import React, {useEffect, useState} from 'react'
import { motion } from 'framer-motion'
import './About.scss'
import { appWrapper } from '../../wrapper'
import {images} from '../../constants'


const abouts = [
  {title:'Web Development', desc: 'This is our frontend development service', imgURL: images.about01},
  {title:'Frontend Development', desc: 'This is our frontend development service', imgURL: images.about02},
  {title:'Backend Development', desc: 'This is our frontend development service', imgURL: images.about03},
  {title:'MERN Development', desc: 'This is our frontend development service', imgURL: images.about04}
  
]


const About = () => {
  
  return (
     <>
      <h2 className='head-text'>
        I know that 
        <span> Good Development</span> <br />
        Means <span> Good Business</span>
      </h2>
      <div className='app__profiles'>
      {abouts.map((about, index) =>(
          <motion.div
            whileInView={{opacity:1}}
            whileHover={{scale:1.1}}
            transition={{duration:0.5,type:'tween'}}
            key={about.title + index}
            className="app__profile-item">
              <img src={about.imgURL} alt={about.title} />
              <h2 className='bold-text' style={{marginTop:20}}>{ about.title }</h2>
              <p className='p-text'>{about.desc}</p>
          </motion.div>
        ))}
      </div>
     </>
  )
}

export default appWrapper(About, 'About')