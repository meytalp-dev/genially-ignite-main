import { useState, useCallback, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Slide01 from "./slides/Slide01";
import SlideSurvey from "./slides/SlideSurvey";
import Slide02 from "./slides/Slide02";
import Slide03 from "./slides/Slide03";
import Slide04 from "./slides/Slide04";
import Slide05 from "./slides/Slide05";
import Slide06 from "./slides/Slide06";
import Slide07 from "./slides/Slide07";
import Slide08 from "./slides/Slide08";
import Slide09 from "./slides/Slide09";
import Slide10 from "./slides/Slide10";
import Slide11 from "./slides/Slide11";
import Slide12 from "./slides/Slide12";
import Slide13 from "./slides/Slide13";
import Slide14 from "./slides/Slide14";
import Slide15 from "./slides/Slide15";
import Slide16 from "./slides/Slide16";
import Slide17 from "./slides/Slide17";
import Slide18 from "./slides/Slide18";
import Slide19 from "./slides/Slide19";
import Slide20 from "./slides/Slide20";
import Slide21 from "./slides/Slide21";
import Slide22 from "./slides/Slide22";
import Slide23 from "./slides/Slide23";
import Slide24 from "./slides/Slide24";
import SlideAI from "./slides/SlideAI";

const slides = [
  Slide01, SlideSurvey, Slide02, Slide03, Slide04, Slide05, Slide06,
  Slide07, Slide08, Slide09, Slide10, Slide11, Slide12,
  Slide13, Slide14, Slide15, Slide16, Slide17, Slide18,
  Slide19, Slide20, Slide21, SlideAI, Slide22, Slide23, Slide24,
];

const slideTitles = [
  "כותרת", "סקר היכרות", "מה זה Genially", "למה להשתמש", "כניסה למערכת",
  "יצירת פעילות", "בחירת תבנית", "סביבת העבודה", "הוספת טקסט",
  "הוספת תמונות", "אינטראקטיביות", "אנימציות", "שימושים פדגוגיים",
  "דוגמה לפעילות", "חדר בריחה", "מבנה חדר בריחה", "דוגמה בהיסטוריה",
  "רעיונות לפי מקצוע", "פעילות תלמידים", "טעויות נפוצות", "בינה מלאכותית",
  "השוואת כלים", "שיתוף", "אינפוגרפיקה", "משימה לצוות",
];

const PresentationViewer = () => {
  const [current, setCurrent] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const goNext = useCallback(() => setCurrent((c) => Math.min(c + 1, slides.length - 1)), []);
  const goPrev = useCallback(() => setCurrent((c) => Math.max(c - 1, 0)), []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goNext();
      if (e.key === "ArrowRight") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [goNext, goPrev]);

  const CurrentSlide = slides[current];

  return (
    <div className="h-screen flex flex-col bg-background overflow-hidden" dir="rtl">
      {/* Top bar */}
      <header className="flex items-center justify-between px-4 py-2 border-b border-border bg-card/80 backdrop-blur-sm shrink-0">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-xs px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground hover:bg-slide-teal-light transition-colors font-body"
          >
            {sidebarOpen ? "הסתר תפריט" : "תפריט שקפים"}
          </button>
          <span className="font-display font-bold text-slide-teal text-sm">Genially בהוראה</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground font-body">
            {current + 1} / {slides.length}
          </span>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <AnimatePresence>
          {sidebarOpen && (
            <div className="w-56 border-l border-border bg-card overflow-y-auto shrink-0">
              <div className="p-2 space-y-1">
                {slideTitles.map((title, i) => (
                  <button
                    key={i}
                    onClick={() => { setCurrent(i); setSidebarOpen(false); }}
                    className={`w-full text-right px-3 py-2 rounded-lg text-xs font-body transition-colors ${
                      i === current
                        ? "bg-slide-teal text-primary-foreground font-medium"
                        : "text-foreground hover:bg-secondary"
                    }`}
                  >
                    <span className="text-[10px] opacity-60 ml-2">{String(i + 1).padStart(2, "0")}</span>
                    {title}
                  </button>
                ))}
              </div>
            </div>
          )}
        </AnimatePresence>

        {/* Main slide area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto">
            <div className="max-w-4xl mx-auto py-4">
              <AnimatePresence mode="wait">
                <CurrentSlide key={current} />
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 py-3 border-t border-border bg-card/80 backdrop-blur-sm shrink-0">
            <button
              onClick={goNext}
              disabled={current === slides.length - 1}
              className="p-2 rounded-xl bg-secondary text-foreground hover:bg-slide-teal-light disabled:opacity-30 transition-colors"
            >
              <ChevronRight size={20} />
            </button>

            {/* Progress dots */}
            <div className="flex gap-1 items-center">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all ${
                    i === current
                      ? "w-6 h-2 bg-slide-teal"
                      : "w-2 h-2 bg-border hover:bg-slide-teal/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goPrev}
              disabled={current === 0}
              className="p-2 rounded-xl bg-secondary text-foreground hover:bg-slide-teal-light disabled:opacity-30 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresentationViewer;
