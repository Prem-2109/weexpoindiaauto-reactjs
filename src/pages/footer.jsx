import React from 'react'
import Footerbg from '../assets/images/contact-us/contact-bottom-bg.jpg'
const footer = () => {
  return (
    <div>
      <section className="">
        <div className="parallax-container scrolly-invisible img-loaded" data-bg="" data-velocity="" style={{backgroundImage:`url(${Footerbg})`}} data-ll-status="loaded"></div>
        <div className="c no-padding equalize" data-equalize-item=".text-box">
            <div className="container">
                <div className="row col-no-margin">
                    <div className="col-lg-3 background-white">
                        <div className="p-20">
                            <h4 className="text-left">Participate at</h4>
                            <h5 className="text-left" style={{color:"#000",fontSize:"large"}}>
                                WEEXPOINDIA AUTO
                            </h5>
                        </div>
                    </div>
                    <div className="col-lg-3"></div>
                    <div className="col-lg-3"></div>
                    <div className="col-lg-3"></div>

                    <div className="col-lg-3 background-white">
                        <div className="text-boxs">
                            <a className="text-left" href="#">
                                <h4 className="text-left">Exhibitors</h4>
                                <p className="text-left" style={{color:"black"}}>
                                    Make most of 2021 by showcasing & exhibiting your latest mobility at WEEXPOAUTOSHOW  where the most iconic brands exhibit their innovations, products, and ideas.
                                </p>
                            </a>
                        </div>
                    </div>


                    <div className="col-lg-3 background-white">
                        <div className="text-boxs">
                            <a className="text-left" href="#">
                                <h4 className="text-left">Visitor</h4>
                                <p className="text-left" style={{color:"#000"}}>
                                    Witness the country’s major auto show where latest new vehicles, burgeoning technological trends such as super cars,
                                    electric vehicles across 4 days of the auto show.
                                </p>
                            </a>
                        </div>
                    </div>


                    <div className="col-lg-3 background-white">
                        <div className="text-boxs">
                            <a className="text-left" href="">
                                <h4 className="text-left">Press & Media</h4>
                                <p className="text-left" style={{color:"#000"}}>
                                    Get an exclusive access to the Press & Media dugout that provide a great coverage of the Auto Show across all corners of the exhibit arena.
                                </p>
                            </a>
                        </div>
                    </div>


                    <div className="col-lg-3 background-white">
                        <div className="text-boxs">
                            <a className="text-left" href="#">
                                <h4 className="text-left">Contact</h4>
                                <p className="text-left" style={{color:"#000"}}>
                                    We are always open to talk! Feel free to contact us for any information related to the Auto show,
                                    Media Access, Collaborations, Sponsorships, Partnerships and more.
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <a href="pdf/E-Brochure.pdf" className="brochure_download " target="_blank" rel='noopener noreferrer'> <i className="brochure-icon"><img alt='' src="/assets/images/icon/brochure_dw.gif" style={{width:"150px"}} /></i></a>

    {/* <a href="https://wa.me/917200930397" rel='noopener noreferrer' className="whatsapp_float" target="_blank"> <i className="fab fa-whatsapp whatsapp-icon"></i></a> */}

    <a id="scrollTop" style={{bottom:"16px",opacity:"0",zIndex:"199"}} ><i className="icon-chevron-up"></i><i className="icon-chevron-up"></i></a>
    </div>
  )
}

export default footer
