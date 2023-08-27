import React, { useContext } from 'react'
import { AuthContex } from '../context/AuthContext'
import {  Navigate, Outlet } from 'react-router-dom'
//import Login from '../pages/Login'

const PrivateRouter = () => {

  const {currentUser}=useContext(AuthContex)
  // return currentUser ? <Outlet/> : <Login/>
  return currentUser ? <Outlet/> : <Navigate to="/login" replace/>
}

export default PrivateRouter