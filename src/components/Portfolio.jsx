import React from 'react'
import colorpic from '../assets/pic04.jpg'


const Portfolio = () => {

  return (
    <div name="projects" className="bg-gradient-to-b from-black via-black to-blue-900 text-blue-300 w-full h-screen">
      <div className="max-w-screen mx-auto flex flex-col justify-center w-full h-full">
        <div className="mx-auto flex flex-col ">
            <p className="text-3xl font-bold inline border-b-2 border-blue-300 mx-auto">Projects</p>
            <p className="py-4 pb-8 mx-auto text-md">These are some of the side projects I worked on!</p>
        </div>

        <div className="grid grid-cols-3 gap-12 max-w-5xl items-center justify-center mx-auto">
            <div className="shadow-md shadow-blue-600 mx-auto rounded-md hover:shadow-lg hover:shadow-blue-600 duration-300">
                <img src={colorpic} alt="" className="w-3/4 h-3/4  mx-auto" />
                <div className="mx-12 w-60  flex justify-center">
                    <a className="mx_auto hover:scale-105 duration-200 " href = "https://imadksiddiqui.github.io/color_guesser" target="_blank" rel="noreferrer">Video Demo</a>
                    <a className="mx-auto hover:scale-105 duration-200" href="https://github.com/imadksiddiqui/Color-Guesser" target="_blank" rel="noreferrer">Repository</a>
                </div>
            </div>
            <div className="shadow-md shadow-blue-600 mx-auto rounded-md hover:shadow-lg hover:shadow-blue-600 duration-300">
                <img src={colorpic} alt="" className="w-3/4 h-3/4  mx-auto" />
                <div className="mx-12 w-60  flex justify-center">
                    <a className="mx_auto hover:scale-105 duration-200 " href = "https://imadksiddiqui.github.io/color_guesser" target="_blank" rel="noreferrer">Video Demo</a>
                    <a className="mx-auto hover:scale-105 duration-200" href="https://github.com/imadksiddiqui/Color-Guesser" target="_blank" rel="noreferrer">Repository</a>
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Portfolio
