import imgDitheredImage20260210T1657231 from "figma:asset/386c49b2f8e717c75f9d6b39127d9197b0b28a55.png";
import imgDitheredImage20260210T1703381 from "figma:asset/0de7a2da608e297c58a4af1017bc27557e4fe2d3.png";
import imgDitheredImage20260210T1703383 from "figma:asset/07fe00e482e69e687776fd3912012b3023e09819.png";
import imgDitheredImage20260210T1703382 from "figma:asset/d3b95118f2b5ab35308dd3d183b357982686df73.png";

function Component() {
  return (
    <div className="-translate-x-1/2 absolute h-[19px] left-[calc(50%-425px)] top-[587px] w-[176px]" data-name="Component 1">
      <p className="absolute font-['Manrope:Regular',sans-serif] font-normal inset-0 leading-[normal] text-[#868686] text-[14px] text-center whitespace-pre-wrap">{`answer questions  `}</p>
    </div>
  );
}

function Group() {
  return (
    <div className="-translate-x-1/2 absolute contents left-[calc(50%-425px)] top-[227px]">
      <div className="-translate-x-1/2 absolute font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[186px] leading-[62px] left-[calc(50%-425px)] text-[54px] text-center text-white top-[227px] tracking-[-1.62px] w-[430px] whitespace-pre-wrap">
        <p className="mb-0">hello,</p>
        <p className="mb-0">it’s ghazpooz.</p>
        <p>sup?</p>
      </div>
      <p className="-translate-x-1/2 absolute font-['Manrope:Regular',sans-serif] font-normal h-[21px] leading-[0] left-[calc(50%-425px)] text-[#c0c0c0] text-[16px] text-center top-[436px] w-[410px] whitespace-pre-wrap">
        <span className="leading-[normal]">{`The people matchmaker ai `}</span>
        <span className="leading-[normal]">at the summit</span>
      </p>
      <div className="-translate-x-1/2 absolute h-[62px] left-[calc(50%-425px)] top-[501px] w-[352px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 352 62">
          <path d="M0 0H352V62H0V0Z" fill="var(--fill-0, #FAFAFA)" id="Rectangle 1" />
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold h-[13px] justify-center leading-[0] left-[calc(50%-425px)] text-[16px] text-black text-center top-[531.5px] w-[42px]">
        <p className="leading-[normal] whitespace-pre-wrap">enter</p>
      </div>
    </div>
  );
}

export default function Ghazpooz() {
  return (
    <div className="bg-black relative size-full" data-name="ghazpooz">
      <Component />
      <Group />
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
  );
}