import React from 'react'
import {AiOutlineArrowDown} from "react-icons/ai"
import me from "../assets/me.png"
import { Link } from 'react-scroll'
import Typer from './Typer'

const Home = () => {

  return (
    <div name="about" className=" h-screen w-full bg-gradient-to-b from-black via-black to-sky-900">
        <div className="items-center justify-center flex text-blue-500 max-w-screen-lg mx-auto h-full px-4 flex-row">
            <div classname="h-250 w-full">
                <p className="text-4xl pr-36">Hi, I'm Imad Siddiqui!</p>
                <p className="py-4 text-3xl text-blue-400">
                    <Typer />
                </p>
                <div>
                <Link to="skills" smooth duration="500" className="duration-200 px-8 flex my-4 hover:shadow-lg shadow-blue-600 hover:shadow-blue-600 h-8 rounded-xl shadow-md w-40 text-blue-500 cursor-pointer">
                    Skills   
                    <span className="mx-2 my-1">
                        <AiOutlineArrowDown size={20}/>
                    </span> 
                </Link>
                </div>
            </div>
            
            <div className="Putimagehere w-1/3">
                <img src={me} className="rounded-lg mx-auto w-3/4 h-3/4"/>
            </div>
        </div>
    </div>
  )
}

export default Home
