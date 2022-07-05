import React,{useEffect, useState} from 'react'
import {aiFilleye, aiFillGithub} from 'react-icons/ai'
import { motion } from 'framer-motion'
import {appWrapper} from '../../wrapper'
import './Work.scss'

const Work = () => {

  const {activeFilter, setActiveFilter} = useState('')


  const handleWorkFilter = (item)=>{
      setActiveFilter(item)
  }

  return (
    <>
      <h2 className='head-text'>
        Our  
        <span> Portfolio !</span> 
      </h2>
      <div className='app__work-filters'>
        {['ALL','UI/UX','Shopify Development', 'Frontend Development', 'Backend Development', 'FullStack Development'].map((category, index) => (
          <div
            key={index}
            onClick={()=>handleWorkFilter(category)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === category ? 'item-active' : ''}`}
          >{category}</div>
        ))}
      </div>
    </>
  )
}

export default appWrapper(Work, 'Work')