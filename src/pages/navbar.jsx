import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from '../App';
import Attraction from './attraction';
import Exhibitor from './exhibitor';
import Press from './press';



const navbar = () => {
    return (
        <div>
            
            <header id="header" data-transparent="true" data-fullwidth="true" className="dark submenu-light header-disable-fixed" style={{ backgroundColor: "#000" }}>
                    <div className="header-inner marginleftright-6 wasfont">
                        <div className="container">
                            <div id="logo">
                                
                            </div>

                            <div id="mainMenu-trigger">
                                <a className="lines-button x"><span className="lines"></span></a>
                            </div>
                            <div id="mainMenu">
                                <div className="container">
                                    <nav className="">
                                        <ul>
                                            <li><a href="/">Home</a></li>
                                            <li><a href="attraction">Attraction</a></li>
                                            <li><a href="exhibitor">Exhibitors</a></li>
                                            <li><a href="press">Press</a></li>

                                        </ul>
                                    </nav>
                                </div>
                            </div>

                        </div>
                    </div>
            </header>
            <BrowserRouter>
                <Routes>
                        <Route path="/" element={<App />} />
                        <Route path="attraction" element={<Attraction />}>
                        <Route path="exhibitor" element={<Exhibitor />} />
                        <Route path="press" element={<Press />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default navbar
