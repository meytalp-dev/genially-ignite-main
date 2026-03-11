import SlideLayout from "../SlideLayout";
import { SectionTitle, FeatureCard } from "../Decorator";
import { IconFade, IconZoom, IconBounce, IconHint } from "../Icons";
import { AnimatedIconGroup, AnimatedIconItem } from "../Icons";

const Slide11 = () => (
  <SlideLayout>
    <SectionTitle accent="אנימציות">הוספת</SectionTitle>
    <p className="text-center text-muted-foreground mb-8">לחצו על אובייקט → לחצו Animation → בחרו סוג</p>
    <AnimatedIconGroup staggerDelay={0.1} className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-6">
      <AnimatedIconItem>
        <FeatureCard icon={<IconFade size={28} />} title="Fade" description="הופעה הדרגתית" iconBg="bg-slide-teal-light" />
      </AnimatedIconItem>
      <AnimatedIconItem>
        <FeatureCard icon={<IconZoom size={28} />} title="Zoom" description="הגדלה" iconBg="bg-slide-peach" />
      </AnimatedIconItem>
      <AnimatedIconItem>
        <FeatureCard icon={<IconBounce size={28} />} title="Bounce" description="קפיצה" iconBg="bg-slide-teal-light" />
      </AnimatedIconItem>
    </AnimatedIconGroup>
    <div className="bg-slide-peach rounded-xl px-6 py-3 text-center max-w-sm mx-auto">
      <p className="text-sm font-medium text-slide-dark flex items-center justify-center gap-2">
        <IconHint size={16} /> מומלץ להשתמש באנימציה אחת בלבד לשקף
      </p>
    </div>
  </SlideLayout>
);

export default Slide11;
