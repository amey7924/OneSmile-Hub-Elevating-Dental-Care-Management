import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  const [selectedQuestion, setSelectedQuestion] = useState('');
  const [answer, setAnswer] = useState('');
 
  const firstname = useRef();
  const lastname = useRef();
  const email = useRef();
  const password = useRef();
  const phno = useRef();
  const username = useRef();
  
  const [username_db, setusers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8087/user/alluser").then((response) => {
      console.log(response.data);
      setusers(response.data);
    }).catch((error) => {
      console.log(error);
    })
  }, []);

  const handleQuestion = (event) => {
    setSelectedQuestion(event.target.value);
  };

  const handleregistration = (event) => {
    event.preventDefault(); // Prevent the default form submission

    console.log(firstname.current.value);
    console.log(lastname.current.value);
    console.log(email.current.value);
    console.log(password.current.value);
    console.log(phno.current.value);
    console.log(username.current.value);
    console.log(selectedQuestion);
    console.log(answer);

    var userstatus=false;
    if(username_db.length<=0){
      userstatus=true;
    }

    for (let i = 0; i < username_db.length; i++) {
      if (username_db[i].uname === username.current.value) {
        alert("please use differnt username username already exist");
        userstatus=false;
        break;
      } else {
        alert("user match");
        userstatus=true;
        break;
      }
    }   
if(userstatus){

    axios
      .post('http://localhost:8087/user/adduser', {
        firstname: firstname.current.value,
        password: password.current.value,
        email: email.current.value,
        mobileno: phno.current.value,
        uname: username.current.value,
        lastname: lastname.current.value,
        answer: answer,
        question: selectedQuestion,
      })
      .then((response) => {
        console.log(response.data);
        alert('user added successfully');
        navigate('/loginpage');
      })
      .catch((error) => {
        console.log(error);
      });
    }
  };

  return (
    <div>
      <section className="container-fluid  bodycolor">
        <div className="container py-5 ">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">Register Yourself</h3>

                  <form onSubmit={handleregistration}>
                    <div className="form-outline mb-4">
                      <input type="text" id="typeEmailX-2" className="form-control form-control-lg" placeholder="First-Name" ref={firstname} required />
                    </div>

                    <div className="form-outline mb-4">
                      <input type="text" id="typePasswordX-2" className="form-control form-control-lg" placeholder="Last-Name" ref={lastname} required />
                    </div>

                    <div className="form-outline mb-4">
                      <input type="text" id="typeEmailX-2" className="form-control form-control-lg" placeholder="Contact Number"  ref={phno} required />
                    </div>

                    <div className="form-outline mb-4">
                      <input type="email" id="typeEmailX-2" className="form-control form-control-lg" placeholder="Email-Id" ref={email} required />
                    </div>

                    <div className="form-outline mb-4">
                      <input type="text" id="typeEmailX-2" className="form-control form-control-lg" placeholder="Username" ref={username} required />
                    </div>

                    <div className="form-outline mb-4">
                      <input type="password" id="typePasswordX-2" className="form-control form-control-lg" placeholder="Password" ref={password} required />
                    </div>

                    <div className="form-outline mb-4">
                      <select
                        className="form-select"
                        id="questionSelect"
                        value={selectedQuestion}
                        onChange={handleQuestion}
                        required
                      >
                        <option value="">Select Question</option>
                        <option value="What is your mother's maiden name?">What is your mother's maiden name?</option>
                        <option value="In what city were you born?">In what city were you born?</option>
                        <option value="What is the name of your first pet?">What is the name of your first pet?</option>
                        <option value="What is the model of your first car?">What is the model of your first car?</option>
                        <option value="What is the name of your favorite teacher from school?">What is the name of your favorite teacher from school?</option>
                      </select>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="text" id="typeAnswerX-2" className="form-control form-control-lg" placeholder="Answer" value={answer} onChange={(e) => setAnswer(e.target.value)} required />
                    </div>

                    <button className="btn btn-primary btn-lg btn-block" type="submit" style={{ margin: 'auto' }}>
                      Register
                    </button>
                  </form>

                  <hr className="my-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
