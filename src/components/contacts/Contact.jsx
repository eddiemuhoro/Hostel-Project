import { Call, Mail, Map, Timelapse, TimeToLeave } from '@material-ui/icons'
import React from 'react'
import { Button, FormControl, Input, TextField } from '@material-ui/core'
import  { useState } from 'react'
import axios from 'axios'


const Contact = () => {
 

    const data=[
        {
            icon: <Call />,
            title: 'Call Us',
            desc: '+1 234 56 784 345',
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

//     const [postMessage, setPostMessage] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         message: ''
// })

// const handleSubmit = (e)=>{
//     e.preventDefault();
//     const newUser= {
//         name: postMessage.name,
//         email: postMessage.email,
//         phone: postMessage.phone,
//         message: postMessage.message
//     }
//     axios.post('https://localhost:5000/users/new', newUser)
// }

const [postUser, setpostUser]= useState({
    name:'',
    email:'',
    phone:'',
    message:''
  })



  const handleClick= (e)=>{
        e.preventDefault()
        const newPost={
        name: postUser.name,
        email: postUser.email,
        phone: postUser.phone,
        message: postUser.message

      }
      console.log(newPost);
      
    //   axios.post('http://localhost:5000/users/new', newPost)
    setpostUser({
        name:'',
    email:'',
    phone:'',
    message:''
    })
    alert('message sent')
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
                             value={postUser.name}
                             placeholder='enter name'
                             onChange = {(e)=> setpostUser({...postUser, name: e.target.value})}
                           
                             />
                            <TextField className='form-input contact-input'
                             margin='dense'
                             label='email'
                             type='email'
                             title='name'
                             color='secondary'
                             variant='outlined'
                             placeholder='enter email'
                             value={postUser.email}
                             onChange = {(e)=> setpostUser({...postUser,email: e.target.value})}
                             />

                        <TextField className='form-input contact-input'
                             margin='dense'
                             label='phone'
                             type='number'
                             title='name'
                             color='secondary'
                             variant='outlined'
                             placeholder='enter phone number '
                             value={postUser.phone}
                             onChange = {(e)=> setpostUser({...postUser,phone: e.target.value})}
                          
                            
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
                                value={postUser.message}
                                onChange = {(e)=> setpostUser({...postUser,message: e.target.value})}
                                label='message' />

                            <Button onClick={handleClick} className='contact-button' variant='contained' color='secondary' type='submit'>Submit</Button>

                        </FormControl>


        </section>
    </div>
  )
}

export default Contact