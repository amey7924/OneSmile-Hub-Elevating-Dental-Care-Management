import React from "react";

export default function Adddoctors() {
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
            />
          </div>
          <div className="td1 mt-3">
            <div className="lbl">
              User Role: <span className="red">*</span>
            </div>
          </div>
          <div className="td1" style={{ width: "85%" }}>
            <select class="form-select " aria-label="Default select example">
              <option selected>Select User</option>
              <option value="1">Doctor</option>
              <option value="2">Patient</option>
              <option value="3">Admin</option>
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
            />
          </div>
          <div className="td1 mt-3">
            <div className="lbl">
              Password : <span className="red">*</span>
            </div>
          </div>
          <div className="td2">
            <input
              type="text"
              maxLength={30}
              className="input_fd"
              style={{ width: "85%" }}
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
            />
          </div>
        </div>
      </div>
      <div className="container text-center">
        <div className="col-md-4">
      <button type="submit" className="btn btn-primary btn-w-5 mt-3">
            Register
          </button>

        </div>
      </div>
    </div>
  );
}
