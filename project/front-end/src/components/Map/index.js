import React  from "react";
import image from "../../assets/06.jpg";
import map from "../../assets/HILmr.png";


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
          <div className="absolute w-10/12 flex flex-col items-center text-center drop-shadow-[0_10px_10px_rgba(0,0,0,1)]">
            <img
              className="object-cover w-full opacity-90"
              style={{ height: "82vh"}}
              src={map}
              alt="Welcome"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
