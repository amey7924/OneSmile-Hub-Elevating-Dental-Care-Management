import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Examinationdetails() {
  const [examinations, setexamination] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8087/examinations/allexamination")
      .then((response) => {
        console.log(response.data);
        setexamination(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="container">
        <h1>Examinations</h1>
        <div className="row">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">EID</th>
                <th scope="col">APPID</th>
                <th scope="col">TREATMENT NAME</th>
                <th scope="col">TREATMENT NOTES</th>
                <th scope="col">USERNAME</th>
                <th scope="col">FIRST NAME</th>
                <th scope="col">LAST NAME</th>
              </tr>
            </thead>
            <tbody>
              {examinations.map((ex) => {
                return (
                  <tr>
                    <td>{ex.eid}</td>
                    <td>{ex.appointments.app_id}</td>
                    <td>{ex.treatment_name}</td>
                    <td>{ex.treatment_notes}</td>
                    <td>{ex.appointments.usertable.uname}</td>
                    <td>{ex.appointments.usertable.firstname}</td>
                    <td>{ex.appointments.usertable.lastname}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}