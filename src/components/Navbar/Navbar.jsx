import React, { useState } from 'react'
import {HiMenuAlt4, HiX } from 'react-icons/hi'
import { images } from '../../constants'
import {motion} from 'framer-motion'
import './Navbar.scss'

const Navbar = () => {

const [toggle, setToggle] = useState(false)

  return (
    <nav className='app__navbar'>

      <div className='app__navbar-logo'>
          <img src={images.logo} />
      </div>

      <ul className='app__navbar-links'>
        {['Home','About','Contact', 'Projects','Skill', 'Work'].map((item) =>{
          return <li className='app__flex p-text' key={`link-${item}`}>
            <div/>
            <a href={`#${item}`}>{item}</a>
          </li>
        })}
      </ul>

      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setToggle(!toggle)} />
        {toggle && (
            <motion.div
              whileInView={{x:[300,0]}}
              transition={{duration:0.85,ease:'easeInOut'}}>

              <HiX onClick={() => setToggle(false)} />
              {['Home','About','Contact', 'Projects','Skill', 'Work'].map((item) =>{
                  return <li key={item}>
                    <div/>
                    <a href={`#${item}`}>{item}</a>
                  </li>
                })}

            </motion.div>
          )
        }
      </div>

    </nav>
  )
}

export default Navbar