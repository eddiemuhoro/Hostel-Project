import React, { useState } from 'react'
import PopUp from '../popup/PopUp'

const Services = () => {
    const services = [
        {
            id: 1,
            title: 'Free Wifi',
            image: 'https://image3.jdomni.in/banner/20092022/81/F8/31/CE1D8C8ADB199BCFAABD8F466B_1663648875877.jpg?output-format=webp',
            desc: 'We provide fully furnished rooms with quality mattresses, tables, closets and other required facilities.'
        },
        {
            id: 2,
            title: 'Rooms',
            image: 'https://image3.jdomni.in/banner/20092022/67/49/D0/5BF5A06C168D011476E31E7EB5_1663648835023.jpg?output-format=webp',
            desc: 'We provide fully furnished rooms with quality mattresses, tables, closets and other required facilities.'
        },
        {
            id:3,
            title: 'Canteen',
            image: 'https://image2.jdomni.in/banner/08092022/E8/7A/A8/44CD7F40771157BDD7B39BF61D_1662654022495.jpg?output-format=webp',
            desc: 'We cater to your food requirements as well. We provide breakfast, lunch & dinner services in our canteen.'
        },
        {
            id: 4,
            title: 'Housekeeping',
            image: 'https://image2.jdomni.in/banner/20092022/F9/85/00/380C7FABA81C59FF0F1089DA0D_1663648922319.jpg?output-format=webp',
            desc: 'We also provide housekeeping services like laundry, dish cleaning and room cleaning based on requirements.'

        },
        {
            id: 5,
            title: 'Security',
            image: 'https://image3.jdomni.in/banner/20092022/17/C8/2F/8C5B6A0685C5526D1289B00CA9_1663651098089.png?output-format=webp',
            desc: "Depending on the purpose of keeping a close watch on the visitors and passersby we provide efficient watchmen."
        },
        {
            id: 6,
            title: 'Parking',
            image: 'https://image3.jdomni.in/banner/20092022/67/49/D0/5BF5A06C168D011476E31E7EB5_1663648835023.jpg?output-format=webp',
            desc: 'We provide parking facilities for your vehicles. We have a parking space for 2 wheelers and 4 wheelers.'
        }
    ]

    const [name, setName] = useState('')
  return (
    <div>
        <h2>Services</h2>
        <section className='services-wrapper'>
            {services.map((service) => (
                <div className='service' key={service.id}>
                    <h1>{service.title}</h1>
                    <img src={service.image} alt={service.title} />
                    <p>{service.desc}</p>

                  <PopUp/>
                </div>
            ))}
        </section>
        
    </div>
  )
}

export default Services