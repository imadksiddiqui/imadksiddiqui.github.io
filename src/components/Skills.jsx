import React, {useEffect} from 'react'
import TagCloud from 'TagCloud'

const Skills = () => {
  
  useEffect(() => {
    return () => {
        const container = ".tagcloud";
        const texts = [
            "HTML",
            "CSS",
            "C",
            "C#",
            "JavaScript",
            "TypeScript",
            "SQL",
            "R",
            "TailWind",
            "NodeJS",
            "NextJS",
            "JSON",
            "TensorFlow",
            "ReactJS",
            "Java",
            "Python",
            "Django",
            "Flask",
            "Git",
            "C++",
        ];
        const options = {
            radius: 325,
            maxSpeed: "fast",
            initSpeed: "normal",
            keep: true,  
        };
        TagCloud(container, texts, options);
    };
  }, []);

  return (
        <div name="skills" className="h-screen w-full bg-gradient-to-b from-sky-900 via-black to-black text-blue-300">
            <div className="mx-auto flex flex-col justify-center max-w-screen w-full h-full items-center">
                <div className="text-3xl inline border-b-2 border-blue-300">
                    Skills 
                </div>
                <span className="tagcloud text-2xl text-blue-600"></span>
            </div>
            
        </div>
  )
}

export default Skills
