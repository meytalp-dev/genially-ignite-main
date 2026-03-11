import SlideLayout from "../SlideLayout";
import { SectionTitle, StepFlow, BulletList } from "../Decorator";
import { IconEdit } from "../Icons";

const Slide08 = () => (
  <SlideLayout className="items-center">
    <SectionTitle accent="טקסט">הוספת</SectionTitle>
    <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
      <div>
        <StepFlow steps={["לחצו Text", "בחרו סוג טקסט", "גררו לשקף", "כתבו את התוכן"]} />
      </div>
      <div className="bg-card rounded-2xl p-6 shadow-sm border border-border/50 flex flex-col justify-center">
        <h3 className="font-display font-bold text-slide-dark mb-3">אפשר לשנות:</h3>
        <BulletList items={["גודל", "צבע", "גופן"]} icon={<IconEdit size={14} />} />
      </div>
    </div>
  </SlideLayout>
);

export default Slide08;
