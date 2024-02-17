import React, { useRef, useState } from "react";
import axios from "axios";
export default function AppointmentReschedule() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [hours, setHours] = useState("");
  const [amPm, setAmPm] = useState("");

  var getdate = useRef();
  var gettime = useRef();
  var appid = localStorage.getItem("appid");

  const handleReschedule = (date) => {
    console.log(getdate.current.value);
    console.log(gettime.current.value);
    setSelectedDate(date);

    axios
      .put("http://localhost:8087/appointments/updateappointment/" + appid, {
        date: getdate.current.value,
        time: gettime.current.value,
      })
      .then((response) => {
        alert("Resheduled");
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="container">
        <fieldset disabled>
          <div className="mb-3">
            <label htmlFor="disabledTextInput" className="form-label mt-3">
              <h4>Application Id</h4>
            </label>
            <input
              type="text"
              id="disabledTextInput"
              value={appid}
              className="form-control"
              placeholder="Application ID"
              style={{ width: "50%" }}
            />
          </div>
        </fieldset>
        <div>
          <h3>Select a Date</h3>
          <input type="date" className="hr me-3" ref={getdate} />
        </div>
        <div className="time mt-3">
          <h3>Select Time</h3>
          <input type="time" ref={gettime} />
        </div>
        <div className="text-center mt-5">
          <button
            type="submit"
            className="btn btn-primary btn-w-5"
            onClick={handleReschedule}
          >
            Reschedule
          </button>
        </div>
      </div>
    </>
  );
}
