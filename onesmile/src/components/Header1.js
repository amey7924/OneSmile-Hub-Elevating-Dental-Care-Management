import React from "react";
import img1 from "./images/logo1.png";
import { Link, useNavigate } from "react-router-dom";
import style1 from "../App.css";
import Cookie from "js-cookie";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Header1() {
  const navigate = useNavigate();
  const myStyle = {
    // backgroundColor:"rgb(250,240,225)",
    backgroundColor: "rgb(184,227,236)",
    padding: "10px",
    fontFamily: "Sans-Serif",
    // position:"fixed",
    // overflow: "hidden",
  };
  var isLoggedIn = false;
  if (window.sessionStorage.getItem("loginstore") == "1") {
    isLoggedIn = true;
  }

  var logouthandle = () => {
    window.sessionStorage.setItem("loginstore", "0");
    Cookie.remove("userlogin");
    Cookie.remove("uid");
    Cookie.remove("usersetid");
    isLoggedIn = false;
    console.log(isLoggedIn);
    alert("hi");
    navigate("/loginpage");
    window.location.reload();
  };

  const handlelogin = () => {
    alert("login");

    Cookie.set("loginbook", 1, {
      expires: 1,
      secure: true,
      sameSite: "strict",
    });
  };
  var handlebook = () => {
    Cookie.set("book_s", 2);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light" style={myStyle}>
        <div class="container-fluid ">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <a class="navbar-brand" href="#">
            <img src={img1} alt="" width="100px" height="80px" />
            <span className="h2 p-3 ">OneSmile</span>
          </a>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarTogglerDemo03"
          >
            <div className="d-flex justify-content-center">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li class=" h4 nav-item">
                  <a class="nav-link active" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li class=" h4 nav-item ">
                  <Link
                    className="nav-link active w-100 p-2"
                    href="/#aboutpage"
                  >
                    {" "}
                    About us
                  </Link>
                </li>
                <li class=" h4 nav-item">
                  <Link
                    className="nav-link active w-100 p-2"
                    href="#"
                    to="/treatmentspage"
                  >
                    Treatments
                  </Link>{" "}
                </li>
                {isLoggedIn ? (
                  <li className="h4 nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Details
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="/myprofilepage">
                          My Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/UserAppointmentspage"
                        >
                          My Appointments
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          to="/UserExaminationpage"
                        >
                          My Examinations
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/UserPaymentspage">
                          My Payments
                        </Link>
                      </li>
                    </ul>
                  </li>
                ) : (
                  <li class=" h4 nav-item ">
                    <Link className="nav-link active" href="#">
                      Reviews
                    </Link>
                  </li>
                )}

                {isLoggedIn ? (
                  <li className="nav-item">
                    <Link
                      className="nav-link active text-white w-100 p-2"
                      to="/appointmentspage"
                    >
                      <button className="btn btn-primary" onClick={handlebook}>
                        Book an appointment
                      </button>
                    </Link>
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link
                      className="nav-link active text-white w-100 p-2"
                      to="/loginpage"
                    >
                      <button className="btn btn-primary ">
                        Book an appointment
                      </button>
                    </Link>
                  </li>
                )}

                {isLoggedIn ? (
                  <li class="nav-item">
                    <Link className="nav-link active text-white w-100 p-2">
                      <button
                        className="btn btn-primary"
                        onClick={logouthandle}
                      >
                        Logout
                      </button>
                    </Link>
                  </li>
                ) : (
                  <li class="nav-item">
                    <Link
                      className="nav-link active text-white w-100 p-2"
                      to="/loginpage"
                    >
                      <button className="btn btn-primary" onClick={handlelogin}>
                        Login
                      </button>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
