import React from "react";
import image from "../../assets/06.jpg";
// import image from "../../assets/images_1.jpg";
import Filter from "./filter";

//, backgroundSize:"contain"}

function Body() {
  return (
    <div
      className="text-white flex-grow bg-fixed"
      style={{ backgroundImage: `url(${image})`,  backgroundPosition: "0px -72px", backgroundSize:"cover"}}
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
