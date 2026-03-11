import SlideLayout from "../SlideLayout";
import { SectionTitle, FeatureCard, BulletList } from "../Decorator";
import { IconKey, IconCollaboration, IconCriticalThink, IconPlayful } from "../Icons";

const Slide14 = () => (
  <SlideLayout>
    <SectionTitle accent="בריחה">יצירת חדר</SectionTitle>
    <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
      <div className="bg-card rounded-2xl p-6 shadow-sm border border-border/50">
        <h3 className="font-display font-bold text-slide-dark mb-4">חדר בריחה הוא פעילות שבה התלמידים:</h3>
        <BulletList items={["פותרים משימות", "מקבלים רמזים", "מתקדמים שלב אחר שלב"]} icon={<IconKey size={14} />} />
      </div>
      <div>
        <h3 className="font-display font-bold text-slide-dark mb-4">מטרות פדגוגיות:</h3>
        <div className="grid gap-3">
          <FeatureCard icon={<IconCollaboration size={28} />} title="שיתוף פעולה" description="" iconBg="bg-slide-teal-light" />
          <FeatureCard icon={<IconCriticalThink size={28} />} title="חשיבה ביקורתית" description="" iconBg="bg-slide-peach" />
          <FeatureCard icon={<IconPlayful size={28} />} title="למידה משחקית" description="" iconBg="bg-slide-teal-light" />
        </div>
      </div>
    </div>
  </SlideLayout>
);

export default Slide14;
