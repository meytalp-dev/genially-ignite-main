import SlideLayout from "../SlideLayout";
import { SectionTitle, FeatureCard, BulletList } from "../Decorator";
import { IconActiveLearning, IconDiscovery, IconFeedback, IconExperiential, IconEngagement } from "../Icons";
import { AnimatedIconGroup, AnimatedIconItem } from "../Icons";

const Slide03 = () => (
  <SlideLayout>
    <SectionTitle>למה להשתמש ב-Genially</SectionTitle>
    <AnimatedIconGroup staggerDelay={0.1} className="grid md:grid-cols-5 gap-4 max-w-4xl mx-auto mb-8">
      {[
        { icon: <IconActiveLearning size={28} />, title: "למידה פעילה" },
        { icon: <IconDiscovery size={28} />, title: "סקרנות וגילוי" },
        { icon: <IconFeedback size={28} />, title: "משוב מיידי" },
        { icon: <IconExperiential size={28} />, title: "למידה חווייתית" },
        { icon: <IconEngagement size={28} />, title: "מעורבות תלמידים" },
      ].map((item, i) => (
        <AnimatedIconItem key={i}>
          <FeatureCard
            icon={item.icon}
            title={item.title}
            description=""
            iconBg={i % 2 === 0 ? "bg-slide-teal-light" : "bg-slide-peach"}
          />
        </AnimatedIconItem>
      ))}
    </AnimatedIconGroup>
    <div className="bg-card rounded-2xl p-6 shadow-sm border border-border/50 max-w-md mx-auto">
      <h3 className="font-display font-bold text-slide-dark mb-3">מתאים במיוחד ל:</h3>
      <BulletList items={["פתיחת שיעור", "פעילות חזרה למבחן", "למידה עצמאית", "עבודה בקבוצות"]} />
    </div>
  </SlideLayout>
);

export default Slide03;
