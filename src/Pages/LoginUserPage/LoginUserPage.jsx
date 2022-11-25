import React from 'react'
import AuthButton from '../../Components/AuthButton/AuthButton'
import LoginUserComponent from '../../Components/LoginUserComponent/LoginUserComponent'
import "./LoginUserPage.scss"

const LoginAsocPage = () => {
  return (
    <div className='p-reguser-container'>
        <LoginUserComponent/>
        <AuthButton></AuthButton>
    </div>
  )
}

export default LoginAsocPage
