import logo from './logo.svg';
//import './Navbar.js';
import './App.css';
//import navbar from './Navbar.js';
//const navbar =(<Navbar/>);
import Navbarz from'./Navbarz.js';
import CardContainer from './Card.js'

/*
// this doesn't work
const displayElement = (
  <div className="App">
    <Navbarz />
  <h1>CS 230L</h1>
  <h2>Section - 02</h2>
  <p>WVU ID: 800401291</p>
  <p>Hi I am D. Ivan Ochoa</p>
</div>
);
*/

function App() {
  return (
    <div className="App">
    <Navbarz />
    <h1>CS 230L</h1>
    <h2>Section - 02</h2>
    <p>WVU ID: 800401291</p>
    <p>Hi I am D. Ivan Ochoa</p>
    <CardContainer />
    </div>
  );
}

export default App;
