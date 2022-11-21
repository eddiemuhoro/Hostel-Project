import React from 'react'

const Map = () => {
  return (
    <div className='map-wrapper'>
        <h3>Directions</h3>
        <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=sunrise%20hostels&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" title='sunrise'></iframe>
    </div>
  )
}

export default Map