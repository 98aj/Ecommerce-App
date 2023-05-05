import React from "react";
import { NavLink, useNavigate} from "react-router-dom";

export default function Navbar() {

  const navi = useNavigate();
//Check if user is loged in
  const loginDetail = localStorage.getItem('currentUser')
//Logout function
  const LogoutUser = ()=>{
    localStorage.removeItem('currentUser');
    navi("/")
    window.location.reload()
    
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" data-bs-theme="dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            Shop-Store
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/cart">
                  Cart page
                </NavLink>
              </li>
{/* Switch on condition to show log-in and sign-in for new user and logout for current user */}
              {
                loginDetail===null ? <><li className="nav-item">
                <NavLink className="nav-link" to='/login'>Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/signin'>Sign-in</NavLink>
              </li></> : <li className="nav-item">
              <NavLink className="nav-link" to='/' onClick={LogoutUser}>Logout</NavLink>
            </li>
              }
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
