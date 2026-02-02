function debounce<F extends Function>(func: F, wait: number = 30): (...args: any[]) => void {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  return function (...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), wait);
  };
}

const scrollToTopBtn = document.querySelector('.scroll-to-top');

const handleScroll = debounce(() => {
  const scrollY = window.scrollY;

  if (scrollY > 200) {
    scrollToTopBtn?.classList.add('visible');
  } else {
    scrollToTopBtn?.classList.remove('visible');
  }
}, 30);

window.addEventListener('scroll', handleScroll);

scrollToTopBtn?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
