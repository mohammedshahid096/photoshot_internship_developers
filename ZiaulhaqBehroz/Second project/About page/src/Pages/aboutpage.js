import React from 'react';

class Home extends React.Component{
    render(){
        return(
            <div className="box">
            <img src="assets/pic.jpg" />
            <i className="fas fa-chevron-left fa-lg" id="left" />
            <i className="fas fa-chevron-right fa-lg" id="right" />
            <div id="box">
              <center>
                <h1># 127/B, 60 feet road, Thimmaiah road, Manjunatha nagar,<br />
                  Bangalore-560010. <br /> Near sree balaji Automoboles</h1>
                <i className="fa fa-phone" id="NO">&nbsp; 7892315529</i>
                <h2>Luxury </h2><br /><i id="pg">PG</i>
                <h3>For <i id="gents">GENTS</i><br /> <span id="multi">Multiple sharing avaliable</span> </h3>
                <span className="dot" />
                <span className="dot1" />
                <i className="fas fa-home" id="home1" />
                <i className="fas fa-home" id="home2" />
                <i className="fas fa-home" id="home3" />
                <i className="fas fa-home" id="home4" />
                <i className="fas fa-home" id="home5" />
                <i className="fas fa-home" id="home6" />
              </center>  
            </div>
          </div>
        );
    }
}

export default Home;