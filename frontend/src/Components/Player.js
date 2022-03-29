import React, { useEffect, useState } from 'react';

const Player = ({ children }) => {
    const [musicTime, setMusicTime] = useState(["00", "00"])
    const [isPlaying, setIsPlaying] = useState(false)
    useEffect(() => {
        const audio = document.getElementById("audio");
        audio.addEventListener("timeupdate", () => {
            let minute = Math.floor(audio.currentTime / 60);
            let second = Math.floor(audio.currentTime - minute * 60);
            if (minute.toString().length === 1) {
                minute = "0" + minute
            }
            if (second.toString().length === 1) {
                second = "0" + second
            }
            setMusicTime([minute, second]);
        })
    }, [])

    // useEffect(() => {
    //     console.log(musicTime);
    // }, [musicTime])


    // const { music, cover, name, artist } = children;
    return (
        <div className='fixed bottom-0 w-screen h-20 bg-l left-0 right-0 m-auto  bg-white shadow-2xl shadow-gray-900 flex justify-around'>
            <audio preload="metadata" controls id='audio'>
                <source src="https://dl.musiclove.ir/ahang/2021/12/26/2021shahab-ranjbar-remix.mp3" type="audio/mp3" />
            </audio>

            <p><span>{musicTime[0]}</span>:<span>{musicTime[1]}</span></p>
            <button onClick={() =>{
                const audio = document.getElementById("audio");
                if(isPlaying){
                    setIsPlaying(false);
                    audio.pause()
                }else {
                    setIsPlaying(true);
                    audio.play()
                }
            }}>{">"}</button>
        </div>
    );
};

export default Player;