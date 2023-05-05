import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const data = JSON.parse(localStorage.getItem('userData'));
    const navi = useNavigate()
    
//If crediential are right then log-in as current user
    const handleSubmit = ()=>{
        let obj = {
            username : username,
            password : password
        }
       let flag = false;
       for(let val of data){
        if(val.username===username && val.password===password){
            flag = true;
        }
       }
       
       if(flag===true){
        localStorage.setItem('currentUser', JSON.stringify(obj))
        navi("/")
       }else{
        alert('Wrong Credientials') 
       }
    }
    
    
  return (
    <div className='container'>
      <form className='form'>
        <h1>Login Form</h1>
      <input type='text' className='form-control mb-3' placeholder='Username' onChange={(e)=>setUserName(e.target.value)} required />
      <input type='password' className='form-control mb-3' placeholder='Password' onChange={(e)=>setPassword(e.target.value)} required/>
      <button type='submit' className='btn btn-primary' onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  )
}
