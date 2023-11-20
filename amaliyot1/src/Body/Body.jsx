import React from 'react'
import './Body.css'
import Img1 from '../img/tele.png'
import Img2 from '../img/tele2.png'
import Img3 from '../img/darkfon.png'
import Rasm1 from '../img/rasm1.png'
import Rasm2 from '../img/rasm2.png'
import Rasm3 from '../img/rasm3.png'

const Body = () => {
  return (
    <div>
        <div className="body">
            <div className="bodyCard">
                <p className='bodyText1'>TEchnology</p>
                <h1 className='bodyText2'>Use H(app)y to give your digital photos some pop.</h1>
                <p className='bodyText3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                <div className="phone1">
                    <img src={Img1} />
                </div>
            </div>
        </div>
        <div className="body1">
            <img className='body1Img' src={Img2} />
            <div className="body1Card">
                {/* <p className='cardText1'>Speed & security</p> */}
                <h1 className='cardText2'>State-of-the-art processing capabilities.</h1>
                <p className='cardText3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
            </div>
        </div>
        <div className="bodyDark">
            <h3 className='darkText1'>Dark mode</h3>
            <h1 className='darkText2'>Also available in dark.</h1>
            <p className='darkText3'>Don't get blinded when using the H(app)y app at night, just turn off the lights. Lorem ipsum dolor sit amet.</p>
            <img className='darkImg1' src={Img3} alt="" />
            <div className="line"></div>
        </div>
        <div className="body2">
            <h4 className='body2Text1'>Pricing</h4>
            <h1 className='body2Text2'>A plan for every need.</h1>
            <p className='body2Text3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus.</p>
            <div className="contents">
                <div className="contentsBox">
                    <h1 className='boxText1'>Standard</h1>
                    <h1 className='boxText2'>$9</h1>
                    <p className='boxText3'>Monthly</p>
                    <button className='boxBtn'>Buy now</button>
                </div>
                <div className="contentsBox">
                    <h1 className='boxText1'>Premium</h1>
                    <h1 className='boxText2'>$99</h1>
                    <p className='boxText3'>Annually</p>
                    <button className='boxBtn'>Buy now</button>
                </div>
                <div className="contentsBox">
                    <h1 className='boxText1'>Lifetime</h1>
                    <h1 className='boxText2'>$149</h1>
                    <p className='boxText3'>up front</p>
                    <button className='boxBtn'>Buy now</button>
                </div>
            </div>
        </div>
        <div className="body2Footer">
            <p className='footerText1'>Testimonials</p>
            <h1 className='footerText2'>Don't take our word for it.</h1>
            <p className='footerText3'>See what our customers are saying.</p>
            <div className="footerCards">
                <div className="cardsBox">
                    <p className='cardText1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus.</p>
                    <img src={Rasm1} />
                    <p className='cardText2'>Pam Beesly</p>
                    <p className='cardText3'>Dunder Mifflin</p>
                </div>
                <div className="cardsBox">
                    <p className='cardText1'>Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam. Aenean porta neque eget consequat fringilla.</p>
                    <img src={Rasm2} />
                    <p className='cardText2'>Michael Scott</p>
                    <p className='cardText3'>Dunder Mifflin</p>
                </div>
                <div className="cardsBox">
                    <p className='cardText1'>Vestibulum ultrices, orci nec egestas pharetra, ligula est semper enim, nec auctor sapien leo nec purus.</p>
                    <img src={Rasm3} />
                    <p className='cardText2'>Angels Schrute</p>
                    <p className='cardText3'>Dunder Mifflin</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Body