import imgDitheredImage20260210T1657231 from "figma:asset/386c49b2f8e717c75f9d6b39127d9197b0b28a55.png";
import imgDitheredImage20260210T1703381 from "figma:asset/0de7a2da608e297c58a4af1017bc27557e4fe2d3.png";
import imgDitheredImage20260210T1703383 from "figma:asset/07fe00e482e69e687776fd3912012b3023e09819.png";
import imgDitheredImage20260210T1703382 from "figma:asset/d3b95118f2b5ab35308dd3d183b357982686df73.png";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSc3_xO3qk1OhoJWd-ICKl-F_jaFQUc0UntcYQ19DsUe5jJ_Dg/viewform?usp=publish-editor";

export default function App() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const texts = ["answer questions", "get matched to invites", "connect"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  const handleEnter = () => window.open(FORM_URL, "_blank");

  return (
    <>
      {/* Desktop Layout */}
      <div className="hidden md:block bg-black relative w-screen h-screen overflow-hidden" data-name="ghazpooz">
        <div className="-translate-x-1/2 absolute h-[19px] left-[calc(50%-405px)] top-[587px] w-[176px]" data-name="Component 1">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentTextIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute font-['Manrope:Regular',sans-serif] font-normal inset-0 leading-[normal] text-[#868686] text-[14px] text-center whitespace-pre-wrap"
            >
              {texts[currentTextIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
        <div className="-translate-x-1/2 absolute font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[186px] leading-[62px] left-[calc(50%-405px)] text-[54px] text-center text-white top-[227px] tracking-[-1.62px] w-[430px] whitespace-pre-wrap">
          <p className="mb-0">hello,</p>
          <p className="mb-0">it's ghazpooz.</p>
          <p>sup?</p>
        </div>
        <p className="-translate-x-1/2 absolute font-['Manrope:Regular',sans-serif] font-normal h-[21px] leading-[0] left-[calc(50%-405px)] text-[#c0c0c0] text-[16px] text-center top-[436px] w-[410px] whitespace-pre-wrap">
          <span className="leading-[normal]">{`The people matchmaker ai `}</span>
          <span className="leading-[normal]">at the summit</span>
        </p>
        <button onClick={handleEnter} className="-translate-x-1/2 absolute h-[62px] left-[calc(50%-405px)] top-[501px] w-[352px] cursor-pointer hover:opacity-95 transition-opacity">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 352 62">
            <path d="M0 0H352V62H0V0Z" fill="var(--fill-0, #FAFAFA)" id="Rectangle 1" />
          </svg>
          <div className="absolute inset-0 flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] text-[16px] text-black text-center">
            <p className="leading-[normal] whitespace-pre-wrap">enter</p>
          </div>
        </button>
        <div className="absolute h-[828px] left-[440px] top-[4px] w-[200px]" data-name="dithered-image-2026-02-10T16-57-23 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDitheredImage20260210T1657231} />
        </div>
        <div className="absolute h-[828px] left-[650px] top-[4px] w-[200px]" data-name="dithered-image-2026-02-10T17-03-38 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDitheredImage20260210T1703381} />
        </div>
        <div className="absolute h-[828px] left-[860px] top-[4px] w-[200px]" data-name="dithered-image-2026-02-10T17-03-38 3">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[109.29%] left-[-220.04%] max-w-none top-0 w-[573.66%]" src={imgDitheredImage20260210T1703383} />
          </div>
        </div>
        <div className="absolute h-[828px] left-[1070px] top-[4px] w-[200px]" data-name="dithered-image-2026-02-10T17-03-38 2">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-full left-[-64.82%] max-w-none top-[0.01%] w-[310.5%]" src={imgDitheredImage20260210T1703382} />
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden bg-black relative w-screen h-screen overflow-hidden" data-name="ghazpooz-mobile">
        <div className="-translate-x-1/2 absolute font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[186px] leading-[62px] left-1/2 text-[54px] text-center text-white top-[123px] tracking-[-1.62px] w-[430px] whitespace-pre-wrap">
          <p className="mb-0">hello,</p>
          <p className="mb-0">it's ghazpooz.</p>
          <p>sup?</p>
        </div>
        <p className="-translate-x-1/2 absolute font-['Manrope:Regular',sans-serif] font-normal h-[21px] leading-[0] left-1/2 text-[#c0c0c0] text-[16px] text-center top-[332px] w-[410px] whitespace-pre-wrap">
          <span className="leading-[normal]">{`The people matchmaker ai `}</span>
          <span className="leading-[normal]">at the summit</span>
        </p>
        <button onClick={handleEnter} className="-translate-x-1/2 absolute h-[62px] left-1/2 top-[397px] w-[352px] cursor-pointer hover:opacity-95 transition-opacity">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 352 62">
            <path d="M0 0H352V62H0V0Z" fill="var(--fill-0, #FAFAFA)" id="Rectangle 1" />
          </svg>
          <div className="absolute inset-0 flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold justify-center leading-[0] text-[16px] text-black text-center">
            <p className="leading-[normal] whitespace-pre-wrap">enter</p>
          </div>
        </button>
        <div className="-translate-x-1/2 absolute h-[19px] left-1/2 top-[483px] w-[176px]">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentTextIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 font-['Manrope:Regular',sans-serif] font-normal text-[#868686] text-[14px] text-center whitespace-nowrap"
            >
              {texts[currentTextIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
        <div className="absolute left-0 top-[570px] w-full h-[218px] overflow-hidden">
          <motion.div
            className="flex absolute left-0"
            animate={{
              x: [0, -((164 + 21) * 4)],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            <div className="h-[218px] w-[164px] flex-shrink-0 mr-[21px]">
              <img alt="" className="size-full object-cover pointer-events-none" src={imgDitheredImage20260210T1657231} />
            </div>
            <div className="h-[218px] w-[164px] flex-shrink-0 mr-[21px]">
              <img alt="" className="size-full object-cover pointer-events-none" src={imgDitheredImage20260210T1703381} />
            </div>
            <div className="h-[218px] w-[164px] flex-shrink-0 mr-[21px]">
              <img alt="" className="size-full object-cover pointer-events-none" src={imgDitheredImage20260210T1703383} />
            </div>
            <div className="h-[218px] w-[164px] flex-shrink-0 mr-[21px]">
              <img alt="" className="size-full object-cover pointer-events-none" src={imgDitheredImage20260210T1703382} />
            </div>
            <div className="h-[218px] w-[164px] flex-shrink-0 mr-[21px]">
              <img alt="" className="size-full object-cover pointer-events-none" src={imgDitheredImage20260210T1657231} />
            </div>
            <div className="h-[218px] w-[164px] flex-shrink-0 mr-[21px]">
              <img alt="" className="size-full object-cover pointer-events-none" src={imgDitheredImage20260210T1703381} />
            </div>
            <div className="h-[218px] w-[164px] flex-shrink-0 mr-[21px]">
              <img alt="" className="size-full object-cover pointer-events-none" src={imgDitheredImage20260210T1703383} />
            </div>
            <div className="h-[218px] w-[164px] flex-shrink-0 mr-[21px]">
              <img alt="" className="size-full object-cover pointer-events-none" src={imgDitheredImage20260210T1703382} />
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
