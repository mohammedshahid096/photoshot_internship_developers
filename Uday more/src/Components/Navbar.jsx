import React from "react";
import "./Navbar.css";
import icon from "../Assets/chatbot.png";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-light fixed-top shadow-lg">
        <div class="container-fluid">
          <a class="navbar-brand m-auto text-white name">M K B</a>
          <form class="d-flex">
            <button class="btn" type="submit">
              <img src={icon} height="16px" width="40px" alt="btn"></img>
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
