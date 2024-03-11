import React, { useEffect } from "react";
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


  function checkedsFilters() {
    const allFilters = document.querySelectorAll(".filter");
    const allDateFilters = document.querySelectorAll(".datefilter");
    // console.log(allDateFilters);
    // console.log(allFilters);
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
    const allit = document.getElementById("allitems");
    console.log(allit)
    allit.innerHTML = "";
    if (arr.length === 0) {
      const el = document.getElementById("allitems");
      const template = document.getElementById("item");
      data.forEach((item) => {
        const clone = template.content.cloneNode(true);
        const div = clone.querySelector("div");
        const a = clone.querySelector("a");
        a.href = item.Link;
        const allP = clone.querySelectorAll("p");
        allP[0].textContent = item.Date;
        allP[1].textContent = item.GameAndFormat;
        allP[2].textContent = item.PrizeFund;
        allP[3].textContent = item.StartTime;
        const site = clone.getElementById("site");
        site.textContent = item.Name;
        el.appendChild(clone);
      });
    } else {
      const el = document.getElementById("allitems");
      data.forEach((item) => {
        arr.forEach((game) => {
          if (item.GameAndFormat.includes(game) || item.Date.includes(game)) {
            const template = document.getElementById("item");
            const clone = template.content.cloneNode(true);
            const div = clone.querySelector("div");
            const a = clone.querySelector("a");
            a.href = item.Link;
            const allP = clone.querySelectorAll("p");
            allP[0].textContent = item.Date;
            allP[1].textContent = item.GameAndFormat;
            allP[2].textContent = item.PrizeFund;
            allP[3].textContent = item.StartTime;
            const site = clone.getElementById("site");
            site.textContent = item.Name;
            el.appendChild(clone);
          }
        });
      });
    }
  }

  return (
    <div class="flex flex-col items-center h-screen w-screen bg-gray-800">
      <div>
        <a class="flex justify-center" href="/">
          <div class="text-white">Турнирленд</div>
        </a>
      </div>
      <div class="container flex h-full">
        <div class="bg-red-200 w-1/3 flex-grow">
          <div class="flex justify-center">
            <h1 class="text-3xl">Фильтры</h1>
          </div>
          <div>
            <div
              id="filters"
              class="flex flex-wrap items-center gap-2 border border-red-300 py-2"
            >
                {allGamesArr.map((item) => {
                    return (
                        <label class="flex gap-2 justify-center items-center bg-green-500 rounded-full px-1">
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
            <div
              id="datefilters"
              class="flex flex-wrap items-center gap-2 border-b border-b-red-300 py-2"
            >
                {allDatesArr.map((item) => {
                    return (
                        <label class="flex gap-2 justify-center items-center bg-green-500 rounded-full px-1">
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
        <div class="flex flex-col w-2/3 bg-green-600 overflow-y-auto">
          <div class="flex justify-center">
            <h1 class="text-2xl w-10">Турниры</h1>
          </div>
          <div id="allitems" class="flex flex-col gap-2">
            {
                data.map((item) => {
                    return (
                        <div class="flex flex-col gap-2 bg-blue-200 p-2 rounded-md">
                        <a href={item.Link}>
                            <p>{item.Date}</p>
                            <p>{item.GameAndFormat}</p>
                            <p>{item.PrizeFund}</p>
                            <p>{item.StartTime}</p>
                            <p id="site">{item.Name}</p>
                        </a>
                        </div>
                    );
                })   
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
