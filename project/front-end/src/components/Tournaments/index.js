import React from "react";
import image from "../../assets/06.jpg";
import Filter from "./filter";

function Body() {
  return (
    <div
      className=" text-white flex-grow"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="flex-grow flex-col justify-center">
        <div className="flex flex-col items-center">
            <div className="flex">
                <Filter/>
            </div>
          <h1 className="text-6xl font-bold text-white drop-shadow-[0_10px_10px_rgba(0,0,0,1)]">
            penis
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Body;
