import Image from "next/Image";

const Card = ({img, title}) => {
    return(
        
            <div className="bg-gray-50 rounded-sm">
            <div className="bg-white mx-4 my-5">
                <Image src={img} alt="img" width={280} height={150} />
                </div>
                <div className="px-4">
                    <span className="text-red-600 uppercase text-xs font-mono">subtitle</span>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="py-4 text-gray-800 text-sm ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, est! Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        
    )
}

export default Card;