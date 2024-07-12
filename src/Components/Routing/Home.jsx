import React, { useState } from 'react'
import Header from './Header'

const Home = (props) => {
    console.log(props);
    const logout = () =>{
        localStorage.removeItem('isLogin')
        props.setisLogin(false)
    }
    return (
        <>
            <div>Home</div>

            <button className='btn btn-warning m-2' onClick={logout} >Log Out</button>
        </>
    )
}

export default Header(Home)