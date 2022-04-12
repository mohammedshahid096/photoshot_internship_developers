import React from "react";
import "./Page10.css";
import img from "../Assets/Waiting.svg";
import home from "../Assets/home.svg";
import whatsapp from "../Assets/whatsapp.svg";

function Page10() {
  return (
    <div className="container mt-3">
      <div className="row ">
        <div className="col img">
          <img className="d-block w-100" src={img} alt="img" />
        </div>
        <div className="col text-center gy-5 position-relative">
          <img className="whatsapp" src={whatsapp} alt="icon" />
          <h1 className="p-3 font-italic heading">Keep Calm!</h1>
          {/* <img src={check} alt="check" /> */}
          <h2 className=" p-4">
            We'll get back to you with <br /> your account approval in just
            24hrs.
          </h2>
          <button
            type="button"
            class="mb-5 btn btn-primary btn-lg d-flex align-items-center m-auto"
          >
            <img src={home} className="p-2" alt="home" />
            Homepage
          </button>
          <p>
            Time remaining: <span className="px-3">00:00</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page10;
