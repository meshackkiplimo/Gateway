/* eslint-disable no-unused-vars */
import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const TopDoctors = () => {
  const navigate = useNavigate();

  const { doctors } = useContext(AppContext);

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Top Doctors To Book</h1>
      <p className="sm:w-1/3 text-sm text-center">
        this are the samples of our trusted doctors{" "}
      </p>
      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {/* Add doctor cards here */}
        {doctors.slice(0, 10).map((item, index) => (
          <div
            onClick={() => navigate(`/appointment/${item._id}`)}
            key={index}
            className="border border-green-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 "
          >
            <img className="bg-green-50" src={item.image} alt={item.name} />
            <div className="p-4">
              <div className="flex items-center text-sm gap-4 text-center text-green-500">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p>available</p>
              </div>
            </div>
            <p className="text-gray-900 text-lg font-medium">{item.name}</p>
            <p className="text-gray-600 text-sm ">{item.speciality}</p>
          </div>
        ))}
      </div>
      <button onClick={()=>{navigate('/doctors');scrollTo(0,0)}} className="bg-green-300 text-gray-600 px-12 py-13 rounded-full">
        More
      </button>
    </div>
  );
};
export default TopDoctors;
