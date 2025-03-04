
interface BigStoryProps{
    imageClass:string;
    storyTitle:string;
    storyDesc:string;
    byName:string;
}
const BigStoryModal:React.FC<BigStoryProps> = ({storyTitle,storyDesc,imageClass,byName}) =>{

return(
<div className={`big-modal ${imageClass}`}>
    
    <div className="details">
            <p className="last-months-story">
            LAST MONTH'S FEATURED STORY
            </p>
            <h1 className="story-title">
                {storyTitle}
            </h1>
            <div className="by-authour">
                March 2nd 2024 {byName}
            </div>
            <p className="story-desc">
                {storyDesc}
            </p>
    </div>
</div>
)
}
export default BigStoryModal;
