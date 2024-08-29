import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Screen4 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    { subtitle: "CUSTOMER REVIEWS", message: "“Cleaning and sanitizing are now more important than ever and these wipes make it so easy. They’re great because they don’t dry my skin out and I love knowing that buying their products are better for the environment.”", author: "- RACHAEL H." },
    { subtitle: "CUSTOMER REVIEWS", message: "“This brand is so cute. I really love the modern simplicity of the dispenser and the lavender scented wipes is a must.”", author: "- JEANNIE H." },
    { subtitle: "CUSTOMER REVIEWS", message: "“I love that I can leave my cleaning wipes on the counter now and not worry about them being unsightly! They work well, smell good, and don’t leave me worried about chemicals. “", author: "- MAGGIE P." },
    { subtitle: "CUSTOMER REVIEWS", message: "One of my favorite Thingdrop finds! Can't think of a single con. Price point is comparable to traditional cleaning wipes. The canister not only reduces plastic pollution, but has a simple, pleasant design that I don't mind having out in home/apartment decor. Smell of the wipes isn't harsh or chemical-forward. I'm enrolled in one of their wipe subscriptions, making ordering hassle-free. Obsessed! ”", author: "SYLVANNA N." },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <div className="w-full pt-[90px] pb-[55px] bg-gray">
      <div className="relative w-full flex flex-col items-center justify-center bg-gray-100 px-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center text-teal-dark gap-[26px]"
          >
            <p className="font-brandon font-normal text-[14px] leading-[14px] tracking-[2.1px] uppercase">{reviews[currentIndex].subtitle}</p>
            <h2 className="max-w-[747px] font-chronicle font-bold text-[25px] leading-[42px] tracking-[0px]">{reviews[currentIndex].message}</h2>
            <p className="font-brandon font-medium text-[13px] leading-[13px] tracking-[1.3px] uppercase">{reviews[currentIndex].author}</p>
          </motion.div>
        </AnimatePresence>
        <div className="flex space-x-3 pt-[50px]">
          {reviews.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 cursor-pointer rounded-full border border-teal ${index === currentIndex ? 'bg-teal' : 'bg-transparent'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Screen4;
