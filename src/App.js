import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./Components/Main/Main";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import Coupe from "./Components/Coupe/Coupe";
import Electric from "./Components/Electric/Electric";
import Hybrid from "./Components/Hybrid/Hybrid";
import Sedan from "./Components/Sedan/Sedan";
import Locations from "./Components/Locations/Locations";
import Help from "./Components/Help/Help";
import Pricing from "./Components/Pricing/Pricing";
import Scooter from "./Components/Scooter/Scooter";

function App() {
  return (
    <div className="app-wrapper">
        <Header />
            <div className="app-wrapper-content">
                <Route exact={true} path='/main' render={() => <Main /> } />
                <Route exact={true} path='/coupe' render={() => <Coupe /> } />
                <Route exact={true} path='/electric' render={() => <Electric /> } />
                <Route exact={true} path='/hybrid' render={() => <Hybrid /> } />
                <Route exact={true} path='/scooter' render={() => <Scooter /> } />
                <Route exact={true} path='/sedan' render={() => <Sedan /> } />
                <Route exact={true} path='/pricing' render={() => <Pricing /> } />
                <Route exact={true} path='/locations' render={() => <Locations /> } />
                <Route exact={true} path='/help' render={() => <Help /> } />
            </div>
        <Footer />
    </div>
  );
}

export default App;
