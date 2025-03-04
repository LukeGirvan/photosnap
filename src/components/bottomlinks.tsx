import Link from 'next/link'



interface BottomProps{
    title:string;
    byName:string;
    index:number;
}

const BottomLinks:React.FC<BottomProps> = ({title,byName,index}) =>{
    return(<>
    <div className={`about-story-${index}`}>
        <div className="details">
            <h3 className="title">
                {title}
            </h3>
            <p className="by-authour">
             By   {
                    byName
                }
            </p>
            <div className="line-div">

            </div>
            <div className="read-story-div">
            <Link href='/stories 'className="link-to-story">
            READ STORY 
            </Link>
            <img src='/assets/shared/desktop/arrow.svg' alt="" className="arrow white" />
            </div>
        </div>
    </div>
    </>)
}

export default BottomLinks;