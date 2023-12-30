import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const { isLoading, user } = useSelector(state => state.auth)


    const navigate = useNavigate()

    useEffect(() => {
        if (!user) {
            navigate("/login")
        }
    },[])

    if (isLoading) {
        return (
            <div className="container text-center">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="container text-center">
                <h1>welcome user</h1>

            </div>
        </>
    )
}

export default Home
