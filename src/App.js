import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./Components/Main/Main";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="app-wrapper">
        <Header />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
