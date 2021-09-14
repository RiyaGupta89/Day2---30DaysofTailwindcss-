import React from 'react'

function Contact() {
    return (
        <div className="mb-24 w-6/12">
            <h1 className="font-semibold text-2xl md:text-4xl text-center my-8">Contact Us</h1>
            <p className="text-center text-gray-700 leading-7">
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, blanditiis.</p>
            <form className="my-6 flex flex-col gap-3"> 
                <div className="flex gap-3"> 
                    <input type="text" className="border border-red-100 bg-red-50 flex-1 p-1 outline-none text-gray-400" placeholder="Name"/>
                    <input type="email" className="border border-red-100 bg-red-50 flex-1 p-1 outline-none text-gray-400"  placeholder="Email"/>
                </div>
                <textarea name="message" className="border border-red-100 px-2 py-1 bg-red-50 h-36 outline-none text-gray-400" placeholder="Message"></textarea>
                <div className="text-center">
                <button className="bg-red-600 text-white py-2 px-8 rounded-sm w-28 hover:bg-red-400">Send</button>
                </div>
            </form>
        </div>
    )
}

export default Contact
