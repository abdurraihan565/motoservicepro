import React,{useEffect, useState} from 'react';
import axios from 'axios';

function Customer() {
   const [name, setname] = useState('');
   const [email,setemail]=useState('');
   const [phone,setphone] = useState('');
   const [address, setaddress] = useState('');
   const [data, setdata] = useState([]);
   const [search, setsearch] = useState('');
   
   const CustomerHandellers =async(e)=>{
      e.preventDefault();
     const CustomerData={
           name:name,
           email:email,
           phone:phone,
           address:address
      }
      try {
          await axios
            .post('http://localhost:3001/api/user/add-customer', {
               name:CustomerData.name,
               email:CustomerData.email,
               phone:CustomerData.phone,
               address:CustomerData.address
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
    //
  const btnHandellers = (e)=>{
    e.preventDefault();
    const searchValue = search.toLowerCase()
    const searchdta = data.filter((value) => {
    const dataName = value.name.toLowerCase();
     return dataName.startsWith(searchValue);
    });
    setdata(searchdta)
  }


    useEffect(() => {
      const fetchData = async () => {
        try {
          const CustomerGetData = await axios.get('http://localhost:3001/api/user/get-customer');
        setdata(CustomerGetData.data.customerData);
        } catch (e) {
          console.log(e.response.data.message);
        }
      };
      fetchData();
    }, []);
  

  return (
    <div className='customer_containner'>
      <h1>Add Customer</h1>
       <div className='customer_form'>
            <div className='customer_form_contain'>
               <span>Name</span><br/>
               <input type="text" onChange={(e) => {
                  setname(e.target.value);
                }} required />
            </div> 

            <div className='customer_form_contain'>
               <span>Email</span><br/>
               <input type="email" onChange={(e) => {
                  setemail(e.target.value);
                }} required />
            </div> 

            <div className='customer_form_contain'>
               <span>Phone</span><br/>
               <input type="number" onChange={(e) => {
                  setphone(e.target.value);
                }} required />
            </div> 
            <div className='customer_form_contain'>
               <span>Adress</span><br/>
               <textarea type="text" onChange={(e) => {
                  setaddress(e.target.value);
                }} required />       
            </div>
            <div className='customer_btn'>
               <button onClick={CustomerHandellers}>Add Customer</button>
            </div>
       </div>

       <div className='customer'>
          <div className='customer_containner'>
             <div className='customer_filder_serch_btn'>
               <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder='search customer...' onChange={(e) => {
                  setsearch(e.target.value);
                }}/>
             </div>         
          </div> 
          <div className='customer_calender_filder'>
              <div className='customer_calender_filder_date' >
                <i class="fa-solid fa-calendar"></i>
                <input type="date"/>
              </div>
              <div className='customer_calender_filder_date'>
               <button onClick={btnHandellers}>
                <i class="fa-solid fa-filter"></i> Apply Filters
               </button>
              </div>
          </div>   
       </div>

       <div >
       {data.map((value) => {
          const { _id, name,email,phone,address } = value;

          return (
            <div className='customer_list_contanner' key={_id}>
              <p><i class="fa-solid fa-user"></i>{name}</p> 
              <p><i class="fa-solid fa-envelope"></i>{email}</p> 
              <p><i class="fa-solid fa-phone"></i>{phone}</p>                  
              <p><i class="fa-solid fa-location-pin"></i>{address}</p>
            </div>
          );
         })}   
       </div>

    </div>
  )
}

export default Customer