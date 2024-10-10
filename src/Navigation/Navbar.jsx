import React from 'react'
import './Navbar.css'
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
    

        <div className='title'>
        <nav>
        <h2><LunchDiningIcon /> BURGER KING</h2>
        <ul>
          
            <Link to="/"><li>  Home  </li></Link>
            <Link to="/work"><li>  Work  </li></Link>
            <Link to="/contact"><li>  Contact  </li></Link>
            <Link to="/about"><li>  About us  </li></Link>
            <Link to="/todolist"><li>  To do list  </li></Link>
        </ul>

    </nav>
    </div>
    </div>
  )
}

export default Navbar