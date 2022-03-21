import './App.css';
import Header from './components/Header';
import Logindiv from './components/Logindiv';
import Phoselectionadd from './components/Phoselectionadd';

function App() {
  return (
    <>
    <div className="container-fluid">
      <Header/> {/*header component */}
      <div className="row" id="mainrow2">
        <Phoselectionadd/>

        <Logindiv/>
      </div>
    </div>
    </>
  );
}

export default App;
