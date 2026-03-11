import { useState } from "react";
import SlideLayout from "../SlideLayout";
import { SectionTitle } from "../Decorator";
import { motion } from "framer-motion";

const levels = [
  { value: 1, label: "לא מכיר/ה בכלל" },
  { value: 2, label: "שמעתי על זה" },
  { value: 3, label: "ניסיתי פעם" },
  { value: 4, label: "משתמש/ת לפעמים" },
  { value: 5, label: "משתמש/ת הרבה" },
];

const SlideSurvey = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <SlideLayout className="items-center justify-center">
      <SectionTitle accent="עם Genially">דרגו את ההיכרות שלכם</SectionTitle>
      <p className="text-center text-muted-foreground mb-8">
        לחצו על הדירוג המתאים לכם
      </p>

      <div className="flex flex-col gap-3 max-w-md mx-auto w-full mb-8">
        {levels.map((level, i) => (
          <motion.button
            key={level.value}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            onClick={() => setSelected(level.value)}
            className={`flex items-center gap-4 rounded-2xl px-6 py-4 text-right transition-all border-2 ${
              selected === level.value
                ? "bg-slide-teal text-primary-foreground border-slide-teal shadow-lg scale-[1.02]"
                : "bg-card border-border/50 hover:border-slide-teal/40 hover:bg-slide-teal-light/50"
            }`}
          >
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center font-display font-bold text-lg shrink-0 ${
                selected === level.value
                  ? "bg-primary-foreground/20 text-primary-foreground"
                  : "bg-slide-teal-light text-slide-teal"
              }`}
            >
              {level.value}
            </div>
            <span className="font-body text-sm font-medium">{level.label}</span>
          </motion.button>
        ))}
      </div>

      {selected !== null && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slide-peach rounded-xl px-6 py-3 text-center max-w-sm mx-auto"
        >
          <p className="text-sm font-medium text-slide-dark">
            {selected <= 2
              ? "מעולה! נלמד הכל מאפס 🙌"
              : selected <= 4
              ? "יופי! נעמיק את מה שאתם כבר יודעים ✨"
              : "אתם מנוסים! תגלו טיפים חדשים 🚀"}
          </p>
        </motion.div>
      )}
    </SlideLayout>
  );
};

export default SlideSurvey;
