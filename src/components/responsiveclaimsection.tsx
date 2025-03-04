

interface ClaimProps{
    claimTitle1:string
    claimTitle2:string
    claimTitle3:string
    claimDesc1:string
    claimDesc2:string
    claimDesc3:string
    claimImg1:string
    claimImg2:string
    claimImg3:string
}

const ResponsiveClaim:React.FC<ClaimProps> = ({claimDesc1,claimDesc2,claimDesc3
                                            ,claimImg1,claimImg2,claimImg3,
                                            claimTitle1,claimTitle2,claimTitle3}) =>{

                                                
return(<>
<div className="responsive-wrapper">
<div className="responsive-section">
    <div className="claim">
        <img src={claimImg1} alt="" className="responsive-icon" />
        <h3 className="claim-title">
        {`${claimTitle1}`}
        </h3>
        <p className="claim-desc">
        {`${claimDesc1}`}
        </p>
    </div>
        <div className="claim">
            <img src={claimImg2} alt="" className="responsive-icon" />
            <h3 className="claim-title">
            {`${claimTitle2}`}
            </h3>
            <p className="claim-desc">
            {`${claimDesc2}`}
            </p>
        </div>
        <div className="claim">
            <img src={claimImg3} alt="" className="responsive-icon" />
            <h3 className="claim-title">
            {`${claimTitle3}`}
            </h3>
            <p className="claim-desc">
            {`${claimDesc3}`}
            </p>
        </div>
</div>
</div>
</>)

}
export default ResponsiveClaim;