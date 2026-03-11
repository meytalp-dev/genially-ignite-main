import SlideLayout from "../SlideLayout";
import { SectionTitle, StepFlow } from "../Decorator";

const Slide06 = () => (
  <SlideLayout className="items-center">
    <SectionTitle accent="תבנית">בחירת</SectionTitle>
    <p className="text-center text-muted-foreground mb-8">לאחר הבחירה ייפתח מאגר תבניות</p>
    <StepFlow
      steps={[
        "בחרו קטגוריה בצד שמאל — Education או Presentation",
        "עברו עם העכבר על תבנית",
        "לחצו Use this template",
        "התבנית תיפתח לעריכה",
      ]}
    />
  </SlideLayout>
);

export default Slide06;
