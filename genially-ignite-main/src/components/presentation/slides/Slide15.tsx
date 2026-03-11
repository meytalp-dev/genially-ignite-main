import SlideLayout from "../SlideLayout";
import { SectionTitle } from "../Decorator";
import { motion } from "framer-motion";

const steps = [
  {
    num: 1,
    title: "בחרו תבנית חדר בריחה",
    desc: "ב-Genially חפשו \"Escape Room\" בגלריית התבניות ובחרו עיצוב שמתאים",
    color: "bg-slide-teal text-primary-foreground",
  },
  {
    num: 2,
    title: "כתבו את הסיפור",
    desc: "צרו עלילה מסקרנת לשקף הפתיחה — למה צריך 'לברוח'? מה הרקע?",
    color: "bg-slide-peach text-slide-dark",
  },
  {
    num: 3,
    title: "הכינו 3–4 משימות",
    desc: "כל משימה = שקף נפרד עם שאלה, חידה או פאזל שקשור לחומר הנלמד",
    color: "bg-slide-teal-light text-slide-dark",
  },
  {
    num: 4,
    title: "הגדירו אינטראקטיביות",
    desc: "לכל תשובה נכונה הוסיפו 'Go to page' לשלב הבא, ולשגויה — הודעת שגיאה עם Tooltip",
    color: "bg-secondary text-foreground",
  },
  {
    num: 5,
    title: "הוסיפו רמזים",
    desc: "שלבו כפתורי רמז עם Tooltip או Window — התלמידים ילחצו רק אם נתקעים",
    color: "bg-slide-peach text-slide-dark",
  },
  {
    num: 6,
    title: "בנו שקף קוד סופי",
    desc: "כל משימה נותנת חלק מהקוד. בסוף — התלמידים מרכיבים את הקוד ו'בורחים'",
    color: "bg-slide-teal text-primary-foreground",
  },
  {
    num: 7,
    title: "בדקו ושתפו",
    desc: "נסו בעצמכם, וודאו שכל הקישורים עובדים, ושלחו לתלמידים את הלינק",
    color: "bg-slide-teal-light text-slide-dark",
  },
];

const Slide15 = () => (
  <SlideLayout className="items-center">
    <SectionTitle accent="בריחה — שלב אחרי שלב">בניית חדר</SectionTitle>

    <div className="max-w-2xl mx-auto w-full space-y-3">
      {steps.map((step, i) => (
        <motion.div
          key={step.num}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
          className="flex items-start gap-4"
        >
          {/* Number circle */}
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-display font-bold text-sm shrink-0 ${step.color}`}>
            {step.num}
          </div>

          {/* Content */}
          <div className="bg-card rounded-xl border border-border/50 px-5 py-3 flex-1 shadow-sm">
            <h3 className="font-display font-bold text-slide-dark text-sm mb-0.5">{step.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
          </div>

          {/* Connector line */}
          {i < steps.length - 1 && (
            <div className="absolute right-[1.05rem] mt-9 w-0.5 h-3 bg-border" />
          )}
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9 }}
      className="bg-slide-peach rounded-xl px-6 py-3 text-center max-w-sm mx-auto mt-6"
    >
      <p className="text-sm font-medium text-slide-dark">
        💡 טיפ: התחילו עם 3 משימות בלבד ובנו בהדרגה
      </p>
    </motion.div>
  </SlideLayout>
);

export default Slide15;
