import './Sing.css';
import { useNavigate } from 'react-router';
import React from "react";

const SingPage = () => {
    // const playSongFunction = (url) =>{
        
    // }
    return(
        <div className='sing'>
                <div className='card1'>
                    <iframe
                    width="800"
                    height="600"
                    src="https://www.youtube.com/embed/uxUATkpMQ8A"
                    title="Youtube Player"
                    frameborder="0"
                    allowFullScreen
                    />
                </div>
                
        </div>
    )
}

export default SingPage;