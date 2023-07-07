import React from 'react';
import Header from "./components/Header";
import "primereact/resources/primereact.min.css";
import Main from "./components/Main";
import Footer from "./components/Footer";
const App = () => {
    return (
       <div className="h-screen bg-[#232323] grid grid-rows-3">
           <Header />
           <Main />
           <Footer />
       </div>
    );
};

export default App;
