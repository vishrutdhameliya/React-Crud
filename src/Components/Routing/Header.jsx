import { Link } from "react-router-dom"

export const Header = (Component) => {

    const newComp = (props) => {
        return (
            <>
                <div className="bg-dark text-white d-flex p-2">
                    <div className="p-2 mx-1 bg-white text-dark"><Link to="/">Home</Link></div>
                    <div className="p-2 mx-1 bg-white text-dark"><Link to="/service">Service</Link></div>
                    <div className="p-2 mx-1 bg-white text-dark"><Link to="/about">About</Link></div>
                    <div className="p-2 mx-1 bg-white text-dark"><Link to="/contact">Contact</Link></div>
                    <div className="p-2 mx-1 bg-white text-dark"><Link to="/login">Login </Link></div>
   
                </div>
                <div>
                    <Component {...props} />
                </div>
            </>
        )
    }
    return newComp

}
export default Header