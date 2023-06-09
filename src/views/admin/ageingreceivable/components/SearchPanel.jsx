import CardMenu from "components/card/CardMenu";
import Card from "components/card";
import Datepicker from "tailwind-datepicker-react";
import { DatepickerOption } from "components/datepickeroption/datepickerOption";
import React, { useMemo, useEffect, useState } from "react";

const SearchPanel = () => {
  const [show, setShow] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const handleChange = (selectedDate) => {
    setSelectedDate(selectedDate);
    console.log(selectedDate);
  };
  const handleClose = (state) => {
    setShow(state);
  };

  return (
    <Card extra={"w-full h-full p-4"}>
      <div class="relative flex items-center justify-between">
        <div class="text-sm font-bold text-navy-700 dark:text-white">
          Search Criteria
        </div>
        <CardMenu />
      </div>

      <div class="h-full">
        <div class="mt-5 grid grid-cols-4 gap-5 md:grid-cols-3">
          <div class="relative max-w-sm text-sm font-bold text-gray-700 dark:text-white">
            Date
            <Datepicker
              options={DatepickerOption}
              onChange={handleChange}
              show={show}
              setShow={handleClose}
            />
            {/* <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 pt-5">
              <svg
                aria-hidden="true"
                class="h-5 w-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              datepicker
              datepicker-autohide
              type="text"
              class="block w-full rounded-lg border border-gray-400 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder=""
              id="datepickerId"
            /> */}
          </div>
          <div class="flex-items relative col-span-3 flex justify-end space-x-4 py-3 md:col-span-2">
            <button class="rounded border border-blue-700 bg-blue-500 px-4 py-2 text-sm font-bold text-white hover:bg-blue-700">
              Find
            </button>
            <button class="rounded border border-gray-700 bg-gray-500 px-4 py-2 text-sm font-bold text-white hover:bg-blue-700">
              Reset
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SearchPanel;
