import React from 'react'
import AttractionBan from '../assets/images/resized-images/attraction-banner.jpg'
import Radiohall from '../assets/images/attraction/radio.jpg';
import Nightautoshow from '../assets/images/attraction/nit-auto.jpg';
import Spotlighcam from '../assets/images/attraction/spot-cam.jpg';
import Kidentertainment from '../assets/images/attraction/kids.jpg';
import Contentcreator from '../assets/images/attraction/content.jpg'
import OfficialMerchant from '../assets/images/attraction/official.jpg';
import Freecar from '../assets/images/attraction/super-rally.jpg';
import Bikeimg from '../assets/images/attraction/bike.jpg';
import Gamingzone from '../assets/images/attraction/game.jpg';
import Radioicon from '../assets/images/RadioL.png';
import Nighticon from '../assets/images/NightL.png';
import Spotlighticon from '../assets/images/SpotL.png';
import Kidicon from '../assets/images/KidsL.png';
import Contenticon from '../assets/images/Content.png';
import Officialicon from '../assets/images/Merch.png';
import Freecaricon from '../assets/images/SuperL.png';
import Bikeicon from '../assets/images/Bike.png';
import Gamingicon from '../assets/images/Video.png';
import Footer from './footer';


const attraction = () => {
  return (
    <div>
      <section className="p-0">
        <img alt='' className="imagewit" src={AttractionBan} />
      </section>
      <section>

        <div className="parallax-container scrolly-invisible  img-loaded" data-bg="" data-velocity="" style={{ backgroundImage: `url(${Radiohall})` }} data-ll-status="loaded"></div>
        <div className="container-fullwidth marginleftright parentfont">
          <div className="row">
            <div className="col-lg-5 m-auto">
              <img alt='' src={Radioicon} className="mobileviewimg250" />
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-6">
              <span className="wasmediumcaption-blue">RADIO ROOM
              </span>
              <br />
              <span className="wasmediumcaption-white">IN-HALL LIVE COMMENTARY</span>
              <br />
              <br />
              <span className="waspara">Experience the country’s major Auto Show with In-Hall Radio Room Live commentary that covers the entire show from Press &amp; Media Hours, New Launches, Unveils, inviting celebs to engaging visitors with talks, music, dance and conduct contests for visitors who gets a chance to win exciting gifts.
              </span>

            </div>

          </div>

        </div>
      </section>
      <section>
        <div className="parallax-container scrolly-invisible  img-loaded" data-bg="" data-velocity="" style={{ backgroundImage: `url(${Nightautoshow})` }} data-ll-status="loaded"></div>
        <div className="container-fullwidth marginleftright parentfont">
          <div className="row">

            <div className="col-lg-5 m-auto">
              <img alt='' src={Nighticon} className="mobileviewimg250" />
            </div>

            <div className="col-lg-1"></div>
            <div className="col-lg-6">
              <span className="wasmediumcaption-blue">NIGHT
              </span>
              <span className="wasmediumcaption-white">AUTO SHOW</span>
              <br />
              <br />
              <span className="waspara">#WAS2021 Hyderabad offers a different Night Show experience for all attendees who visits in-person or virtually. Registration for your in-person visitor pass & online pass will begin soon. Tune in for more information.
              </span>

            </div>

          </div>

        </div>
      </section>
      <section>
        <div className="parallax-container scrolly-invisible  img-loaded" data-bg="" data-velocity="" style={{ backgroundImage: `url(${Spotlighcam})` }} data-ll-status="loaded"></div>

        <div className="container-fullwidth marginleftright parentfont">
          <div className="row">

            <div className="col-lg-5 m-auto">
              <img alt='' src={Spotlighticon} className="mobileviewimg250" />
            </div>

            <div className="col-lg-1"></div>
            <div className="col-lg-6">
              <span className="wasmediumcaption-blue">SPOT LIGHT
              </span>
              <span className="wasmediumcaption-white">CAM MOMENTS</span>
              <br />
              <br />
              <span className="waspara">If you are a lucky visitor, you may get spotted by the spider spotlight cam of the auto show to win amazing gifts, prize money, a city-ride in Lamborghini and few of the luckiest ones gets a chance to go for a helicopter ride around the Hyderabad city. Watch out for the spider cams above!!!
              </span>

            </div>

          </div>

        </div>
      </section>
      <section>

        <div className="parallax-container scrolly-invisible  img-loaded" data-bg="" data-velocity="" style={{ backgroundImage: `url(${Kidentertainment})` }} data-ll-status="loaded"></div>
        <div className="container-fullwidth marginleftright parentfont">
          <div className="row">

            <div className="col-lg-5 m-auto">
              <img alt='' src={Kidicon} className="mobileviewimg250" />
            </div>

            <div className="col-lg-1"></div>
            <div className="col-lg-6">
              <span className="wasmediumcaption-blue">KIDS
              </span>
              <span className="wasmediumcaption-white">ENTERTAINMENT</span>
              <br />
              <br />
              <span className="waspara">While the Adults & Parents explore cars at the Auto Show, there’s a full range of activities for kids to make it a fun outing for the whole family. The Kids Entertainment Zone is geared up with some exciting activities for kids such as simulators, gaming attractions, treasure hunt and several other activities of all ages to make it entertaining for your whole family.
              </span>

            </div>

          </div>

        </div>
      </section>
      <section>

        <div className="parallax-container scrolly-invisible  img-loaded" data-bg="" data-velocity="" style={{ backgroundImage: `url(${Contentcreator})` }} data-ll-status="loaded"></div>
        <div className="container-fullwidth marginleftright parentfont">
          <div className="row">

            <div className="col-lg-5 m-auto">
              <img alt='' src={Contenticon} className="mobileviewimg250" />
            </div>

            <div className="col-lg-1"></div>
            <div className="col-lg-6">
              <span className="wasmediumcaption-blue">CONTENT
              </span>
              <span className="wasmediumcaption-white">CREATORS FEST</span>
              <br />
              <br />
              <span className="waspara">#WAS2021 provides an exciting opportunity for content creators across India to win cash prize of upto 5 Lakhs.
                The show invites content creators of all ages to participate in the fest on creating viral and innovative content
                which will be featured during the Auto Show premiere.
              </span>

            </div>

          </div>

        </div>
      </section>
      <section>

        <div className="parallax-container scrolly-invisible  img-loaded" data-bg="" data-velocity="" style={{ backgroundImage: `url(${OfficialMerchant})` }} data-ll-status="loaded"></div>
        <div className="container-fullwidth marginleftright parentfont">
          <div className="row">

            <div className="col-lg-5 m-auto">
              <img alt='' src={Officialicon} className="mobileviewimg250" />
            </div>

            <div className="col-lg-1"></div>
            <div className="col-lg-6">
              <span className="wasmediumcaption-blue">OFFICIAL
              </span>
              <span className="wasmediumcaption-white">MERCHANDISE</span>
              <br />
              <br />
              <span className="waspara">At #WAS2021, visitors, car enthusiasts & buyers have a chance to win high quality branded merchandise of Top Auto Brands at the Auto show such as T-Shirts, Caps, Masks & more. Sign-up today to get your wide range of merchandise of your favourite Auto brand.

              </span>

            </div>

          </div>

        </div>
      </section>
      <section>

        <div className="parallax-container scrolly-invisible  img-loaded" data-bg="" data-velocity="" style={{ backgroundImage: `url(${Freecar})` }} data-ll-status="loaded"></div>
        <div className="container-fullwidth marginleftright parentfont">
          <div className="row">

            <div className="col-lg-5 m-auto">
              <img alt='' src={Freecaricon} className="mobileviewimg250" />
            </div>

            <div className="col-lg-1"></div>
            <div className="col-lg-6">
              <span className="wasmediumcaption-blue">FREE
              </span>
              <span className="wasmediumcaption-white">SUPER CAR RIDES</span>
              <br />
              <br />
              <span className="waspara">Are you celebrating your birthday during the show days (16th -19th Sept)? Advance Happy Birthday to you! #WAS2021 will make this birthday very special for you by offering you and your family a free shuttle service & a VIP reception to the auto show in our Executive Super Luxury Car. Sign-up for the auto show and avail this limited offer.
              </span>

            </div>

          </div>

        </div>
      </section>
      <section>

        <div className="parallax-container scrolly-invisible  img-loaded" data-bg="" data-velocity="" style={{ backgroundImage: `url(${Bikeimg})` }} data-ll-status="loaded"></div>
        <div className="container-fullwidth marginleftright parentfont">
          <div className="row">

            <div className="col-lg-5 m-auto">
              <img alt='' src={Bikeicon} className="mobileviewimg250" />
            </div>

            <div className="col-lg-1"></div>
            <div className="col-lg-6">
              <span className="wasmediumcaption-blue">BIKE
              </span>
              <span className="wasmediumcaption-white">STUNT SHOW</span>
              <br />
              <br />
              <span className="waspara">Experience the thrill of a spectacular bike stunt show. Wheelies, endo, bunny hop, front wheel pivot, back hop and much more to light up a breathtaking show. Watch the best of stunt riders cut loose with their machines and dance to their tunes.
              </span>

            </div>

          </div>

        </div>
      </section>
      <section>

        <div className="parallax-container scrolly-invisible  img-loaded" data-bg="" data-velocity="" style={{ backgroundImage: `url(${Gamingzone})` }} data-ll-status="loaded"></div>
        <div className="container-fullwidth marginleftright parentfont">
          <div className="row">

            <div className="col-lg-5 m-auto">
              <img alt='' src={Gamingicon} className="mobileviewimg250" />
            </div>

            <div className="col-lg-1"></div>
            <div className="col-lg-6">
              <span className="wasmediumcaption-blue">GAMING
              </span>
              <span className="wasmediumcaption-white">ZONE</span>
              <br />
              <br />
              <span className="waspara">Beyond the excitement of watching the latest cars, #WAS2021 also got you covered with interesting Gaming Zone. Take a virtual spin on the formula one car or race the Moto GP, Hit the Ball out of the park like a true Sunriser or shoot like an NBA Star. Lots of exciting games and guess what …. You could also win a Lac !!!!!!!!!
              </span>

            </div>

          </div>

        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default attraction
