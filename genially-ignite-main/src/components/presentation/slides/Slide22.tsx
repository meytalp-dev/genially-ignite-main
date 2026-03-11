import SlideLayout from "../SlideLayout";
import { SectionTitle } from "../Decorator";
import { IconShare, IconNavigate, IconTarget } from "../Icons";
import { motion } from "framer-motion";

const steps = [
  { num: 1, title: "לחצו Share", desc: "בפינה הימנית העליונה של העורך", icon: <IconShare size={20} className="text-slide-teal" /> },
  { num: 2, title: "בחרו Link", desc: "העתיקו את הקישור הישיר לפעילות", icon: <IconNavigate size={20} className="text-slide-teal" /> },
  { num: 3, title: "שתפו!", desc: "שלחו לתלמידים בוואטסאפ, מייל או הקרינו בכיתה", icon: <IconTarget size={20} className="text-slide-teal" /> },
];

const Slide22 = () => (
  <SlideLayout className="items-center justify-center">
    <SectionTitle accent="הפעילות">שיתוף</SectionTitle>
    <p className="text-center text-muted-foreground mb-6 text-sm">כאשר הפעילות מוכנה:</p>

    <div className="flex flex-col gap-3 max-w-xl mx-auto w-full mb-6">
      {steps.map((step, i) => (
        <motion.div
          key={step.num}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.12 }}
          className="flex items-center gap-4"
        >
          <div className="w-11 h-11 rounded-xl bg-slide-teal flex items-center justify-center font-display font-bold text-base text-primary-foreground shrink-0 shadow-sm">
            {step.num}
          </div>
          <div className="flex-1 bg-card rounded-xl border border-border/50 px-5 py-3 shadow-sm flex items-center gap-3">
            <span className="shrink-0">{step.icon}</span>
            <div className="min-w-0">
              <h3 className="font-display font-bold text-sm text-foreground leading-tight">{step.title}</h3>
              <p className="text-xs text-muted-foreground leading-snug">{step.desc}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="bg-slide-peach rounded-xl px-6 py-3 text-center max-w-sm mx-auto"
    >
      <p className="text-sm font-medium text-slide-dark flex items-center justify-center gap-2">
        <IconShare size={16} className="text-slide-dark" /> אפשר גם להטמיע באתר או ב-LMS של בית הספר
      </p>
    </motion.div>
  </SlideLayout>
);

export default Slide22;
