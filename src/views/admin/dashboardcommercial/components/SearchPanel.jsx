import CardMenu from "components/card/CardMenu";
import Card from "components/card";
import { useState } from "react";
import React, { useMemo } from "react";

const SearchPanel = (
  { typeRender, monthRender, yearRender },
  currentType,
  monthSelect,
  yearSelect
) => {
  const generateArrayOfYears = () => {
    let max = new Date().getFullYear();
    let min = max - 9;
    let years = [];

    for (let i = max; i >= min; i--) {
      years.push(i);
    }
    return years;
  };

  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth() + 1;
  const daysNumInCurrentMonth = new Date(
    currentYear,
    currentMonth,
    0
  ).getDate();

  const typeList = ["Sea-Import", "Sea-Export", "Air-Import", "Air-Export"];
  const yearList = generateArrayOfYears();
  const monthList = [...Array(12).keys()].map((i) => i + 1);
  return (
    <div class="h-full w-full p-4">
      <div class="relative flex items-center justify-end space-x-4">
        <div class="relative mt-1 inline-block ">
          <select
            onChange={(e) => typeRender(e)}
            // value={currentDay}
            class="focus:shadow-outline block w-full appearance-none rounded border border-gray-400 bg-white px-4 py-2 pr-8 leading-tight shadow hover:border-gray-500 focus:outline-none"
          >
            {typeList.map((i, idx) => (
              <option key={idx}>{i}</option>
            ))}
          </select>
        </div>
        <div class="relative mt-1 inline-block ">
          <select
            onChange={(e) => monthRender(e)}
            class="focus:shadow-outline block w-full appearance-none rounded border border-gray-400 bg-white px-4 py-2 pr-8 leading-tight shadow hover:border-gray-500 focus:outline-none"
          >
            {monthList.map((i) =>
              i == currentMonth ? (
                <option selected>{i}</option>
              ) : (
                <option>{i}</option>
              )
            )}
          </select>
        </div>
        <div class="relative mt-1 inline-block">
          <select
            onChange={(e) => yearRender(e)}
            class="focus:shadow-outline block w-full appearance-none rounded border border-gray-400 bg-white px-4 py-2 pr-8 leading-tight shadow hover:border-gray-500 focus:outline-none"
          >
            {yearList.map((i) => (
              <option>{i}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchPanel;
