import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
import Logo from './Logo.png'

const Navbar = () => {

  return (
    <>
    <nav className='navbar navbar-expand-lg m-0 p-0'>
        <div className='container-fluid mx-0 bg-dark px-4'>
            <Link to="/" ><img src={Logo} className='logo'></img></Link>
            <button className='navbar-toggler toggle-button' data-bs-toggle="collapse" data-bs-target="#Expanded"><span className="navbar-toggler-icon " style={{fill:'white'}}></span></button>
            <div id="Expanded" className='collapse navbar-collapse'>
                <ul className='navbar-nav ms-auto'>
                    <li class="nav-item">Dashboard</li>
                    <li class="nav-item">Register/Login</li>
                </ul>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar;