import axios from 'axios';
import React, { useEffect, useState } from 'react'

function BookService() {
const [data, setdata] = useState([]);
console.log(data)

//
const [clint,setclint]=useState('');
const [model,setmodel] = useState('');
const [technician, settechnician] = useState('');
const [bay,setbay] = useState('');
const [ServiceValue,setServiceValue] = useState([]);
const servicetype =ServiceValue[0]
const duration =ServiceValue[1]


const BookServiceHandellers =async()=>{
  const CustomerData={
    bay:bay,
    clint:clint,
    model:model,
    technician:technician,
    servicetype:servicetype,
    duration:duration
}
try {
   await axios
     .post('http://localhost:3001/api/list/book-service', {
        bay: CustomerData.bay,
        clint:CustomerData.clint,
        model:CustomerData.model,
        technician:CustomerData.technician,
        servicetype:CustomerData.servicetype,
        duration:CustomerData.duration
     })
     .then((response) => {
       console.log(response.data.message);
     });
 } catch (e) {
   if (e.response.data.message) {
     console.log(e.response.data.message);
   } else {
     console.log(e);
   }
 } 
}



/// fetching data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const ManagementGetData = await axios.get('http://localhost:3001/api/data/get-management');
        setdata(ManagementGetData.data.manageMentData)  
      } catch (e) {
        console.log(e.response.data.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='book-service'>
        <h1>Book a Service</h1>
     <div className='book_service_contain'>
        <div className='book_service_containner'>
         <div className='book_service_form'>          
             <div className='book_service_form_contain'>
               <span><i class="fa-solid fa-user"></i>Client Name</span><br/>
               <input type="text" onChange={(e) => {
                  setclint(e.target.value);
                }} />
             </div>     
            <div className='book_service_form_contain'>
              <span><i class="fa-solid fa-wrench"></i>Service Type</span><br/>
              <select onChange={(e) => {
                  setServiceValue(e.target.value.split(','));
                }}>
                 <option>
                   Select model
                 </option>             
                  {data.map((item)=>{
                    const {servicetype
                      ,duration,specialization,
                      _id} = item;
                    return(
                      <option key={_id} value={`${servicetype},${duration}`}>
                        {specialization}-{servicetype
                         }-{duration}
                      </option>
                    )
                  })}             
               </select>
            </div>
           <div className='book_service_form_contain'>
               <span><i class="fa-regular fa-calendar"></i>Preferred Date</span><br/>
              <input type="date"/>
           </div>
         </div>
         <div className='book_service_form'>
           <div className='book_service_form_contain'>
               <span><i class="fa-solid fa-person-biking"></i>Motorcycle Model</span>
               <select onChange={(e) => {
                  setmodel(e.target.value);
                }}>
                 <option>
                   Select model
                 </option>             
                  {data.map((item)=>{
                    const {ModelName,category,_id} = item;
                    return(
                      <option key={_id} value={ModelName}>
                         {ModelName}-{category}
                      </option>
                    )
                  })}             
               </select>
           </div>

            <div className='book_service_form_contain'>
               <span><i class="fa-solid fa-user"></i>Preferred Technician</span>
               <select onChange={(e) => {
                  settechnician(e.target.value);
                }}>
                 <option>
                   Select model
                 </option>
                 {data.map((item)=>{
                    const {_id,name,specialization} = item;
                    return(
                      <option key={_id} value={name}>
                         {name}-{specialization}
                      </option>
                    )
                  })}  
               </select>
            </div>
            <div className='book_service_form_contain'>
               <span><i class="fa-solid fa-user"></i>Select Bay</span>
               <select onChange={(e) => {
                  setbay(e.target.value);
                }}>
                 <option>
                   Select Bay
                 </option>
                 {data.map((item)=>{
                    const {_id,bay} = item;
                    return(
                      <option key={_id} value={bay}>
                        BAY- {bay}
                      </option>
                    )
                  })}  
               </select>
            </div>
            <div className='book_service_form_contain'>
               <span><i class="fa-solid fa-clock"></i>Client Name</span>
               <input type="time"/>
             </div>
         </div>        
        </div>
        <button onClick={BookServiceHandellers} >Book Service</button>
     </div>       
    </div>
  )
}

export default BookService