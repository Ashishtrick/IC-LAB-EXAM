import React from 'react'
import '../css/login.css'
const Login = () => {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100' id='background' >
      <div className='border border-dark p-4 bg-white rounded shadow-lg' >
        <form >
            <h2 className="text-center mb-3">Login</h2>
            <div className='mb-3'>
                <label htmlFor='email'>Email</label>
                <input type = "email" placeholder='Email' name='Email' className='form-control' />
            </div>
            <div className='mb-3'>
                <label htmlFor='password'>password</label>
                <input type = "password" placeholder='Password' name='Password' className='form-control' />
            </div>
            <div className='mb-3'>
                <input type = "checkbox" value='Login' className='custom-control custom-checkbox mx-2' />
                <label className='custom-control-label' htmlFor='customCheck1'>Remember me</label>
            </div>
            <div className='mb-3 d-grid'>
                <button className='btn btn-danger btn-block'>Login</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Login
