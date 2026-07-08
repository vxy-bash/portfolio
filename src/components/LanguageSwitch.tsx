import { Language } from '../data/portfolioData';

interface LanguageSwitchProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export function LanguageSwitch({ currentLang, onLanguageChange }: LanguageSwitchProps) {
  return (
    <div className="lang-switch-container">
      <div className="lang-switch">
        
        <button 
          className={`lang-btn ${currentLang === 'de' ? 'active' : ''}`}
          onClick={() => onLanguageChange('de')}
        >
          DE
        </button>
        
        <span className="lang-divider">/</span>
        
        <button 
          className={`lang-btn ${currentLang === 'en' ? 'active' : ''}`}
          onClick={() => onLanguageChange('en')}
        >
          EN
        </button>

      </div>
    </div>
  );
}
