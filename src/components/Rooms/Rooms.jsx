import React from 'react'

const Rooms = () => {
    const rooms=[
        {
            id:1,
            image:'https://preview.colorlib.com/theme/suites/images/img_1.jpg',
            title:'Single Room',
            price: 100,
        },
        {
            id:2,
            image:'https://preview.colorlib.com/theme/suites/images/img_2.jpg',
            title:'Double Room',
            price: 200,
        },
        {
            id:3,
            image:'https://preview.colorlib.com/theme/suites/images/img_3.jpg',
            title:'Family Room',
            price: 300,
        },
        {
            id:4,
            image:'https://preview.colorlib.com/theme/suites/images/img_3.jpg',
            title:'Presidential Room',
            price: 400,
        },
        {
            id:5,
            image:'https://image2.jdomni.in/banner/08092022/B1/FD/19/DD68A6755890A45A095FB0A43E_1662655988317.jpg?output-format=webp',
            title:'Deluxe Room',
            price: 500,
        },
        
    ]
  return (
    <>
    <h2>Rooms</h2>
    <div className='room-wrapper'>
      
        {rooms.map(room => (
            <div className='room' key={room.id}>
                <img src={room.image} alt={room.id} />
                <div className='room-info'>
                    <h4>{room.title}</h4>
                    <p>${room.price}</p>
                </div>
            </div>  
        ))}
    </div>
    </>
  )
}

export default Rooms