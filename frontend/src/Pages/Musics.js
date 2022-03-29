import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from "axios"
import MusicItem from '../Components/MusicItem';
import { v4 } from "uuid";
import Player from '../Components/Player';

const Musics = () => {
    const [musicData, setMusicData] = useState("");
    useEffect(() => {
        axios.get("http://localhost:3003/").then(response => {
            setMusicData(response.data);
        })
    }, [])


    return (
        <div className='container m-auto p-12 '>
            <div>
                <h1 className='font-extrabold text-4xl mb-20'>Library</h1>
                <Link className="text-xl border-b py-6 px-5 text-red-500 border-gray-300 font-bold flex items-center justify-between" to={'#'}><p>Liked Songs</p> <p>{"➣"}</p></Link>
                <Link className="text-xl border-b py-6 px-5 text-red-500 border-gray-300 font-bold flex items-center justify-between" to={'#'}><p>Play List</p> <p>{"➣"}</p></Link>
                <Link className="text-xl border-b py-6 px-5 text-red-500 border-gray-300 font-bold flex items-center justify-between" to={'#'}><p>Artists</p> <p>{"➣"}</p></Link>
            </div>
            <div className='mt-12'>
                <h1 className='font-extrabold text-4xl mb-8'>Musics</h1>
                <div className='flex flex-wrap justify-between'>
                    {musicData.length &&
                        musicData.map(music => <MusicItem key={v4()}>{music}</MusicItem>)
                    }
                </div>
            </div>
            <div>
                <Player>{musicData[0]}</Player>
            </div>
        </div>
    );
};

export default Musics;