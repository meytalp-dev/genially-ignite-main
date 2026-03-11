import SlideLayout from "../SlideLayout";
import { SectionTitle, BulletList } from "../Decorator";
import { IconTap, IconDiscovery } from "../Icons";
import { motion } from "framer-motion";

const Slide13 = () => (
  <SlideLayout>
    <SectionTitle accent="בכיתה">דוגמה לפעילות</SectionTitle>
    <div className="max-w-2xl mx-auto">
      <div className="bg-card rounded-2xl p-8 shadow-sm border border-border/50 mb-6">
        <div className="bg-slide-teal text-primary-foreground rounded-xl px-4 py-2 text-center font-display font-bold mb-4 text-sm">
          נושא: הכרזת העצמאות
        </div>
        <p className="text-muted-foreground mb-4 text-center">שקף עם תמונה של האירוע. בתמונה יש נקודות לחיצה.</p>
        <h3 className="font-display font-bold text-slide-dark mb-3">בלחיצה נפתח:</h3>
        <BulletList items={["מידע", "סרטון", "שאלה"]} icon={<IconTap size={14} />} />
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center text-slide-teal font-display font-bold flex items-center justify-center gap-2"
      >
        כך התלמידים חוקרים את הנושא <IconDiscovery size={20} />
      </motion.p>
    </div>
  </SlideLayout>
);

export default Slide13;
