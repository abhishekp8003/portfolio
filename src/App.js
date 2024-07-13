import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Project from "./components/Project";
import Error from "./components/Error";
// import Links from "./components/Links";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const AppLayout = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home key='/' />} errorElement={<Error/>} />
                <Route exact path="/about" element={<About key='/about' />} errorElement={<Error/>}/>
                <Route exact path="/Portfolio" element={<Portfolio key='/Portfolio' />} errorElement={<Error/>}/>
                <Route exact path="/project" element={<Project key='/project' />} errorElement={<Error/>}/>
                {/* <Route exact path="/links" element={<Links key='/links' />} errorElement={<Error/>}/> */}
                <Route exact path="/contact" element={<Contact key='/contact' />} errorElement={<Error/>}/>
            </Routes>
        </Router>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);