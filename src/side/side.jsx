
import './side.css';
import side_bar_img from '../assets/sideimg.png';

export const Side = ()=>{
    return(<>
    <div>
        <img 
            src={side_bar_img}
            alt="side"
            className="side_bar"
        />
    </div>
    </>)
}