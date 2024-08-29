import {useRef, useEffect, useState} from 'react';
import {motion} from 'framer-motion';

const SideText = () => {
    const ref = useRef(null);
    const [height, setHeight] = useState(0);
    useEffect(() => {
      if (ref.current) {
        setHeight(ref.current.offsetHeight + ref.current.firstChild.offsetWidth);
      }
    }, [ref]);
    return (
      <div ref={ref} className="absolute whitespace-nowrap inset-0 -z-10 font-brandon font-bold text-[225px] leading-[222px] -tracking-[6px] text-gray lowercase">
        <motion.div
          className="inline-block"
          animate={{ y: [0, height] }}
          style={{ rotate: "-90deg", transformOrigin: "top left" }}
          transition={{ repeat: Infinity, duration: 13, ease: 'linear', repeatDelay:0}}
        >
          <span className="">
            Meet Biom
          </span>
        </motion.div>
      </div>
    );
  
}

export default SideText