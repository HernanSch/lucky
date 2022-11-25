import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { IsLoggedContext } from '../../contexts/IsLoggedContext';
import { API } from "../../services/api";
import "./LoginUserComponent.scss"

const LoginUserComponent = () => {
    //const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    
    const {setIsLogged,setUser} = useContext(IsLoggedContext);
    
    console.log("hola")

    const onSubmit = formData => {
      console.log(formData)
        API.post('users/login', formData).then(res => {
              // console.log(res.data.userInfo)
             document.cookie = 'token=' + res.data.token;
             document.cookie = 'user=' +  JSON.stringify(res.data.userInfo);
             setUser(res.data.userInfo)
            setIsLogged(res.data.token);
        })
    }
  return (
    <div className='registro'>
        <form onSubmit={handleSubmit(onSubmit)}>
            
            <label htmlFor="email">Email</label>
            <input  id="email"
                   {...register("mail",{ required: true, pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<;>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}/>
            
            <label htmlFor="password">Password</label>
            <input  id="password" type="password" defaultValue={'123456Ab*'}
                   {...register("password",{
                       required: true,
                       pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/
                   })}/> 
           

           <button type="submit" >Login</button>
            {/* <button type="submit" onClick={() => navigate("/Main")}>Login</button> */}
        </form>
      </div>
  )
}

export default LoginUserComponent