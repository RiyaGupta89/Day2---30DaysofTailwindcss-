import Image from "next/Image";

const Hero = () => {
  return (
    
      <div className="flex w-11/12 items-center h-screen">
      <div>
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-600 font-mono w-1/2 leading-10 mb-6">Get your business online in few easy steps</h1>
        <p className="text-gray-500 text-sm leading-5 w-2/3 mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis rerum
          nisi beatae commodi maiores doloremque reiciendis, suscipit ad
          explicabo quae odio non. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, sit distinctio. Voluptas inventore sint natus ad! Cumque error consequatur ad possimus iste?
        </p>
        <button className="bg-red-600 text-white py-2 px-9 rounded-sm mr-6 hover:bg-red-500">Hire me</button>
        <button className="text-gray-600 bg-gray-200 py-2 px-9 hover:bg-gray-100">View my work</button>
        </div>
      <div>
          <Image src="/info.svg" alt="info" width={425} height={425} />
      </div>

      </div>
    
  );
};

export default Hero;
