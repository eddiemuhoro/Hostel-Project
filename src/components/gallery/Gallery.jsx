import React from 'react'

const Gallery = () => {
    const photos=[
        {
            id:1,
            image:'https://image3.jdomni.in/banner/20092022/BE/45/D1/A95FF037C8F573233238821878_1663651343630.jpg?output-format=webp'
        },
        {
            id:2,
            image:'https://image2.jdomni.in/banner/08092022/EA/37/D7/8A26A2A55071298C594C86CCAA_1662655988907.jpg?output-format=webp'
        },
        {
            id:3,
            image:'https://image2.jdomni.in/banner/08092022/B1/FD/19/DD68A6755890A45A095FB0A43E_1662655988317.jpg?output-format=webp'
        },
        {
            id:4,
            image:'https://image2.jdomni.in/banner/08092022/EA/37/D7/8A26A2A55071298C594C86CCAA_1662655988907.jpg?output-format=webp'
        },
        {
            id:5,
            image:'https://image2.jdomni.in/banner/08092022/B1/FD/19/DD68A6755890A45A095FB0A43E_1662655988317.jpg?output-format=webp'
        },
    ]
  return (
    <div>
        <main className='gallery-wrapper'>
            <h2>Gallery</h2>
            <section className='gallery'>
                {photos.map(photo => (
                    <div className='photo' key={photo.id}>
                        <img src={photo.image} alt={photo.id} />
                    <div className='hover-text'>
                        <h4>Hover text</h4>
                        <p>Lorem ipsum dolor sit amet consectetur </p>
                    </div>
                    </div>
                ))}
            </section>
        </main>
    </div>
  )
}

export default Gallery