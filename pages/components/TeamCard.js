import React from 'react'
import Image from "next/Image";

function TeamCard({url, proffesion, name}) {
    return (
        <div className="relative">
        <div className="flex items-center justify-around mb-8">
                <Image src={url} height={50} width={52} className="rounded-full"></Image>
            </div>
            <p className="text-center text-gray-700 leading-7">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, aliquam voluptates beatae illum expedita nostrum veniam nulla, consequatur dolores alias, rerum hic. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. </p>
            <div className="w-12 h-1 bg-red-600 rounded-sm absolute left-40 my-4"></div>
            <div>
                <h1 className="mt-8 mb-1 text-center font-semibold font-sans uppercase text-gray-800">{name}</h1>
                <p className="text-center text-gray-400 capitalize">{proffesion}</p>
            </div>
        </div>
    )
}
 
export default TeamCard
