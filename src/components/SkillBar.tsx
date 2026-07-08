import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  level: number;
}

export function SkillBar({ name, level }: SkillBarProps) {
  return (
    <div className="skill">
      
      <div className="skill-row">
        <span>{name}</span>
        <span className="muted">{level}%</span>
      </div>
      
      {/* Animierter Fortschrittsbalken */}
      <div className="skill-track">
        <motion.div
          className="skill-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        />
      </div>

    </div>
  );
}
