import React, { useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
export default function Appointmentsnew() {
  const backgroundImage =
    "https://png.pngtree.com/back_origin_pic/04/54/70/2cd697ae026b76105a4503dcc7dd7c31.jpg";

  const [getuser, setuser] = useState([]);
  const [getuserid, setuserid] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:8087/user/alluser")
      .then((response) => {
        console.log(response.data);
        setuser(response.data);
        console.log(response.data.length);

        for (let i = 0; i < response.data.length; i++) {
          if (response.data[i].uname ||response.data[i].email === Cookies.get("userlogin")) {
            setuserid(response.data[i].uid);
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(getuserid);
  }, []);

  var appdate = useRef();
  var apptime = useRef();
  var msg = useRef();

  const handlebooking = (e) => {
    console.log(appdate.current.value);
    console.log(apptime.current.value);
    console.log(msg.current.value);

    e.preventDefault(); //for chrome browser
    axios
      .post("http://localhost:8087/appointments/addappointment", {
        date: appdate.current.value,
        time: apptime.current.value,
        notes: msg.current.value,
        // 'usertable' represents a table, and 'uid' is a field within that table
        usertable: { uid: getuserid },
      })
      .then((response) => {
        console.log(response.data);
        alert("Appointment booked successfully");
        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      className="container-fluid"
      style={{
        margin: "10px",
        fontFamily: "Arial, sans-serif",
        position: "relative",
        height: "500px",
        overflow: "hidden",
      }}
    >
      <div
        className="blur-background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          filter: "blur(1px)",
        }}
      ></div>
      <div className="row">
        <div
          className="col-md-6 offset-md-3 transperent"
          style={{ backgroundColor: "light-blue" }}
        >
          {/* Apply transparency to the background color */}
          <div className="col-12">
            <h3
              className="fw-normal text-secondary fs-4 text-uppercase mb-4"
              style={{ textAlign: "center", color: "black" }}
            >
              Book Appointment
            </h3>
          </div>
          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  id="date"
                  className="form-control"
                  placeholder="Enter Date"
                  ref={appdate}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="date">time</label>
                <input
                  type="time"
                  id="date"
                  className="form-control"
                  placeholder="Enter Date"
                  ref={apptime}
                />
              </div>
              <div className="col-12">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className="form-control"
                  placeholder="Message"
                  ref={msg}
                ></textarea>
              </div>
              <div className="col-md-6">
                <label htmlFor="date">username</label>
                <input
                  type="text"
                  id="date"
                  className="form-control"
                  placeholder="Enter Date"
                  value={Cookies.get("userlogin")}
                />
              </div>
              <div className="col-md-6">
                <label>userid</label>
                <input
                  type="text"
                  id="date"
                  className="form-control"
                  value={getuserid}
                  readOnly={true}
                />
              </div>
              <div className="col-12 mt-5">
                <button
                  type="submit"
                  className="btn btn-primary float-end"
                  onClick={handlebooking}
                >
                  Book Appointment
                </button>
                <button type="button" className="btn btn-danger float-end me-2">
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
