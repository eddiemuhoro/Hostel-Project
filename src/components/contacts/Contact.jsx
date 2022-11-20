import { Call, Mail, Map, Timelapse, TimeToLeave } from '@material-ui/icons'
import React from 'react'
import { Button, FormControl, Input, TextField } from '@material-ui/core'
import  { useState } from 'react'
import axios from 'axios'


const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const data=[
        {
            icon: <Call />,
            title: 'Call Us',
            desc: '+1 234 56 78',
            color: 'primary'
        },
        {
            icon: <Mail />,
            title: "General Enquires",
            desc: 'contact@mysites.com'
        },
        {
            icon: <Map />,
            title: 'Our Office Address',
            desc: 'Nakuru East, Shabaab 409304'
        },
        {
            icon: <Timelapse />,
            title:'Our Timings',
            desc: 'Mon - Sun : 09:00 AM - 09:00 PM'
        }
    ]
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3306', name , email , phone , message)
        alert(`Name: ${name} Email: ${email} Phone: ${phone} Message: ${message}`)
    }

  return (
    <div>
        <section className='contact-details'>
            {data.map(item => (
                <div key={item.title} className='contact-item'>
                    <div className='contact-icon'>
                        {item.icon}
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                </div>
                
            ))}
        </section>
        <section className='contact-form'>

        <FormControl className='form-control contact-form-control'>
                            <TextField className='form-input contact-input'
                            variant ='outlined'
                             margin='dense'
                             type='text'
                             label='name'
                             title='name'
                             color='secondary'
                             value={name}
                             placeholder='enter name'
                                onChange={(e) => setName(e.target.value)}
                            //  value={name} 
                             />
                            <TextField className='form-input contact-input'
                             margin='dense'
                             label='email'
                             type='email'
                             title='name'
                             color='secondary'
                             variant='outlined'
                             placeholder='enter email'
                             value={email}
                             onChange={(e)=> setEmail(e.target.value)}
                             />

                        <TextField className='form-input contact-input'
                             margin='dense'
                             label='phone'
                             type='number'
                             title='name'
                             color='secondary'
                             variant='outlined'
                             placeholder='enter phone number '
                             value={phone}
                             onChange={(e)=> setPhone(e.target.value)}
                          
                            
                             >
                             </TextField>

                             <TextField className='form-input contact-input'
                              margin='dense'
                              variant='outlined'
                              placeholder='Type Message'
                              title='message'
                              color='secondary'
                              id="message" 
                              type='text' 
                              aria-describedby="my-helper-text"
                                value={message}
                                onChange={(e)=> setMessage(e.target.value)}
                              label='message' />

                            <Button onClick={handleSubmit} className='contact-button' variant='contained' color='secondary' type='submit'>Submit</Button>

                        </FormControl>


        </section>
    </div>
  )
}

export default Contact