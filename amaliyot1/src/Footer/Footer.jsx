import React from 'react'
import './Footer.css'
import Rasm1 from '../img/store.png'
import Rasm2 from '../img/happy.png'

const Footer = () => {
  return (
    <div>
        <div className="footerHeader">
            <p className='footerDownload'>Download</p>
            <h1 className='footerText10'>It's available right now!</h1>
            <p className='footerText11'>Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non.</p>
            <a href="https://www.apple.com/app-store/" target='_blank'>
                <img src={Rasm1} />
            </a>
        </div>
        <div className="footerFaq">
            <div className="faqText1">FAQ</div>
            <p className='faqText2'>Some questions & some answers</p>
            <p className='faqText3'>What devices does H(app)y support?</p>
            <p className='faqText4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula.</p>
            <p className='faqText5'>Will my photos magically be more beautiful if I use this app?</p>
            <p className='faqText6'>Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt. Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit.</p>
            <p className='faqText7'>How many megapixels does H(app)y support?</p>
            <p className='faqText8'>Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt. Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt.</p>
            <p className='faqText9'>How many photos can I store in H(app)y?</p>
            <p className='faqText10'>Vestibulum ultrices, orci nec egestas pharetra, ligula est semper enim, nec auctor sapien leo nec purus. Etiam ut orci varius, faucibus libero ac, cursus quam. Aenean porta neque eget consequat fringilla.</p>
        </div>
        <div className="footerFooter">
            <div className="happyImg">
                <img src={Rasm2} />
            </div>
            <h1 className='happyText'>H(app)y</h1>
            <div className="iconca">
                <a href="https://twitter.com" target='_blank'>
                    <i class="fa-brands fa-twitter fa-2x"></i>
                </a>
                <a href="https://instagram.com" target='_blank'>
                    <i class="fa-brands fa-instagram fa-2x"></i>
                </a>
                <a href="https://facebook.com" target='_blank'>
                    <i class="fa-brands fa-facebook-f fa-2x"></i>
                </a>
            </div>
            <p className='lastText'>Powered by <span>Webflow</span>. All rights reserved by Happy Apps, Inc. <span>Licensing</span></p>
        </div>
    </div>
  )
}

export default Footer