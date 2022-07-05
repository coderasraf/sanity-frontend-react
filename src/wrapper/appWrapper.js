import React from 'react'
import {SocialMedia, NavigationsDots } from '../components'

const appWrapper = (Component, idName, classNames) => function HOC() {

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

  return (
    <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia/>
        <div className='app__wrapper app__flex'>
            <Component/>

            <div className='copyright'>
                <p className='p-text'>&copy; {today} Hass Asraf</p>
                <p className='p-text'>All Rights Reserved</p>
            </div>
        </div>
        <NavigationsDots active={idName} />
    </div>
  )
}

export default appWrapper