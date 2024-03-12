import React from "react";
// import image from "../../assets/06.jpg";
import image from "../../assets/images_1.jpg";
import Filter from "./filter";

function Body() {
  return (
    <div
      className=" text-white flex-grow "
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="flex-grow flex-col justify-center">
        <div className="flex flex-col items-center mb-5">
            <div className="flex justify-center">
                <Filter/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
