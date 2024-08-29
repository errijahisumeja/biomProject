import React from 'react';
import arrowGreen from "../../assets/icons/Icon ionic-ios-arrow-round-forward.svg";
import green from "../../assets/images/Green_1.png";
import white from "../../assets/images/Biom fn .20.png";
import black from "../../assets/images/Black_2.png";

const Screen3 = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center min-h-[400px] pt-[120px] w-full overflow-hidden">
      <div className="pl-[39px] lg:pl-[69px] pr-[39px]">
        <h1 className="font-black font-chronicle text-[36px] leading-[44px] text-black w-[297px]">Ready to start wiping out waste?</h1>
        <div className="mt-[35px] inline-flex items-center px-[20px] py-[10px] border border-black text-black font-bold text-[14px] leading-[18px] uppercase rounded-[5px]">
          <span>Choose Your Vessel Color</span>
          <div className="relative group inline-block">
  <img
    src={arrowGreen}
    className="h-[12px] w-auto ml-[20px] transition-transform duration-300 ease-in-out group-hover:translate-x-[5px]"
    alt="Arrow"
  />
</div>

        </div>
      </div>
      <div className="w-full h-[1400px] lg:h-[400px] relative">
        <div className="z-10 w-[400px] aspect-square absolute top-0 inset-x-0 lg:left-0 lg:right-auto mx-auto flex items-end justify-start group">
          <img src={green} alt="Biom green" className="absolute inset-0 w-full h-auto transition-transform duration-300 ease-out group-hover:translate-x-1/4" />
          <div className="pb-[50px] pl-[10px] z-20 transition-opacity duration-300 ease-out opacity-0 group-hover:opacity-100">
            <h2 className="font-black font-chronicle text-[22px] leading-[28px] tracking-[2.2px] text-black">Biom Dispenser</h2>
            <p className="font-medium font-brandon text-[14px] leading-[28px] tracking-[1.4px] text-black uppercase">Ocean Teal</p>
          </div>
        </div>
        <div className="z-20 w-[400px] aspect-square absolute inset-0 m-auto flex items-end justify-start group">
          <img src={white} alt="Biom white" className="absolute inset-0 w-full h-auto transition-transform duration-300 ease-out group-hover:translate-x-1/4" />
          <div className="pb-[50px] pl-[10px] z-30 transition-opacity duration-300 ease-out opacity-0 group-hover:opacity-100">
            <h2 className="font-black font-chronicle text-[22px] leading-[28px] tracking-[2.2px] text-black">Biom Dispenser</h2>
            <p className="font-medium font-brandon text-[14px] leading-[28px] tracking-[1.4px] text-black uppercase">White</p>
          </div>
        </div>
        <div className="z-30 w-[400px] aspect-square absolute bottom-0 inset-x-0 lg:right-0 lg:left-auto mx-auto flex items-end justify-start group">
          <img src={black} alt="Biom black" className="absolute inset-0 w-full h-auto transition-transform duration-300 ease-out group-hover:translate-x-1/4" />
          <div className="pb-[50px] pl-[10px] z-40 transition-opacity duration-300 ease-out opacity-0 group-hover:opacity-100">
            <h2 className="font-black font-chronicle text-[22px] leading-[28px] tracking-[2.2px] text-black">Biom Dispenser</h2>
            <p className="font-medium font-brandon text-[14px] leading-[28px] tracking-[1.4px] text-black uppercase">Ink Black</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen3;
