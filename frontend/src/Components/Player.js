import React, { useEffect, useState } from 'react';
import play from "../Images/play.svg"
import pause from "../Images/pause.svg"
import defaultImg from "../Images/defaultImg.jpg"
const Player = ({ children }) => {
    const [Music, setMusic] = useState("");
    const [Artist, setArtist] = useState("");
    const [Name, setName] = useState("");
    const [Cover, setCover] = useState("");
    const [musicTime, setMusicTime] = useState(["00", "00"])
    const [isPlaying, setIsPlaying] = useState(false)
    const [curTime, setCurTime] = useState(0);
    const [audioDuration, setAudioDuration] = useState(0)
    const [convertedTime, setConvertedTime] = useState(["00", "00"])

    useEffect(() => {
        const audio = document.getElementById("audio");
        audio.onloadedmetadata = function () {
            setAudioDuration(audio.duration);
            let minute = Math.floor(audio.duration / 60);
            let second = Math.floor(audio.duration - minute * 60);
            if (minute.toString().length === 1) {
                minute = "0" + minute
            }
            if (second.toString().length === 1) {
                second = "0" + second
            }
            setConvertedTime([minute, second])
        };
        audio.addEventListener("timeupdate", () => {
            setCurTime(audio.currentTime);
            let minute = Math.floor(audio.currentTime / 60);
            let second = Math.floor(audio.currentTime - minute * 60);
            if (minute.toString().length === 1) {
                minute = "0" + minute
            }
            if (second.toString().length === 1) {
                second = "0" + second
            }
            setMusicTime([minute, second]);
            if (audio.currentTime == audio.duration) {
                setIsPlaying(false)
            }
        })
    }, [])

    useEffect(() => {
        setIsPlaying(true)
        const audio = document.getElementById("audio");
        audio.addEventListener("loadeddata" , () =>{
            audio.play()
        })
        if (children) {
            setMusic(children.music);
            setArtist(children.artist);
            setName(children.name);
            setCover(children.cover);
        }
    }, [children])
    return (
        <>
            <div className='fixed bottom-0 w-screen h-32 bg-l left-0 right-0 m-auto  bg-white shadow-2xl shadow-gray-900 flex items-center justify-around'>
                <div className='flex items-center absolute left-0 bottom-0'>
                    <img src={Cover ? Cover : defaultImg} className='h-32 w-32 ' alt="cover" />
                    <div className='ml-4'>
                        <p className='mb-2 font-bold text-lg'>{Artist ? Artist : "Music Player"}</p>
                        <p className='text-gray-600'>{Name ? Name : "Mern Music Player"}</p>
                    </div>
                </div>
                <div className='absolute w-screen h-32 flex justify-center flex-wrap  pt-3' >
                    <button onClick={() => {
                        const audio = document.getElementById("audio");
                        if (isPlaying) {
                            setIsPlaying(false);
                            audio.pause()
                        } else {
                            setIsPlaying(true);
                            audio.play()
                        }
                    }} className='w-full flex justify-center items-center'>
                        <img className='w-12 h-12' src={isPlaying ? pause : play} alt="status" />
                    </button>

                    <div className='flex items-center mb-4'>
                        <p><span>{musicTime[0]}</span>:<span>{musicTime[1]}</span></p>
                        <div className='w-175 h-4 bg-gray-400 rounded-full overflow-hidden mx-4' id='background' onClick={(e) => {
                            let rect = e.target.getBoundingClientRect();
                            let x = e.clientX - rect.left;
                            const pers = (x / 700);
                            const direkt = document.getElementById("direkt")
                            // console.log();
                            const audio = document.getElementById("audio");
                            audio.currentTime = pers * audioDuration;
                        }}>
                            <div id='direkt' className='h-full bg-red-400 rounded-full ' style={{ width: `${(curTime / audioDuration) * 100}%` }}></div>
                        </div>
                        <p><span>{convertedTime[0]}</span>:<span>{convertedTime[1]}</span></p>
                    </div>
                </div>
            </div>
            <audio preload="metadata" src={Music && Music} controls id='audio' className='hidden'></audio>
        </>
    );
};

export default Player;