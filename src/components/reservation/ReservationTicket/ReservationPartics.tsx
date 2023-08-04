"use client";
import React, { useMemo } from "react";

interface Props {
  partics: object;
}

const ReservationPartics = ({ partics }: Props) => {
  const colors = [
    "bg-amber-100",
    "bg-blue-100",
    "bg-pink-100",
    "bg-red-100",
    "bg-indigo-100",
    "bg-purple-100",
    "bg-green-100",
  ];
  const particArray = useMemo(() => partics ? Object.values(partics) : null, [partics]);
  return (
    <div className='flex -space-x-4'>
      {particArray
        ? particArray
            .filter((_, index) => index < 5)
            .map((ele) => {
              const randomColor =
                Math.floor(Math.random() * 100) % colors.length;
              return (
                <div
                  key={`partic${ele}`}
                  className={`flex items-center justify-center w-10 h-10 border-2 border-white dark:border-gray-800  rounded-full ${colors[randomColor]}`}
                >
                  {ele.charAt(0)}
                </div>
              );
            })
        : null}
      {particArray && particArray?.length > 4 ? (
        <a
          className='flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800'
          href='#'
        >
          +{particArray.length - 4}
        </a>
      ) : null}
    </div>
  );
};

export default ReservationPartics;
