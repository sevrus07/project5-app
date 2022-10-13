import './Catalog.css';
import { useNavigate } from 'react-router';
import React from "react";
import SongCard from './SongCard';

const Catalog = ({ songCards }) => {

    return(
        <div className='catalog'>
            
            {
                songCards.map( song => <SongCard title={ song.title } artist={ song.artist } /> )
            }
        </div>
    )
}

export default Catalog;