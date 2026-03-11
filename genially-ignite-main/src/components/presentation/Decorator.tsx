import { motion } from "framer-motion";

export const LineDecorator = () => (
  <div className="flex items-center justify-center gap-2 mb-4">
    <div className="w-8 h-0.5 bg-slide-teal rounded-full" />
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      className="text-slide-teal text-sm"
    >
      ✦
    </motion.div>
    <div className="w-8 h-0.5 bg-slide-teal rounded-full" />
  </div>
);

export const SlideNumber = ({ num }: { num: number }) => (
  <span className="text-xs font-body text-slide-gray opacity-60">
    {String(num).padStart(2, "0")}
  </span>
);

export const SectionTitle = ({ children, accent }: { children: React.ReactNode; accent?: string }) => (
  <div className="text-center mb-8">
    <LineDecorator />
    <h2 className="font-display text-3xl md:text-4xl font-bold text-slide-dark">
      {accent ? (
        <>
          {children}{" "}
          <span className="text-slide-teal">{accent}</span>
        </>
      ) : (
        children
      )}
    </h2>
  </div>
);

export const FeatureCard = ({
  icon,
  title,
  description,
  num,
  iconBg = "bg-slide-teal-light",
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  num?: number;
  iconBg?: string;
}) => (
  <motion.div
    whileHover={{ y: -4, boxShadow: "0 12px 40px -12px rgba(0,0,0,0.1)" }}
    transition={{ duration: 0.2 }}
    className="bg-card rounded-2xl p-6 md:p-8 flex flex-col items-center text-center shadow-sm border border-border/50"
  >
    {num !== undefined && (
      <div className="self-start mb-4">
        <SlideNumber num={num} />
      </div>
    )}
    <div className={`w-14 h-14 ${iconBg} rounded-xl flex items-center justify-center mb-4 text-2xl`}>
      {icon}
    </div>
    <h3 className="font-display font-bold text-lg text-slide-dark mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
  </motion.div>
);

export const BulletList = ({ items, icon = "•" }: { items: string[]; icon?: React.ReactNode }) => (
  <ul className="space-y-3">
    {items.map((item, i) => (
      <motion.li
        key={i}
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: i * 0.1 }}
        className="flex items-start gap-3 text-foreground"
      >
        <span className="text-slide-teal font-bold mt-0.5 shrink-0">{icon}</span>
        <span className="text-base leading-relaxed">{item}</span>
      </motion.li>
    ))}
  </ul>
);

export const StepFlow = ({ steps }: { steps: string[] }) => (
  <div className="flex flex-col items-center gap-1">
    {steps.map((step, i) => (
      <div key={i} className="flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.15 }}
          className="bg-card rounded-xl px-6 py-3 shadow-sm border border-border/50 text-center font-body text-sm"
        >
          {step}
        </motion.div>
        {i < steps.length - 1 && (
          <span className="text-slide-teal text-lg my-0.5">⬇</span>
        )}
      </div>
    ))}
  </div>
);

export const InfoTag = ({ label, color = "bg-slide-teal-light text-slide-teal" }: { label: string; color?: string }) => (
  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${color}`}>
    {label}
  </span>
);
