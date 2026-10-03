import React, { Suspense, useEffect } from 'react';
import MainNav from '../../Common/Navbar/MainNav';
import Footer from '../../Common/Footer/Footer';
import CommissionForm from '../../Common/ComissionForm';

// ✅ Lazy load sections
const Hero = React.lazy(() => import('./sections/Hero'));
const Custom = React.lazy(() => import('./sections/Custom'));
const Custom3D = React.lazy(() => import('./sections/Custom3D'));
const Chibbi = React.lazy(() => import('./sections/Chibbi'));
const Sec5_vtuber = React.lazy(() => import('./sections/Sec5_vtuber'));
const Sec6_lorebased = React.lazy(() => import('./sections/Sec6_lorebased'));
const Sec7_art2d = React.lazy(() => import('./sections/Sec7_art2d'));
const Sec8_pfp = React.lazy(() => import('./sections/Sec8_pfp'));
const Sec9_emote = React.lazy(() => import('./sections/Sec9_emote'));
const Sec10_overlay = React.lazy(() => import('./sections/Sec10_overlay'));
const Sec11_intro = React.lazy(() => import('./sections/Sec11_intro'));
const FAQs = React.lazy(() => import('./sections/FAQs'));
const CTA = React.lazy(() => import('./sections/CTA'));

const Service = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="w-full font-inter overflow-x-hidden">
      <MainNav />
      <CommissionForm />

      {/* ✅ Suspense wrapper for lazy loaded sections */}
      <Suspense fallback={null}>
        <Hero />
      </Suspense>
      <Suspense fallback={null}>
        <Custom />
      </Suspense>
      <Suspense fallback={null}>
        <Custom3D />
      </Suspense>
      <Suspense fallback={null}>
        <Chibbi />
      </Suspense>
      <div className='hidden'>
        <Suspense fallback={null}>
          <Sec5_vtuber />
        </Suspense>
      </div>
      {/* <Sec6_lorebased /> */}
      <Suspense fallback={null}>
        <Sec7_art2d />
      </Suspense>
      <Suspense fallback={null}>
        <Sec8_pfp />
      </Suspense>
      <Suspense fallback={null}>
        <Sec9_emote />
      </Suspense>
      <div className='hidden'>
        <Suspense fallback={null}>
          <Sec10_overlay />
        </Suspense>
      </div>
      <Suspense fallback={null}>
        <Sec11_intro />
      </Suspense>
      <Suspense fallback={null}>
        <FAQs />
      </Suspense>
      <Suspense fallback={null}>
        <CTA />
      </Suspense>

      <Footer />
    </div>
  );
};

export default Service;
