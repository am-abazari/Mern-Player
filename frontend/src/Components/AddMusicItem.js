import React from 'react';
import like from "../Images/like.svg"
const AddMusicItem = (props) => {
    const { name, artist, cover } = props.children
    return (
        <div className='mb-20 block  px-5 '>
            <img src={cover} alt="cover" className='w-62 h-62 rounded-md mb-3' />
            <h3 className='font-bold text-black mb-1 text-left'> {artist}</h3>
            <p className='text-gray-600 text-left'> {name}</p>
            <div className='mt-8 flex justify-between items-center'>
                <button className='w-2/3 border-blue-600 border-2 text-blue-600 py-2 rounded-md hover:bg-blue-600 hover:text-white transition-all' onClick={() => {
                    props.choose(props.children) // Passing Data To Parent Musics
                }} > Add To Play List</button>
                <button  onClick={() => {
                    props.like(props.children) // Passing Data To Parent Musics
                }} 
                 className='w-1/3 h-6' ><img className='w-full h-full' src={like} alt="like" /></button>
            </div>
        </div>
    );
};

export default AddMusicItem;