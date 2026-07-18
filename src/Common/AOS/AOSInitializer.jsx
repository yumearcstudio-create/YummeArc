// src/components/AOSInitializer.jsx
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSInitializer = ({ duration = 600 , offset = 50, once =true , easing = 'ease-out' }) => {
  useEffect(() => {
    AOS.init({
      duration ,
      offset,
      once,
      easing,
    });
  }, [duration , offset, once  , easing  ]);

  return null;
};

export default AOSInitializer;
