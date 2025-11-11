import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Múltiplas tentativas de scroll
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      
      // Força em elementos específicos também
      const mainContent = document.querySelector('.main-content');
      if (mainContent) mainContent.scrollTop = 0;
      
      const app = document.querySelector('.app');
      if (app) app.scrollTop = 0;
    };

    // Executa imediatamente
    scrollToTop();
    
    // Executa após um frame
    requestAnimationFrame(scrollToTop);
    
    // Executa após renderização
    setTimeout(scrollToTop, 0);
    setTimeout(scrollToTop, 10);
    setTimeout(scrollToTop, 50);
    setTimeout(scrollToTop, 100);
    
  }, [pathname]);

  return null;
}

export default ScrollToTop;