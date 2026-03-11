import SlideLayout from "../SlideLayout";
import { SectionTitle, FeatureCard } from "../Decorator";
import { IconPresentation, IconInteractiveImage, IconGamePuzzle, IconHint } from "../Icons";
import { AnimatedIconGroup, AnimatedIconItem } from "../Icons";
import { motion } from "framer-motion";

const Slide05 = () => (
  <SlideLayout>
    <SectionTitle accent="חדשה">יצירת פעילות</SectionTitle>
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 }}
      className="bg-slide-teal text-primary-foreground rounded-2xl px-8 py-4 text-center font-display font-bold text-xl max-w-xs mx-auto mb-8"
    >
      Create Genially
    </motion.div>
    <AnimatedIconGroup staggerDelay={0.12} className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-6">
      <AnimatedIconItem>
        <FeatureCard icon={<IconPresentation size={28} />} title="Presentation" description="מצגת" num={1} iconBg="bg-slide-teal-light" />
      </AnimatedIconItem>
      <AnimatedIconItem>
        <FeatureCard icon={<IconInteractiveImage size={28} />} title="Interactive Image" description="תמונה אינטראקטיבית" num={2} iconBg="bg-slide-peach" />
      </AnimatedIconItem>
      <AnimatedIconItem>
        <FeatureCard icon={<IconGamePuzzle size={28} />} title="Gamification" description="משחק" num={3} iconBg="bg-slide-teal-light" />
      </AnimatedIconItem>
    </AnimatedIconGroup>
    <div className="bg-slide-peach rounded-xl px-6 py-3 text-center max-w-sm mx-auto">
      <p className="text-sm font-medium text-slide-dark flex items-center justify-center gap-2">
        <IconHint size={16} /> להתחלה מומלץ לבחור: <strong>Presentation</strong>
      </p>
    </div>
  </SlideLayout>
);

export default Slide05;
