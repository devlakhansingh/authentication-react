import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector, } from 'react-redux'
import { toast } from 'react-toastify'
import { registeruser } from '../features/auth/AuthSlice'
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const dispatch = useDispatch()



  const { isLoading, user,isSuccess,isError,message } = useSelector(state => state.auth)

  const navigate = useNavigate()

  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  })

  const { name, email, password, password2 } = formdata


  
    useEffect(() => {
    if(user||isSuccess ){
      navigate("/")
    }
    if(isError ||message){
      toast.error(message)
    }
    }, [user,isSuccess,isError,message])

  if (isLoading) {
    return (
      <div className="container text-center">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }


  const Handlesubmit = (e) => {
    e.preventDefault()
    if (password !== password2) {
      toast.error('password not match', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    dispatch(registeruser(formdata))

  }

  const handlechange = (e) => {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value
    })

  }


  return (
    <div>
      <div className="container text-center py-5">
        <form onSubmit={Handlesubmit}  >

          <input value={name} name='name' onChange={handlechange} placeholder='Enter your name' type="text" className="form-control my-4" />
          <input value={email} name='email' onChange={handlechange} placeholder='Enter your email' type="text" className="form-control my-4" />
          <input value={password} name='password' onChange={handlechange} placeholder='Enter your password' type="text" className="form-control my-4" />
          <input value={password2} name='password2' onChange={handlechange} placeholder='confirm password' type="text" className="form-control my-4" />

          <button type='submit' className="btn btn-danger w-100">Submit</button>
        </form>

      </div>
    </div>
  )
}

export default Register
