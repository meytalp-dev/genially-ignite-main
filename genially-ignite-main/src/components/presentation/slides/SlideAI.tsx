import SlideLayout from "../SlideLayout";
import { SectionTitle, FeatureCard, BulletList } from "../Decorator";
import { AnimatedIconGroup, AnimatedIconItem } from "../Icons";
import { motion } from "framer-motion";

// Custom AI icon - neural network node
const IconAI = ({ size = 24, className }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="5" cy="12" r="2" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="19" cy="12" r="2" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="12" cy="19" r="2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M12 7v10M7 12h10M9.5 7.5l-2.5 2.5M14.5 7.5l2.5 2.5M9.5 16.5l-2.5-2.5M14.5 16.5l2.5-2.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const IconSmartCreate = ({ size = 24, className }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.8" />
    <path d="M12 8v3m0 0v3m0-3h3m-3 0H9" stroke="currentColor" strokeWidth="1.8" />
    <path d="M17 2l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" fill="currentColor" stroke="currentColor" strokeWidth="0.5" />
  </svg>
);

const IconSmartText = ({ size = 24, className }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 7h16M4 12h10M4 17h13" stroke="currentColor" strokeWidth="1.8" />
    <path d="M19 10l1.5 1.5L19 13" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="19" cy="17" r="1.5" fill="currentColor" />
  </svg>
);

const IconSmartImage = ({ size = 24, className }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="8.5" cy="10" r="1.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M21 15l-4-4-3 3-2-2-6 6" stroke="currentColor" strokeWidth="1.8" />
    <path d="M18 3l.8 1.6L20.5 5.5l-1.7.8-.8 1.7-.8-1.7-1.7-.9 1.7-.8z" fill="currentColor" stroke="currentColor" strokeWidth="0.3" />
  </svg>
);

const SlideAI = () => (
  <SlideLayout className="items-center">
    <SectionTitle accent="ב-Genially">בינה מלאכותית</SectionTitle>

    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center text-muted-foreground mb-8 max-w-lg mx-auto"
    >
      <p className="text-base leading-relaxed">
        Genially משלבת כלי בינה מלאכותית שעוזרים ליצור תוכן מהר יותר ובצורה חכמה
      </p>
    </motion.div>

    <AnimatedIconGroup className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
      <AnimatedIconItem>
        <FeatureCard
          icon={<IconSmartCreate size={28} className="text-slide-teal" />}
          title="יצירה חכמה"
          description="הקלידו נושא והבינה המלאכותית תיצור מצגת שלמה עם תוכן, עיצוב ותמונות"
        />
      </AnimatedIconItem>
      <AnimatedIconItem>
        <FeatureCard
          icon={<IconSmartText size={28} className="text-slide-teal" />}
          title="כתיבת טקסט"
          description="AI שכותב ומסכם טקסטים, יוצר כותרות ומתאים את השפה לקהל היעד"
        />
      </AnimatedIconItem>
      <AnimatedIconItem>
        <FeatureCard
          icon={<IconSmartImage size={28} className="text-slide-teal" />}
          title="יצירת תמונות"
          description="תארו תמונה במילים והבינה המלאכותית תייצר אותה — ללא צורך בחיפוש תמונות"
        />
      </AnimatedIconItem>
    </AnimatedIconGroup>

    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="bg-slide-teal-light rounded-2xl p-6 max-w-lg mx-auto"
    >
      <div className="flex items-center gap-2 mb-3">
        <IconAI size={20} className="text-slide-teal" />
        <h3 className="font-display font-bold text-slide-dark">איך משתמשים?</h3>
      </div>
      <BulletList
        icon={<span className="text-slide-teal">→</span>}
        items={[
          "בעת יצירת פעילות חדשה — בחרו 'Create with AI'",
          "בתוך העורך — לחצו על כפתור ה-AI בסרגל הכלים",
          "כתבו prompt ברור ומפורט לתוצאות טובות יותר",
        ]}
      />
    </motion.div>
  </SlideLayout>
);

export default SlideAI;
