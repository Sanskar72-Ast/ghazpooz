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
  }, [texts.length]);

  const handleEnter = () => window.open(FORM_URL, "_blank");

  return (
    <div className="ghz-page" data-name="ghazpooz">
      <section className="ghz-left">
        <h1 className="ghz-title">
          hello,
          <br />
          it's ghazpooz.
          <br />
          sup?
        </h1>

        <p className="ghz-subtitle">The people matchmaker ai at the summit</p>

        <button onClick={handleEnter} className="ghz-cta" type="button">
          enter
        </button>

        <div className="ghz-rotator" aria-live="polite">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentTextIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              style={{ position: "absolute", inset: 0 }}
            >
              {texts[currentTextIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
      </section>

      <section className="ghz-right" aria-hidden="true">
        <div className="ghz-collage ghz-collage--desktop">
          <div className="ghz-slice ghz-slice--a">
            <img alt="" src={imgDitheredImage20260210T1657231} />
          </div>
          <div className="ghz-slice ghz-slice--b">
            <img alt="" src={imgDitheredImage20260210T1703381} />
          </div>
          <div className="ghz-slice ghz-slice--c">
            <img alt="" src={imgDitheredImage20260210T1703383} />
          </div>
          <div className="ghz-slice ghz-slice--d">
            <img alt="" src={imgDitheredImage20260210T1703382} />
          </div>
        </div>

        <div className="ghz-collage ghz-collage--mobile">
          <div className="ghz-marqueeTrack">
            <div className="ghz-slice ghz-slice--a">
              <img alt="" src={imgDitheredImage20260210T1657231} />
            </div>
            <div className="ghz-slice ghz-slice--b">
              <img alt="" src={imgDitheredImage20260210T1703381} />
            </div>
            <div className="ghz-slice ghz-slice--c">
              <img alt="" src={imgDitheredImage20260210T1703383} />
            </div>
            <div className="ghz-slice ghz-slice--d">
              <img alt="" src={imgDitheredImage20260210T1703382} />
            </div>

            <div className="ghz-slice ghz-slice--a" aria-hidden="true">
              <img alt="" src={imgDitheredImage20260210T1657231} />
            </div>
            <div className="ghz-slice ghz-slice--b" aria-hidden="true">
              <img alt="" src={imgDitheredImage20260210T1703381} />
            </div>
            <div className="ghz-slice ghz-slice--c" aria-hidden="true">
              <img alt="" src={imgDitheredImage20260210T1703383} />
            </div>
            <div className="ghz-slice ghz-slice--d" aria-hidden="true">
              <img alt="" src={imgDitheredImage20260210T1703382} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
