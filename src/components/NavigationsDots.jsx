import React from 'react'

const NavigationsDots = ({active}) => {
  return (
    <div className='app__navigation'>
        {['Home','About','Contact', 'Projects','Skill', 'Work'].map((item, index) =>{
          return  <a 
          key={index} 
        //   onClick={()=> setToggle(false)} 
          className="app__navigation-dot"
          style={active === item ? {backgroundColor:'#313BAC'} : {}}
          href={`#${item}`}> </a>
        })}
    </div>
  )
}

export default NavigationsDots