import SlideLayout from "../SlideLayout";
import { SectionTitle, FeatureCard } from "../Decorator";
import { IconSpark, IconPresentation, IconClipboard, IconSoloPath, IconGroup, IconSparkle } from "../Icons";

const Slide12 = () => (
  <SlideLayout>
    <SectionTitle accent="בכיתה">שימושים פדגוגיים</SectionTitle>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-6">
      {[
        { icon: <IconSpark size={28} />, title: "פתיחת שיעור" },
        { icon: <IconPresentation size={28} />, title: "מצגת אינטראקטיבית" },
        { icon: <IconClipboard size={28} />, title: "חזרה למבחן" },
        { icon: <IconSoloPath size={28} />, title: "למידה עצמאית" },
        { icon: <IconGroup size={28} />, title: "פעילות קבוצתית" },
      ].map((item, i) => (
        <FeatureCard key={i} icon={item.icon} title={item.title} description="" iconBg={i % 2 === 0 ? "bg-slide-teal-light" : "bg-slide-peach"} />
      ))}
    </div>
    <div className="bg-slide-teal-light rounded-xl px-6 py-3 text-center max-w-md mx-auto">
      <p className="text-sm text-slide-dark flex items-center justify-center gap-2">
        <IconSparkle size={16} /> התלמידים יכולים גם ליצור פעילויות בעצמם
      </p>
    </div>
  </SlideLayout>
);

export default Slide12;
