import React from 'react';
import TypeWriterEffect from 'react-typewriter-effect'

const Typer = () => {
    return (
        <div className="text-3xl">
            <h1>
                <TypeWriterEffect className="py-16"
                        startDelay={1000}
                        hideCursorAfterText={true}
                        text="I am a"
                        multiText={[
                            "CS Major at UTD",
                            "SWE Intern at Flow",
                            "Software Developer",
                            "Web Developer",
                            "Welcome To My Portfolio!"
                        ]}
                        multiTextDelay={1000}
                        typeSped={200}
                />
            </h1>
        </div>
        
      )
}

export default Typer
