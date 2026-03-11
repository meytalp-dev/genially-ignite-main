import SlideLayout from "../SlideLayout";
import { SectionTitle } from "../Decorator";
import { IconCheck } from "../Icons";
import { motion } from "framer-motion";

const Slide16 = () => (
  <SlideLayout className="items-center">
    <SectionTitle accent="בהיסטוריה">דוגמה לחדר בריחה</SectionTitle>
    <div className="bg-card rounded-2xl p-8 shadow-sm border border-border/50 max-w-md mx-auto text-center">
      <div className="bg-slide-teal text-primary-foreground rounded-xl px-4 py-2 font-display font-bold mb-6 text-sm">
        נושא: מלחמת העולם השנייה
      </div>
      <p className="font-display font-bold text-slide-dark mb-6">באיזו שנה פרצה מלחמת העולם השנייה?</p>
      <div className="flex flex-col gap-3">
        {[
          { year: "1939", correct: true },
          { year: "1945", correct: false },
          { year: "1914", correct: false },
        ].map((opt, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className={`rounded-xl px-6 py-3 font-display font-bold cursor-pointer transition-colors ${
              opt.correct
                ? "bg-slide-teal-light text-slide-teal border-2 border-slide-teal"
                : "bg-secondary text-muted-foreground border-2 border-transparent"
            }`}
          >
            {opt.year}
          </motion.div>
        ))}
      </div>
      <p className="text-xs text-muted-foreground mt-4 flex items-center justify-center gap-1">
        <IconCheck size={14} /> תשובה נכונה מובילה לשלב הבא
      </p>
    </div>
  </SlideLayout>
);

export default Slide16;
