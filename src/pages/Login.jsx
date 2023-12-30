import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginuser } from '../features/auth/AuthSlice'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {

  const { isLoading ,user,isError, message} = useSelector(state => state.auth)

  const navigate = useNavigate()

  useEffect(()=>{
  if(user){
    navigate("/")
  }
  
  if(isError|| message){
    toast.error(message)
  }
  },[user,isError,message])

  const dispatch = useDispatch()

  const [formdata, setformdata] = useState({
    email: "",
    password: ""

  })
  const { email, password } = formdata


  if (isLoading) {
    return (
      <div className="container text-center">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }


  const HandleSubmit = (e) => {
    e.preventDefault()
    dispatch(loginuser(formdata))
  }

  const Handlechange = (e) => {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }


  return (
    <div>
      <div className="container p-4 ">
        <form onSubmit={HandleSubmit} >
          <div className="mb-3">

            <input value={email} name='email' onChange={Handlechange} placeholder='Enter your email' type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

          </div>
          <div className="mb-3">

            <input value={password} name='password' onChange={Handlechange} placeholder='Enter your password' type="password" className="form-control" id="exampleInputPassword1" />
          </div>

          <button type="submit" className="btn btn-primary w-100">Submit</button>
        </form>


      </div>
    </div>
  )
}

export default Login
