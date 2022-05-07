import React from "react";
import page6 from "./Page6.module.css";
import img1 from "./img1.png";
import img2 from "./img2.png";

function Page6() {
  return (
    <div className={`${page6.box}`}>
      <div>
        <img src={img1} className={`${page6.imgfit}`} />
        <img className={`${page6.img2}`} src={img2} />
      </div>
      <div className={page6.content}>
        <span
          style={{ fontSize: "30px", fontWeight: "bold", color: "#023e8a" }}
        >
          Thanks for Waiting
        </span>
        <p className={page6.para}>
          Sorry! Your Account approval <br /> has been declined.
        </p>
        <button
          className={page6.btn}
          onclick="document.location='HomePage.html'"
        >
          <i className="fa fa-home"></i>
          HomePage
        </button>
      </div>
    </div>
  );
}

export default Page6;
