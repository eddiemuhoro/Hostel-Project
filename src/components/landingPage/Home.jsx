import { Button } from '@material-ui/core'
import React from 'react'

const Home = () => {
  return (
    <div>
        <main className='hero-wrapper'>
            <section className='hero-top'>
                <div className='hero-top-left'>
                    <h2>Sunrise Hostels</h2>
                </div>
                <div className='hero-top-right'>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Rooms</li>
                        <li>Gallery</li>
                    </ul>
                </div>
            </section>

            <section  className='hero-bottom'>
                <div>
                    <h2>Hostel Rooms With</h2>
                    <p>Finest Amenities</p>
                    <Button variant='contained' color='secondary' >Enquire Now</Button>
                </div>
            </section>
        </main>
    </div>
  )
}

export default Home