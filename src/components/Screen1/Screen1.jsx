import screen1bg from "../../assets/images/Mask Group 12.png";
import designIcon from "../../assets/images/beautiful design icon.png";
import stainlessIcon from "../../assets/images/durable stainless icon.png";
import nonToxicIcon from "../../assets/images/non toxic icon.png";
import SideText from "../SideText/SideText";

const Screen1 = () => {
    return (
        <div className="min-h-[730px] w-full relative overflow-hidden text-teal-dark font-normal flex items-end">
            <img src={screen1bg} alt="Background Image" className="absolute lg:static w-full h-auto z-10" />
            <SideText/>
            <div className="static lg:absolute inset-0 pb-[50%] lg:pb-[0%] pt-[50%] lg:pt-[0%] pl-[25px] lg:pl-[50%] pr-[25px] lg:pr-[140px] flex flex-col justify-center items-start text-[18px] leading-[28px] z-20">
                <h6 className="text-[14px] tracking-[2.1px] uppercase">THE BIOM DISPENSER</h6>
                <h1 className="font-black font-chronicle text-[36px] mt-[8px]">Redefine your experience of clean.</h1>
                <p className="pt-[12px]">
                    A quality engineered wipes dispenser that looks beautiful in your home, making better habits for your home and planet always within reach.
                </p>
                <div className="flex flex-row items-center gap-[22px] mt-[42px]">
                    <img src={designIcon} className="h-[66px] w-auto" alt="Beautiful Design Icon" />
                    <p className="text-[18px]">Beautiful design, fit for your home</p>
                </div>
                <div className="flex flex-row items-center gap-[22px] mt-[35px]">
                    <img src={stainlessIcon} className="h-[66px] w-auto" alt="Durable Stainless Steel Icon" />
                    <p className="text-[18px]">Durable stainless steel exterior</p>
                </div>
                <div className="flex flex-row items-center gap-[22px] mt-[35px]">
                    <img src={nonToxicIcon} className="h-[66px] w-auto" alt="Non-toxic Icon" />
                    <p className="text-[18px]">Non-toxic, BPA free</p>
                </div>
                <button className="mt-[24px] bg-teal hover:bg-teal-dark transition-colors duration-300 ease-out min-w-[163px] h-[50px] text-gray-light font-black text-[13px] uppercase rounded-[6px]">
                    Shop now
                </button>
            </div>
        </div>
    );
};

export default Screen1;
