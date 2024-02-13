import React from 'react'

export default function Register() {
  return (
    <div>
        <section className=" container-fluidvh-100 bodycolor" >
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                  <div className="card shadow-2-strong" style={{borderRadius: "1rem"}}>
                    <div className="card-body p-5 text-center">
          
                      <h3 className="mb-5">Register Yourself</h3>
          
                      <div className="form-outline mb-4">
                        <input type="text" id="typeEmailX-2" className="form-control form-control-lg" placeholder="First-Name"/>
             
                      </div>
          
                      <div className="form-outline mb-4">
                        <input type="text" id="typePasswordX-2" className="form-control form-control-lg"  placeholder="Last-Name"/>
                    
                      </div>

                      <div className="form-outline mb-4">
                        <input type="text" id="typeEmailX-2" className="form-control form-control-lg" placeholder="Contact Number" />
                   
                      </div>

                      <div className="form-outline mb-4">
                        <input type="email" id="typeEmailX-2" className="form-control form-control-lg" placeholder="Email-Id"/>
                        
                      </div>

                      <div className="form-outline mb-4">
                        <input type="password" id="typePasswordX-2" className="form-control form-control-lg" placeholder="Password" />
                       
                      </div>

                      <button className="btn btn-primary btn-lg btn-block " type="submit" style={{margin:"auto"}}>Register</button>
                      <hr className="my-4"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

    </div>
  )
}
