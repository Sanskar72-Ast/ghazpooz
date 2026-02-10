import imgDitheredImage20260210T1657231 from "figma:asset/386c49b2f8e717c75f9d6b39127d9197b0b28a55.png";
import imgDitheredImage20260210T1703381 from "figma:asset/0de7a2da608e297c58a4af1017bc27557e4fe2d3.png";

function Component() {
  return (
    <div className="-translate-x-1/2 absolute h-[19px] left-1/2 top-[483px] w-[176px]" data-name="Component 1">
      <p className="absolute font-['Manrope:Regular',sans-serif] font-normal inset-0 leading-[normal] text-[#868686] text-[14px] text-center whitespace-pre-wrap">{`answer questions  `}</p>
    </div>
  );
}

export default function Ghazpooz() {
  return (
    <div className="bg-black relative size-full" data-name="ghazpooz">
      <div className="-translate-x-1/2 absolute font-['Manrope:ExtraBold',sans-serif] font-extrabold h-[186px] leading-[62px] left-1/2 text-[54px] text-center text-white top-[123px] tracking-[-1.62px] w-[430px] whitespace-pre-wrap">
        <p className="mb-0">hello,</p>
        <p className="mb-0">it’s ghazpooz.</p>
        <p>sup?</p>
      </div>
      <p className="-translate-x-1/2 absolute font-['Manrope:Regular',sans-serif] font-normal h-[21px] leading-[0] left-1/2 text-[#c0c0c0] text-[16px] text-center top-[332px] w-[410px] whitespace-pre-wrap">
        <span className="leading-[normal]">{`The people matchmaker ai `}</span>
        <span className="leading-[normal]">at the summit</span>
      </p>
      <Component />
      <div className="-translate-x-1/2 absolute h-[62px] left-1/2 top-[397px] w-[352px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 352 62">
          <path d="M0 0H352V62H0V0Z" fill="var(--fill-0, #FAFAFA)" id="Rectangle 1" />
        </svg>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Manrope:SemiBold',sans-serif] font-semibold h-[13px] justify-center leading-[0] left-1/2 text-[16px] text-black text-center top-[427.5px] w-[42px]">
        <p className="leading-[normal] whitespace-pre-wrap">enter</p>
      </div>
      <div className="absolute h-[218px] left-[16px] top-[570px] w-[164px]" data-name="dithered-image-2026-02-10T16-57-23 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDitheredImage20260210T1657231} />
      </div>
      <div className="absolute h-[218px] left-[201px] top-[570px] w-[164px]" data-name="dithered-image-2026-02-10T17-03-38 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDitheredImage20260210T1703381} />
      </div>
    </div>
  );
}