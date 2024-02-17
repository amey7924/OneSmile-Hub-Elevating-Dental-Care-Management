import React, { useEffect, useRef, useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import Cookie from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from 'js-cookie';

export default function Login() {
  const navigate = useNavigate();
  const username = useRef();
  const password = useRef();

  useEffect(() => {
    // Your useEffect logic here
  }, []);

  const handleLogin = () => {


    if (username.current.value === "sufi" && password.current.value === "123") {
      window.sessionStorage.setItem("abc", "1");
      window.sessionStorage.setItem("loginstore", "1");
      Cookie.set('userlogin', username.current.value, {
        expires: 1,
        secure: true,
        sameSite: 'strict',
      });

      if (Cookies.get("loginbook") == 1) {
        console.log("login" + Cookie.get('loginbook'));
        navigate("/");
      }
      if (Cookies.get("book_s") == 2) {
        console.log("login" + Cookie.get('book_s'));
        navigate("/appointmentspage");
      }

      // navigate("/appointmentspage")
    }
    else if (username.current.value === "admin" && password.current.value === "123") {
      window.sessionStorage.setItem("abc", "3");
      Cookie.set('xyz', username.current.value, {
        expires: 1,
        secure: true,
        sameSite: 'strict',
      });
      notify("Login successful"); // Call notify with message
      navigate("/adminhomepage");
      window.location.reload();
    } else if (username.current.value === "doctor1" && password.current.value === "123") {
      window.sessionStorage.setItem("abc", "2");
      window.location.reload();
      navigate("/");
    }
  };

  const notify = (message) => toast(message);

  return (
    <>
      <section className="container-fluid vh-100 bodycolor" style={{ position: 'relative' }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong" style={{ borderRadius: "#dd4b39" }}>
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">Sign in</h3>
                  <div className="form-outline mb-4">
                    <input type="email" id="typeEmailX-2" className="form-control form-control-lg" placeholder="Email" ref={username} />
                  </div>
                  <div className="form-outline mb-4">
                    <input type="password" id="typePasswordX-2" className="form-control form-control-lg" placeholder="Password" ref={password} />
                  </div>
                  <div className="form-check d-flex justify-content-start mb-4">
                    <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                    <label className="form-check-label" htmlFor="form1Example3">&nbsp;  Remember password </label>
                  </div>
                  <ToastContainer />
                  <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={handleLogin}>Login</button>
                  <a href="/registerpage">
                    <button className="btn btn-primary btn-lg btn-block" type="submit" style={{ marginLeft: "35px" }}>
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
