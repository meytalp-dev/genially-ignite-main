import SlideLayout from "../SlideLayout";
import { SectionTitle, StepFlow } from "../Decorator";
import { IconSparkle } from "../Icons";

const Slide18 = () => (
  <SlideLayout className="items-center">
    <SectionTitle accent="יוצרים">פעילות שהתלמידים</SectionTitle>
    <p className="text-center text-muted-foreground mb-8">התלמידים יכולים ליצור מצגת אינטראקטיבית</p>
    <StepFlow steps={["שקף 1 – פתיחה", "שקף 2 – מידע", "שקף 3 – מידע נוסף", "שקף 4 – שאלה"]} />
    <div className="bg-slide-teal-light rounded-xl px-6 py-3 text-center max-w-sm mx-auto mt-6">
      <p className="text-sm text-slide-dark font-medium flex items-center justify-center gap-2">
        <IconSparkle size={16} /> כך התלמידים הופכים ליוצרי תוכן
      </p>
    </div>
  </SlideLayout>
);

export default Slide18;
