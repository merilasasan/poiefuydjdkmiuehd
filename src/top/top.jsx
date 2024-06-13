
import './top.css';
import imgtop from '../assets/topnav.png';

export const Top = ()=>{
    return(<>
    
    <header className='header___'>
        {/* head top drive */}
        <img 
            className='ttttop'
            alt='top'
            src={imgtop}
            onClick={()=> window.location.reload()}
        />
    </header>

    </>)
};