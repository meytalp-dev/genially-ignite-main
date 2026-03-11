import SlideLayout from "../SlideLayout";
import { SectionTitle, FeatureCard } from "../Decorator";
import { IconTooltip, IconWindow, IconNavigate } from "../Icons";
import { AnimatedIconGroup, AnimatedIconItem } from "../Icons";

const Slide10 = () => (
  <SlideLayout>
    <SectionTitle accent="אינטראקטיביות">יצירת</SectionTitle>
    <p className="text-center text-muted-foreground mb-2">זה החלק המרכזי ב-Genially</p>
    <p className="text-center text-sm text-muted-foreground mb-8">לחצו על האובייקט → לחצו Interactive → בחרו פעולה</p>
    <AnimatedIconGroup staggerDelay={0.12} className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
      <AnimatedIconItem>
        <FeatureCard icon={<IconTooltip size={28} />} title="Tooltip" description="חלון מידע קטן" num={1} iconBg="bg-slide-teal-light" />
      </AnimatedIconItem>
      <AnimatedIconItem>
        <FeatureCard icon={<IconWindow size={28} />} title="Window" description="חלון מידע גדול" num={2} iconBg="bg-slide-peach" />
      </AnimatedIconItem>
      <AnimatedIconItem>
        <FeatureCard icon={<IconNavigate size={28} />} title="Go to page" description="מעבר לשקף" num={3} iconBg="bg-slide-teal-light" />
      </AnimatedIconItem>
    </AnimatedIconGroup>
  </SlideLayout>
);

export default Slide10;
