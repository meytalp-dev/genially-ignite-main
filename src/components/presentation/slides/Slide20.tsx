import SlideLayout from "../SlideLayout";
import { SectionTitle, FeatureCard } from "../Decorator";
import { IconFocus, IconTrim, IconImage, IconQuestion, IconSparkle } from "../Icons";

const Slide20 = () => (
  <SlideLayout>
    <SectionTitle accent="קשב">התאמה לתלמידים עם קשיי</SectionTitle>
    <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
      <FeatureCard icon={<IconFocus size={28} />} title="רעיון אחד בכל שקף" description="" iconBg="bg-slide-teal-light" />
      <FeatureCard icon={<IconTrim size={28} />} title="משפט קצר" description="" iconBg="bg-slide-peach" />
      <FeatureCard icon={<IconImage size={28} />} title="שילוב תמונות" description="" iconBg="bg-slide-peach" />
      <FeatureCard icon={<IconQuestion size={28} />} title="שאלות קצרות" description="" iconBg="bg-slide-teal-light" />
    </div>
    <p className="text-center text-muted-foreground mt-6 text-sm flex items-center justify-center gap-2">
      כך הלמידה נשארת ממוקדת <IconSparkle size={16} />
    </p>
  </SlideLayout>
);

export default Slide20;
