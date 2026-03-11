import SlideLayout from "../SlideLayout";
import { SectionTitle, BulletList } from "../Decorator";
import { IconTarget } from "../Icons";
import { motion } from "framer-motion";

const Slide02 = () => (
  <SlideLayout>
    <SectionTitle accent="Genially">מה זה</SectionTitle>
    <p className="text-center text-muted-foreground mb-8 text-lg">
      Genially הוא כלי ליצירת תוכן אינטראקטיבי
    </p>
    <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-card rounded-2xl p-6 shadow-sm border border-border/50"
      >
        <h3 className="font-display font-bold text-slide-dark mb-4">באמצעותו ניתן ליצור:</h3>
        <BulletList
          items={[
            "מצגות אינטראקטיביות",
            "משחקי למידה",
            "חידונים",
            "אינפוגרפיקות",
            "חדרי בריחה לימודיים",
          ]}
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-slide-teal-light rounded-2xl p-6 flex flex-col items-center justify-center text-center"
      >
        <div className="text-slide-teal mb-4">
          <IconTarget size={48} />
        </div>
        <h3 className="font-display font-bold text-slide-dark mb-2">הייחוד של הכלי</h3>
        <p className="text-muted-foreground leading-relaxed">
          התלמידים לא רק צופים במצגת – הם לוחצים, מגלים ומתקדמים במשימה.
        </p>
      </motion.div>
    </div>
  </SlideLayout>
);

export default Slide02;
