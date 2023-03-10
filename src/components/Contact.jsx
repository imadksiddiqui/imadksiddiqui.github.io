import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className="h-screen w-full bg-gradient-to-b from-blue-900 via-black to-black text-teal-300">
      <div className="mx-auto flex flex-col justify-center max-w-screen w-full h-full">
        <div className="flex justify-center items_center"> 
            <p className="mx-auto text-3xl font-bold inline border-b-2 border-teal-300  mb-8">Contact</p>

        </div>
        <div className="flex justify-center items-center">
            <form action="https://getform.io/f/feac577d-a0bf-49d9-8901-7da4a62be8d9" method="POST" className="flex flex-col w-full md:w-1/2">
                <input type="text" name="name" placeholder="Name" className="valid:border-teal-300 p-2 bg-transparet border-2 rounded-md  focus:outline-none bg-transparent"/>
                <input type="text" name="email" placeholder="Email" className="valid:border-teal-300 my-2 p-2 bg-transparet border-2 rounded-md  focus:outline-none bg-transparent"/>
                <textarea name="message" rows="8" placeholder="Enter your message" className="valid:border-teal-300 p-2 bg-transparent border-2 rounded-md focus:outline-none" />
                <button className="px-9 mt-4 text-teal-300 rounded-md flex flex-auto mx-auto shadow-md shadow-teal-300 hover:shadow-lg hover:shadow-teal-300 items-center h-12 w-28">Send</button> 
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
