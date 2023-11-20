import React from 'react'
import './Header.css'
import Img1 from '../img/Frame (8).png'
import Img2 from '../img/phone1.png'
import Icon1 from '../img/icon1.png'
import Icon2 from '../img/icon2.png'
import Icon3 from '../img/icon3.png'
import Icon4 from '../img/icon4.png'
import Icon5 from '../img/icon5.png'
import Icon6 from '../img/icon6.png'

const Header = () => {
  return (
    <div>
        <div className="header">
            <h1 className='headerText1'>H(app)y</h1>
            <button className='btn12'><i class="fa-solid fa-bars fa-2x"></i></button>
            <div className="navbar">
                <ul className='ul'>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">Instructions</a></li>
                </ul>
            </div>
            <div className="navbar1">
                <ul className='ul'>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">Instructions</a></li>
                </ul>
            </div>
            
            <button className='headerBtn1'>Get template</button>
        </div>
        <div className="headerBody1">
            <h1 className='body1Text1'>H(app)y</h1>
            <h1 className='body1Text2'>The future of digital photos.</h1>
            <h1 className='body1Text3'>The H(app)y app is the latest & greatest in phone photography. It's available in the App Store right now. Go check it out!</h1>
            <button className='body1Btn1'>Download</button>
            <button className='body1Btn2'>Read more</button>
        </div>
        <div className="a">
            <img className='image1' src={Img1}/>
        </div>
        <div className="phone">
            <h1 className='phoneText1'>Features</h1>
            <h1 className='phoneText2'>The latest & greatest in phone photography.</h1>
            <div className="cards">
                <div className="box">
                    <img className='ab' src={Img2} />
                    <div className="cont">
                            <img src={Icon1} />
                        <h1 className='h11'>Calendar view</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus.</p>
                    </div>
                </div>
                <div className="box">
                    <div className="imag2">
                        <img className='ab' src={Img2} />
                    </div>
                    <div className="cont">
                            <img src={Icon2} />
                        <h1 className='h12'>Lists</h1>
                        <p>Dolor sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt.</p>
                    </div>
                </div>
                <div className="box">
                    <img className='ab' src={Img2} />
                    <div className="cont">
                            <img src={Icon3} />
                        <h1 className='h13'>Varied type</h1>
                        <p>Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue.</p>
                    </div>
                </div>
                <div className="box">
                    <div className="imag4">
                        <img className='ab' src={Img2} />
                    </div>
                    <div className="cont">
                            <img src={Icon4} />
                        <h1 className='h14'>Split-screen</h1>
                        <p>Vestibulum ultrices, orci nec egestas pharetra, ligula est semper enim, nec auctor sapien leo nec purus.</p>
                    </div>
                </div>
                <div className="box">
                    <img className='ab' src={Img2} />
                    <div className="cont">
                            <img src={Icon5} />
                        <h1 className='h15'>Uploads</h1>
                        <p>Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non.</p>
                    </div>
                </div>
                <div className="box">
                        <img className='ab' src={Img2} />
                    <div className="cont">
                        <img src={Icon6} />
                        <h1 className='h16'>Focus mode</h1>
                        <p>Lorem sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="headerFooter">
            <div className="text1">

            <h1 className='footerText'>400+</h1>
            <h1 className='footerText'>25+</h1>
            <h1 className='footerText'>95%</h1><br /><br />
            </div>
            <div className="text2">

            <p className='footerText text1'>Pictures analyzed</p>
            <p className='footerText'>Operations per minute</p>
            <p className='footerText'>Accuracy</p>
            </div>
        </div>
    </div>
  )
}

export default Header