import Link from 'next/link'

// import arrow from 



interface BottomModalProps{
    bottomModalBigText:string;
    utilClass:string;

}

const BottomModal:React.FC<BottomModalProps> = ({bottomModalBigText,utilClass}) =>{
return(<>
<div className={`bottom-modal ${utilClass}`}>
    <div className="eighty-width-text-holder">
        <div className="big-text-left">
        {bottomModalBigText}
        </div>
        <div className="invite-link-holder">
            <Link href='/invite' className="invite-link">
            GET AN INVITE</Link>
            <img src='/assets/shared/desktop/arrow.svg'alt="" className="arrow" />
    </div>
    </div>
</div>
</>)
}
export default BottomModal;