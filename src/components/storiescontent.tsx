import BigStoryModal from './bigstorymodal'
import StoryLinks from './storylinks';
import { useMemo } from 'react';


import BottomLinks from './bottomlinks';
function StoriesContent(){

    const story1 = useMemo(()=>{
        return{
            title:'HAZY FULL MOON OF APPALACHIA',
            byName:'John Appleseed',
            storyDesc:`The dissected plateau area, while not actually made up of geological mountains, 
            is popularly called "mountains," especially in eastern Kentucky and West Virginia, 
            and while the ridges are not high, the terrain is extremely rugged.`,
            imageClass:'hazy-moon',
            date:'23rd MARCH 2024'
        }
    },[])

    const bottomLink5 = useMemo(()=>{return{
        title:'World Tour 2019',
        byName:'Timothy Wagner'
    }},[])
    const bottomLink6 = useMemo(()=>{return{
        title:'Unforseen Corners',
        byName:'William Malcom'
    }},[])
    const bottomLink7 = useMemo(()=>{return{
        title:'King on Africa Part II',
        byName:'Tim Hillenburg'
    }},[])
    const bottomLink8 = useMemo(()=>{return{
        title:'The Trip to Nowhere',
        byName:'Felicia Rourke'
    }},[])

    const bottomLink9 = useMemo(()=>{return{
        title:'The Rage of The Sea',
        byName:'Mohammed Abdul'
    }},[])
    const bottomLink10 = useMemo(()=>{return{
        title:'Running Free',
        byName:'Michelle'
    }},[])
    const bottomLink11= useMemo(()=>{return{
        title:'Behind The Waves',
        byName:'Lamarr Wilson'
    }},[])
    const bottomLink12= useMemo(()=>{return{
        title:'Calm Waters',
        byName:'Samantha Brooke'
    }},[])

    const bottomLink13 = useMemo(()=>{return{
        title:'The Milky Way',
        byName:'Benjamin Cruz'
    }},[])
    const bottomLink14= useMemo(()=>{return{
        title:'Night at The Dark Forest',
        byName:'Mohammed Abdul'
    }},[])
    const bottomLink15 = useMemo(()=>{return{
        title:`Somwarpet's Beauty`,
        byName:'Michelle'
    }},[])
    const bottomLink16 = useMemo(()=>{return{
        title:'Land of Dreams',
        byName:'William Malcolm'
    }},[])



    return(<>
    <BigStoryModal
    byName={story1.byName}
    storyTitle={story1.title}
    storyDesc={story1.storyDesc}
    imageClass={story1.imageClass}
    
    
    
    
    
    />
    <StoryLinks/>
    <div className="story-links">
    <BottomLinks
    title={bottomLink5.title}
    byName={bottomLink5.title} index={5} />
    <BottomLinks
    title={bottomLink6.title}
    byName={bottomLink6.title} index={6} />
    <BottomLinks
    title={bottomLink7.title}
    byName={bottomLink7.title} index={7} />
    <BottomLinks
    title={bottomLink8.title}
    byName={bottomLink8.title} index={8} />
    

    </div>
    <div className="story-links-3">
    <BottomLinks
    title={bottomLink9.title}
    byName={bottomLink9.title} index={9} />
    <BottomLinks
    title={bottomLink10.title}
    byName={bottomLink10.title} index={10} />
    <BottomLinks
    title={bottomLink11.title}
    byName={bottomLink11.title} index={11} />
    <BottomLinks
    title={bottomLink12.title}
    byName={bottomLink12.title} index={12} />
    

    </div>
    <div className="story-links-3">
    <BottomLinks
    title={bottomLink13.title}
    byName={bottomLink13.title} index={13} />
    <BottomLinks
    title={bottomLink14.title}
    byName={bottomLink14.title} index={14} />
    <BottomLinks
    title={bottomLink15.title}
    byName={bottomLink15.title} index={15} />
    <BottomLinks
    title={bottomLink16.title}
    byName={bottomLink16.title} index={16} />
    

    </div>
    </>)
}
export default StoriesContent;