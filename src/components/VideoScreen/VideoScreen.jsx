import videobg from "../../assets/videos/coverr-surfing-through-the-ocean-waves-4214-1080p.mp4";
import { Suspense } from "react";

const VideoScreen = () => {
  return (
    <div className='h-[calc(100vh-68px)] w-full relative'>
      <div className="absolute inset-0 text-center rounded-[14px] bg-teal bg-origin-padding bg-center bg-no-repeat bg-cover flex flex-col items-center justify-center">
        <Suspense>
          <video className="absolute w-full h-full object-cover opacity-60 rounded-[14px] " src={videobg} autoPlay loop muted playsInline>
            Your browser does not support the video tag.
          </video>
        </Suspense>
        <p className="z-10 font-brandon font-normal text-[14px] tracking-[2.1px] text-gray-light uppercase">CLEANING OUR OCEANS WITH EVERY WIPE</p>
        <h1 className="z-10 font-chronicle font-black text-[36px] text-gray-light mt-[6px]">Wipes have plastic in them. We don’t.</h1>
        <p className="z-10 font-brandon font-normal text-[18px] leading-[28px] text-gray-light mt-[10px] w-1/3">We reinvented wipes to cut out all the bad stuff —like single-use plastic that hurts the environment, and toxic chemicals that don’t belong in our oceans (or in our homes).</p>
        <button className="mt-[24px] bg-[#FFFAFA] hover:bg-gray transition-colors min-w-[171px] z-10 h-[52px] text-teal font-black uppercase rounded-[6px]">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default VideoScreen;
