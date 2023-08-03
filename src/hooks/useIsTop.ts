import { useEffect, useState } from 'react';

const useIsTop = (): boolean => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return isTop;
};

export default useIsTop;
