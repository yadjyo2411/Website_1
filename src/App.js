import logo from './logo.svg';
import './App.css';
import Header from "./myComp/header";
import {Footer} from "./myComp/Footer";
import {Fodlst} from "./myComp/Fodlst";
import { Route, Switch, Link, Router } from 'react-router-dom';
import About from "./About";
import Error from './Error';


function App() {
  return (
    <>
    
    <Header title="PAYMENT" searchBar={true}/>
    
   
    <Footer/>
<Switch>
  <Route path='/about' component={About}/>
  <Route component={Error}/>
</Switch>

   {/* <About/> */}
    </>
    
    

  );
  

}

export default App;
