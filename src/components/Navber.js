import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Navber() {
  return (
    <div className="navber_containner">
     <div  className="navber_containner_title"> 
      <ul>
          <li>
            <i class="fa-solid fa-person-biking"></i>
            <h1> Moto Services Pro</h1>
          </li>
      </ul>
     </div>
     <div className="navber_containner_hero">
      <ul>
          <li>
          <button className='active_btn' > 
             <i class="fa-solid fa-chart-line"></i>
             <Link to="/">Servivce Tracker</Link>
           </button>
          </li>
      </ul>
      <ul>
          <li>
          <button className='btn'> 
            <i class="fa-solid fa-box-archive"></i>
             <Link to="/book-service">Book Servive</Link>
           </button>
          </li>
      </ul>
      <ul>
          <li>
          <button className='btn'> 
             <i class="fa-solid fa-user-group"></i>
             <Link to="/customer">Customer</Link>
           </button>
         </li>
      </ul>
      <ul>
          <li>
          <button className='btn'> 
             <i class="fa-solid fa-wrench"></i>
             <Link to="/add-service">Servives</Link>
           </button>
          </li>
      </ul>
      <ul>
          <li>
          <button className='btn'> 
            <i class="fa-solid fa-chart-simple"></i>
             <Link to="/reports">Reports</Link>
           </button>
          </li>
      </ul>
      <ul>
          <li>
          <button className='btn'> 
             <i class="fa-solid fa-gear"></i>
             <Link to="/management">Manegement</Link>
           </button>
          </li>
      </ul>

     </div>

    </div>
  )
}

export default Navber