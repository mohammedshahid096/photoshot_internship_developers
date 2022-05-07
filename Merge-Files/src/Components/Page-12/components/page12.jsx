import React from "react";
import page12 from "./page12.module.css";
import img from "../Assets/Approvedd.jpg";
import home from "../Assets/home.svg";
import check from "../Assets/check-circle.svg";

function Page12() {
  return (
    <div className={`${page12.containerr} container  mt-3`}>
      <div className="row ">
        <div className={`col ${page12.img}`}>
          <img className="d-block w-100" src={img} alt="img" />
        </div>
        <div className="col text-center gy-5 ">
          <h1 className={`p-3 ${page12.heading}`}>Thanks for waiting</h1>
          <img src={check} alt="check" />
          <h2 className={`${page12.h2} p-4`}>
            Your account has been <br /> Approved Sucessfuly
          </h2>
          <button
            type="button"
            class={`mb-5 btn-primary btn-lg d-flex align-items-center m-auto ${page12.btn}`}
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
