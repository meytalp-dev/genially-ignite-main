import SlideLayout from "../SlideLayout";
import { SectionTitle } from "../Decorator";
import { IconTimeline, IconBalance, IconMasks, IconJourney, IconNumbers, IconLab, IconLetters } from "../Icons";
import { motion } from "framer-motion";

const subjects = [
  { subject: "היסטוריה", idea: "ציר זמן", icon: <IconTimeline size={28} /> },
  { subject: "אזרחות", idea: "דילמות אזרחיות", icon: <IconBalance size={28} /> },
  { subject: "ספרות", idea: "זיהוי דמויות", icon: <IconMasks size={28} /> },
  { subject: 'תנ"ך', idea: "מסע במדבר", icon: <IconJourney size={28} /> },
  { subject: "מתמטיקה", idea: "קוד מספרים", icon: <IconNumbers size={28} /> },
  { subject: "מדעים", idea: "בריחה מהמעבדה", icon: <IconLab size={28} /> },
  { subject: "אנגלית", idea: "משחק מילים", icon: <IconLetters size={28} /> },
];

const Slide17 = () => (
  <SlideLayout>
    <SectionTitle accent="לפי מקצוע">רעיונות לחדרי בריחה</SectionTitle>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
      {subjects.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08 }}
          className="bg-card rounded-2xl p-4 shadow-sm border border-border/50 text-center"
        >
          <div className="text-slide-teal mb-2 flex justify-center">{s.icon}</div>
          <h4 className="font-display font-bold text-slide-dark text-sm">{s.subject}</h4>
          <p className="text-xs text-muted-foreground mt-1">{s.idea}</p>
        </motion.div>
      ))}
    </div>
  </SlideLayout>
);

export default Slide17;
