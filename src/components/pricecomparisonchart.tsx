// import checkImg from 
import { useEffect, useState } from "react";
interface PriceChartProps{
featureArr:string[];

}

const PriceCompareChart:React.FC<PriceChartProps> = ({featureArr})=>{

    const [screenWidth, setScreenWidth] = useState<number | null>(null);

  useEffect(() => {
    setScreenWidth(window.innerWidth);

    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

return(<>
<div className="chart-holder">
<h3 className="compare">
            COMPARE
        </h3>
    <div className="chart">
       <div className="top-div">
            <p className="the-features">
                THE FEATURES
            </p>
            <div className={`plans-holder ${screenWidth && screenWidth < 769 ? 'hide':''}`}>
                <p className="basic-plan">
                    BASIC
                </p>
                <p className="pro-plan">
                    PRO
                </p>
                <p className="business-plan">
                    BUSINESS
                </p>
            </div>
       </div>
       {featureArr.map((feature:string,index)=>(
        <div className="feature-div">
        <p className="the-features">
            {feature.toUpperCase()}
        </p>
        <div className={`plans-holder ${screenWidth && screenWidth >= 769 ? 'hide' :''}`}>
                <p className="basic-plan">
                    BASIC
                </p>
                <p className="pro-plan">
                    PRO
                </p>
                <p className="business-plan">
                    BUSINESS
                </p>
            </div>
        <div className="plans-holder">
        <div className={`check-holder ${index >1 ? 'hide': ''}`}>
                <img src='/assets/pricing/desktop/check.svg' alt="" className="check-img" />
            </div>
            <div className={`check-holder ${index >3 ? 'hide': ''}`}>
                <img src='/assets/pricing/desktop/check.svg' alt="" className="check-img" />
            </div>
            <div className="check-holder">
                <img src='/assets/pricing/desktop/check.svg' alt="" className="check-img" />
            </div>
                </div>
        </div>
       ))}
    </div>
</div>
</>)
}
export default PriceCompareChart;