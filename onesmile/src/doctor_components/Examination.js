import React, { useRef, useState } from "react";

import axios from "axios";
export default function Examination() {
  const [examinationCharges, setExaminationCharges] = useState("");
  const [applicationId, setApplicationId] = useState("");


var firstName=localStorage.getItem("firstName");
var lastName=localStorage.getItem("lastName");
var app_id=localStorage.getItem("appid");

const [Tname, settname] = useState('OTHER');
var Tnotes=useRef();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    console.log(firstName);
    console.log(lastName);
    console.log(app_id);
    console.log(Tnotes.current.value);
    console.log(examinationCharges)
    console.log(Tname);

    axios.post("http://localhost:8087/examinations/addexamination", {
       
        treatment_name:Tname,
        treatment_notes:Tnotes.current.value,
        appointments:{app_id: app_id}
    }).then(response => {
        console.log(response.data);
        alert("Examine  successfully");
        navigate("/home");
    }).catch((error) => {
        console.log(error);
    });
    
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div class="row mt-3">
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
                  value={localStorage.getItem("firstName")}
                  readOnly={true}
                />
              </div>
              <div className="td1 mt-3">
                <div className="lbl">
                  Treatment : <span className="red">*</span>
                </div>
              </div>
              <div className="td1" style={{ width: "85%" }}>
                <select
                  class="form-select "
                  aria-label="Default select example"
                  onChange={event => settname(event.target.value)}
                >
                  <option selected>Select Treatment</option>
                  <option value="Dental Impalts">Dental Implants</option>
                  <option value="Root Canal">Root Canal Theraphy</option>
                  <option value="Kids dentistry">Kids dentistry</option>
                  <option value="Gums Theraphy">Gums Theraphy</option>
                </select>
              </div>
              <div className="td1 mt-3">
                <div className="lbl">
                  Examination Charges : <span className="red">*</span>
                </div>
              </div>
              <div className="td2">
                <input
                  type="text"
                  maxLength={30}
                  className="input_fd"
                  style={{ width: "85%" }}
                  onChange={(e) => setExaminationCharges(e.target.value)}
                  required
                />
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
                  className="input_fd"
                  style={{ width: "85%" }}
                  value={lastName}  
                  readOnly={true}                
                />
              </div>
              <div className="td1 mt-3">
                <div className="lbl">
                  Application Id : <span className="red">*</span>
                </div>
              </div>
              <div className="td2">
                <input
                  type="text"
                  maxLength={30}
                  className="input_fd"
                  style={{ width: "85%" }}
                  value={app_id}
                  readOnly={true}
                  
                />
              </div>
              <div className="td1 mt-3">
                <div className="lbl">
                  Treatment Notes : <span className="red">*</span>
                </div>
              </div>
              <div class="form-floating">
                <textarea
                  style={{ width: "85%", height: "150%" }}
                  className="form-control"
                  id="floatingTextarea"
                  ref={Tnotes}
                  required
                ></textarea>
              </div>
            </div>
          </div>
          <div class="text-center mt-5 me-5 pe-5 ">
            <button type="submit" class="btn btn-success btn-w-5">
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
