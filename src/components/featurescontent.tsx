import HeroSection from "./herosection";
import { useMemo } from "react";
import ResponsiveClaim from "./responsiveclaimsection";
// import  responsiveIcon from ''

import BottomModal from "./bottommodal";




function FeaturesContent(){

    const responsiveTitle1 = useMemo(()=>{
        return('100% Responsive')
    },[])

    const responsiveTitle2 = useMemo(()=>{
        return('No Photo Upload Limit')
    },[])

    const responsiveTitle3 = useMemo(()=>{
        return('Available to Embed')
    },[])


    const responsiveDescription1 = useMemo(()=>{
        return(`No matter which the device you’re on,
             our site is fully responsive and stories look beautiful on any screen.`)
    },[])
    
    const responsiveDescription2 = useMemo(()=>{
        return(`Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.`)
    },[])


    const responsiveDescription3 = useMemo(()=>{
        return(` Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.`)
    },[])


    const responsiveTitle4 = useMemo(()=>{
        return('Custom Domain')
    },[])

    const responsiveTitle5 = useMemo(()=>{
        return('Boost Your Exposure ')
    },[])

    const responsiveTitle6 = useMemo(()=>{
        return('Drag & Drop Images')
    },[])


    const responsiveDescription4 = useMemo(()=>{
        return(`With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding! `)
    },[])
    
    const responsiveDescription5 = useMemo(()=>{
        return(`Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.`)
    },[])


    const responsiveDescription6 = useMemo(()=>{
        return(` drag and drop your images and get beautiful shots everytime. No over the top tooling to add friction to creating stories.`)
    },[])


    const modalText = useMemo(()=>{
        return(`WE'RE IN BETA! GET YOUR INVITE TODAY `)
    },[])

    return(<>
    <HeroSection utilClass="hero-jpg" 
    description={`We make sure all of our features are designed to be loved by every 
        aspiring and even professional photograpers who wanted to share their stories.`} 
    title="Features" 
    backgroundColour="black" 
    reverse={false} 
    linkText=""
    hideLink={true}/>
    <div className="responsive-features-holder">
    <ResponsiveClaim 
            claimImg1={'/assets/features/desktop/responsive.svg'}
            claimImg2={'/assets/features/desktop/no-limit.svg'}
            claimImg3={'/assets/features/desktop/embed.svg'}
            claimDesc1={responsiveDescription1}
            claimDesc2={responsiveDescription2}
            claimDesc3={responsiveDescription3}
            claimTitle1={responsiveTitle1}
            claimTitle2={responsiveTitle2}
            claimTitle3={responsiveTitle3}
        />


<ResponsiveClaim 
            claimImg1={'/assets/features/desktop/custom-domain.svg'}
            claimImg2={'/assets/features/desktop/boost-exposure.svg'}
            claimImg3={'/assets/features/desktop/drag-drop.svg'}
            claimDesc1={responsiveDescription4}
            claimDesc2={responsiveDescription5}
            claimDesc3={responsiveDescription6}
            claimTitle1={responsiveTitle4}
            claimTitle2={responsiveTitle5}
            claimTitle3={responsiveTitle6}
        />
    </div>

        <BottomModal utilClass={`flower-image`} bottomModalBigText={modalText}/>






    </>)
}
export default FeaturesContent;