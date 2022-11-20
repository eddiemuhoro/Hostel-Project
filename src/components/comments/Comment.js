import { LinkedIn, Twitter, WhatsApp } from '@material-ui/icons'

import React, { useEffect, useState } from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

//

const Comments = () => {
const data =[
    {
        id:1,
        name:'Eddie',
        image:'https://ca-times.brightspotcdn.com/dims4/default/83de13e/2147483647/strip/true/crop/2000x2706+0+0/resize/1200x1624!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fff%2F2c%2Fdedf568e4af087cab5f0a5c76f32%2Fla-ca-bk-a-promised-land-barack-obama-183.JPG'

    },
    {
        id:2,
        name:'Chris',
        image: 'https://ca-times.brightspotcdn.com/dims4/default/83de13e/2147483647/strip/true/crop/2000x2706+0+0/resize/1200x1624!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fff%2F2c%2Fdedf568e4af087cab5f0a5c76f32%2Fla-ca-bk-a-promised-land-barack-obama-183.JPG'
    },
    {
        id:3,
        name:'Lucy',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEe_DKw0krRFuEVTnd8H4pmJLdyV0dz6nnEA&usqp=CAU'

    },
    {
        id:4,
        name:'Kevin',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1O0tby9LLwTrZgve9pxNMH6EDo1w3xPsyklXYu87srpgSuF6c3rbGeoTyeixfqTL_I3g&usqp=CAU'
    }
]
   
  return (
    <div className='content-wrapper'>
    <h2>What People Say</h2>
    <hr className='hr-line'></hr>
        <Slide>
            {data.map((item, index) => (
                  <div className='comment-info' key={item.id}>
                    <div className='comment-image'>
                        <img src={item.image} alt='comment' />
                    </div>
                    <div className='comment-text'>
                        <h4>{item.name}</h4>
                        <p>" Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. "</p>
                    </div>
                  </div>
            ))}
      
        </Slide>
      
    </div>
  )
}

export default Comments