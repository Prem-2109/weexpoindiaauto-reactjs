import React from 'react'
import Venuebanner from '../assets/images/resized-images/venue-banner.jpg';
import Venuemap from '../assets/images/venue/Venue-map.jpg';
import Footer from './footer';
const venue = () => {
  return (
    <div>
      <section className="p-0">
           <img className="imagewit" src={Venuebanner} />
       </section>

        <section className="backgrd-grey p-t-40">
            <div className="container-fullwidth marginleftright parentfont">
                <div className="row">
                    <div className="col-lg-12">
                        <span className="wasmediumcaption-black">MULTIPURPOSE VENUE<br />
                            HITEX MULTIPURPOSE VENUE</span>
                    </div>
                </div>
                <div className="row">
                    <div className=" col-lg-12 text-center">

                        <img src={Venuemap} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <br />
                        <span className="wasmediumcaption-black-sm">SPANNING 53 ACRES OF PRIME LAND</span>
                        <br />
                        <br />
                        <h6 className="">In the highly coveted locality of Hyderabad comprising 30,000 Sq.mt of outdoor event area,
                            18,500 sq.m of indoor event, 5,000 sq.m of beautiful Fair Park and huge car parking space for 
                           and international exhibitions, trade fairs, conferences, corporate events and social gatherings.
                        </h6>
                    </div>
                    <div className="col-lg-6">
                    </div>
                </div>
                <div className=""></div>
                <div className="row">
                    <div className="col-lg-6">
                        <br />
                        <span className="wasmediumcaption-black-sm">EXHIBITIONS</span>
                        <br />
                        <br />
                        <h6 className="">HITEX is an ideal venue for B2B exhibitions, B2C exhibitions and the combination of both.
                            Vast indoor and outdoor event areas offer ample space to plan your exhibitions and trade
                            fairs of all sizes.
                        </h6>
                    </div>
                    <div className="col-lg-6">
                    </div>
                </div>

            </div>
        </section>
        <Footer/>
    </div>
  )
}

export default venue
