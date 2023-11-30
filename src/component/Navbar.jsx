import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
      <ul className="navbar-nav me-auto mb-3 mb-lg-0">
        <li className="nav-item">
          <Link to='/' className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/GroupTeamMember' className="nav-link" >Team</Link>
        </li>
      </ul>
  </div>
</nav>
)
}

export default Navbar