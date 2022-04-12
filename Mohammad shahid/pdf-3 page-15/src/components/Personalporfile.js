import React from "react";

export default function Personalporfile() {
  return (
    <>
      <div className="row">
        <div>
          <span>
            <hr style={{ width: "30%", display: "inline-flex" }} /> Personal
            Information <hr style={{ width: "30%", display: "inline-flex" }} />
          </span>
        </div>
      </div>

      <div className="row p-md-3">
        <div className="col">
          <label htmlFor="">
            Email <span className="required">*</span>
          </label>
          <br />
          <input type="text" className="profileInput correctLogo" required />
        </div>

        <div class="w-100"></div>
        <br />
        <div className="col">
          <label htmlFor="">
            Phone <span className="required">*</span>
          </label>
          <br />
          <input type="phone" className="profileInput correctLogo" required />
        </div>

        <div class="w-100"></div>
        <br />

        <div className="col">
          <label htmlFor="">
            Gender <span className="required">*</span>
          </label>
          <label htmlFor="genderSelect" style={{paddingLeft:"27%"}}>Date of Birth  <span className="required">*</span> </label>
          <br />
          <select name="" id="genderSelect">
            <option value="">Male</option>
            <option value="">Female</option>
          </select>
          <input type="date" id="genderSelect" style={{marginLeft:"15px"}} />

        </div>

        <div class="w-100"></div>
        <br />
        
        <div className="col">
          <label htmlFor="">
            Languages known <span className="required">*</span>
          </label>
          <br />
          <select name="" id="genderSelect" style={{width:"85%"}}>
            <option value="">English</option>
            <option value="">Hindi</option>
            <option value="">Telugu</option>
            <option value="">Kanada</option>
          </select>
        </div>

        <div class="w-100"></div>
        <br />

        <div className="col">
          <label htmlFor="">
            Office No./House No./Flat No. <span className="required">*</span>
          </label>
          <br />
          <input type="text" className="profileInput" required />
        </div>
        <div class="w-100"></div>
        <br />

        <div className="col">
          <label htmlFor="">
            Street name/Society name <span className="required">*</span>
          </label>
          <br />
          <input type="text" className="profileInput" required />
        </div>
        <div class="w-100"></div>
        <br />

        <div className="col">
          <label htmlFor="">
            Landmark name <span className="required">*</span>
          </label>
          <br />
          <input type="text" className="profileInput" required />
        </div>

        <div class="w-100"></div>
        <br />

        <div className="row">
          <div className="col">
            
          <label htmlFor="">
            Pincode <span className="required">*</span>
          </label>
          <br />
          <input type="text" className="profileInput" required />
          </div>

          <div className="col">
            
          <label htmlFor="">
            Country <span className="required">*</span>
          </label>
          <br />
          <select name="" id="genderSelect" style={{width:"79%"}}>
            <option value="">India</option>
            <option value="">Canada</option>
          </select>
          </div>
        </div>

        <div class="w-100"></div>
        <br />

        <div className="row">
          <div className="col">
            
          <label htmlFor="">
            City <span className="required">*</span>
          </label>
          <br />
          <select name="" id="genderSelect" style={{width:"79%"}}>
            <option value="">Bangalore</option>
            <option value="">Hyderabad</option>
          </select>
          </div>

          <div className="col">
            
          <label htmlFor="">
            State/Province <span className="required">*</span>
          </label>
          <br />
          <select name="" id="genderSelect" style={{width:"79%"}}>
            <option value="">India</option>
            <option value="">Canada</option>
          </select>
          </div>
        </div>


      </div>
    </>
  );
}
