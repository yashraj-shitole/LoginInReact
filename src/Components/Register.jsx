import { Button, ConfigProvider, Input } from 'antd';
import React, { useState } from 'react';


const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if username or password is empty
        if (!username || !password) {
          alert('Please enter both username and password');
          return;
        }
      
        try {
          const response = await fetch('http://localhost:3001/createUser', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
          });
      
          if (!response.ok) {
            throw new Error('Failed to create user');
          }
      
          // Clear form after successful submission
          setUsername('');
          setPassword('');
          alert('User created successfully!');
        } catch (error) {
          console.error('Error:', error);
          alert('Failed to create user');
        }
    };
  
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
                <Input onChange={e=>setUsername(e.target.value)} className='pl-4 text-lg rounded-full' placeholder="email" variant="filled" />
                
            </div>
            <div className='flex items-start flex-col'>
                <Input onChange={e=>setPassword(e.target.value)} className='pl-4 text-lg rounded-full' placeholder="password" type='password' variant="filled" />
            </div>
            <div className='w-[100%] flex flex-col  items-center justify-center '>
                
                <div className='w-[100%]'>
                <div className='w-[80%] h-[2px] rounded-full bg-white'>
                  
                  <div className='h-[100%] transition-all delay-100 ease-in-out duration-1000 rounded-full '
                    style={
                      {
                        width: password.length<1
                        ? '1%'
                        : password.length>=1 && password.length<4
                        ? '33%'
                        : password.length>=4 && password.length<8
                        ? '66%'
                        : password.length>=8
                        ? '100%'
                        :null,


                        backgroundColor: password.length<1
                        ? '#FF4D4F90'
                        : password.length>=1 && password.length<4
                        ? '#FF4D4F90'
                        : password.length>=4 && password.length<8
                        ? '#FAAD1490'
                        : password.length>=8
                        ? '#52C41A90'
                        :null
                        
                      }
                    }
                  >

                  </div>
                  
                </div>
                </div>
                <div className='w-[100%]'>
                {
                        password.length<1
                        ? <h1 className='text-transparent' >weak</h1>
                        : password.length>=1 && password.length<4
                        ? <h1>weak</h1>
                        : password.length>=4 && password.length<8
                        ? <h1>medium</h1>
                        : password.length>=8
                        ? <h1>strong</h1>
                        :null
                }
                </div>
               
            </div>
                <Button onClick={handleSubmit} className='rounded-full text-xl w-[200px] items-center justify-center flex ' type="default">Register</Button>

            

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

export default Register
