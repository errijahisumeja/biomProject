
import Herobg from "../../assets/images/Kitchen_3.png";

const Hero = () => {
  return (
    <div className='relative h-[calc(100vh-25px)] w-full'>
      <div
        className="absolute top-[68px] left-[25px] right-[25px] bottom-0 bg-cover bg-center bg-no-repeat rounded-[14px] flex flex-col justify-center px-[15px] lg:px-[85px]"
        style={{ backgroundImage: `url(${Herobg})` }}
      >
        <h1 className="drop-shadow-md lg:drop-shadow-none font-chronicle font-black text-[56px] leading-[62px] tracking-[0px] text-[#FFFAFA] max-w-[237px]">
          So fresh. So green.
        </h1>
        <p className="drop-shadow-md lg:drop-shadow-none mt-[14px] font-normal text-[20px] leading-[28px] tracking-[0px] text-[#FFFAFA] max-w-[407px]">
          We believe that a more eco-friendly everyday makes a happier you and me. 
          We’re on a mission to put sustainability in reach with better-for-the-planet 
          wipes that are easy, effective, and plastic-free.
        </p>
        <button className="mt-[24px] bg-[#FFFAFA] hover:bg-gray-light transition-colors max-w-[180px] h-[50px] text-teal font-black uppercase rounded-[6px]">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;
