import './HomePage.css';
import { useNavigate } from 'react-router';

const HomePage = () => {

    const navigate = useNavigate();

    return(
        <div className='home'>
                <div className='card1'>
                <h1>Do you want to sing <br></br> at the comfort <br></br>of your home?</h1>
                <br></br>
                <button onClick={()=>navigate('/catalog')}>Start Here</button>
                </div>
                <div className='card2'>
                <img src='https://i.imgur.com/GCKvpJg.png' alt='design'></img>  
                </div>
        </div>
    )
}

export default HomePage;