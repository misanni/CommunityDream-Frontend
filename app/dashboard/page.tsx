"use client"
import React, { useEffect,Fragment, useRef } from 'react';
import { Chart, registerables } from 'chart.js';
import { CurrencyDollarIcon, UserIcon } from "@heroicons/react/24/solid";
import { ArrowTrendingUpIcon } from '@heroicons/react/20/solid';
import { TbNotification } from 'react-icons/tb';
import { Menu, Transition, Popover } from "@headlessui/react";

export default function Example() {
  const revenueChartRef = useRef<HTMLCanvasElement | null>(null);
  const salesChartRef = useRef<HTMLCanvasElement | null>(null);
  const usersChartRef = useRef<HTMLCanvasElement | null>(null);

  const revenueChartInstance = useRef<Chart<"pie", number[], string> | null>(null);
  const salesChartInstance = useRef<Chart<"line", any, string> | null>(null);
  const usersChartInstance = useRef<Chart<"polarArea", number[], string> | null>(null);

  useEffect(() => {
    Chart.register(...registerables);

    const pieChartData = {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          data: [150, 200, 180, 220, 250, 200, 300],
          backgroundColor: [
            "rgba(75, 192, 192, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          ],
        },
      ],
    };

    const chartOptions = {
      maintainAspectRatio: false,
      responsive: true,
    };

    if (revenueChartRef.current) {
      revenueChartInstance.current = new Chart(revenueChartRef.current, {
        type: "pie",
        data: pieChartData,
        options: chartOptions,
      });
    }

    const chartData = {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Data",
          data: [250, 280, 300, 280, 320, 310, 330],
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
      ],
    };

    if (salesChartRef.current) {
      salesChartInstance.current = new Chart(salesChartRef.current, {
        type: "line",
        data: chartData,
        options: chartOptions,
      });
    }

    const polarAreaChartData = {
      labels: ["Africa", "Europe", "America", "Asia", "North America", "Sat", "Sun"],
      datasets: [
        {
          label: "Users",
          data: [8000, 8200, 8400, 8500, 8600, 8700, 8800],
          backgroundColor: [
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          ],
          borderColor: [
            "rgba(153, 102, 255, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(153, 102, 255, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };

    if (usersChartRef.current) {
      usersChartInstance.current = new Chart(usersChartRef.current, {
        type: "polarArea",
        data: polarAreaChartData,
        options: chartOptions,
      });
    }

    return () => {
      revenueChartInstance.current?.destroy();
      salesChartInstance.current?.destroy();
      usersChartInstance.current?.destroy();
    };
  }, []);

  return (
    <>
    <div className='mb-7'>
    <p className="text-gray-700 text-2xl  font-bold ">Your Overview</p>
      <p className='text-gray-500'>Check out your general overview for the last few days</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4  border-b border-gray-900/10 pb-8">
    <div className="bg-white rounded-2xl shadow p-4 relative" style={{ maxHeight: "500px" }}>
  <div className="flex items-center justify-between mb-4">
    <h2 className="text-gray-700 text-xl font-semibold flex items-center">
      <CurrencyDollarIcon className="h-6 text-primary mr-2" />
      Withdrawals
    </h2>
    <div className="text-gray-500 text-sm">
      <TbNotification className="h-5 w-5" />
    </div>
  </div>

  <div className="text-3xl font-bold text-gray-800">$10,567</div>
  <div className="text-sm font-medium text-green-600">+20% in Past 7 days</div>

  <div className="flex justify-between mt-4">
    <div className="text-xs text-gray-500">
      Start Date: <span className="font-medium">08 Nov 2023</span>
    </div>
    <div className="text-xs text-gray-500">
      End Date: <span className="font-medium">18 Nov 2023</span>
    </div>
  </div>

  {/* Your chart component or other content here */}
  {/* <canvas ref={revenueChartRef} className='h-5' style={{ maxHeight: "300px" }}></canvas> */}
</div>

         {/** <canvas ref={revenueChartRef} className='h-5' style={{maxHeight:"300px"}}></canvas> */}
         <div className="bg-white rounded-2xl shadow p-4 relative" style={{ maxHeight: "500px" }}>
  <div className="flex items-center justify-between mb-4">
    <h2 className="text-gray-700 text-xl font-semibold flex items-center">
      <CurrencyDollarIcon className="h-6 text-primary mr-2" />
      Total Sales
    </h2>
    
    <div className="text-gray-500 text-sm">
    <Popover className="relative">
    <Popover.Button className="text-gray-500 text-sm">
    <TbNotification className="h-5 w-5 cursor-pointer" />
    </Popover.Button>

    <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform scale-95"
            enterTo="transform scale-100"
            leave="transition ease-in duration=75"
            leaveFrom="transform scale-100"
            leaveTo="transform scale-95"
          >
        <Popover.Panel className="absolute -right-16 sm:right-4 z-50 mt-2 bg-black shadow-sm rounded-2xl max-w-xs sm:max-w-sm w-screen">
              <div className="relative p-3">
              <div className=" items-center w-full">
                  <h1 className="text-3xl p-2 text-white">
                    Total Sales
                  </h1>
                  <div className="p-2 text-gray-200 font-medium">
                  Total number of sales recored on your nestsite account.
                  </div>

                  <div>
                    <button className="w-full rounded-full text-white bg-primary p-4 text-center">
                      Okay
                    </button>
                  </div>
                  
                </div>
              </div>

          </Popover.Panel>

    </Transition>
    </Popover>
    
    </div>
  </div>
  <div>
    <p  className='text-gray-500 pb-8 pt-0'>Last 30 days</p>
  </div>

 <div className="py-4">
 <div className="text-3xl font-bold text-gray-800">$80,567</div>
  <div className="text-sm font-medium text-primary">+20% in Past 7 days</div>

 </div>
  <div className="flex justify-between mt-4">
    <div className="text-xs text-gray-500">
      Start Date: <span className="font-medium">08 Nov 2023</span>
    </div>
    <div className="text-xs text-gray-500">
      End Date: <span className="font-medium">18 Nov 2023</span>
    </div>
  </div>

  {/* Your chart component or other content here */}
  {/* <canvas ref={revenueChartRef} className='h-5' style={{ maxHeight: "300px" }}></canvas> */}
</div>
      <div className="bg-white rounded-2xl shadow p-4" style={{  maxHeight: "500px" }}>
        <h2 className="text-gray-700 text-xl font-semibold mb-4  flex items-center"><UserIcon className="w-6 h-6 text-indigo-600 mr-2"/>Total Subscribed Users</h2>
        <div className="text-3xl font-semibold text-gray-800">8,512</div>
        <div className="text-sm font-medium text-purple-600">+30% in Past 7 days</div>
       {/** <canvas ref={usersChartRef}className='h-5' style={{maxHeight:"300px"}}></canvas> */}
      </div>
    </div>


    {/***
     *  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
      <div className="bg-white rounded-2xl shadow p-4" style={{  maxHeight: "500px" }}>
      <h2 className="text-gray-700 text-xl font-semibold mb-4 flex items-center">
      <CurrencyDollarIcon className="h-6 text-indigo-600 mr-2" />
      Withdrawals
    </h2>
        <div className="text-3xl font-bold text-gray-800">$10,567</div>
        <div className="text-sm font-medium text-green-600">+20% in Past 7 days</div>
    
      </div>

       
      <div className="bg-white rounded-2xl shadow p-4" style={{  maxHeight: "500px" }}>
        <h2 className="text-gray-700 text-xl font-semibold mb-4  flex items-center"><ArrowTrendingUpIcon className="w-6 h-6 text-indigo-600 mr-2"/>Events Schedules</h2>
        <div className="text-3xl font-semibold text-gray-800">$43,250</div>
        <div className="text-sm font-medium text-blue-600">+15% in Past 7 days</div>
     
      </div>
      <div className="bg-white rounded-2xl shadow p-4" style={{  maxHeight: "500px" }}>
        <h2 className="text-gray-700 text-xl font-semibold mb-4  flex items-center"><UserIcon className="w-6 h-6 text-indigo-600 mr-2"/>Profile Visits</h2>
        <div className="text-3xl font-semibold text-gray-800">812</div>
        <div className="text-sm font-medium text-purple-600">+10% in Past 7 days</div>
    
      </div>
    </div>
   
     */}
   
    </>
  );
}
