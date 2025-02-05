import './assets/css/plugins.css';
import './assets/css/style.css';
import './assets/css/index.css';
import './assets/css/weexpoindiaauto.css';
import Bannerimg from './assets/images/home/Postponed-Auto-show-post.jpg';
import Autoshowimg from './assets/images/home/home-banner-2.jpg';
import Yticon from './assets/images/video/YT.jpg'
import Fbicon from './assets/images/icon/FB.png';
import Instaicon from './assets/images/icon/Insta.png';
import UniqueBanner from './assets/images/others/banner-3.jpg';
import Fourdayicon from './assets/images/icon/4-days-Auto-show.png';
import Pressandmediaicon from './assets/images/icon/Press-and-media-hours.png';
import Celebratiyicon from './assets/images/icon/Celebrity-hours.png';
import Nightautoshow from './assets/images/icon/Night-auto-show.png';
import Herasecbanner from './assets/images/T20.png';
import Rooftop from './assets/images/home/home-banner-5.jpg';
import Bikeicon from './assets/images/attraction-icon/bike-stunt.png';
import Contentcreator from './assets/images/attraction-icon/content-creator.png';
import Exclusiverelease from './assets/images/attraction-icon/exclusive-release.png';
import Helicoptor from './assets/images/attraction-icon/helicopter.png';
import Hybird from './assets/images/attraction-icon/hybird-exp.png';
import Kidzone from './assets/images/attraction-icon/kid-zone.png';
import Nightauto from './assets/images/attraction-icon/nit-auto.png';
import Merchant from './assets/images/attraction-icon/official-merchandish.png';
import Radiohall from './assets/images/attraction-icon/radio-hall.png';
import Spotlightcam from './assets/images/attraction-icon/spot-lit-cam.png';
import Carrally from './assets/images/attraction-icon/super-car-rally.png';
import Videogame from './assets/images/attraction-icon/video-game.png';
import BgBanner from './assets/images/whatsnew/WN6.jpg';
import Bringbackhome from './assets/images/banner/home-banner-6.jpg';
import Storyteller from './assets/images/home/home-banner-5.jpg';
import Mediapartner from './assets/images/media-partner/Media.png';
import Vloggerpartner from './assets/images/media-partner/Vloggers.png';
import Socialpartner from './assets/images/media-partner/social-media.png'
import Evechicle from './assets/images/evechicle.png';
import Selfdrive from './assets/images/self-drive.jpg';
import Component from './assets/images/Comp.png';
import Autoparts from './assets/images/AUTO-TECHNOLOGY.png';
import Pressone from './assets/images/Press/press-1.jpg';
import Presstwo from './assets/images/Press/press-2.jpg';
import Pressthree from './assets/images/Press/press-3.jpg';
import Exhibitorsegment from './assets/images/whatsnew/WN6.jpg';
import Footer from '../src/pages/footer';
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const loadScript = (src, callback) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.onload = callback;
      document.body.appendChild(script);
    };

    // Load jQuery first, then Bootstrap, then other plugins
    loadScript("/js/jquery.js", () => {
        loadScript("/js/plugins.js", () => {
          loadScript("/js/functions.js");
        });
    });

    return () => {
      document.querySelectorAll("script").forEach((script) => {
        if (script.src.includes("jquery") || script.src.includes("bootstrap") || script.src.includes("plugins") || script.src.includes("functions")) {
          document.body.removeChild(script);
        }
      });
    };
  }, []);

  return (

    <div>
      <section className="p-0">
        <img alt='' style={{ width: "100%" }} src={Bannerimg} />
      </section>
      <section className="padingtop">
        <div className="parallax-container scrolly-invisible img-loaded" data-bg="" data-velocity="" style={{ backgroundColor: "#000" }} data-ll-status="loaded"></div>
        <div className=" p-0">
          <div className="row text-center text-uppercase marginleftright ">
            <div className="col-lg-3 greybox parentfont">
              <span className="banbotstriptit"> NEW LAUNCHES</span>
              <br />
              <span className="banbotstripdesc">
                Get Ready To Witness Renowned Auto Brands New Launches Unveil Announcement Across Various Segments.
              </span>
            </div>

            <div className="col-lg-3 blueBox parentfont">
              <span className="banbotstriptit"> OFFICIAL DEBUT</span>
              <br />
              <span className="banbotstripdesc">
                WEEXPOINDIAAUTO SHOW will serve as a perfect platform for some of the most awaited Debuts of <br />Top Auto Mobile Brands.
              </span>
            </div>
            <div className="col-lg-3 greybox parentfont">
              <span className="banbotstriptit"> AUTO TALKS</span>
              <br />
              <span className="banbotstripdesc">
                From major Industry transformation, to future mobility, several world leaders speak out their views.
              </span>
            </div>
            <div className="col-lg-3 blueBox parentfont">
              <span className="banbotstriptit">Components pavilion </span>
              <br />
              <span className="banbotstripdesc">
                Unlocks exciting opportunities for component makers to showcase latest products to influential industry leaders.

              </span>
            </div>
          </div>
        </div>

      </section>
      <section className="">
        <div className="parallax-container scrolly-invisible img-loaded" data-bg="" data-velocity="" style={{ backgroundImage: `url(${Autoshowimg})` }} data-ll-status="loaded"></div>
        <div className="container-fullwidth marginleftright parentfont">
          <div className="row">
            <div className="col-lg-6 p-t-30">
              <span className="waslittleCaption">WEEXPOINDIA AUTO SHOW </span><br />
              <span className="wasLargeCaption">BRINGS</span><br />
              <span className="wasLargeCaption">WORLD MOBILITY</span><br />
              <span className="wasLargeCaptionwhite">TO HYDERABAD</span><br />
              <br />
              <span className="wasparalight">
                Explore, Learn & Experience the Future of Mobility at WEEXPOINDIA AUTO Show scheduled for 16th – 19th September at Hitex, Hyderabad.
              </span><br />

              <br />


              <span className="waspara">
                From Luxury Cars and Superbikes, Passenger Vehicles, Commercial Vehicles,
                Hybrid to the new generation Electric vehicles, Auto Design, Technology,
                Components, Accessories and Parts will be launched, unveiled & showcased
                from all across the globe to Indian Auto Enthusiasts, Buyers and Industry Experts.
              </span><br />



            </div>

            <div className="col-lg-6 m-auto">
              <a href="https://www.youtube.com/watch?v=SWsl7fUX06g" target="_blank" rel="noopener noreferrer">
                <div className="" style={{ border: "10px solid rgba(255,255,255,.2)" }}>
                  <img alt='' style={{ width: "100%" }} src={Yticon} />
                </div>
              </a>
            </div>


          </div>
          <div className="row mg-top">

            <div className="col-lg-6 counterbluebox-top parentfont">
              <div className="row">
                <div className="col-lg-2  padtp-35">
                  <i><img alt='' className="img-widht" src={Fbicon} /></i>

                </div>
                <div className="col-lg-4 counter padtp-25 ">
                  <span className="wasLargeCaption" data-suffix="" data-speed="3000" data-refresh-interval="50" data-to="35000" data-from="30400" data-seperator="true">35000</span>
                  <h5 className="text-white">Followers</h5>
                </div>
                <div className="col-lg-2  padtp-35">
                  <i><img alt='' className="img-widht" src={Instaicon} /></i>
                </div>
                <div className="col-lg-4 counter padtp-25 ">
                  <span className="wasLargeCaption" data-suffix="" data-speed="3000" data-refresh-interval="50" data-to="23000" data-from="22950" data-seperator="true">23000</span>
                  <h5 className="text-white">Followers</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-6 counterbluebox-top parentfont">
              <div className="row">
                <div className="col-lg-6 text-center-left counter padtp-25 ">
                  <span className="wasLargeCaption" data-suffix="" data-speed="3000" data-refresh-interval="23" data-to="100000" data-from="990000" data-seperator="true">1000000</span>
                  <h5 className="text-white">Impression</h5>
                </div>
                <div className="col-lg-6 text-center-left counter padtp-25 ">
                  <span className="wasLargeCaption" data-suffix="%" data-speed="3000" data-refresh-interval="23" data-to="68" data-from="10" data-seperator="true">68%</span>
                  <h5 className="text-white">Engagements</h5>
                </div>
              </div>
            </div>

          </div>





        </div>
      </section>
      <section>
        <div className="parallax-container scrolly-invisible img-loaded" data-bg="" data-velocity="" style={{ backgroundImage: `url(${UniqueBanner})` }} data-ll-status="loaded"></div>
        <div className="container-fullwidth parentfont marginleftright">

          <div className="row">
            <div className="col-lg-5">
              <span className="waslittleCaption">WHAT MAKES</span><br />
              <span className="wasLargeCaption">#WAS2021 UNIQUE</span><br />
              <br /><br />
              <span className="waspara">
                #WAS2021 provides opportunity for Auto Brands to feature at an exclusive South India Premiere for the first-time that offers various media programmes & potential buyer engagements such as press conferences,
                interviews, conversations with experts, visitor interactions, vehicle walkthrough, test-drives, visitor virtual sneak-peak, 3D experience and more.
              </span>


            </div>
          </div>

          <div className="row mg-top">

            <div className="col-lg-3 counterbluebox parentfont">
              <div className="row">
                <div className="col-lg-5 counter padtp-25 ">
                  <span className="wasLargeCaption" data-suffix="+" data-speed="3000" data-refresh-interval="50" data-to="100" data-from="50" data-seperator="true">
                    100
                  </span>
                </div>
                <div className="col-lg-5  padtp-35">
                  <span className="wassmallcaption">AUTO BRANDS</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 counterbluebox parentfont">
              <div className="row">
                <div className="col-lg-5 counter padtp-25 ">
                  <span className="wasLargeCaption" data-suffix="+" data-speed="3000" data-refresh-interval="23" data-to="300" data-from="100" data-seperator="true">
                    300
                  </span>
                </div>
                <div className="col-lg-5  padtp-35">
                  <span className="wassmallcaption">PRESS & MEDIA</span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 counterbluebox parentfont ">
              <div className="row">
                <div className="col-lg-5 counter padtp-25 ">
                  <span className="wasLargeCaption" data-suffix="K+" data-speed="3000" data-refresh-interval="12" data-to="100" data-from="50" data-seperator="true">
                    100
                  </span>
                </div>
                <div className="col-lg-5  padtp-40">
                  <span className="wassmallcaption">IN-PERSON VISITOR </span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 counterbluebox parentfont">



              <div className="row">
                <div className="col-lg-5 counter padtp-25 ">
                  <span className="wasLargeCaption" data-suffix="K+" data-speed="3000" data-refresh-interval="50" data-to="600" data-from="100" data-seperator="true">
                    1M
                  </span>
                </div>
                <div className="col-lg-5  padtp-36">
                  <span className="wassmallcaption">VIRTUAL VISITOR</span>
                </div>
              </div>
            </div>
          </div>



        </div>



      </section>
      <section className="no-padding equalize" data-equalize-item=".text-box">
        <div className="row col-no-margin">
          <div className="col-lg-3 parentfont">
            <div className="text-box section-1" style={{ height: "362.073px" }}>

              <i className="imagewit">
                <img alt='' className="img-mob-size" src={Fourdayicon} />
              </i>
              <br />
              <span className="wasmediumcaption">4 Days <br /> AUTO SHOW</span>


              <br />        <br />

              <span className="wasparalittle">

                Witness 48 hours of unlimited content to future mobility, exciting launches, ground-breaking announcements, autotalks, virtual visitor watch parties and several other latest stories around Auto Industry across in all 4 days of Auto Show.
              </span>
            </div>
          </div>
          <div className="col-lg-3  parentfont">
            <div className="text-box section-2" style={{ height: "362.073px" }}>

              <i className="">
                <img alt='' className="img-mob-size" src={Pressandmediaicon} />
              </i>
              <br />
              <span className="wasmediumcaption"> PRESS & <br /> MEDIA HOURS</span>


              <br />        <br />

              <span className="wasparalittle">

                Exclusive Press & Media Hours to cover Exciting content, one-one interviews, detailed insight on all new launches, news and announcements. Both domestic and international media can avail their Media Passes soon.
              </span>

            </div>
          </div>
          <div className="col-lg-3  parentfont">
            <div className="text-box section-3" style={{ height: "362.073px" }}>

              <i className="">
                <img alt='' className="img-mob-size" src={Celebratiyicon} />
              </i>
              <br />
              <span className="wasmediumcaption">CELEBRITY  <br />HOURS</span>


              <br />        <br />

              <span className="wasparalittle">

                Fans and Media can get an exclusive coverage, clicks and photos of the celebrities during the dedicated the celebrity hour of the Auto Show. VIP access during celebrity hours can be availed soon.
              </span>
            </div>
          </div>
          <div className="col-lg-3  parentfont">
            <div className="text-box section-4" style={{ height: "362.073px" }}>

              <i className="">
                <img alt='' className="img-mob-size" src={Nightautoshow} />
              </i>
              <br />
              <span className="wasmediumcaption"> FIRST EVER <br />NIGHT AUTO SHOW</span>


              <br />        <br />

              <span className="wasparalittle">

                WAS2021 Hyderabad offers a different Night Show experience for all attendees who visits in-person or virtually.
                Registration for your in-person visitor pass & online pass will begin soon. Tune in for more information.
              </span>

            </div>
          </div>
        </div>
      </section>
      <section className="container-fullwidth p-l-20 p-r-20">
        <div className="parallax-container scrolly-invisible img-loaded" data-bg="" data-velocity="" style={{ backgroundImage: `url(${Herasecbanner})` }} data-ll-status="loaded"></div>
        <div className="container-fullwidth marginleftright text-center parentfont">
          <div className="row">
            <div className="col-lg-12">
              <span className="wasLargeCaption"> SOUTH INDIA PREMIERE </span><br />
              <span className="wasLargeCaptionwhite wasLargephn">INTERNATIONAL AUTO SHOW</span>

              <br /> <br />

              <div className="">

                <p className="waspara">
                  #WAS2021 will host first of its kind South India Premiere for the Auto Industry to connect and engage with
                  millions of Auto enthusiasts across the regions. Over the last few years, South India has collectively emerged
                  as a hub for Automobile Industry and has become a hot spot for several Auto brands to engage considering business
                  opportunities, sales conversions, better Investment opportunities, favourable business environments, government supports
                  and many more.
                  <br /><br />
                  On September 16th 2021, #WAS2021 will be the place for over 2000+ Industry Leaders, 300+ Press, Media Delegates, Celebrity Guests, Social Media Influencers & 1 Million+ Auto Enthusiasts visiting and connecting via Hybrid platform to explore future mobility.

                </p>

                <br /> <br />



              </div>
            </div>

          </div>


          <div className="row  ">
            <div className="col-lg-12">
              <div className="row">

                <div className="widhth90Left hero-image-1 padtopbanner text-left padleft30">


                  <span className="wasmediumcaption text-uppercase"> 4 Days | Exclusive Press Conference</span>
                  <br /> <br />
                  <p className="className-para text-white">

                    Get exclusive PR &amp; Media briefing session  to plan<br /> your major announcements for<br /> Indian Auto market.
                  </p>

                </div>

                <div className="widhth2mid">
                  &nbsp;
                </div>

                <div className="widhth90Right hero-image-2 padtopbanner text-left padleft30">


                  <span className="wasmediumcaption"> PRE SHOW ENGAGEMENTS</span>
                  <br /> <br />
                  <p className="className-para text-white">

                    Connect potential buyers with exciting  brand <br />story as a pre-show activity through
                    our network<br /> of Vloggers, Industry Experts,  Auto Influencers.
                  </p>

                </div>

              </div>




            </div>
          </div>
          <div className="row heightdiv">
            &nbsp;
          </div>
          <div className="row ">
            <div className="col-lg-12">
              <div className="row">

                <div className="widhth90Left hero-image-3 padtopbanner text-left padleft30">


                  <span className="wasmediumcaption"> VISITOR VIDEO WALL</span>
                  <br /> <br />
                  <p className="className-para text-white">

                    Engage and watch visitors reaction  with online<br /> watch parties who would be tuning  into brands<br /> launch, unveil
                    and  walkthrough sessions<br /> via Visitor video wall.
                  </p>

                </div>

                <div className="widhth2mid">
                  &nbsp;
                </div>

                <div className="widhth90Right hero-image-4 padtopbanner text-left padleft30">


                  <span className="wasmediumcaption"> VISITOR REWARD POINTS</span>
                  <br /> <br />
                  <p className="className-para text-white">

                    Create your own customized brand engagements<br /> through Exciting reward points.
                  </p>

                </div>

              </div>




            </div>
          </div>
        </div>

      </section>
      <section className="">
        <div className="parallax-container scrolly-invisible img-loaded" data-bg="" data-velocity="" style={{ backgroundImage: `url(${Rooftop})` }} data-ll-status="loaded"></div>
        <div className="container-fullwidth marginleftright parentfont">
          <div className="row">
            <div className="col-lg-6 m-auto phnheading">

              <span className="wasLargeCaption"> NEVER SEEN EXPERIENCE </span> <br />
              <span className="wasLargeCaptionwhite"> ALL UNDER ONE ROOF </span>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-3">
                  <img alt='' className="img-wit-padd" src={Bikeicon} />
                </div>
                <div className="col-lg-3">
                  <img alt='' className="img-wit-padd" src={Contentcreator} />
                </div>
                <div className="col-lg-3">
                  <img alt='' className="img-wit-padd" src={Exclusiverelease} />
                </div>
                <div className="col-lg-3">
                  <img alt='' className="img-wit-padd" src={Helicoptor} />
                </div>
              </div>
              <div className="row p-t-40">
                <div className="col-lg-3">
                  <img alt='' className="img-wit-padd" src={Hybird} />
                </div>
                <div className="col-lg-3">
                  <img alt='' className="img-wit-padd" src={Kidzone} />
                </div>
                <div className="col-lg-3">
                  <img alt='' className="img-wit-padd" src={Nightauto} />
                </div>
                <div className="col-lg-3">
                  <img alt='' className="img-wit-padd" src={Merchant} />
                </div>
              </div>
              <div className="row p-t-40">
                <div className="col-lg-3">
                  <img alt='' className="img-wit-padd" src={Radiohall} />
                </div>
                <div className="col-lg-3">
                  <img alt='' className="img-wit-padd" src={Spotlightcam} />
                </div>
                <div className="col-lg-3">
                  <img alt='' className="img-wit-padd" src={Carrally} />
                </div>
                <div className="col-lg-3">
                  <img alt='' className="img-wit-padd" src={Videogame} />
                </div>
              </div>


            </div>
          </div>

          <div className="row parentfont">



          </div>





        </div>
      </section>
      <section className="backblack">
        <div className="parallax-container scrolly-invisible  img-loaded" data-bg="" data-velocity="" style={{ backgroundImage: `url(${BgBanner})` }} data-ll-status="loaded"></div>
        <div className="container-fullwidth parentfont marginleftright">
          <div className="row">
            <div className="col-lg-12 text-center atbackimg">
              <span className="wasparabold parentfont">LISTEN FROM EXPERTS</span><br />
              <span className="wasLargeCaptionwhite">
                #WAS2021
                AUTOTALKS
              </span>
              <br /><br />


            </div>

            <div className="row">
              <div className="col-lg-6 atbluebox">
                <span className="waslittleCaption">JOIN THE LEADERS OF</span><br />
                <span className="wasmediumcaption">
                  AUTOCOMMUNITY <br />
                </span>
                <br />
                <br />
                <span className="waspara">
                  When it comes to sharing views on Future Mobility, #WAS2021 will gather some of the most influential leaders across the industry to participate in Debate, Panel sessions, Keynote sessions on Hottest Topics in Auto.
                </span>
              </div>
              <div className="col-lg-6 atbluebox">
                <span className="waslittleCaption">INSIGHTS OF </span><br />
                <span className="wasmediumcaption">
                  FUTURE <br />
                </span>
                <br />
                <br />
                <span className="waspara">
                  In this discussion, get ready learn and be inspired by deep views on challenges across Auto Industry now and in future. Join the world’s most successful leaders, innovators, and boundary-breaking pioneers at #WAS2021.
                </span>
              </div>
            </div>


          </div>

        </div>

      </section>
      <section>
        <div className="parallax-container scrolly-invisible img-loaded" data-bg="" data-velocity="" style={{ backgroundImage: `url(${Bringbackhome})` }} data-ll-status="loaded"></div>

        <div className="container-fullwidth marginleftright parentfont">

          <div className="row">
            <div className="col-lg-6">
              <span className="waslittleCaption"> BRING BACK HOPE  </span> <br />
              <span className="wasLargeCaption"> FOR AUTO COMMUNITY  </span> <br /> <br />
              <span className="waspara-16"> South India Premiere International Auto Show will help Brands to restore faith and bring back hope to Auto community by launching and showcasing their latest & futuristic mobility solutions that will attract over 1 million Auto Enthusiasts across India. </span>

              <br /> <br />
              <ul className="text-white text-left p-20">
                <li>Premiere Your Latest & Future Vehicles </li>
                <li>High - level networking activity</li>
                <li>Exposure to over 1 Million Auto Enthusiasts</li>
                <li>Visibility to over 300 Press & Media, Content Creators, Vloggers & more</li>
                <li>Engage visitors with online watch parties via Visitor video wall</li>
              </ul>





            </div>

            <div className="col-lg-6">



            </div>
          </div>


        </div>


      </section>
      <section>
        <div className="parallax-container scrolly-invisible  img-loaded" data-bg="" data-velocity="" style={{ backgroundImage: `url(${Storyteller})` }} data-ll-status="loaded"></div>


        <div className="container-fullwidth marginleftright parentfont">

          <div className="row ">
            <div className="col-lg-6 ">

              <div className="row">
                <div className="col-lg-4 text-center phn">
                  <img alt='' src={Mediapartner} style={{ width: "100%" }} />
                  <p className="text-white">
                    Media<br />
                    Partners
                  </p>
                </div>
                <div className="col-lg-4 text-center phn">
                  <img alt='' src={Vloggerpartner} style={{ width: "100%" }} />
                  <p className="text-white">
                    Vloggers<br />
                    Community
                  </p>
                </div>
                <div className="col-lg-4 text-center phn">
                  <img alt='' src={Socialpartner} style={{ width: "100%" }} />
                  <p className="text-white">
                    Social Media<br />
                    Influencers
                  </p>
                </div>
              </div>



            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-5 text-center">
              <span className="waslittleCaption"> GO BIG WITH   </span> <br />
              <span className="wasparabold"> #WAS2021 STORYTELLERS   </span> <br />
              <br />

              <span className="waspara">
                Meet, Connect, Engage & Partner with the most happening Social Media Influencers,
                Vloggers, Auto Racers, Auto Experts, Community Heads, Industry Leaders, Tech Leaders  and many more.
              </span>

            </div>


          </div>

        </div>

      </section>
      <section className="whiteback">
        <div className="container-fullwidth  parentfont">
          <div className="row">
            <div className="col-lg-12 text-center ">
              <div className="fullwidth whiteback">
                <span className="wasLargeCaptionblack">EXHIBITOR SEGMENT</span>
              </div>

              <div className="">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="card card-minht">
                      <div className="headercont">
                        PASSENGER VEHICLES
                      </div>
                      <img className="p-15" src={Evechicle} alt="" />
                      <div className="card-body">
                        <div className="detailsec">

                          Covers broad range of vehicles including 4-W, 2-W, 3-W,
                          Commercial vehicles from Top brands that cater to audiences
                          who are interested in acquiring passenger vehicles of all kinds.

                        </div>

                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3">
                    <div className="card card-minht">
                      <div className="headercont">
                        ELECTRIC AND SELF DRIVING VEHICLES

                      </div>
                      <img className="p-15" src={Selfdrive} alt="" />
                      <div className="card-body">

                        <div className="detailsec p-t-5">

                          As the world moves to more sustainable options,
                          this segment covers several existing & futuristic
                          Electric and Self-Driving vehicles built with advanced technology.

                        </div>

                      </div>
                      <br />
                    </div>
                  </div>


                  <div className="col-lg-3">
                    <div className="card card-minht">
                      <div className="headercont">
                        AUTO COMPONENTS
                      </div>
                      <img className="p-15" src={Component} alt="" />
                      <div className="card-body">
                        <div className="detailsec">

                          Auto Components & Parts Pavilion takes up equal attraction and attention
                          from visitors and industry leaders to explore the new innovative tech and
                          auto components that make up the world of the automobile industry.
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="card card-minht">
                      <div className="headercont">
                        AUTO TECHNOLOGY

                      </div>
                      <img className="p-15" src={Autoparts} alt='' />
                      <div className="card-body">

                        <div className="detailsec">

                          Beyond OEM exhibits in the convention center,
                          the Auto Technology Pavilion features the
                          latest technology products and software
                          solutions within the mobility, transportation
                          and infrastructure space.
                        </div>

                      </div>
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      <section className="">
        <div className="parallax-container scrolly-invisible  img-loaded" data-bg="" data-velocity="" style={{ backgroundImage: `url(${Exhibitorsegment})` }} data-ll-status="loaded"></div>
        <div className="col-lg-12 text-center">
          <span className="wasLargeCaptionwhite parentfont">
            PRESS RELEASE
          </span>
          <br /><br />


        </div>
        <div className="container-fullscreen marginleftright-6">

          <div className="row ">
            <div className="col-lg-4">
              <a href="https://www.businesswireindia.com/weexpoindia-auto-talks-experts-take-on-future-mobility-in-india-73539.html" target="_blank" rel='noopener noreferrer'>
                <img alt='' className="img-wit-padd imagewit" src={Pressone} />
              </a>
            </div>
            <div className="col-lg-4">
              <a href="https://www.hindustantimes.com/brand-post/weexpoindia-auto-show-to-be-held-at-hitex-hyderabad-in-sep-2021-101621512869129.html" target="_blank" rel='noopener noreferrer'>
                <img alt='' className="img-wit-padd imagewit" src={Presstwo} />
              </a>
            </div>
            <div className="col-lg-4">
              <a href="https://www.hindustantimes.com/brand-post/an-interview-with-mr-vinoth-kumar-ceo-of-weexpoindia-auto-show-101625500369395.html" target="_blank" rel='noopener noreferrer'>
                <img alt='' className="img-wit-padd imagewit" src={Pressthree} />
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>


  )
}

export default App
