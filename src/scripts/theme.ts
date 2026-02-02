const THEME_KEY = 'theme';

function getTheme(): 'light' | 'dark' {
  if (typeof localStorage !== 'undefined') {
    return (localStorage.getItem(THEME_KEY) as 'light' | 'dark') || 'light';
  }
  return 'light';
}

function setTheme(theme: 'light' | 'dark') {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(THEME_KEY, theme);
  }
  document.documentElement.setAttribute('data-theme', theme);
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  setTheme(getTheme());
});

// Export for ThemeToggle component
(window as any).toggleTheme = () => {
  const current = getTheme();
  setTheme(current === 'light' ? 'dark' : 'light');
};
