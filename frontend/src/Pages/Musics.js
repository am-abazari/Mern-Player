import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from "axios"
import MusicItem from '../Components/MusicItem';
import { v4 } from "uuid";
import Player from '../Components/Player';
import add from "../Images/add.svg"
const Musics = () => {
    const [currentMusic, setCurrentMusic] = useState("")
    const [musicData, setMusicData] = useState("");
    useEffect(() => {
        axios.get("http://localhost:3003/").then(response => {
            setMusicData(response.data);
        })
    }, [])
    const chooseMusic = (name) => { // Getting Data From Child MusicItem
        setCurrentMusic(name);
    }


    return (
        <div className='container m-auto p-12 pb-28 '>
            <div>
                <div className='flex justify-between'>
                    <h1 className='font-extrabold text-4xl mb-20'>Library</h1>
                    <Link to={"/add"}><img className='w-7 h-7 mt-4' src={add} alt="add" /> </Link>
                </div>
                <Link className="text-xl border-b py-6 px-5 text-red-500 border-gray-300 font-bold flex items-center justify-between" to={'#'}><p>Liked Songs</p> <p>{"➣"}</p></Link>
                <Link className="text-xl border-b py-6 px-5 text-red-500 border-gray-300 font-bold flex items-center justify-between" to={'#'}><p>Play List</p> <p>{"➣"}</p></Link>
                <Link className="text-xl border-b py-6 px-5 text-red-500 border-gray-300 font-bold flex items-center justify-between" to={'#'}><p>Artists</p> <p>{"➣"}</p></Link>
            </div>
            <div className='mt-12'>
                <h1 className='font-extrabold text-4xl mb-8'>Musics</h1>
                <div className='flex flex-wrap justify-between'>
                    {musicData.length !== 0 &&
                        musicData.map(music => <MusicItem choose={chooseMusic} key={v4()}>{music}</MusicItem>)
                    }
                </div>
            </div>
            <div>
                <Player>{currentMusic}</Player>
            </div>
        </div>
    );
};

export default Musics;