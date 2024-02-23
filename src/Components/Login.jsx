import React from 'react'
import { Button, Input } from 'antd';
import { ConfigProvider } from 'antd'
import axios from 'axios'

import {useEffect, useState } from 'react'




const Login = () => {
  const[users ,setUsers]=useState([])
  const [uname,setUname]=useState("")
  const [pass,setPass]=useState("")

  useEffect(() => {
  axios.get('http://localhost:3001/getUSers')
  .then(users=> setUsers(users.data))
  .catch(err=>console.log(err))
  }, [users])

const [present,setPresent]=useState(false)


const f=()=>{
    for (let index = 0; index < users.length; index++) {
      
      if (users[index].username == uname && users[index].password == pass) {
        setPresent(true)
        alert("Loged in")
       
      }
      else{
        setPresent(false)

      }
    }
  
}


  return (
    <div>
         <ConfigProvider
    theme={{
      token: {
        // Seed Token
        colorPrimary: '#383838',
        borderRadius: 2,

        // Alias Token
        colorBgContainer: '#f6f6f6',
      },
    }}
  >
     <div className='flex flex-col md:flex-row items-center justify-center h-[100vh]'>
     <div className='bg-[url("https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] w-[100%] h-[60%] md:w-[60%] md:h-[100%] flex items-center justify-center'>
        <div className='bg-[#38383810] backdrop-blur-sm p-10 border border-[#38383805] shadow-2xl drop-shadow-lg rounded-3xl'>

        
     <form className=' flex flex-col gap-4 items-start p-3' action="">
            <div className='flex flex-col gap-1 items-start'>
            <h2 className='text-5xl font-semibold'>Hello Again!</h2>
            <h4 className='text-2xl'>Welcome back</h4>
            </div>
            <div className=' flex items-start flex-col'>
                <Input onChange={e=>setUname(e.target.value)} className='pl-4 text-lg rounded-full' placeholder="email" variant="filled" />
                
            </div>
            <div className='flex items-start flex-col'>
                <Input onChange={e=>setPass(e.target.value)} className='pl-4 text-lg rounded-full' placeholder="password" type='password' variant="filled" />
            </div>
                <Button onClick={f} className='rounded-full text-xl w-[200px] items-center justify-center flex ' type="default">Login</Button>
                { present ? <h1>Login successful</h1>:null}

            

        </form>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center bg-[url("https://images.unsplash.com/photo-1522781063645-d5e4fb3e19aa?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover w-[100%] h-[40%] md:w-[40%] md:h-[100%]'>
          <h1 className='font-extrabold text-4xl text-white'>CLOTH.STORE</h1>
      </div>
      
     </div>
     </ConfigProvider>
       
    </div>
  )
}

export default Login
