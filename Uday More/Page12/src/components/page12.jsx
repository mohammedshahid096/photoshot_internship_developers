import React from "react";
import "./page12.css";
import img from "../Assets/Approvedd.jpg";
import home from "../Assets/home.svg";
import check from "../Assets/check-circle.svg";

function Page12() {
  return (
    <div className="container mt-3">
      <div className="row ">
        <div className="col img">
          <img className="d-block w-100" src={img} alt="img" />
        </div>
        <div className="col text-center gy-5 ">
          <h1 className="p-3 heading">Thanks for waiting</h1>
          <img src={check} alt="check" />
          <h2 className=" p-4">
            Your account has been <br /> Approved Sucessfuly
          </h2>
          <button
            type="button"
            class="mb-5 btn btn-primary btn-lg d-flex align-items-center m-auto"
          >
            <img src={home} className="p-2" alt="home" />
            Homepage
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page12;
