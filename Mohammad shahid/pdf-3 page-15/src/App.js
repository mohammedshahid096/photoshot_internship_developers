import './App.css';
import photoshootologo from '../src/photos/photoshooto2.png';
import Row1_profile from './components/Row1_profile';
import Personalporfile from './components/Personalporfile';
import Professionalinfo from './components/Professionalinfo';


function App() {
  return (
    <>
    <img id ="mainphotoshootologo" src={photoshootologo} alt="" />
    <div className="container">
     <Row1_profile/>

    <div className="row">
      <div className="col-md-4 offset-md-2 mt-5 " id='personalProfileDiv'>
        <Personalporfile/>
      </div>
      
      <div className="col-md-4 mt-5 m-md-5" id='personalProfileDiv'>
        <Professionalinfo/>
      </div>
    </div>
    <div>
     <center> <input type="submit" value='submit' id='submitbutton'/></center> 
    </div>
    </div>
    <br />
    <br />
    </>
  );
}

export default App;
