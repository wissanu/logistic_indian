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
          <div class="text-sm font-bold text-gray-700 dark:text-white">
            Job Order No
            <input
              class="focus:shadow-outline mt-1 w-full appearance-none rounded border border-gray-400 px-2 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="job-order"
              type="text"
              placeholder=""
            />
          </div>
          <div class="text-sm font-bold text-gray-700 dark:text-white">
            Tracking No
            <input
              class="focus:shadow-outline mt-1 w-full appearance-none rounded border border-gray-400 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="job-order"
              type="text"
              placeholder=""
            />
          </div>
          <div class="text-sm font-bold text-gray-700 dark:text-white">
            <div class="relative flex items-center">
              Shipment Type
              <p class="text-sm font-bold text-red-700 dark:text-white">*</p>
            </div>
            <div class="relative mt-1 inline-block w-full">
              <select class="focus:shadow-outline block w-full appearance-none rounded border border-gray-400 bg-white px-4 py-2 pr-8 leading-tight shadow hover:border-gray-500 focus:outline-none">
                <option>one</option>
                <option>two</option>
                <option>three</option>
              </select>
              {/* <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div> */}
            </div>
          </div>
          <div class="text-sm font-bold text-gray-700 dark:text-white">
            Branch
            <input
              class="focus:shadow-outline mt-1 w-full rounded border border-gray-400 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="job-order"
              type="text"
              placeholder=""
            />
          </div>
          {/* <div class=""></div> */}
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
          <div class="text-sm font-bold text-gray-700 dark:text-white">
            Status
            <div class="relative mt-1 inline-block w-full">
              <select class="focus:shadow-outline block w-full appearance-none rounded border border-gray-400 bg-white px-4 py-2 pr-8 leading-tight shadow hover:border-gray-500 focus:outline-none">
                <option>one</option>
                <option>two</option>
                <option>three</option>
              </select>
              {/* <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div> */}
            </div>
          </div>
          <div class="text-sm font-bold text-gray-700 dark:text-white">
            Shipper
            <input
              class="focus:shadow-outline mt-1 w-full appearance-none rounded border border-gray-400 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="job-order"
              type="text"
              placeholder=""
            />
          </div>
          <div class="text-sm font-bold text-gray-700 dark:text-white">
            Vessel
            <input
              class="focus:shadow-outline mt-1 w-full appearance-none rounded border border-gray-400 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="job-order"
              type="text"
              placeholder=""
            />
          </div>
          <div class="text-sm font-bold text-gray-700 dark:text-white">
            Voyage
            <input
              class="focus:shadow-outline mt-1 w-full appearance-none rounded border border-gray-400 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="job-order"
              type="text"
              placeholder=""
            />
          </div>
          <div class="text-sm font-bold text-gray-700 dark:text-white">
            Consignee
            <input
              class="focus:shadow-outline mt-1 w-full appearance-none rounded border border-gray-400 px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              id="job-order"
              type="text"
              placeholder=""
            />
          </div>
          <div class="flex-items relative flex justify-end space-x-4 py-3">
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
