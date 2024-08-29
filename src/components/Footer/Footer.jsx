import { useState } from 'react';
import arrowIcon from "../../assets/icons/Icon ionic-ios-arrow-round-forward.png";
import footerBg from "../../assets/images/Biom_wipe_2.png";
import igIcon from "../../assets/icons/Icon ionic-logo-instagram.png";
import fbIcon from "../../assets/icons/Icon awesome-facebook-f.png";

const Footer = () => {
  const [emailInput, setEmailInput] = useState('');

  const handleEmailSubmit = () => {
    setEmailInput('');
  };

  return (
    <footer className="flex flex-col items-center w-full min-h-[386px] bg-teal/[.72] pt-[150px] px-[69px] mt-[150px] relative">
      <div className="absolute inset-x-[69px] -top-[150px] bg-gray p-[10px] lg:px-[111px] lg:py-[47px] min-h-[300px] rounded-[14px] text-black">
        <img src={footerBg} alt="Biom product" className="hidden lg:block absolute inset-y-0 right-0 h-full" />
        <h1 className="font-chronicle font-black text-[30px] leading-[38px] max-w-[324px]">
          Get the latest news delivered to your inbox.
        </h1>
        <p className="font-brandon font-normal text-[16px] leading-[26px] mt-[10px] max-w-[414px]">
          Get access to the exciting stuff — exclusive new deals, product launches, and more. Plus, get a 10% discount on your next order.
        </p>
        <div className="relative mt-[18px] max-w-[424px] h-[52px]">
          <input
            type="email"
            name='email'
            placeholder="Enter your email address"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            className="w-full h-full px-[15px] font-brandon font-normal text-[16px] leading-[30px] rounded-[6px] outline-none placeholder-black"
          />
          <button
            onClick={handleEmailSubmit}
            className="absolute right-[7px] top-1/2 transform -translate-y-1/2 w-[44px] h-[38px] bg-teal rounded-[6px] flex justify-center items-center"
          >
            <img src={arrowIcon} className="w-[18px]" alt="Submit icon" />
          </button>
        </div>
      </div>
      
      <nav className="flex flex-col lg:flex-row items-center justify-between w-full lg:w-[839px] gap-[40px] lg:gap-0 my-[50px] font-brandon font-bold text-[14px] leading-[20px] tracking-[1.4px] text-gray-light uppercase">
        <div className="flex flex-col lg:flex-row items-center gap-[10px] lg:gap-[40px]">
          {['Shop', 'Why Biom', 'Scents'].map((link, index) => (
            <a
              key={index}
              href="#"
              className="underline underline-offset-[8px] decoration-teal/0 hover:decoration-teal transition-colors duration-300 ease-out decoration-2"
            >
              {link}
            </a>
          ))}
        </div>
        <a href="#" className="block lg:hidden">
          <img src="/biom logo footer.svg" className="h-[30px]" alt="Biom Footer Logo" />
        </a>
        <a href="#" className="hidden lg:block">
          <img src="/biom logo footer.svg" className="h-[30px]" alt="Biom Footer Logo" />
        </a>
        <div className="flex flex-col lg:flex-row items-center gap-[10px] lg:gap-[40px]">
          {['Faqs', 'Account', 'Help'].map((link, index) => (
            <a
              key={index}
              href="#"
              className="underline underline-offset-[8px] decoration-teal/0 hover:decoration-teal transition-colors duration-300 ease-out decoration-2"
            >
              {link}
            </a>
          ))}
        </div>
      </nav>

      <hr className="w-full border-teal" />
      
      <div className="flex flex-row items-center justify-between w-full min-h-[105px]">
        <div className="font-brandon font-normal text-[15px] leading-[22px] tracking-[0.38px] text-gray-light">
          © 2021 Biom. All rights reserved • <a href="#">Privacy Policy</a> • <a href="#">Terms of Service</a>
        </div>
        <div className="flex flex-row gap-[10px]">
          {[igIcon, fbIcon].map((icon, index) => (
            <a key={index} href="#" className="w-[30px] h-[30px] flex items-center justify-center bg-gray-light rounded-full">
              <img src={icon} className="h-[16px]" alt={`Social Media Icon ${index + 1}`} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
