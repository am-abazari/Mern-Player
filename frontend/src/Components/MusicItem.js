import React from 'react';
const MusicItem = (props) => {
    const { name, artist, cover } = props.children
    return (
        <button onClick={() => {
            props.choose(props.children) // Passing Data To Parent Musics
        }} className='mb-20 block  px-5 '>
            <img src={cover} alt="cover" className='w-62 h-62 rounded-md mb-3' />
            <h3 className='font-bold text-black mb-1 text-left'> {artist}</h3>
            <p className='text-gray-600 text-left'> {name}</p>
        </button>
    );
};

export default MusicItem;