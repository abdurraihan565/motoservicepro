import React from 'react'

function Reports() {
  return (
 <div>
      <div className='reports_containner'>
        <h2>Service Reports</h2>
        <div className='reports_btn'>
            <button>Daily</button>
            <button>Weekly</button>
            <button>Monthly</button>
        </div>
         <div className='reports_date'>
            <i class="fa-solid fa-chevron-left"></i>
            <strong>2024-12-06 - 2024-12-06</strong>
            <i class="fa-solid fa-angle-right"></i>
         </div>
      </div>
    <div className='reports_multiple_containner'>
      <div className='reports_contain'>
          <div className='reports_contain_service'>
            <h2>Total Services</h2>
            <div><i class="fa-solid fa-signal"></i></div>
          </div>
         <h1>45</h1>
      </div>

      <div className='reports_contain'>
          <div className='reports_contain_service'>
            <h2>Today Revenue</h2>
            <div><i class="fa-solid fa-chart-line"></i></div>
          </div>
          <h1>$12500</h1>
      </div>

      <div className='reports_contain'>
          <div className='reports_contain_service'>
            <h2>Top Technician</h2>
            <div><i class="fa-solid fa-users"></i></div>
         
          </div>
         <h1>4.8</h1>
      </div>
    </div>
      <div className='reports_service_section_containner'>
        <div className='reports_service_section'>
          <h4>Service Breakdown</h4>  
          <div className='reports_service_section_details'>
            <div className='reports_service_section_details_service_line'>
              <h5>Regular</h5>
              <span>20 services</span>
            </div>
            <div className='reports_service_section_details_service_price'>
                <strong>$4000</strong>
            </div>

          </div> 

          <div className='reports_service_section_details'>
            <div className='reports_service_section_details_service_line'>
              <h5>Premium</h5>
              <span>15 services</span>
            </div>
            <div className='reports_service_section_details_service_price'>
                <strong>$4000</strong>
            </div>
            
          </div> 

          <div className='reports_service_section_details'>
            <div className='reports_service_section_details_service_line'>
              <h5>Executive</h5>
              <span>15 services</span>
            </div>
            <div className='reports_service_section_details_service_price'>
            <strong>$4000</strong>
            </div>
            
          </div> 
        </div>

        <div className='reports_service_section'>
          <h4>Technician Performance</h4>  
          <div className='reports_service_section_details'>
            <div className='reports_service_section_details_service_line'>
              <h5>Technician 1</h5>
            </div>
            <div className='reports_service_section_technician_performance'>
                <storng>4.8</storng>
                <progress className='progress_bar' id="file" value="97" max="100"> 32% </progress>
            </div>

          </div> 

          <div className='reports_service_section_details'>
            <div className='reports_service_section_details_service_line'>
              <h5>Technician 2</h5>
              <span>15 services</span>
            </div>
            <div className='reports_service_section_technician_performance'>
               
                <storng>4.7</storng>
                <progress className='progress_bar' id="file" value="80" max="100"> 32% </progress>
            </div>
            
          </div> 

          <div className='reports_service_section_details'>
            <div className='reports_service_section_details_service_line'>
              <h5>Technician3</h5>
              <span>15 services</span>
            </div>
            <div className='reports_service_section_technician_performance'>
               
            <storng>4.3</storng>
                <progress className='progress_bar' id="file" value="60" max="100"> 32% </progress>
            </div>
            
          </div> 
        </div>
      </div>
  </div>
  )
}

export default Reports