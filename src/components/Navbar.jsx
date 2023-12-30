import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logoutuser } from '../features/auth/AuthSlice'


const Navbar = () => {
    const { user } = useSelector(state => state.auth)

const disptach = useDispatch()

const navigate = useNavigate()


const Handlelogout =()=>{
    disptach(logoutuser())
    navigate("/login")
}

    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <Link to={'/'}> <h3>Auth app</h3></Link>
                    <span>
                        {
                            !user ?
                                <>
                                    <Link to={'/register'}> <button type="button" className="btn btn-primary mx-2">register</button></Link>
                                    <Link to={'/login'}> <button type="button" className="btn btn-secondary mx-2">Login</button></Link>

                                </> :

                                <button type="button" className="btn btn-success" onClick={Handlelogout}>Logout</button>
                        }
                    </span>
                </div>
            </nav>
        </>
    )
}

export default Navbar
