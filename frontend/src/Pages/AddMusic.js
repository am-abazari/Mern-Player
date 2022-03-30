import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import exit from "../Images/exit.svg"
const AddMusic = () => {
    const [name, setName] = useState("")
    const [cover, setCover] = useState("")
    const [artist, setArtist] = useState("")
    const [music, setMusic] = useState("")
    const setData = () => {
        if (name && cover && artist && music) {
            axios.post("http://localhost:3003/insert", {
                name: name,
                cover: cover,
                artist: artist,
                music: music
            }).then(response => {
                if (response.data.status == 201) {
                    toast.success("Record Created Successfully ! ", { theme: "dark" })
                    // setName("")
                    // setCover("")
                    // setArtist("")
                    // setMusic("")
                } else {
                    toast.error("An Error Accord While Submitting Data ! ", { theme: "dark" })

                }
            }).catch(() => {
                toast.error("An Error Accord While Submitting Data ! ", { theme: "dark" })
            })
        }
    }
    return (
        <div className='container m-auto p-12 pb-28 '>
            <div className="flex justify-between">
                <h1 className='font-extrabold text-4xl mb-20'>Add Music</h1>
            <Link to={"/"}><img src={exit}  className='w-7 h-7 mt-4 rotate-180' alt="exit" /></Link>
            </div>
            <form method='post' action='http://localhost:3003/insert'>
                <div className="relative z-0 mb-6 w-full group">
                    <input onChange={(e) => {
                        setName(e.target.value)
                    }} value={name} type="text" name="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Music Name</label>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <input onChange={(e) => {
                        setCover(e.target.value)
                    }} value={cover} type="text" name="cover" id="cover" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="cover" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Music Cover</label>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <input onChange={(e) => {
                        setArtist(e.target.value)
                    }} value={artist} type="text" name="artist" id="artist" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="artist" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Music Artist</label>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                    <input onChange={(e) => {
                        setMusic(e.target.value)
                    }} value={music} type="text" name="music" id="music" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="music" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Music Audio</label>
                </div>

                <button onClick={setData} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>
    );
};

export default AddMusic;