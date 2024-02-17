import React from 'react'
import img1 from '../components/images/logo1.png' 
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'


export default function Aheader() {
  
  const navigate = useNavigate();
    const cookiename = Cookies.get('username');
    console.log(cookiename)
    const myStyle = {
        backgroundColor:"rgb(250,240,225)",
        padding: "10px",
        fontFamily: "Sans-Serif",
        // position:"fixed",
        // overflow: "hidden"
      };
      function handlelogout(){
        //Window.sessionStorage.setItem("abc",false);
        navigate("/");
     sessionStorage.clear();
     window.location.reload();
        }
    return (

        <>
       <nav className="navbar navbar-expand-lg navbar-light" style={myStyle}>
      <div class="container-fluid ">
    
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    
        <a class="navbar-brand" href="#">
          <img src={img1} alt="" width="100px" height="80px"/>
          <span className="h2 p-3 ">OneSmile</span>
        </a>
    
        <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo03">
          <div className='d-flex justify-content-center'>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li class=" h4 nav-item">
              <a class="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li class=" h4 nav-item ">
            <a className="nav-link active w-100 p-2" href="/#aboutus"> About us
            </a>
             </li>
             <li class=" h4 nav-item ">
            <a className="nav-link active w-100 p-2" href="/adminhomepage"> Admin Home
            </a>
            </li>
            <li class=" h4 nav-item ">
            <a className="nav-link active w-100 p-2" href="/adminhomepage"> Add Doctor
            </a>
            </li>           
            <li class=" h4 nav-item">
            <a className="nav-link active w-100 p-2" href="/#treatmentspage">
                    Treatments
                  </a>        </li>
            <li class=" h4 nav-item ">
            <a className="nav-link active" href="/#reviewpage">
              Reviews
                  </a>
            </li>
    
            <li class="nav-item">
            <Link className="nav-link active text-white w-100 p-2"  >
                    <button className="btn btn-outline-danger" onClick={handlelogout}>Logout</button>
                  </Link>
            </li>
    
          </ul>
    
          </div>

        </div>
      </div>
    </nav>
 
        </>
  )
}