import  {useMemo} from 'react';
import HeroSection from './herosection';
import BottomModal from './bottommodal';
import PriceChooser from './pricechooser';
import PriceCompareChart from './pricecomparisonchart';

function PricingContent(){
    const heroTitle1 = useMemo(()=>{
        return('Pricing')
    },[])

    const heroDescription1 = useMemo(()=>{
        return(`Create your stories, Photosnap is a platform for photographers and visual storytellers.
            It's the simple way to create and share your photos`)
    },[])


    const modalText = useMemo(()=>{
        return(`WE'RE IN BETA! GET YOUR INVITE TODAY `)
    },[])
           
    
    
    
    




    const basicPrice= useMemo(()=>{
        return(19.00)
    },[])

    const basicDescription = useMemo(()=>{
        return(`Includes basic usage of our platform. Recommended for new and aspiring photographers.`)
    },[])


    const proPrice= useMemo(()=>{
        return(39.00)
    },[])

    const proDescription = useMemo(()=>{
        return(`More advanced features available. Recommended for photography veterans and professionals. `)
    },[])

    const businessPrice= useMemo(()=>{
        return(99.00)
    },[])

    const businessDescription = useMemo(()=>{
        return(`Additional features available such as more detailed metrics. Recommended for business owners.`)
    },[])

    const featureArr = useMemo(()=>{return([
        'UNLIMITED STORY POSTING',
        'UNLIMITED PHOTO UPLOAD',
        'EMBEDDING CUSTOM CONTENT',
        'CUSTOMIZE METADATA',
        'ADVANCED METRICS',
        'PHOTO DOWNLOADS',
        'SEARCH ENGINE INDEXING',
        'CUSTOM ANALYTICS'
    ])},[])


    return(<>
     <HeroSection 
            title={heroTitle1.toUpperCase()} 
            description={heroDescription1} 
            backgroundColour='black' 
            utilClass={'pricing-jpg'} 
            reverse={false}
            linkText='Get an invite'
            hideLink={true}/>
    <PriceChooser 
    basicDesc={basicDescription}
    basicMonthlyPrice={basicPrice}
    proDesc={proDescription}
    proMonthlyPrice={proPrice}
    businessDesc={businessDescription}
    businessMonthlyPrice={businessPrice}
    />
    <PriceCompareChart featureArr={featureArr}/>
    <BottomModal utilClass={`flower-image`} 
    bottomModalBigText={modalText}/>

    </>)
}
export default PricingContent;