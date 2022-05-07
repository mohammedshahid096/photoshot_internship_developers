import React from "react";

export default function Row1_profile() {
  return (
    <>
      <div id="cancel_icon">
        <img src="https://img.icons8.com/color/48/000000/delete-sign--v1.png" />
      </div>

      <div className="row">
        <div id="image_circle" className=""></div>
      </div>

      <div className="row " id="profile_row">
        <div className="col-sm-2 offset-sm-4">
          <label htmlFor="firstName">
            First Name <span className="required">*</span>
          </label>
          <br />
          <input type="text" id="firstName" className="correctLogo" required />
        </div>

        <div className="col-sm-2">
          <label htmlFor="secondtName">
            Last Name <span className="required">*</span>
          </label>
          <br />
          <input type="text" id="secondName" className="correctLogo" required />
        </div>
      </div>
      {}
    </>
  );
}
