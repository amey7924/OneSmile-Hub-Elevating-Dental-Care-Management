import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookie from "js-cookie";
import axios from "axios";
import Cookies from "js-cookie";

export default function Login() {
  const navigate = useNavigate();
  const username = useRef();
  const password = useRef();

  const [getuser, setusers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8087/user/alluser")
      .then((response) => {
        console.log(response.data);
        setusers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
var status=false;
  const handleLogin = () => {
    for (var i = 0; i < getuser.length; i++) {
      if (
       ( username.current.value === getuser[i].uname||username.current.value === getuser[i].email)&&
        password.current.value === getuser[i].password&&
        getuser[i].role=="patient"
      ) {

        status=true;
        window.sessionStorage.setItem("abc", "1");
        window.sessionStorage.setItem("loginstore", "1");
      
        Cookie.set("usersetid", getuser[i].uid, {
          expires: 1,
          secure: true,
          sameSite: "strict",
        });
        
      
       
        Cookie.set("userlogin", username.current.value, {
          expires: 1,
          secure: true,
          sameSite: "strict",
        });

        if (Cookie.get("loginbook") == 1) {
          console.log("login" + Cookie.get("loginbook"));
          navigate("/");
        }
        if (Cookie.get("book_s") == 2) {
          console.log("login" + Cookie.get("book_s"));
          navigate("/appointmentspage");
        }

        // navigate("/appointmentspage")
      } else if (
        username.current.value === getuser[i].uname &&
        password.current.value === getuser[i].password && getuser[i].role=="admin"
      ) {
        status=true;
        window.sessionStorage.setItem("abc", "3");
        Cookie.set("xyz", username.current.value, {
          expires: 1,
          secure: true,
          sameSite: "strict",
        });
        notify("Login successful"); // Call notify with message
        navigate("/adminhomepage");
        window.location.reload();
      } else if (
        username.current.value === getuser[i].uname &&
        password.current.value === getuser[i].password &&getuser[i].role=="doctor"
      ) {
        status=true;
        window.sessionStorage.setItem("abc", "2");
        window.location.reload();
        navigate("/");
      }
      
    }

    if(status==false){
      alert("login faild");
    }
  };

  const notify = (message) => toast(message);

  return (
    <>
      <section
        className="container-fluid  bodycolor"
        style={{ position: "relative" }}
      >
        <div className="container py-5 ">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card shadow-2-strong"
                style={{ borderRadius: "#dd4b39" }}
              >
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">Sign in</h3>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="typeEmailX-2"
                      className="form-control form-control-lg"
                      placeholder="Email"
                      ref={username}
                    />
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="typePasswordX-2"
                      className="form-control form-control-lg"
                      placeholder="Password"
                      ref={password}
                    />
                  </div>
                  <div className="form-check d-flex justify-content-start mb-4">
                    <a href="/ForgotPasswordpage">Click to Forgot password</a>
                   
                  </div>
                  <ToastContainer />
                  <button
                    className="btn btn-primary btn-lg btn-block"
                    type="submit"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                  <a href="/registerpage">
                    <button
                      className="btn btn-primary btn-lg btn-block"
                      type="submit"
                      style={{ marginLeft: "35px" }}
                    >
                      Register
                    </button>
                  </a>
                  <hr className="my-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
