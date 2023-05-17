import CardMenu from "components/card/CardMenu";
import Card from "components/card";

import React, { useMemo } from "react";

const SearchPanel = () => {
  return (
    <div class="h-full w-full p-4">
      <div class="relative flex items-center justify-end space-x-4">
        <div class="relative mt-1 inline-block ">
          <select class="focus:shadow-outline block w-full appearance-none rounded border border-gray-400 bg-white px-4 py-2 pr-8 leading-tight shadow hover:border-gray-500 focus:outline-none">
            <option>one</option>
            <option>two</option>
            <option>three</option>
          </select>
        </div>
        <div class="relative mt-1 inline-block ">
          <select class="focus:shadow-outline block w-full appearance-none rounded border border-gray-400 bg-white px-4 py-2 pr-8 leading-tight shadow hover:border-gray-500 focus:outline-none">
            <option>one</option>
            <option>two</option>
            <option>three</option>
          </select>
        </div>
        <div class="relative mt-1 inline-block">
          <select class="focus:shadow-outline block w-full appearance-none rounded border border-gray-400 bg-white px-4 py-2 pr-8 leading-tight shadow hover:border-gray-500 focus:outline-none">
            <option>one</option>
            <option>two</option>
            <option>three</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchPanel;
