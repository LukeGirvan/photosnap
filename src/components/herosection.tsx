import Link from 'next/link';
// import arrow from ''



interface HeroProps{
    utilClass:string;
    description:string;
    title:string;
    backgroundColour:string;
    reverse:boolean;
    linkText:string;
    hideLink:boolean;
}

const HeroSection:React.FC<HeroProps> = ({description,reverse,title,utilClass,backgroundColour,linkText,hideLink}) =>{
    return(<div className={`hero-section ${reverse ? 'reverse' :''} ${hideLink ? 'hide-link' : ''} `}>
    <div className={`text-side ${backgroundColour} ${utilClass}`}>
       <div className="details">
       <h1 className="title">
        {title}
        </h1>
        <p className="description">
        {description}
        </p>
        <Link href='/stories'>
        {linkText} 
        <img src='/assets/shared/desktop/arrow.svg' alt="image of an arrow link" className="arrow" />
        </Link>
       </div>
    </div>
    <div className={`image-side ${utilClass}`}>
        {/* <img src={imageSrc} alt="hero image" className="big-image" /> */}
    </div>
    </div>)
}
export default HeroSection;