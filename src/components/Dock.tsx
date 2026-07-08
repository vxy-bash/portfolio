import { motion } from 'framer-motion';

interface Tab {
  id: string;
  label: string;
}

interface DockProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (id: string) => void;
}

export function Dock({ tabs, activeTab, onTabChange }: DockProps) {
  return (
    <nav className="dock">
      <div className="dock-inner">
        {tabs.map(tab => {
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              className={`dock-item ${isActive ? 'active' : ''}`}
              onClick={() => onTabChange(tab.id)}
            >
              {tab.label}
              
              {/* Aktiver Tab-Indikator (Pille) */}
              {isActive && (
                <motion.span className="dock-pill" layoutId="pill" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
