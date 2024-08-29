import React from 'react';
import livingRoom from '../../assets/images/Living Room_1.png';
import office from '../../assets/images/office.png';
import kitchen from '../../assets/images/Kitchen Shot_3.png';
import bathroom from '../../assets/images/bathroom_white on counter.png';

const Screen2 = () => {
  return (
    <div className="relative w-full pt-[50px]">
      <div className="absolute inset-0 z-10 text-center flex flex-col justify-center items-center pointer-events-none">
        <p className="font-brandon font-normal text-[16px] leading-[23px] tracking-[2.4px] text-white uppercase">
          WHERE YOU NEED IT,
        </p>
        <h1 className="font-chronicle font-black text-[78px] leading-[82px] -tracking-[0.78px] text-white w-2/5">
          when you need it.
        </h1>
      </div>
      <div className="overflow-x-scroll no-scrollbar">
        <div className="flex flex-row w-max">
          <div className="w-[535px] aspect-[1.28915662651] rounded-[14px] relative group overflow-hidden mr-[20px]">
            <img
              src={livingRoom}
              alt="Living room image"
              className="absolute inset-0 w-full h-auto transform transition duration-500 ease-out group-hover:scale-110"
            />
            <p className="absolute bottom-[22px] inset-x-0 font-chronicle font-bold lowercase text-[22px] transition duration-500 ease-out opacity-0 group-hover:opacity-100 text-white text-center">
              living room
            </p>
          </div>
          <div className="w-[535px] aspect-[1.28915662651] rounded-[14px] relative group overflow-hidden mr-[20px]">
            <img
              src={office}
              alt="Office image"
              className="absolute inset-0 w-full h-auto transition duration-500 ease-out group-hover:scale-110"
            />
            <p className="absolute bottom-[22px] inset-x-0 font-chronicle font-bold lowercase text-[22px] transition duration-500 ease-out opacity-0 group-hover:opacity-100 text-white text-center">
              office
            </p>
          </div>
          <div className="w-[535px] aspect-[1.28915662651] rounded-[14px] relative group overflow-hidden mr-[20px]">
            <img
              src={kitchen}
              alt="Kitchen image"
              className="absolute inset-0 w-full h-auto transition duration-500 ease-out group-hover:scale-110"
            />
            <p className="absolute bottom-[22px] inset-x-0 font-chronicle font-bold lowercase text-[22px] transition duration-500 ease-out opacity-0 group-hover:opacity-100 text-white text-center">
              kitchen
            </p>
          </div>
          <div className="w-[535px] aspect-[1.28915662651] rounded-[14px] relative group overflow-hidden">
            <img
              src={bathroom}
              alt="Bathroom image"
              className="absolute inset-0 w-full h-auto transition duration-500 ease-out group-hover:scale-110"
            />
            <p className="absolute bottom-[22px] inset-x-0 font-chronicle font-bold lowercase text-[22px] transition duration-500 ease-out opacity-0 group-hover:opacity-100 text-white text-center">
              bathroom
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen2;
