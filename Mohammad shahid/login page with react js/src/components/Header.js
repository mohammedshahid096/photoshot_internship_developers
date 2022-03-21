import React from 'react'  //rfc short cut
import PhotoshootoLogo from '../photos/photoshooto.png'; 
export default function Header() {
  return (
    <header>
            <div className="row">
                <div className="col-3" stye="background-color: aqua;">
                    <img src={PhotoshootoLogo} alt="logo" id="headerphotologo"/>
                    <h4 id="headerphotoheading">Photoshooto</h4>
                </div>
                <div className="col-md-2 mt-md-5">
                    <a href="/" className="headermenu">About Us</a>
                </div>
                <div className="col-md-2 mt-md-5">
                    <a href="/" className="headermenu">Contact Us</a>
                </div>

                <div className="col offset-md-3 mt-md-5">
                    <i className="material-icons   noti">notifications</i>
                    &nbsp;&nbsp;&nbsp;
                    <a href="/" id="createaccountmenu" className="ml-5">Create account</a>

                </div>
            </div>
        </header>
  )
}
