import BottomLinks from "./bottomlinks";
import { useMemo } from "react";


function StoryLinks (){

    const bottomLink1 = useMemo(()=>{return{
        title:'The Mountains',
        byName:'John Appleseed'
    }},[])
    const bottomLink2 = useMemo(()=>{return{
        title:'Sunset Cityscapes',
        byName:'Benjamin Cruz'
    }},[])
    const bottomLink3 = useMemo(()=>{return{
        title:'18 Days Voyage',
        byName:'Alexei Borodin'
    }},[])
    const bottomLink4 = useMemo(()=>{return{
        title:'Architecturals',
        byName:'Samantha Brooke'
    }},[])



return(<>

<div className="story-links">
    <BottomLinks byName={bottomLink1.byName} title={bottomLink1.title} index={1}/>
    <BottomLinks byName={bottomLink2.byName} title={bottomLink2.title} index={2}/>
    <BottomLinks byName={bottomLink3.byName} title={bottomLink3.title} index={3}/>
    <BottomLinks byName={bottomLink4.byName} title={bottomLink4.title} index={4}/>
</div>
</>)
}
export default StoryLinks;