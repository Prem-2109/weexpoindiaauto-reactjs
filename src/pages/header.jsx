import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import App from '../App.jsx'
import Attraction from './attraction.jsx'
import Exhibitor from './exhibitor.jsx'
import Press from './press.jsx'
import Venue from './venue.jsx'
import Exhibitorsegment from './exhibitorsegment.jsx';
import Sponsorship from './sponsorship.jsx';
import Whatsnew from './whatsnew.jsx';
import Weexpologo from '../assets/images/logo/weexpoindialogo.png';

const header = () => {
    return (
        <div>
            <Router>


                <header id="header" data-transparent="true" data-fullwidth="true" className="dark submenu-light header-disable-fixed" style={{ backgroundColor: "#000" }}>
                    <div className="header-inner marginleftright-6 wasfont">
                        <div className="container">
                            <div id="logo">
                                <Link to="/"> 
                                    <span className="logo-default">
                                        <img style={{ width: "200px" }} src={Weexpologo} alt="" />
                                    </span>
                                    <span className="logo-dark">
                                        <img style={{ width: "200px" }} src={Weexpologo} alt="" />
                                    </span>
                                </Link>
                            </div>

                            <div id="mainMenu-trigger">
                                <a className="lines-button x"><span className="lines"></span></a>
                            </div>
                            <div id="mainMenu">
                                <div className="container">
                                    <nav className="">
                                        <ul>
                                            <li><Link to="/">Home</Link></li>

                                            <li><Link to="/attraction">Attraction</Link></li>
                                            <li><a href="#">Exhibitors</a>
                                                <ul className="dropdown-menu text-dark">
                                                    <li> <Link to="/venue">VENUE</Link></li>
                                                    <li> <Link to="/exhibitor">EXHIBITOR REGISTRATION</Link></li>
                                                    <li> <Link to="/exhibitorsegment">EXHIBITOR SEGMENT</Link></li>
                                                    <li> <Link to="/sponsorship">SPONSORSHIP</Link></li>
                                                </ul>
                                            </li>
                                            <li> <Link to="/whatsnew">What's New</Link></li>
                                            <li> <Link to="/press">Press</Link></li>

                                        </ul>
                                    </nav>
                                </div>
                            </div>

                        </div>
                    </div>
                </header>

                <Routes>

                    <Route path='/' exact element={<App />}></Route>
                    <Route path='/attraction' element={<Attraction />}></Route>
                    <Route path='/exhibitor' element={<Exhibitor />}></Route>
                    <Route path='/press' element={<Press />}></Route>
                    <Route path='/venue' element={<Venue />}></Route>
                    <Route path='/exhibitorsegment' element={<Exhibitorsegment />}></Route>
                    <Route path='/sponsorship' element={<Sponsorship />}></Route>
                    <Route path='/whatsnew' element={<Whatsnew />}></Route>

                </Routes>
            </Router>
        </div>
    )
}

export default header
