import React from 'react'

export default function Appointments() {
  return (
    <div className='container'>
        <div class="inner-layer">
        <div class="row no-margin">
            <div class="col-sm-7">
                <div class="content">
                    <h1>Book You Slot Now and Save your time</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis at lacus at rhoncus. Integer pharetra lacus vitae sapien blandit eleifend. </p>
                    <h2>For Help Call : +189-123-453</h2>
                </div>
            </div>
            <div class="col-sm-5">
                <div class="form-data">
                    <div class="form-head">
                        <h2>Book Appointemnt</h2>
                    </div>
                    <div class="form-body">
                        <div class="row form-row">
                          <input type="text" placeholder="Enter Full name" class="form-control"/>
                        </div>
                        <div class="row form-row">
                          <input type="text" placeholder="Enter Mobile Number" class="form-control"/>
                        </div>
                         <div class="row form-row">
                          <input type="text" placeholder="Enter Email Adreess" class="form-control"/>
                        </div>
                       <div class="row form-row">
                          <input id="dat" type="text" placeholder="Appointment Date" class="form-control"/>
                        </div>

                          <div class="row form-row">
                          
                               <input type="text" placeholder="Message" class="form-control"/>
                           
                        </div>

                         <div class="row form-row">
                           <button class="btn btn-success btn-appointment">
                             Book Appointment
                           </button>
                           
                        </div>

                    </div>
                </div>
            </div>
        </div>
      </div>
  
    </div>
   
  )
}