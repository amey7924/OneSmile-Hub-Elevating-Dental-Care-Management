import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Adminhome() {
  const imageStyle = {
    filter: 'blur(2px)',
    width: '100%',
    height: '200px', 
    objectFit: 'cover',
  };

  const cardStyle = {
    position: 'relative',
    overflow: 'hidden',
  };

  const cardTitleStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#fff',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)',
  };

  useEffect(() => {
   
  }, []);
  

  return (
    <div className="row row-cols-1 row-cols-md-2 g-6">
      
      <div className="col">
        <div className="card" style={cardStyle}>
          <Link to="/AdminMedicalStorepage">
            <img
              src="https://uniquekiosk.com/wp-content/uploads/2020/08/39-10-1536x877.jpg"
              className="card-img-top"
              alt="Medicine Store"
              style={imageStyle}
            />
            <div style={cardTitleStyle}>
              <h5 className="card-title">Medicine Store</h5>
            </div>
          </Link>
        </div>
      </div>
      <div className="col">
        <div className="card" style={cardStyle}>
          <Link to="/Userdetailspage">
            <img
              src="https://th.bing.com/th?id=OIP.wRtvON_8JKRQghdROw5QvQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2"
              className="card-img-top"
              alt="User Details"
              style={imageStyle}
            />
            <div style={cardTitleStyle}>
              <h5 className="card-title">User Details</h5>
            </div>
          </Link>
        </div>
      </div>
      <div className="col">
        <div className="card" style={cardStyle}>
          <Link to="/Appointmentdetailspage">
            <img
              src="https://th.bing.com/th/id/OIP.BR4bmCAe_QWfi09YzMhiHgHaFW?rs=1&pid=ImgDetMain"
              className="card-img-top"
              alt="Medicine Store"
              style={imageStyle}
            />
            <div style={cardTitleStyle}>
              <h5 className="card-title">Appointment Details</h5>
            </div>
          </Link>
        </div>
      </div>
      <div className="col">
        <div className="card" style={cardStyle}>
          <Link to="/Examinationdetailspage">
            <img
              src="https://deangelisfamilydentistry.com/wp-content/uploads/when-your-child-should-have-their-first-dental-appointment-1.jpeg"
              className="card-img-top"
              alt="Medicine Store"
              style={imageStyle}
            />
            <div style={cardTitleStyle}>
              <h5 className="card-title">Examination Details</h5>
            </div>
          </Link>
        </div>
      </div>
      <div className="col">
        <div className="card" style={cardStyle}>
          <Link to="/medicine-store">
            <img
              src="https://cdn1.vectorstock.com/i/1000x1000/75/20/digital-payment-design-vector-4217520.jpg"
              className="card-img-top"
              alt="Medicine Store"
              style={imageStyle}
            />
            <div style={cardTitleStyle}>
              <h5 className="card-title">Payment Details</h5>
            </div>
          </Link>
        </div>
      </div>
      <div className="col">
        <div className="card" style={cardStyle}>
          <Link to="/inquiry">
            <img
              src="https://www.freeiconspng.com/uploads/inquiry-icon-png-25.png"
              className="card-img-top"
              alt="Medicine Store"
              style={imageStyle}
            />
            <div style={cardTitleStyle}>
              <h5 className="card-title">Enquiry Details</h5>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}