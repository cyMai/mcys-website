import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const Nav = styled.nav`
  background: ${props => props.theme.secondary};
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ThemeSelect = styled.select`
  padding: 0.5rem;
  border-radius: 4px;
`;

const LanguageButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background: ${props => props.theme.accent};
  color: white;
  border: none;
  cursor: pointer;
`;

function Navbar({ onThemeChange }) {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en');
  };

  return (
    <Nav>
      <div>
        <Link to="/">{t('nav.home')}</Link>
        <Link to="/education">{t('nav.education')}</Link>
        <Link to="/experience">{t('nav.experience')}</Link>
        <Link to="/projects">{t('nav.projects')}</Link>
      </div>
      <div>
        <ThemeSelect onChange={(e) => onThemeChange(e.target.value)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="green">Green</option>
          <option value="pink">Pink</option>
          <option value="blue">Blue</option>
        </ThemeSelect>
        <LanguageButton onClick={toggleLanguage}>
          {i18n.language === 'en' ? '中文' : 'English'}
        </LanguageButton>
      </div>
    </Nav>
  );
}

export default Navbar; 