import React from "react";
import axios from "axios";
import "./App.css"
import { useReducer,useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Info from './components/Info'
import Catalog from './components/Catalog'
import SubscribePage from "./components/SubscribePage";
import SingPage from "./components/SingPage";



const App = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/v1.0.0/songs")
      .then(response => {
        setSongs(response.data)
      })
  }, [])
  useEffect(() => {
    console.log( songs );
  }, [ songs ])

  // const playFunction = (id) => {
  //   setCurrentSong(songs.find(song => song.id === id));
  // }

  // const reserveFunction = (id) => {
  //   const song = songs.find( song => song.id === id );
  //   setReserveSong( [ ...ReserveSong, song ]);
  // }

  // const deleteFunction = (id) => {
  //   const index = ReserveSongs.findIndex( reserveSong => reserveSong.id === id );
  //   const reserveSong = re.slice(0);
  //   reserveSongs.splice( index, 1 );
  //   setReserveSong( currentTodo );
  // }


  

  return(<>
    <div className= "app">
      
    </div>

    <Navbar/>

    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/info' element={<Info/>}></Route>
      <Route path='/catalog' element={<Catalog songCards={ songs }/>}></Route>
      <Route path='/subscribe' element={<SubscribePage/>}></Route>
      <Route path='/sing' element={<SingPage/>}></Route>
    </Routes>

    

  </>)
}

export default App;