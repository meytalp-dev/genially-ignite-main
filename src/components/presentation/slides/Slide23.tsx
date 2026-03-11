import SlideLayout from "../SlideLayout";
import { motion } from "framer-motion";
import { IconNavigate, IconPresentation, IconSlideList, IconText, IconTap, IconSparkle, IconShare, IconTarget } from "../Icons";

const steps = [
  { num: 1, title: "כניסה לאתר", desc: "genially.com → Sign Up / Log In", icon: <IconNavigate size={18} className="text-slide-teal" /> },
  { num: 2, title: "יצירת פעילות", desc: "לחצו Create Genially ובחרו סוג תוכן", icon: <IconPresentation size={18} className="text-slide-teal" /> },
  { num: 3, title: "בחירת תבנית", desc: "בחרו תבנית מוכנה או התחילו מדף ריק", icon: <IconSlideList size={18} className="text-slide-teal" /> },
  { num: 4, title: "תוכן: טקסט ותמונות", desc: "הוסיפו כותרות, טקסט, תמונות וסרטונים", icon: <IconText size={18} className="text-slide-teal" /> },
  { num: 5, title: "אינטראקטיביות", desc: "Tooltip · Window · Go to page · Link", icon: <IconTap size={18} className="text-slide-teal" /> },
  { num: 6, title: "אנימציות", desc: "כניסה · דגש · יציאה — הפכו את התוכן לחי", icon: <IconSparkle size={18} className="text-slide-teal" /> },
  { num: 7, title: "שיתוף", desc: "Share → Link → שלחו לתלמידים או הקרינו", icon: <IconShare size={18} className="text-slide-teal" /> },
];

const Slide23 = () => (
  <SlideLayout className="items-center justify-center">
    <div className="w-full max-w-3xl mx-auto">
      <div className="grid grid-cols-1 gap-2">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.06, duration: 0.35 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-xl bg-slide-teal flex items-center justify-center font-display font-bold text-sm text-primary-foreground shrink-0 shadow-sm">
              {step.num}
            </div>

            <div className="flex-1 bg-card rounded-xl border border-border/50 px-4 py-2.5 shadow-sm flex items-center gap-3">
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
        transition={{ delay: 0.6 }}
        className="bg-slide-peach rounded-xl px-5 py-3 text-center mt-4"
      >
        <p className="text-sm font-medium text-slide-dark flex items-center justify-center gap-2">
          <IconTarget size={16} className="text-slide-dark" /> תהליך פשוט — מכניסה לאתר ועד שיתוף ב-7 שלבים
        </p>
      </motion.div>
    </div>
  </SlideLayout>
);

export default Slide23;
