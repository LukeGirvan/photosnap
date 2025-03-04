import { useMemo} from 'react';
import HeroSection from './herosection'
import StoryLinks from './storylinks';
import ResponsiveClaim from './responsiveclaimsection';
import Footer from './footer';
// import  responsiveIcon from ''
// import  infinityIcon from ''
// import  embedIcon from ''







function HomeContent(){




    const heroTitle1 = useMemo(()=>{
        return('Create and share your photo Stories ')
    },[])

    const heroTitle2 = useMemo(()=>{
        return('Beautiful stories every time')
    },[])

    const heroTitle3 = useMemo(()=>{
        return('Designed For Everyone')
    },[])


    const heroDescription1 = useMemo(()=>{
        return(`Photosnap is a platform for photographers and visual storytellers. 
            We make it easy to share photos, 
            tell stories and connect with others.`)
    },[])
    
    const  heroDescription2 = useMemo(()=>{
        return(`We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.`)
    },[])


    const heroDescription3 = useMemo(()=>{
        return(` Photosnap can help you create stories that resonate with your audience.
             Our tool is designed for photographers of all levels, brands, businesses you name it.`)
    },[])


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




return(<>
            <HeroSection 
            title={heroTitle1.toUpperCase()} 
            description={heroDescription1} 
            backgroundColour='black' 
            utilClass={'create-and-share'} 
            reverse={false}
            linkText='Get an invite'
            hideLink={false}/>

             <HeroSection 
            title={heroTitle2.toUpperCase()} 
            description={heroDescription2} 
            backgroundColour='white' 
            utilClass={'beautiful-stories'}  
            reverse={true}
            linkText='View The Stories'
            hideLink={false}/>


             <HeroSection 
            title={heroTitle3.toUpperCase()} 
            description={heroDescription3} 
            backgroundColour='white' 
            utilClass={'designed-for-everyone'}  
            reverse={false}
            linkText='View The Stories'
            hideLink={false}/>

            <StoryLinks/>

            <ResponsiveClaim 
            claimImg1={'/assets/features/desktop/responsive.svg'}
            claimImg2={'/assets/features/desktop/no-limit.svg'}
            claimImg3={'/assets/features/desktop/embed.svg'}
            claimDesc1={responsiveDescription1}
            claimDesc2={responsiveDescription2}
            claimDesc3={responsiveDescription3}
            claimTitle1={responsiveTitle1}
            claimTitle2={responsiveTitle2}
            claimTitle3={responsiveTitle3}/>

            <Footer/>
</>)
}
export default HomeContent;