import React, { useState } from 'react'

const Login = (props) => {

    const login = () => {
        localStorage.setItem("isLogin" , true)
        // window.location.reload()
        props.setisLogin(true)

    }

    return (
        <>
            <div>
                <button className='btn btn-primary m-2' onClick={login}>Login</button>
            </div>
        </>
    )
}

export default Login