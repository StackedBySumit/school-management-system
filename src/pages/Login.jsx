import React from 'react'

function Login() {
  return (
    <div className='bg-slate-200 w-80 mt-48 text-center ms-96'>
      <h1>Saraswati Vidya Peeth</h1>
      <p>Sign in to your account</p>
      <p>Username</p>
      <input type="text" className='border-2 border-black'/>
      <p>Password</p>
      <input type="password" className='border-2 border-black'/> <br />
      <button className='bg-blue-800 p-2 mt-2'>Sign in</button>
    </div>
  )
}

export default Login