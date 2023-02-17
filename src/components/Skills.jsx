import React, {useEffect} from 'react'
import TagCloud from 'TagCloud'

const Skills = () => {
  
    useEffect(() => {
        const container = '.tagcloud';
        const texts = [
          'HTML',
          'CSS',
          'SASS',
          'JavaScript',
          'React',
          'TypeScript',
          'NextJS',
          'NodeJS',
          'GIT',
          'Java',
          'Python',
          'C++',
          'Tailwind',
          'C',
        ];
    
        const options = {
          radius: 250,
          maxSpeed: 'fast',
          initSpeed: 'normal',
          keep: true,
        };
    
        TagCloud(container, texts, options);
      }, []);

  return (
        <div name="skills" className="h-screen w-full bg-gradient-to-b from-sky-900 via-black to-black text-blue-300">
            <div className="mx-auto flex flex-col justify-center max-w-screen w-full h-full items-center">
                <div className="text-3xl inline border-b-2 border-blue-300">
                    Skills 
                </div>
                <span className="tagcloud text-xl text-blue-600"></span>
            </div>
            
        </div>
  )
}

export default Skills
