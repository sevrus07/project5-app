
import { useNavigate } from 'react-router';

const ReserveSongCard = ( {title, artist} ) => {


    return(
        <div className='container'>
            <div className='content'>
                <p><strong>{title.toUpperCase()}</strong></p>
                <p>{artist}</p>
                {/* <button onClick={()=>addToReserveFunction()}>Play Now</button> */}
            </div>
        </div>            
    )
}

export default ReserveSongCard;