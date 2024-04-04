import React from 'react';
import Topbanner from '../assets/images/Exhibitor-segment/Exhibitor-Segment_Banner.jpg'
import Exhbannerimg from '../assets/images/Exhibitor-segment/Exhibitor-Segment-Section.jpg'
import Firstbanner from '../assets/images/Exhibitor-segment/background-image-blue.jpg';
import Secondbanner from '../assets/images/Exhibitor-segment/Automotive-accessories.jpg';
import Automotive from '../assets/images/Exhibitor-segment/exhibitor-auto-motive.png';
import Footer from './footer';

const exhibitorsegment = () => {
    return (
        <div>
            <section className="p-0">
                <img className="imagewit" src={Topbanner} />
            </section>
            <section className="">

                <div className="parallax-container scrolly-invisible  img-loaded" data-bg="" data-velocity="" style={{backgroundImage: `url(${Exhbannerimg})`}} data-ll-status="loaded"></div>
                <div className="container-fullwidth marginleftright parentfont">
                    <div className="row">
                        <div className="col-lg-5 ">
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-6 pading-para-left">
                            <span className="wasLargeCaption-font-44 text-uppercase">Exhibitor</span>
                            <span className="wasmediumcaption-white-44 text-uppercase">Segment</span>
                            <br />
                            <br />
                            <span className="waspara">
                                <ul className=" list-icon list-icon-arrow-circle list-icon-colored text-white">
                                    <li>Passenger cars – Fuel &amp; EV.</li>
                                    <li>Commercial vehicles – Fuel &amp; EV.</li>
                                    <li>Bikes – Fuel &amp; EV.</li>
                                    <li>Hybrid – Fuel &amp; EV.</li>
                                    <li>Buses – Fuel &amp; EV.</li>
                                    <li>Trucks – Fuel &amp; EV.</li>
                                    <li>Special Vehicles – 3W, Mini, 1 Seater etc.</li>
                                    <li>Auto Technology.</li>
                                    <li>Auto Design.</li>
                                </ul>


                            </span>

                        </div>

                    </div>

                </div>
            </section>
            <section className="">

                <div className="parallax-container scrolly-invisible  img-loaded" data-bg="" data-velocity="" style={{ backgroundImage: `url(${Firstbanner})` }} data-ll-status="loaded"></div>
                <div className="container-fullwidth marginleftright parentfont">
                    <div className="row">
                        <div className="col-lg-5">
                            <img style={{width:'100%'}} src={Automotive} />
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-6 pading-para-left">
                            <span className="wasLargeCaption-font-44 text-uppercase">Automotive parts &</span>
                            <span className="wasmediumcaption-white-44 text-uppercase">components</span>
                            <br />
                            <br />
                            <span className="waspara">
                                <ul className="list-icon list-icon-arrow-circle list-icon-colored text-white" >
                                    <li>Engine and mechanical systems.</li>
                                    <li>Gearbox, exhaust, axle, steering brakes,<br /> suspension and body systems.</li>
                                    <li>Electric and electronic systems.</li>
                                    <li>Tire and wheels.</li>
                                </ul>


                            </span>

                        </div>

                    </div>

                </div>
            </section>
            <section className="">

                <div className="parallax-container scrolly-invisible  img-loaded" data-bg="" data-velocity="" style={{ backgroundImage: `url(${Secondbanner})` }} data-ll-status="loaded"></div>
                <div className="container-fullwidth marginleftright parentfont">
                    <div className="row">
                        <div className="col-lg-5 m-auto">
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-6 pading-para-left">
                            <span className="wasLargeCaption-font-44 text-uppercase">Automotive</span>
                            <span className="wasmediumcaption-white-44 text-uppercase">accessories</span>
                            <br />
                            <br />
                            <span className="waspara">
                                <ul className="list-icon list-icon-arrow-circle list-icon-colored text-white" >
                                    <li>Interior trimming.</li>
                                    <li>Car audio and video systems.</li>
                                    <li>Navigation and telecom systems.</li>
                                    <li>Air conditioning systems.</li>
                                    <li>Safety and vehicle security systems.</li>
                                    <li>Measuring, testing and control devices &amp; systems.</li>
                                    <li>Maintenance and repair, garage, workshop &amp; workstation equipment.</li>
                                    <li>Car care products.</li>
                                    <li>Paints, lubricants, additives and other auto supplies.</li>
                                    <li>Related manufacturing technology, machinery, equipment and tools.</li>
                                    <li>Automotive financial services.</li>
                                </ul>


                            </span>

                        </div>

                    </div>

                </div>
            </section>
            <Footer/>
        </div>

    )
}

export default exhibitorsegment
