import React  from "react";
import image from "../../assets/06.jpg";


function Body() {
  
  return (
    <div className="bg-gray-950 text-white flex-grow">
      <div className="flex flex-col">
        <div className="relative flex justify-center">
          <img
            className="object-cover w-full opacity-90"
            style={{ height: "82vh"}}
            src={image}
            alt="Welcome"
          />
          <div className="absolute w-10/12 flex flex-col items-center top-52 text-center drop-shadow-[0_10px_10px_rgba(0,0,0,1)]">
            <h1 className="text-6xl font-bold text-white drop-shadow-[0_10px_10px_rgba(0,0,0,1)]">
              Welcome to our site
            </h1>
            <p className="text-3xl font-semibold text-white drop-shadow-[0_10px_10px_rgba(0,0,0,1)]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              ante justo. Integer euismod libero id mauris malesuada tincidunt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
