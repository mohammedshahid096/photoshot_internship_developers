import React from "react";
import styles from "./Page10.module.css";
import img from "../Assets/Waiting.svg";
import home from "../Assets/home.svg";
import whatsapp from "../Assets/whatsapp.svg";

function Page10() {
  return (
    <div className={`${styles.containerr} container mt-3`}>
      <div className="row ">
        <div className={`col ${styles.img}`}>
          <img className="d-block w-100" src={img} alt="img" />
        </div>
        <div className="col text-center gy-5 position-relative">
          <img className={`${styles.whatsapp}`} src={whatsapp} alt="icon" />
          <h1 className={`p-3 font-italic ${styles.heading}`}>Keep Calm!</h1>
          <h2 className={`p-4 ${styles.h2}`}>
            We'll get back to you with <br /> your account approval in just
            24hrs.
          </h2>
          <button
            type="button"
            class={`mb-5 btn-primary btn-lg d-flex align-items-center m-auto ${styles.btn}`}
          >
            <img src={home} className="p-2" alt="home" />
            Homepage
          </button>
          <p className={`${styles.p}`}>
            Time remaining: <span className={`px-3 ${styles.span}`}>00:00</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page10;
