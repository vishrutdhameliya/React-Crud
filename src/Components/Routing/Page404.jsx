import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {

    // let navigate = useNavigate()
    // function redirect(){
    //     navigate('/')
    // }
    
  return (
    <>
        <div className='d-flex flex-column justify-content-center align-items-center fs-3' style={{height:"100vh"}}>
            Page Note Found
            {/* <button className='btn btn-warning' onClick={redirect} >Go To Home</button> */}
            <Link className='btn btn-warning' to='/'>Go to Home</Link>
        </div>
    </>
  )
}

export default Page404