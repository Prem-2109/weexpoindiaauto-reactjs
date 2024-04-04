import React from 'react';
import Pressbanner from '../assets/images/Press/Press-Dugout-1.jpg';
import Insidebanimg from '../assets/images/Press/Exhibitor-Page.png';
import Backgrdimg from '../assets/images/Press/benefit-banner.jpg'

import Footer from './footer';
const press = () => {
  return (
    <div>
      <section id="page-title" className="p-0">
        <div className="parallax-container scrolly-invisible img-loaded" data-bg="" data-velocity="" style={{ backgroundImage: `url(${Pressbanner})` }} data-ll-status="loaded"></div>
        <div className="slide kenburns">
          <div className="kenburns-bg kenburns-bg-animate"></div>
          <div className="bg-overlay"></div>
          <div className="container-fullscreen">
            <div className="row">
              <div className="col-lg-12">
                <img style={{ width: '110%' }} src={Insidebanimg} alt='' />
              </div>
            </div>

          </div>
        </div>

      </section>
      <section className='bg-linear'>
        <div className="container-fullwidht marginleftright">
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8 text-center">
              <p className="wasmediumcaption-white">
                Get an exclusive access to the Press & Media dugout that provide a great coverage of the Auto Show across<br />
                all corners of the exhibit arena.
              </p>
            </div>

            <div className="col-lg-2"></div>

          </div>
        </div>
      </section>
      <section className="background-dark">
        <div className="container parentfont">
          <div className="row press-image-1">
            <div className="col-lg-1"></div>
            <div className="col-lg-5">
              <div className="box-text-2 p-t-60 p-b-50 p-l-30 p-r-40">
                <h5>Press & Media Day will feature the exclusive launches, unveil and official Debut from Auto Brands.
                  Media partners will have access to full day of press conferences from all brands.
                  Top exhibitors will break news or announce to a media-only audience.
                  Media Day will be the opportunity to hear the latest breaking news,
                  product launches and technology trends from the world’s leading brands.
                </h5>
              </div>


            </div>
            <div className="col-lg-6 p-100">
              <span className="wasmediumcaption-white">PRESS &</span>
              <span className="wasmediumcaption-blue">MEDIA
              </span>
              <span className="wasmediumcaption-white">DAY</span>
              <h4 className="text-white">SCHEDULE</h4>
              <div className="row">

                <br />
                <div className="col-lg-5">
                  <span className="waspara">
                    <ul className="list-unstyled" style={{ color: 'white', textDecoration: 'none' }}>
                      <li>Premiere Show </li>
                      <li>Press & Media </li>
                      <li>Celebrity Hours </li>

                    </ul>


                  </span>
                </div>
                <div className="col-lg-1">
                  <span className="waspara">
                    <ul className="list-unstyled" style={{ color: 'white', textDecoration: 'none' }}>
                      <li>-</li>
                      <li>-</li>
                      <li>-</li>

                    </ul>


                  </span>
                </div>
                <div className="col-lg-6 p-0">
                  <span className="waspara">
                    <ul className="list-unstyled" style={{ color: 'white', textDecoration: 'none' }}>
                      <li>16th September,2021</li>
                      <li>12:00 PM - 11:00 PM</li>
                      <li>7:00 PM - 10:00 PM</li>

                    </ul>


                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>



      </section>
      <section>
        <div className="parallax-container scrolly-invisible  img-loaded" data-bg="" data-velocity="" style={{ backgroundImage: `url(${Backgrdimg})` }} data-ll-status="loaded"></div>

        <div className="container-fullwidht marginleftright">
          <div className="row">
            <div className="col-lg-6 text-center m-auto">
            </div>
            <div className="col-lg-6">
              <span className="wasLargeCaption-font-44 text-uppercase">BENEFITS</span>
              <span className="wasmediumcaption line-spacing">
                <ul className="text-uppercase list-icon list-icon-arrow-circle list-icon-colored" style={{ color: '#ffffff' }}>
                  <li>Exclusive Media Pass during event </li>
                  <li>Access to Media Dugouts</li>
                  <li>Publishing Rights</li>
                  <li>Front-Line Access during event</li>
                  <li>Access to cover exclusive launches</li>
                  <li>Dedicated Networking Opportunity</li>
                  <li>1-1 Interview session with Auto Leaders</li>
                  <li>Exclusive Celebrity Coverage </li>

                </ul>
              </span>
            </div>
          </div>
        </div>

      </section>
      <section className="background-dark">
        <div className="container parentfont">
          <div className="row formsignup">

            <div className="col-lg-6 m-auto p-l-80 pad-left ">
              <span className="wasmediumcaption-blue text-center">NOT REGISTERED YET
              </span>
              <br />
              <br />
              <span className="waspara">Register now to access #WAS2021 Stories.
                Our early bird Press & Media passes for the Auto
                show gets you access to the dedicated Media Dugout
                at venue and several other pre-show brand engagements.
                Sign-up to access content of South India’s Largest Mobility event of the year.
              </span>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-5 ">
              <div className="row">
              </div>
              <div className="box-text p-30 ">
                <div className="col-md-12 text-center">

                  <h3 style={{ color: '#000000' }} className="text-center">Register Your Pass</h3>
                </div>


                <form id="id_add_contact " className="p-t-30">
                  <div className="form-group">
                    <label className="sr-only">Representative Full Name</label>
                    <input type="text" value="" id="id_Fullname" placeholder="Representative Full Name " className="form-control form-type-1 " />
                  </div>
                  <div className=" form-group">
                    <label className="sr-only">Name Of Media</label>
                    <input type="text" value="" id="id_Nameofmedia" placeholder="Name Of Media " className="form-control form-type-1" />
                  </div>

                  <div className="form-group">
                    <label className="sr-only">Designation</label>
                    <input type="text" value="" id="id_designation" placeholder="Designation" className="form-control form-type-1 " />
                  </div>
                  <div className="form-group">
                    <label className="sr-only">Email Address</label>
                    <input type="email" value="" id="id_emailid" placeholder="Email Address" className="form-control form-type-1 " />
                  </div>
                  <div className="form-group">
                    <label className="sr-only">Contact Number </label>
                    <input type="text" value="" id="id_contactpersonno" placeholder="Contact Number " className="form-control form-type-1 " />
                  </div>
                  <div className="form-group">
                    <label className="sr-only">City</label>
                    <input type="text" value="" id="id_city" placeholder="City " className="form-control form-type-1" />
                  </div>
                  <div className="row p-0">
                    <div className="col-md-12 text-center">
                      <button type="submit" id="Press_submit" className="btn m-t-30 mt-3 text-center">Submit</button>
                    </div>
                    <div className="col-md-12 text-center">
                      <label className="text-center text-danger animated visible shake" data-animation="shake" id="error" style={{ color: 'red' }}></label>
                    </div>
                  </div>

                </form>

              </div>

            </div>

          </div>

        </div>



      </section>
      <Footer />
    </div>
  )
}

export default press
