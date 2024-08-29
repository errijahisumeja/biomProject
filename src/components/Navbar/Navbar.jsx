import { useState } from 'react';
import {motion, AnimatePresence} from "framer-motion";
import cartIcon from '../../assets/icons/cart.svg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.nav
            className='fixed z-50 w-full bg-white/25 bg-origin-padding bg-no-repeat bg-left-top backdrop-blur-[10px] backdrop-brightness-[1.8] px-[50px] font-brandon font-bold text-[15px] leading-[22px] tracking-[1.5px] text-black uppercase'
        >
            <div className="flex justify-between items-center h-[68px]">
                <div className="hidden md:flex items-center gap-5">
                    <a href="#" className="text-left font-bold text-[15px] leading-[22px] tracking-[1.5px] uppercase text-black no-underline">shop</a>
                    <a href="#" className="text-left font-bold text-[15px] leading-[22px] tracking-[1.5px] uppercase text-black no-underline">why biom</a>
                    <a href="#" className="text-left font-bold text-[15px] leading-[22px] tracking-[1.5px] uppercase text-black no-underline">scents</a>
                </div>
                <img src="/logo.svg" alt="Logo" className="w-[92px] h-[30px]" />
                <div className="hidden md:flex items-center gap-4">
                    <a href="#" className="text-left font-bold text-[15px] leading-[22px] tracking-[1.5px] uppercase text-black no-underline">sign in</a>
                    <div className="relative flex items-center">
                        <a href="#" className="text-left font-bold text-[15px] leading-[22px] tracking-[1.5px] uppercase text-black no-underline">cart</a>
                        
                        <img src={cartIcon} className="h-[22px] w-auto" alt="Biom Logo"/>
                        <p className="text-center font-bold text-[15px] leading-[22px] tracking-[1.5px] text-white bg-[#DDA74A] border border-white rounded-full w-[16px] h-[16px] flex items-center justify-center absolute -top-2 -right-2">0</p>
                    </div>
                </div>
                <button
                    className="md:hidden text-[24px] cursor-pointer bg-none border-none text-black p-[10px] transition-colors duration-300 ease-in-out hover:text-[#004A4C]"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="flex flex-col items-center justify-center gap-5 mt-4 md:hidden p-[20px]"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <a href="#" className="text-left font-bold text-[15px] leading-[22px] tracking-[1.5px] uppercase text-black no-underline">shop</a>
                        <a href="#" className="text-left font-bold text-[15px] leading-[22px] tracking-[1.5px] uppercase text-black no-underline">why biom</a>
                        <a href="#" className="text-left font-bold text-[15px] leading-[22px] tracking-[1.5px] uppercase text-black no-underline">scents</a>
                        <a href="#" className="text-left font-bold text-[15px] leading-[22px] tracking-[1.5px] uppercase text-black no-underline">sign in</a>
                        <div className="relative flex items-center">
                        <a href="#" className="text-left font-bold text-[15px] leading-[22px] tracking-[1.5px] uppercase text-black no-underline">cart</a>
                        
                        <img src={cartIcon} className="h-[22px] w-auto" alt="Biom Logo"/>
                        <p className="text-center font-bold text-[15px] leading-[22px] tracking-[1.5px] text-white bg-[#DDA74A] border border-white rounded-full w-[16px] h-[16px] flex items-center justify-center absolute -top-2 -right-2">0</p>
                    </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
