import SlideLayout from "../SlideLayout";
import { SectionTitle, StepFlow } from "../Decorator";
import { IconHint } from "../Icons";

const Slide09 = () => (
  <SlideLayout className="items-center">
    <SectionTitle accent="תמונות">הוספת</SectionTitle>
    <StepFlow
      steps={[
        "לחצו Insert",
        "בחרו Image",
        "העלו תמונה מהמחשב או השתמשו במאגר",
        "גררו את התמונה לשקף",
      ]}
    />
    <div className="bg-slide-peach rounded-xl px-6 py-3 text-center max-w-sm mx-auto mt-6">
      <p className="text-sm font-medium text-slide-dark flex items-center justify-center gap-2">
        <IconHint size={16} /> טיפ: תמונה טובה הופכת את השיעור למעניין יותר
      </p>
    </div>
  </SlideLayout>
);

export default Slide09;
