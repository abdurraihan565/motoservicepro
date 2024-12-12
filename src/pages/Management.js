import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Management() {
  
  const Technician =(e)=>{
    const technician = document.querySelector('#Technician');
    technician.style.display = 'block';  
    const BikeModel = document.querySelector('#Bike_Model');
    BikeModel.style.display = 'none';
    const ServiceType = document.querySelector('#Service_Type');
    ServiceType.style.display = 'none';
    const ServiceBay = document.querySelector('#Service_Bay');
    ServiceBay.style.display = 'none';
  }
  const BikeModelHandeler =(e)=>{
    const BikeModel = document.querySelector('#Bike_Model');
    BikeModel.style.display = 'block';
    const technician = document.querySelector('#Technician');
    technician.style.display = 'none'; 
    const ServiceType = document.querySelector('#Service_Type');
    ServiceType.style.display = 'none';
    const ServiceBay = document.querySelector('#Service_Bay');
    ServiceBay.style.display = 'none';
   
  }
  const ServiceTypeHandeler =(e)=>{

    const ServiceType = document.querySelector('#Service_Type');
    ServiceType.style.display = 'block';
    //
    const technician = document.querySelector('#Technician');
    technician.style.display = 'none';
    //
    
    const ServiceBay = document.querySelector('#Service_Bay');
    ServiceBay.style.display = 'none';
    const BikeModel = document.querySelector('#Bike_Model');
    BikeModel.style.display = 'none';
   
  }
  const ServiceBayHandeler =(e)=>{
    const ServiceBay = document.querySelector('#Service_Bay');
    ServiceBay.style.display = 'block';
    //
    const ServiceType = document.querySelector('#Service_Type');
    ServiceType.style.display = 'none';
    //
    const technician = document.querySelector('#Technician');
    technician.style.display = 'none';
    //
    
   //
    const BikeModel = document.querySelector('#Bike_Model');
    BikeModel.style.display = 'none';
   
  }
 // data
  const [data, setdata] = useState([]);
  
  // submit Handelar
  const [name, setname] = useState('');
  const [Specialization,setSpecialization]=useState('');
  const [ModelName,setModelName] = useState('');
  const [SelectedValue, setSelectedValue] = useState("");
  const [ServiceName, setServiceName] = useState("");
  const [Description, setDescription] = useState("");
  const [Price, setPrice] = useState("");
  const [Duration,setDuration] = useState("");
  const [ServiceType,setServiceType] =useState('')
  const [BayNumber,setBayNumber] = useState("");
  const [InitialStatus,setInitialStatus] = useState("");

  const InitialStatusHandellers =async(e)=>{
    e.preventDefault();
   const managementData={
         name:name,
         Specialization:Specialization,
         ModelName:ModelName,
         category:SelectedValue,
         ServiceName:ServiceName,
         Description:Description,
         Price:Price,
         Duration:Duration,
         ServiceType:ServiceType,
         BayNumber:BayNumber,
         InitialStatus:InitialStatus
    }
    try {
        await axios
          .post('http://localhost:3001/api/data/management', {
            name: managementData.name,
            specialization: managementData.Specialization,
            ModelName:managementData.ModelName,
            category:managementData.category,
            ServiceName:managementData.ServiceName,
            description:managementData.Description,
            price:managementData.Price,
            duration:managementData.Duration,
            ServiceType:managementData.ServiceType,
            bay:managementData.BayNumber,
            InitialStatus:managementData.InitialStatus,
            
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

 /* const TechnicianHandeler = (e)=>{
    e.preventDefault();
    const TechcianData = {
        name:name,
        Specialization:Specialization
    }
  }

  const BikeHandeller = (e)=>{
    e.preventDefault();
    const BikeData = {
        ModelName:ModelName,
        SelectedValue:SelectedValue,
      
    }
  }
  const ServiceHandeller = (e)=>{
    e.preventDefault();
    const  ServiceData = {
        ServiceName:ServiceName,
        Description:Description,
        Price:Price,
        Duration:Duration,
      
    }
  }
  const InitialStatusHandellers =(e)=>{
    e.preventDefault();
   const managementData={
       BayNumber:BayNumber,
       InitialStatus:InitialStatus
    }
   
  }*/

  return (
    <div className='managemant'>
     <h1>Service Management</h1>               
       <div className='management-btn'>    
          <button onClick={Technician}>Tecnicians</button>
          <button onClick={BikeModelHandeler}>Bike Model</button>
          <button onClick={ServiceTypeHandeler}>Service Types</button>
          <button onClick={ServiceBayHandeler}>Service Bay</button>
        </div> 

            
         <div className='management_form' id="Technician">             
            <div>
                <h2>Add New Technician</h2>
            </div>
            <div>
                <span>Name</span><br/>
                <input type="text"  onChange={(e) => {
                  setname(e.target.value);
                }} required />
            </div>
            <div>
                <span>Specialization</span><br/>
                <input type="text" onChange={(e) => {
                  setSpecialization(e.target.value);
                }} required />
            </div>
            <button>Add Technician</button>
         </div>

         <div className='management_form' id="Bike_Model">             
            <div>
                <h2>Add New Bike Model</h2>
            </div>
            <div>
                <span>Model Name</span><br/>
                <input type="text"  onChange={(e) => {
                  setModelName(e.target.value);
                }}/>
            </div>
            <div>
                <span>Catagory</span><br/>
                <select onChange={(e) => {
                       setSelectedValue(e.target.value);
                     }}>
                    <option  >
                        Select Catagory
                    </option>
                    <option value="sport">
                        Sport
                    </option>
                    <option value="cruiser">
                       Cruiser
                    </option>
                    <option value="touring">
                       Touring
                    </option>
                    <option value="standerd">
                       Standerd
                    </option>
                    <option value="scooter">
                       Scooter
                    </option>
                </select>
            </div>
            
            <button >Add Bike Model</button>
         </div>

         <div className='management_form' id="Service_Type">             
            <div>
                <h2>Add New Service Type</h2>
            </div>
            <div>
                <span>Service Name</span><br/>
                <input type="text" onChange={(e) => {
                  setServiceName(e.target.value);
                }}/>
            </div>
            <div>
                <span>Description</span><br/>
                <textarea type="text" onChange={(e) => {
                  setDescription(e.target.value);
                }}/>
            </div>
            <div>
                <span>Price ($)</span><br/>
                <input type="number" default="0" onChange={(e) => {
                  setPrice(e.target.value);
                }}/>
            </div>
            <div>
                <span>Duration (e.g., "1.30 Hr")</span><br/>
                <input type="number" default="0" onChange={(e) => {
                  setDuration(e.target.value);
                }}/>
            </div>
            <div>
                <span>Service Type</span><br/>
                <select onChange={(e) => {
                  setServiceType(e.target.value);
                }}>
                <option >
                  Select Type
                </option>
                <option value="free">
                   Free
                </option>
                <option value="paid" >
                   Paid
                </option>
                <option value="premium">
                  Premium
                </option>
                <option value="executive">
                  Executive
                </option>
                <option value="master" >
                 Master
                </option>
               </select>
               
            </div>
            <button  >Add Service Type</button>
         </div>

         <div className='management_form' id="Service_Bay">             
            <div>
                <h2>Add New Service Bay</h2>
            </div>
            <div>
                <span>Bay Number</span><br/>
                <input type="number" onChange={(e) => {
                  setBayNumber(e.target.value);
                }}/>
            </div>
            <div>
                <span>Initial Status</span><br/>
               <select onChange={(e) => {
                  setInitialStatus(e.target.value);
                }}>
                <option value="available">
                    Available
                </option>
                <option value="Under-Maintenance">
                    Under Maintenance
                </option>
               </select>
            </div>
            <button onClick={InitialStatusHandellers}>Add Service Bay</button>
         </div> 

      
    </div>
  )
}

export default Management