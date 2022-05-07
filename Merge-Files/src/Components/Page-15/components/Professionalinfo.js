import React from "react";

export default function Professionalinfo() {
  return (
    <div className="row">
      <div>
        <span>
          <hr style={{ width: "30%", display: "inline-flex" }} /> Professional
          Info <hr style={{ width: "30%", display: "inline-flex" }} />
        </span>
      </div>
      <div className="row p-md-3">
        <div className="col">
          <label htmlFor="">
            Profession <span className="required">*</span>
          </label>
          <br />
          <select name="" id="genderSelect" style={{ width: "79%" }}>
            <option value="">Photographer</option>
            <option value="">Web Developer</option>
          </select>
        </div>

        <div className="col">
          <label htmlFor="">
            State/Province <span className="required">*</span>
          </label>
          <br />
          <input type="range" />
        </div>
      </div>

      <div class="w-100"></div>

      <div className="col">
        <label htmlFor="">
          Studio Name <span className="required">*</span>
        </label>
        <br />
        <input type="phone" className="profileInput correctLogo" required />
      </div>

      <div class="w-100"></div>
      <br />
      <div className="col">
        <label htmlFor="">
          Aadhar Card <span className="required">*</span>
        </label>
        <br />
        <input class="form-control profileInput " type="file" id="formFil" />
      </div>

      <div class="w-100"></div>
      <br />
      <div className="col">
        <label htmlFor="">
          License <span className="required">*</span>
        </label>
        <br />
        <input class="form-control profileInput " type="file" id="formFil" />
      </div>

      <div class="w-100"></div>
      <br />
      <div className="col">
        <label htmlFor="">
          Visiting Card <span className="required">*</span>
        </label>
        <br />
        <input class="form-control profileInput " type="file" id="formFil" />
      </div>

      <div class="w-100"></div>
      <br />
      <div className="col">
        <label htmlFor="">
          Union Card <span className="required">*</span>
        </label>
        <br />
        <input class="form-control profileInput " type="file" id="formFil" />
      </div>
    </div>
  );
}
