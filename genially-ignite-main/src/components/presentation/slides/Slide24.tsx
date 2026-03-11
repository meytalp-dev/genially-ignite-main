import SlideLayout from "../SlideLayout";
import { SectionTitle, BulletList } from "../Decorator";
import { IconCheck, IconTimer, IconTarget } from "../Icons";
import { motion } from "framer-motion";

const Slide24 = () => (
  <SlideLayout className="items-center justify-center text-center">
    <SectionTitle accent="לצוות">משימה</SectionTitle>
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 }}
      className="bg-card rounded-2xl p-8 shadow-sm border border-border/50 max-w-md mx-auto mb-6 text-right"
    >
      <h3 className="font-display font-bold text-slide-dark mb-4">בנו פעילות קצרה הכוללת:</h3>
      <BulletList items={["שקף מידע", "נקודת לחיצה אחת", "שאלה אחת"]} icon={<IconCheck size={14} />} />
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
      className="bg-slide-teal text-primary-foreground rounded-2xl px-8 py-4 font-display font-bold text-xl mb-4 flex items-center justify-center gap-3"
    >
      <IconTimer size={24} /> זמן עבודה: 10 דקות
    </motion.div>
    <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
      כך לומדים את הכלי בצורה הטובה ביותר <IconTarget size={16} />
    </p>
  </SlideLayout>
);

export default Slide24;
