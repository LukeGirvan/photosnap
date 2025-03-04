import Link from 'next/link'

interface MobileProps{
    display:boolean;
}
const MobileMenu:React.FC<MobileProps> =({display})=>{
return(<>
<div className={`mobile-menu ${display ? 'slide-down':'hidden slide-up'}`}>
    <nav className="nav-list">
        <ul>
            <Link href='/stories'><li>STORIES</li></Link>
            <Link href='/features'><li>FEATURES</li></Link>
            <Link href='/pricing'><li>PRICING</li></Link>
        </ul>
    </nav>

    <div className="button2">
        GET AN INVITE
    </div>
</div>
<div className={`blur-modal ${display ? 'fade-in' : 'hidden fade-out'}`}>

</div>
</>)
}
export default MobileMenu;