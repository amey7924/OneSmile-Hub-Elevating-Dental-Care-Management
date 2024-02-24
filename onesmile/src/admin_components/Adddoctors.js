import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Adddoctors() {
  const navigate = useNavigate();
  const firstname = useRef();
  const lastname = useRef();
  const email = useRef();
  const password = useRef();
  const phno = useRef();
  const username = useRef();

function handledoctor(){
  console.log(firstname.current.value + ' ' + lastname.current.value  + ' ' + email.current.value )
  console.log(password.current.value + ' ' + phno.current.value  + ' ' + username.current.value )
  axios
  .post('http://localhost:8087/user/adddoctor', {
    firstname: firstname.current.value,
    password: password.current.value,
    email: email.current.value,
    mobileno: phno.current.value,
    uname: username.current.value,
    lastname: lastname.current.value,
    question: selectedQuestion,
    answer: answer

  })
  .then((response) => {
    console.log(response.data);
    alert('doctor added successfully');
    navigate('/adminhomepage');
  })
  .catch((error) => {
    console.log(error);
  });

}
const [selectedQuestion, setSelectedQuestion] = useState('');
const [answer, setAnswer] = useState('');
const handleQuestion = (event) => {
  setSelectedQuestion(event.target.value);
};

  return (
    <div class="container">
      <div class="row">
        <div class="col-6">
          <div className="td1">
            <div className="lbl">
              First Name : <span className="red">*</span>
            </div>
          </div>
          <div className="td2">
            <input
              type="text"
              maxLength={30}
              className="input_fd"
              style={{ width: "85%" }}
              ref={firstname}
              
              
            />
          </div>
          <div className="td1 mt-3">
            <div className="lbl">
              User Name : <span className="red">*</span>
            </div>
          </div>
          <div className="td2">
            <input
              type="text"
              maxLength={30}
              className="input_fd"
              style={{ width: "85%" }}
              ref={username}
            />
          </div>
          <div className="td1 mt-3">
            <div className="lbl">
              Mobile number : <span className="red">*</span>
            </div>
          </div>
          <div className="td2">
            <input
              type="text"
              maxLength={30}
              className="input_fd"
              style={{ width: "85%" }}
              ref={phno}
            />
          </div>
          <div className="td1 mt-3">
                      <select
                       style={{ width: "85%" }}
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

                    
        </div>
        <div class="col-6">
          <div className="td1">
            <div className="lbl">
              Last Name : <span className="red">*</span>
            </div>
          </div>
          <div className="td2">
            <input
              type="text"
              maxLength={30}
              className="input_fd"
              style={{ width: "85%" }}
              ref={lastname}
            />
          </div>
          <div className="td1 mt-3">
            <div className="lbl">
              Password : <span className="red">*</span>
            </div>
          </div>
          <div className="td2">
            <input
              type="password"
              maxLength={30}
              className="input_fd"
              style={{ width: "85%" }}
              ref={password}
            />
          </div>
          <div className="td1 mt-3">
            <div className="lbl">
              Email id : <span className="red">*</span>
            </div>
          </div>
          <div className="td2">
            <input
              type="text"
              maxLength={30}
              className="input_fd"
              style={{ width: "85%" }}
              ref={email}
            />
          </div>
          <div className="td1 mt-3">
                      <input type="text" id="typeAnswerX-2"  placeholder="Answer"  style={{ width: "85%" }}value={answer} onChange={(e) => setAnswer(e.target.value)} required />
                    </div>
        </div>
      </div>
      <div className="container text-center" >
        <div className="col-md-12 my-2" style={{ marginRight:"80px"}}>
      <button type="submit" className="btn btn-primary btn-w-5 mt-3" onClick={handledoctor}>
            Register
          </button>

        </div>
      </div>
    </div>
  );
}
