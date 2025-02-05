import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import App from '../App.jsx';
import Attraction from './attraction.jsx';
import Exhibitor from './exhibitor.jsx';
import Press from './press.jsx';
import Venue from './venue.jsx';
import Exhibitorsegment from './exhibitorsegment.jsx';
import Sponsorship from './sponsorship.jsx';
import Whatsnew from './whatsnew.jsx';
import Weexpologo from '../assets/images/logo/weexpoindialogo.png';

const Header = () => {
    return (
        <div>
            <Router>
                <header
                    id="header"
                    data-transparent="true"
                    data-fullwidth="true"
                    className="dark submenu-light header-disable-fixed"
                    style={{ backgroundColor: "#000" }}
                >
                    <div className="header-inner marginleftright-6 wasfont">
                        <div className="container">
                            <div id="logo">
                                <Link to="/">
                                    <span className="logo-default">
                                        <img style={{ width: "200px" }} src={Weexpologo} alt="We Expo Logo" />
                                    </span>
                                    <span className="logo-dark">
                                        <img style={{ width: "200px" }} src={Weexpologo} alt="We Expo Logo" />
                                    </span>
                                </Link>
                            </div>

                            <div id="mainMenu-trigger">
                                <a className="lines-button x"><span className="lines"></span></a>
                            </div>
                            <div id="mainMenu">
                                <div className="container">
                                    <nav>
                                        <ul>
                                            <li><Link to="/">Home</Link></li>
                                            <li><Link to="/attraction">Attraction</Link></li>
                                            <li>
                                                <a href="#">Exhibitors</a>
                                                <ul className="dropdown-menu text-dark">
                                                    <li><Link to="/venue">Venue</Link></li>
                                                    <li><Link to="/exhibitor">Exhibitor Registration</Link></li>
                                                    <li><Link to="/exhibitorsegment">Exhibitor Segment</Link></li>
                                                    <li><Link to="/sponsorship">Sponsorship</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link to="/whatsnew">What's New</Link></li>
                                            <li><Link to="/press">Press</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/attraction" element={<Attraction />} />
                    <Route path="/exhibitor" element={<Exhibitor />} />
                    <Route path="/press" element={<Press />} />
                    <Route path="/venue" element={<Venue />} />
                    <Route path="/exhibitorsegment" element={<Exhibitorsegment />} />
                    <Route path="/sponsorship" element={<Sponsorship />} />
                    <Route path="/whatsnew" element={<Whatsnew />} />
                </Routes>
            </Router>
        </div>
    );
}

export default Header;
