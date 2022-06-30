
import './Header.scss'
import {motion} from 'framer-motion'
import {images} from '../../constants'
import './Header.scss'

const Header = () => {


const scaleVariants = {
  whileInView:{
    scale: [0,1],
    opacity:[0,1],
    transition:{
      duration:1,
      ease:'easeInOut'
    }
  }
}
  
  return (
    <div id='home' className='app__header app__flex '>
        <motion.div
          whileInView={{x:[-100,0],opacity:[0,1]}}
          transition={{duration:2 }}
          className="app__header-info">
            <div className='app__header-badge badge'>
                <div className='app__flex badge-cmp'>
                  <span>
                  👋
                  </span>
                  <div style={{marginLeft:'30px'}}>
                    <p className='p-text'>Hello, I'am</p>
                    <h1 className='head-text'>Asraf</h1>
                  </div>
                </div>

                <div className='tag-cmp app__flex'>
                  <p className='p-text'>Web Developer</p>
                  <p className='p-text'>Frelancer</p>
                </div>
            </div>
            
        </motion.div>

        <motion.div
          whileInView={{opacity:[0,1]}}
          transition={{ duration: .5, delayChildren:.5 }}
          className="app__header-img">
            <img src={images.profile}  alt="Hass Asraf"/>

          <motion.img
            whileInView={{scale:[0,1]}}
            transition={{duration:1, ease: 'easeInOut'}}
            src={images.circle} 
            className="overlay-circle"
          >

          </motion.img>

        </motion.div>

        <motion.div
          variant={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="app__header-circles">
          {[images.flutter,images.redux,images.sass].map((circle,index) =>{
            return <div className='circle-cmp app__flex' key={`circle${index}`}>
            <img src={circle} />
          </div>
          })}
        </motion.div>


    </div>
  )
}

export default Header