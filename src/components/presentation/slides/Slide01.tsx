import SlideLayout from "../SlideLayout";
import { LineDecorator, BulletList } from "../Decorator";
import { motion } from "framer-motion";

const Slide01 = () => (
  <SlideLayout className="items-center justify-center text-center">
    <LineDecorator />
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="font-display text-5xl md:text-6xl font-bold text-slide-dark mb-2"
    >
      <span className="text-slide-teal">Genially</span> בהוראה
    </motion.h1>
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto"
    >
      יצירת מצגות אינטראקטיביות, משחקים וחדרי בריחה
    </motion.p>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7 }}
      className="bg-card rounded-2xl p-8 shadow-sm border border-border/50 max-w-md mx-auto text-right"
    >
      <h3 className="font-display font-bold text-slide-teal mb-4 text-lg">במצגת נלמד:</h3>
      <BulletList
        items={[
          "מהו Genially",
          "איך יוצרים פעילות",
          "שימושים פדגוגיים בכיתה",
          "בניית חדר בריחה לימודי",
        ]}
      />
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="mt-6 px-4 py-2 bg-slide-peach rounded-full text-sm text-slide-dark font-medium"
    >
      הדרכה לצוות
    </motion.div>
  </SlideLayout>
);

export default Slide01;
