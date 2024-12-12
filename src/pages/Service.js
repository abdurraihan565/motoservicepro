import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Service() {
   const [name, setname] = useState('');
   const [description,setdescription]=useState('');
   const [price,setprice] = useState('');
   const [data,setdata] = useState([]);
   console.log(data)
   const [search, setsearch] = useState('');

//
  const SeriviceHandellers =async(e)=>{
   e.preventDefault();
   const ServiceData ={
      name:name,
      description:description,
      price:price
   }
   try {
      await axios
        .post('http://localhost:3001/api/service', {     
         name:ServiceData.name,
         description:ServiceData.description,
         price:ServiceData.price
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
// searching
  const ServiceBtnHandellers = (e)=>{
    e.preventDefault();
    const searchValue = search.toLowerCase()
    const searchdta = data.filter((value) => {
    const dataName = value.name.toLowerCase();
     return dataName.startsWith(searchValue);
    });
    setdata(searchdta)
  
  }

//
  useEffect(() => {
   const fetchData = async () => {
     try {
       const ServiceGetData = await axios.get('http://localhost:3001/api/get-service');
        setdata(ServiceGetData.data.serviceData);
     } catch (e) {
       console.log(e.response.data.message);
     }
   };
   fetchData();
 }, []);

  return (
    <div className='customer_containner'>
      <h1>Add Service</h1>
       <div className='customer_form'>
            <div className='customer_form_contain'>
               <span>Service Name</span><br/>
               <input type="text"  onChange={(e) => {
                  setname(e.target.value);
                }} required />
            </div> 

            <div className='customer_form_contain'>
               <span>Description</span><br/>
               <textarea type="text"  onChange={(e) => {
                 setdescription(e.target.value);
                }} required />       
            </div>
           
            <div className='customer_form_contain'>
               <span>Price</span><br/>
               <input type="number" defaultValue="0" onChange={(e) => {
                 setprice(e.target.value);
                }} required />
            </div> 
            
            <div className='customer_btn'>
               <button onClick={SeriviceHandellers}>Add Add Service</button>
            </div>
       </div>

       <div className='customer'>
          <div className='customer_containner'>
             <div className='customer_filder_serch_btn'>
               <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder='search customer...'  onChange={(e) => {
                  setsearch(e.target.value);
                }} />
             </div>         
          </div> 
          <div className='customer_calender_filder'>
              <div className='customer_calender_filder_date' >
                <i class="fa-solid fa-calendar"></i>
                <input type="date"/>
              </div>
              <div className='customer_calender_filder_date'>
               <button onClick={ServiceBtnHandellers}>
                <i class="fa-solid fa-filter"></i> Apply Filters
               </button>
              </div>
          </div>   
       </div>
       
       <div >
       {data.map((value) => {
          const { _id, name,price,createdAt
          } = value;

          return (
            <div className='customer_list_contanner' key={_id}>          
              <div className='service_list_contain'>
                 <div>
                   <p><i class="fa-solid fa-calendar-days"></i>{createdAt}</p>
                   <h3>{name}</h3>
                 </div>
                 <div className='service_list_price'>
                    <button>Pending</button><br/>
                    <strong>$ {price}:00</strong>
                 </div>

              </div> 
                                      
            </div>
          );
         })}   
       </div>
    </div>
  )
}

export default Service