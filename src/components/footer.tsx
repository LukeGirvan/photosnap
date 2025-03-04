// import logo from ''
// import facebookLogo from ''
// import instaLogo from ''
// import pinterestLogo from 
// import twitterLogo from 
// import youtubeLogo from
import Link from 'next/link'
// import arrow from ''

function Footer(){
return(<>
<footer>
    <div className="footer-holder">
        <div className="logo-socials-holder">
            <div className="logo-holder">
                <img src='/assets/shared/desktop/logo.svg' alt="image of photosnap logo" className="logo" />

                <div className="nav-holder">
                    <ul className='nav-list'>
                        
                       <Link href='/'> <li>HOME</li></Link>
                       <Link href='/stories'> <li>STORIES</li></Link>
                       <Link href='/features'> <li>FEATURES</li></Link>
                       <Link href='/pricing'> <li>PRICING</li></Link>
                    </ul>
                </div>
                <div className="socials">
                    <img src='/assets/shared/desktop/facebook.svg' alt="image of facebook icon" className="social-icon" />
                    <img src='/assets/shared/desktop/youtube.svg'alt="image of youtube icon" className="social-icon" />
                    <img src='/assets/shared/desktop/twitter.svg'alt="image of twitter icon" className="social-icon" />
                    <img src='/assets/shared/desktop/pinterest.svg' alt="image of pinterest icon" className="social-icon" />
                    <img src='/assets/shared/desktop/instagram.svg' alt="image of instagram icon" className="social-icon" />
            </div>
            </div>
            
            
        </div>
        

        <div className="get-invite">
            <div className="invite-copyright-holder">
            <div className="invite-link-holder">
            <Link href='/invite' className="invite-link">
            GET AN INVITE</Link>
            <img src='/assets/shared/desktop/arrow.svg' alt="" className="arrow" />
            </div>
            <div className="copyright-holder">
                <p className="copyright">
                    Copyright 2025 All Rights Reserved.
                </p>
            </div>
            </div>
           
        </div>
    </div>
</footer>
</>)
}
export default Footer;