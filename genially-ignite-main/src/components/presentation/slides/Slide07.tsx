import SlideLayout from "../SlideLayout";
import { SectionTitle, FeatureCard } from "../Decorator";
import { IconScreen, IconSlideList, IconToolbar } from "../Icons";
import { AnimatedIconGroup, AnimatedIconItem } from "../Icons";

const Slide07 = () => (
  <SlideLayout>
    <SectionTitle accent="העבודה">סביבת</SectionTitle>
    <AnimatedIconGroup staggerDelay={0.1} className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
      {[
        { icon: <IconScreen size={28} />, title: "מרכז המסך", desc: "השקף עצמו" },
        { icon: <IconSlideList size={28} />, title: "צד שמאל", desc: "רשימת שקפים" },
        { icon: <IconToolbar size={28} />, title: "סרגל עליון", desc: "כלי עריכה" },
      ].map((item, i) => (
        <AnimatedIconItem key={i}>
          <FeatureCard icon={item.icon} title={item.title} description={item.desc} iconBg={i === 1 ? "bg-slide-peach" : "bg-slide-teal-light"} />
        </AnimatedIconItem>
      ))}
    </AnimatedIconGroup>
    <div className="bg-card rounded-2xl p-6 shadow-sm border border-border/50 max-w-lg mx-auto">
      <h3 className="font-display font-bold text-slide-dark mb-3">הכפתורים החשובים:</h3>
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: "Text", desc: "הוספת טקסט" },
          { label: "Insert", desc: "הוספת תמונות" },
          { label: "Interactive", desc: "יצירת לחיצות" },
          { label: "Animation", desc: "אנימציות" },
        ].map((b, i) => (
          <div key={i} className="bg-secondary rounded-xl px-4 py-3 text-center">
            <span className="font-display font-bold text-slide-teal text-sm">{b.label}</span>
            <p className="text-xs text-muted-foreground mt-1">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </SlideLayout>
);

export default Slide07;
