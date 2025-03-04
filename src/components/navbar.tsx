// import logo from ''
// import hamburger from ''

import Link from 'next/link'
import {  useEffect, useState } from 'react'
// import { useCart } from '../hooks/useCart'
// import Cart from './cart'
import MobileMenu from './mobilemenu'


function Navbar(){

    const [menuShown, setMenuShown] = useState(false);

    const showMobileMenu = () => {
    
        if(menuShown && document.body.classList.contains('scroll-lock')){
            document.body.classList.remove('scroll-lock')
        }
        if(!menuShown && !document.body.classList.contains('scroll-lock')){
            document.body.classList.toggle('scroll-lock')
        }
        console.log(!menuShown && !document.body.classList.contains('scroll-lock'))
        setMenuShown(!menuShown)
    }

    useEffect(()=>{
        if(document.body.classList.contains('scroll-lock') && !menuShown){
            document.body.classList.remove('scroll-lock')
        }
    },[])
    // useEffect(() => {
    //     document.body.classList.remove('scroll-lock')
    //     setMenuShown(false)
    //     const splitPathName = location.pathname.split('/')
    //     const headphonesNavBarLink = document.querySelector('.headphones-nav-link') as HTMLAnchorElement
    //     const earphonesNavBarLink = document.querySelector('.earphones-nav-link') as HTMLAnchorElement
    //     const speakersNavBarLink = document.querySelector('.speakers-nav-link') as HTMLAnchorElement





    //     if(splitPathName[splitPathName.length-1]==='headphones'){
    //         headphonesNavBarLink?.classList.add('selected')
    //     }
        
    //     if(splitPathName[splitPathName.length-1]=== 'earphones'){
    //         earphonesNavBarLink?.classList.add('selected')
    //     }
    //     if(splitPathName[splitPathName.length-1]=== 'speakers'){
    //         speakersNavBarLink?.classList.add('selected')
    //     }
    //     if(splitPathName[splitPathName.length-1]!=='headphones' && headphonesNavBarLink.classList.contains('selected') ){
    //         headphonesNavBarLink?.classList.remove('selected')
    //     }
        
    //     if(splitPathName[splitPathName.length-1]!=='earphones' && earphonesNavBarLink.classList.contains('selected') ){
    //         headphonesNavBarLink?.classList.remove('selected')
    //     }


    //     if(splitPathName[splitPathName.length-1]!=='speakers' && speakersNavBarLink.classList.contains('selected') ){
    //         speakersNavBarLink?.classList.remove('selected')
    //     }


    // },[location]) 

    
    
   return(
    <>
    
    <nav className="navbar">
        <div className="p-width">
            <div className="img-holder">
            <img src={`${menuShown ? '/assets/shared/mobile/close.svg':'/assets/shared/mobile/menu.svg'}`} alt="hamburger menu icon" className={`hamburger`} onClick={showMobileMenu} />
            
            </div>
            <div className="logo-holder">
            <Link href='/' >
                <img src='/assets/shared/desktop/logo.svg' alt="link to homepage" />
                </Link>
            </div>
                <ul className='nav-list'>
                <li><Link href='/stories' className='home-nav-link'>STORIES</Link></li>
                    <li><Link href='/features'  className='earphones-nav-link'>FEATURES</Link></li>
                    <li><Link href='/pricing' className='headphones-nav-link'>PRICING</Link></li>
                </ul>
                <div className="cart-holder">
                    <button className="button2">
                        GET AN INVITE
                    </button>
                </div>
        </div>
    </nav>
    <MobileMenu display={menuShown}/>
    </>
   )
}
export  default Navbar