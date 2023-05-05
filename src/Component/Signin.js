import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Signin() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpass, setConfirmPass] = useState('');
    const users = localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : [];

    const navi = useNavigate();

    //If credientials are correct then create new user and store in local storage

    const handleSubmit = ()=>{
        if(password===confirmpass){
            let user = {
                username : username,
                password : password
            }

            users.push(user);
            localStorage.setItem('userData', JSON.stringify(users));
            alert('User Created!!')
            navi("/login");

        }else{
            alert('Password Does not match!')
        }
    }

  return (
    <div className='container'>
      <form className='form'>
        <h1>Sign-in Form</h1>
        <input type='text' className='form-control mb-3' placeholder='Username' onChange={(e)=>setUserName(e.target.value)} required />
        <input type='password' className='form-control mb-3' placeholder='Password' onChange={(e)=>setPassword(e.target.value)} required/>
        <input type='password' className='form-control mb-3' placeholder='Confirm Password' onChange={(e)=>setConfirmPass(e.target.value)} required/>
        <button className='btn btn-primary mb-3' type='submit' onClick={handleSubmit}>Sign in</button>
      </form>
    </div>
  )
}
