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

  const [show2, setShow2] = useState(false);
  const [selectedDate2, setSelectedDate2] = useState(null);
  const handleChange2 = (selectedDate) => {
    setSelectedDate2(selectedDate);
    console.log(selectedDate);
  };
  const handleClose2 = (state) => {
    setShow2(state);
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
            Date From
            <Datepicker
              options={DatepickerOption}
              onChange={handleChange}
              show={show}
              setShow={handleClose}
            />
          </div>
          <div class="relative max-w-sm text-sm font-bold text-gray-700 dark:text-white">
            Date To
            <Datepicker
              options={DatepickerOption}
              onChange={handleChange2}
              show={show2}
              setShow={handleClose2}
            />
          </div>
          <div class="flex-items relative col-span-2 flex justify-end space-x-4 py-3 md:col-span-1">
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
