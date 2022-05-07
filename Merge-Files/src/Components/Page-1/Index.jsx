import React from "react";
import pic from "./pic.png";
import logo1 from "./logo1.png";
import page1 from "./style.module.css";

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
    <div className={page1.body}>
      <div className={page1.contariner}>
        <div className={page1.LN}></div>
        <img className={page1.logo} src={logo1} />
        <h1 className={page1.title0}>Photoshooto</h1>
        <p className={page1.title1}>"Your Memories, Our Promiso"</p>
      </div>
      <p className={page1.pic}>
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
            <label for="signup" className={`${page1.slide} ${page1.signup}`} onClick={cl}>
              <ion-icon name="person-circle-outline"></ion-icon>&nbsp; SignUp
            </label>
            <div className="slide-tab"></div>
          </div>
          <div className="form-inner">
            <form action="#" className={page1.login}>
              <div className={page1.field}>
                <br />
                <br /> E-mail
                <input type="text" placeholder="Behroz@gmail.com" required />
              </div>
              <br />
              <br />
              <br />
              <div className={page1.field}>
                {" "}
                Password
                <input
                  type="password"
                  placeholder="******"
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
              <div className={page1.field}>
                Society / Street name
                <input type="text" placeholder="Runwal Garden City" required />
              </div>
              <div className={page1.field}>
                Add landmark
                <input type="text" placeholder="Near Ram temple" required />
              </div>
              <br />
              <div className={page1.CP}>
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
                  <select type="text" className={page1.country} required>
                    <option value="#"></option>
                    <option value="#">Afghanistan</option>
                    <option value="#">China</option>
                    <option value="#">India</option>
                    <option value="#">Pakistan</option>
                  </select>
                </p>
              </div>
              <div>
                <input type="checkbox" />
                &nbsp;
                <span className={page1.term0}>
                  <p>
                    Create an account means you're okey with our Terms of
                    Service, Pricacy Policy, and our default Notification
                    Settings.
                  </p>{" "}
                  <span className={page1.term}>
                    * You must agree to the Terms of Service
                  </span>
                </span>
              </div>
              <div className={page1.field}>
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
