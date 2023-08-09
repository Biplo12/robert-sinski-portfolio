import { useEffect, useState } from 'react';

const useIsMobile = (toggleMenu: () => void, isMenuOpen: boolean) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobile && isMenuOpen) {
      toggleMenu();
    }
  }, [isMenuOpen, isMobile, toggleMenu]);

  return isMobile;
};

export default useIsMobile;
