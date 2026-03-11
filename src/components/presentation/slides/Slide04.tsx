import SlideLayout from "../SlideLayout";
import { SectionTitle, StepFlow } from "../Decorator";

const Slide04 = () => (
  <SlideLayout className="items-center">
    <SectionTitle accent="למערכת">כניסה</SectionTitle>
    <div className="bg-card rounded-2xl p-8 shadow-sm border border-border/50 max-w-md mx-auto text-center mb-6">
      <p className="text-muted-foreground mb-2">נכנסים לאתר:</p>
      <a href="https://genially.ly" target="_blank" className="font-display text-2xl font-bold text-slide-teal hover:underline">
        genially.ly
      </a>
    </div>
    <StepFlow
      steps={[
        "לחצו Sign up או Log in",
        "התחברו באמצעות Google או מייל",
        "נפתח לוח העבודה",
      ]}
    />
    <p className="text-center text-sm text-muted-foreground mt-6 max-w-sm mx-auto">
      זה המקום שבו יוצרים ומנהלים את כל הפעילויות
    </p>
  </SlideLayout>
);

export default Slide04;
