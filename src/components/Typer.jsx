import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect'

const Typer = () => {
    return (
        <div className="text-3xl">
            <h1>
                <TypeWriterEffect className="py-16"
                        startDelay={750}
                        hideCursorAfterText={false}
                        multiText={[
                            "CS Major at UTD",
                            "SWE Intern at Flow",
                            "Software Developer",
                            "Full-Stack Web Developer"
                        ]}
                        cursorColor="#5eead4"
                        multiTextDelay={1000}
                        typeSped={200}
                        multiTextLoop
                        
                />
            </h1>
        </div>
        
      )
}

export default Typer
