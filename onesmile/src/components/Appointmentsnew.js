import React from 'react';

export default function Appointmentsnew() {
  const backgroundImage = 'https://png.pngtree.com/back_origin_pic/04/54/70/2cd697ae026b76105a4503dcc7dd7c31.jpg';

  return (
    <div
      className="container-fluid"
      style={{
        margin: '10px',
        fontFamily: 'Arial, sans-serif',
        position: 'relative',
        height: '500px',
        overflow: 'hidden',
      }}
    >
      <div
        className="blur-background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          filter: 'blur(1px)',
        }}
      ></div>
      <div className="row">
        <div className="col-md-6 offset-md-3 transperent" style={{ backgroundColor: 'light-blue' }}>
          {/* Apply transparency to the background color */}
          <div className="col-12">
            <h3 className="fw-normal text-secondary fs-4 text-uppercase mb-4" style={{ textAlign: 'center', color: 'blue' }}>Book Appointment</h3>
          </div>
          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" className="form-control" placeholder="First Name" />
              </div>
              <div className="col-md-6">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" className="form-control" placeholder="Last Name" />
              </div>
              <div className="col-md-6">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input type="tel" id="phoneNumber" className="form-control" placeholder="Phone Number" />
              </div>
              <div className="col-md-6">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className="form-control" placeholder="Enter Email" />
              </div>
              <div className="col-md-6">
                <label htmlFor="date">Date</label>
                <input type="date" id="date" className="form-control" placeholder="Enter Date" />
              </div>
              <div className="col-12">
                <label htmlFor="message">Message</label>
                <textarea id="message" className="form-control" placeholder="Message"></textarea>
              </div>
              <div className="col-12 mt-5">
                <button type="submit" className="btn btn-primary float-end">Book Appointment</button>
                <button type="button" className="btn btn-danger float-end me-2">Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
