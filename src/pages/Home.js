import axios from 'axios';
import React, { useEffect, useState } from 'react'
 

function Home() {

  const [data, setdata] = useState([]);
  console.log(data)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const BookServiceGetData = await axios.get('http://localhost:3001/api/list/get-book-service');
        setdata(BookServiceGetData.data.bookService);
      } catch (e) {
        console.log(e.response.data.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="services_tracker">
      <h1>Service Status Tracker</h1>
     <div className='services_tracker_products'>
      <table className='services_tracker_products_table'>
        <thead>
          <tr>    
            <th>BAY</th>
            <th>Client</th>
            <th>Model</th>
            <th>Service</th>
            <th>Technician</th>
            <th>Time</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>     
        {data.map((item)=>{
          const {_id ,bay,clint,model,technician,servicetype,duration}= item;
          return(
            <tbody key={_id}>
            <tr className='services_td'>
              <td >
                <div className=''>
                  #{bay}
                  <div>Online</div>
                </div>
              </td>
              <td>
                <div className='services_tracker_products-div'>
                  <i class="fa-solid fa-user-group"></i>
                  <div>{clint}</div>
                </div>
              </td>
  
              <td>
                <div className='services_tracker_products-div'>
                  <i class="fa-solid fa-wrench"></i>
                  <div>{model}</div>
                </div>
              </td>
  
              <td>
                <div>
                 {servicetype}
                </div>
              </td>
  
              <td>
                <div>
                 
                 {technician}
                </div>
              </td>
  
              <td>
                <div className='services_tracker_products-div'>
                <i class="fa-solid fa-clock"></i>
                <div>Invalid Date-<br/><span>Duration: {duration} Hr</span></div>
                </div>
              </td>
  
              <td>
                <div className='services_tracker_products-div'>
                          
                 <div>
                 <button className='active_button'>
                 <i class="fa-solid fa-circle-exclamation"></i>
                  Active
                 </button>
                 </div>
                </div>
              </td>
  
              <td >
                <div className='complate_btn'>
                 
                  <button>Mark <br/>Complate</button>
                </div>
              </td>
            </tr>
          </tbody> 
          )
        })}
      </table>
    </div>
    </div>
  )
}

export default Home