import React from 'react';

class Home extends React.Component{
    render(){
        return(
            <div className="box">
        <img src="asset/map.JPG" />
        <i className="right-triangle" id="right">
          <h1><center>We are a profissional travel agency, which is well <br /> know for its trust and quality of services.</center></h1>
          <p>
            <span className="always">Always</span><br />
            <span className="at"> At</span><br />
            <span className="your">your</span><br />
            <span className="service">Service</span>
          </p>
        </i>
        <div className="text">
          <a className="who">Who are we ?</a><br />
          we are a travel agency, and we <br />
          bulit our agency with the <br />
          quality of service and client <br />
          satification, we never <br />
          compramise on the quality of <br />
          service and that is what <br />
          brought us here. <br />
        </div>
        <center className="addre"># 351/A, 5th main, 3d phase, 60 feet road, Thimmaiah road, <br />Manjunatha nagar, Bangalore-560010. <br />Near indian oil petrol bunk</center>
        <div className="contact">
          <i className="fas fa-tty">&nbsp;: 080-23380808</i><br />
          <i className="fa fa-phone">&nbsp;: 9379290808</i><br />
          <i className="fa fa-envelope" id="mail">&nbsp;<a href="https://mail.google.com/mail/u/0/#inbox" id="mail">:mkbtouristikbang@yahoo.com</a></i>
        </div>
        <div className="line">j</div>
      </div>
        );
    }
}

export default Home;
