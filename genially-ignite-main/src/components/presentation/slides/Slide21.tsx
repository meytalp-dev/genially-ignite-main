import SlideLayout from "../SlideLayout";
import { SectionTitle } from "../Decorator";
import { motion } from "framer-motion";

const tools = [
  { name: "Genially", desc: "מצגות אינטראקטיביות ומשחקים", color: "bg-slide-teal-light border-slide-teal" },
  { name: "Canva", desc: "מצגות מעוצבות מאוד", color: "bg-slide-peach border-slide-peach-dark" },
  { name: "Google Slides", desc: "מצגות פשוטות ומהירות", color: "bg-secondary border-border" },
];

const Slide21 = () => (
  <SlideLayout className="items-center">
    <SectionTitle accent="כלים">השוואה בין</SectionTitle>
    <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
      {tools.map((t, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.15 }}
          className={`rounded-2xl p-6 text-center border-2 ${t.color}`}
        >
          <h3 className="font-display font-bold text-slide-dark text-xl mb-2">{t.name}</h3>
          <p className="text-sm text-muted-foreground">{t.desc}</p>
        </motion.div>
      ))}
    </div>
  </SlideLayout>
);

export default Slide21;
