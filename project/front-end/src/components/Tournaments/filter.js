import React, { useState } from "react";
//import data from "../db/data";
// import { ChevronDownIcon } from "@heroicons/react/24/solid";
import data from "../../result.json";

function Filter() {
  const allGamesArr = [
    "CS2",
    "VALORANT",
    "FORTNITE",
    "LEAGUE OF LEGENDS",
    "APEX",
    "МИР ТАНКОВ",
    "EA SPORTS",
    "HEARTHSTONE",
    "WARFACE",
    "DOTA 2",
  ];
  const allDatesArr = [];
  data.forEach((item) => {
    const date = item.Date.split(" ")[0];
    if (!allDatesArr.includes(date)) {
      allDatesArr.push(date);
    }
  });

  const [renderData, setRenderData] = useState(data);

  function checkedsFilters() {
    const allFilters = document.querySelectorAll(".filter");
    const allDateFilters = document.querySelectorAll(".datefilter");
    const arr = [];
    allFilters.forEach((item) => {
      if (item.checked) {
        arr.push(item.value);
      }
    });
    allDateFilters.forEach((item) => {
      if (item.checked) {
        arr.push(item.value);
      }
    });
    setRenderData([]);
    if (arr.length === 0) {
      setRenderData(data);
    } else {
      arr.forEach((item) => {
        data.forEach((item2) => {
          if (item2.GameAndFormat.includes(item) || item2.Date.includes(item)) {
            setRenderData((prev) => [...prev, item2]);
          }
        });
      });
    }
  }

  return (
    <div class="flex flex-col items-center w-11/12">
      {/* <div className="bg-black px-3 py-0.5 rounded-2xl my-3" style={{background: "rgba(0,0,0,.3)"}}>
          <h1 class="text-3xl">Фильтры</h1>
        </div> */}
      <div className="flex flex-col items-center mt-3">
      <div className="relative px-3 py-0.5 w-16 h-10">
          <div className="absolute left-0 top-2 bg-black blur w-20 h-8"></div>
          <h1 class="absolute text-2xl">Игры</h1>
        </div>
        <div className="flex justify-start w-full">
          <div id="filters" class="flex flex-wrap items-center gap-2 py-2">
            {allGamesArr.map((item) => {
              return (
                <label class="flex gap-2 justify-center items-center bg-red-800 rounded-full px-1">
                  <input
                    type="checkbox"
                    class="filter"
                    value={item}
                    onChange={checkedsFilters}
                  />
                  {item}
                </label>
              );
            })}
          </div>
        </div>
        <div className="relative px-3 py-0.5 w-16 h-10">
          <div className="absolute left-0 top-2 bg-black blur w-20 h-8"></div>
          <h1 class="absolute text-2xl">Дата</h1>
        </div>
        <div className="flex justify-start w-full">
          <div id="datefilters" class="flex flex-wrap items-center gap-2 py-2">
            {allDatesArr.map((item) => {
              return (
                <label class="flex gap-2 justify-center items-center bg-red-800 rounded-full px-1">
                  <input
                    type="checkbox"
                    class="datefilter"
                    value={item}
                    onChange={checkedsFilters}
                  />
                  {item}
                </label>
              );
            })}
          </div>
        </div>
      </div>
      <div class="container flex justify-center h-full">
        <div class="flex flex-col w-full justify-center">
          <div class="flex justify-center mb-1">
          <div className="relative ml-4 px-3 py-0.5 w-32 h-10">
          <div className="absolute left-0 top-2 bg-black blur w-32 h-8 opacity-70"></div>
          <h1 class="absolute text-2xl">Турниры</h1>
        </div>
          </div>
          <div id="allitems" class="flex flex-col gap-3">
            {renderData.map((item) => {
              return (
                <div class="flex flex-col gap-2 bg-gray-800 p-2 rounded-xl">
                  <a href={item.Link}>
                    <h1 className="text-2xl">{item.GameAndFormat}</h1>
                    <p>{item.Date}</p>
                    <p>{item.StartTime}</p>
                    <p>{item.PrizeFund}</p>
                    <p id="site">{item.Name}</p>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
