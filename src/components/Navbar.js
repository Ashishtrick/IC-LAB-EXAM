import React from 'react'
import { Link } from 'react-router-dom'
import '../css/bootstrap.min.css'

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
          <img src={require("../assets/logo1.jpg")} className='rounded' alt="travel" width={30} height={24} />

          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/contact">
                  Destination
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/about">
                  About
                </Link>
              </li>
            </ul>
            <Link className="btn btn-outline-light mx-2" to="/login">Login</Link>
            <Link className="btn btn-outline-light" to="/signup">Signup</Link>
          </div>
        </div>
      </nav>

      
    </>
  )
}

export default Navbar
