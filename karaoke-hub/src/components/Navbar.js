import './Navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <div className='navbar'>
            <Link to= '/' className='link1'><img src='https://i.imgur.com/ulCNwzn.png' alt='home' title='home'></img></Link>
            <Link to= '/sing' className='link2'>Sing!</Link>
            <Link to= '/catalog' className='link3'>Catalog</Link>
            <Link to= '/info' className='link4'>Info</Link>
            <Link to= '/subscribe' className='link5'>Subscribe</Link>
            

        </div>
    )
}
export default Navbar;