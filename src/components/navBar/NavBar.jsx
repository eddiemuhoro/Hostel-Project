import { Instagram, LinkedIn, LocationCityRounded, LocationOn, Twitter, WhatsApp } from '@material-ui/icons'
import React from 'react'

const NavBar = () => {
  return (
    <div>
        <nav className='navBar-wrapper'>
            <section className='social-media-icons'>
                <div className='sm-icons'>
                    <WhatsApp/>
                    <Instagram/>
                    <Twitter/>
                    <LinkedIn/>
                </div>
            </section>
            <section className='log-in'>
                <div className='location'><LocationOn/> Nyeri</div>
            </section>
        </nav>
    </div>
  )
}

export default NavBar