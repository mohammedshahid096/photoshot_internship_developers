import React from "react";
import logo1 from "./logo1.png";
import pic from "./pic.png";
import "./style.css";

function Index() {
  const loginForm = document.querySelector("form.login");
const signupBtn = document.querySelector("label.signup");
const loginText = document.querySelector(".title-text .login");

  function cl(e)
  {
    loginForm.style.marginLeft = "-50%"
    loginText.style.marginLeft = "-50%"
  }
  function cli(e)
  {
    loginForm.style.marginLeft = "0%"
    loginText.style.marginLeft = "0%"
  }
  function clicke(e)
  {
    signupBtn.click();
    return false;
  }
  return (
    <div className="body">
      <div className="contariner">
        <div className="LN"></div>
        <img className="logo" src={logo1} />
        <h1 className="title0">Photoshooto</h1>
        <p className="title1">"Your Memories, Our Promiso"</p>
      </div>
      <p className="pic">
        <img src={pic} />
        <br />
        &nbsp; Enter your personal details <br /> &nbsp; &nbsp; and start
        journey with us
      </p>

      <div className="wrapper">
        <div className="title-text">
          <div className="title login">Log In Form</div>
          <div className="title signup">
            <ion-icon name="arrow-back-outline"></ion-icon>&nbsp; SignUp Form
          </div>
        </div>
        <div className="form-container">
          <div className="slide-controls">
            <input type="radio" name="slider" id="login" checked />
            <input type="radio" name="slider" id="signup" />
            <label for="login" className="slide login" onClick={cli}>
              <ion-icon name="log-in-outline"></ion-icon>&nbsp; Log IN
            </label>
            <label for="signup" className="slide signup" onClick={cl}>
              <ion-icon name="person-circle-outline"></ion-icon>&nbsp; SignUp
            </label>
            <div className="slide-tab"></div>
          </div>
          <div className="form-inner">
            <form action="#" className="login">
              <div className="field">
                <br />
                <br /> E-mail
                <input
                  type="text"
                  placeholder="nimishatripathi37@gmail.com"
                  required
                />
              </div>
              <br />
              <br />
              <br />
              <div className="field">
                {" "}
                Password
                <input
                  type="password"
                  placeholder="-----"
                  id="id_password"
                  required
                />
                <i className="far fa-eye" id="togglePassword"></i>
              </div>
              <br />
              <br />
              <div>
                <input type="checkbox" id="checkbox" />
                <span className="#" id="remember" />
                Remember me
              </div>

              <div className="pass-link">
                <br />
                <a href="#">Forgot password?</a>
              </div>
              <div className="field">
                <br />
                <br />
                <input type="submit" value="Login" />
              </div>
              <br />
              <div className="signup-link">
                Not a member?
                <a href="#" onClick={clicke}>SignUp Now</a>
              </div>
            </form>
            <form action="#" className="signup">
              <div className="field">
                Ofice No / House NO / Flat NO
                <input type="text" placeholder="74 D Crystal palm" required />
              </div>
              <div className="field">
                Society / Street name
                <input type="text" placeholder="Runwal Garden City" required />
              </div>
              <div className="field">
                Add landmark
                <input type="text" placeholder="Near Ram temple" required />
              </div>
              <br />
              <div className="CP">
                <p>
                  City <br />
                  <input type="text" placeholder="Mumbai" required />
                </p>
                <p>
                  Pincode <br />
                  <input type="text" placeholder="565565" required />
                </p>
                <p>
                  Country <br />
                  <select type="text" className="country" required>
                    <option value="#"></option>
                    <option value="#">America</option>
                    <option value="#">UK</option>
                    <option value="#">India</option>
                    <option value="#">Pakistan</option>
                  </select>
                </p>
              </div>
              <div>
                <input type="checkbox" />
                &nbsp;
                <span className="term0">
                  Create an account means you're okey with our Terms of Service,
                  Pricacy Policy, and our default Notification Settings.
                  <span className="term">
                    * You must agree to the Terms of Service
                  </span>
                </span>
              </div>
              <div className="field">
                <input type="submit" value="Create Account" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
