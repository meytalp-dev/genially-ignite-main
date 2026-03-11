import SlideLayout from "../SlideLayout";
import { SectionTitle } from "../Decorator";
import { IconWarning, IconHint } from "../Icons";
import { motion } from "framer-motion";

const mistakes = [
  "יותר מדי טקסט",
  "יותר מדי אנימציות",
  "פעילות ארוכה מדי",
  "אין משוב לתלמיד",
  "אין הוראות ברורות",
];

const Slide19 = () => (
  <SlideLayout className="items-center">
    <SectionTitle accent="נפוצות">טעויות</SectionTitle>
    <div className="max-w-md mx-auto space-y-3 mb-6">
      {mistakes.map((m, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          className="bg-card rounded-xl px-5 py-3 shadow-sm border border-border/50 flex items-center gap-3"
        >
          <span className="text-accent shrink-0"><IconWarning size={20} /></span>
          <span className="text-foreground">{m}</span>
        </motion.div>
      ))}
    </div>
    <div className="bg-slide-teal-light rounded-xl px-6 py-3 text-center max-w-sm mx-auto">
      <p className="text-sm text-slide-dark font-medium flex items-center justify-center gap-2">
        <IconHint size={16} /> המלצה: 3–4 משימות בלבד
      </p>
    </div>
  </SlideLayout>
);

export default Slide19;
