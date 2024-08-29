import img1 from '../../assets/images/AdobeStock_372350085_Preview.png';
import img2 from '../../assets/images/Biom_wipe_6.png';
import img3 from '../../assets/images/kitchen_counter_low res.png';
import img4 from '../../assets/images/Green-Gold-and-Navy-Living_Kitty-and-B-by-Kat-G.png';
import img5 from '../../assets/images/Biom fn .23.png';
import img6 from '../../assets/images/AdobeStock_334130078_Preview.png';
import ButtonIconIg from '../../assets/icons/Icon awesome-instagram.png';

const Gallery = () => {

    return (
        <div className="py-[80px] px-[0px] flex flex-col items-center">
            <h1 className="font-chronicle font-black text-[36px] leading-[44px] text-teal-dark text-center">
                #cleanwithbiom
            </h1>
            <div className="w-full relative overflow-x-scroll no-scrollbar mt-[50px] mb-[40px]">
                <div className="flex flex-row w-max gap-[30px] px-[0px]">
                    <span className="pb-[20px]"><img src={img1} alt="Slika 1" className="w-[350px] h-auto" /></span>
                    <span className="pt-[20px]"><img src={img2} alt="Slika 2" className="w-[370px] h-auto" /></span>
                    <span className="pb-[20px]"><img src={img3} alt="Slika 3" className="w-[350px] h-auto" /></span>
                    <span className="pt-[20px]"><img src={img4} alt="Slika 4" className="w-[370px] h-auto" /></span>
                    <span className="pb-[20px]"><img src={img5} alt="Slika 5" className="w-[350px] h-auto" /></span>
                    <span className="pt-[20px]"><img src={img6} alt="Slika 6" className="w-[350px] h-auto" /></span>
                </div>
            </div>
            <button className="group border w-[320px] border-teal-dark transition-colors duration-300 ease-out rounded-[6px] flex items-center font-brandon font-black text-[13px] leading-[10px] tracking-[1.3px] text-teal uppercase overflow-hidden">
                <span className="px-[15px] py-[10px] whitespace-nowrap">Follow us on Instagram</span>
                <div className="flex items-center">
                    <div className="h-full border-l border-teal-dark transition-colors duration-300 ease-out bg-transparent group-hover:bg-teal-dark group-hover:text-white w-[90px] px-[15px] py-[10px]">
                        <img src={ButtonIconIg} alt="Instagram Icon" className="w-[24px] h-[24px] ml-[15px] transition-colors duration-300 group-hover:brightness-0 group-hover:invert"/>
                    </div>
                    <span className="flex items-center justify-center bg-white text-[#002D33] rounded-sm transition-colors duration-300 w-[10px] h-[40px]"></span>
                </div>
            </button>
        </div>
    );
};

export default Gallery;
