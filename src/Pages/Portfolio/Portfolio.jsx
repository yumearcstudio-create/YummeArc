import React, { useEffect, Suspense, lazy } from 'react';
import MainNav from '../../Common/Navbar/MainNav';
import Footer from '../../Common/Footer/Footer';

// ✅ Lazy load components
const Hero = lazy(() => import('./PortfolioComps/Hero'));
const Speak = lazy(() => import('./PortfolioComps/Speak'));
const Stream = lazy(() => import('./PortfolioComps/Stream'));
const CTA1 = lazy(() => import('./PortfolioComps/CTA1'));
const Emotes = lazy(() => import('./PortfolioComps/Emotes'));
const ArtScenes = lazy(() => import('./PortfolioComps/ArtScenes'));
const PFP = lazy(() => import('./PortfolioComps/PFP'));
const CommissionForm = lazy(() => import('../../Common/ComissionForm'));

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="w-full font-inter overflow-x-hidden">
      <MainNav />
      <Suspense fallback={null}>
        <CommissionForm />
      </Suspense>
      <Suspense fallback={null}>
        <Hero />
      </Suspense>
      <Suspense fallback={null}>
        <Speak />
      </Suspense>
      <Suspense fallback={null}>
        <Stream />
      </Suspense>
      <div className='hidden'>
        <Suspense fallback={null}>
          <Emotes />
        </Suspense>
      </div>
      <Suspense fallback={null}>
        <ArtScenes />
      </Suspense>
      <div className='hidden'>
        <Suspense fallback={null}>
          <PFP />
        </Suspense>
      </div>
      <Suspense fallback={null}>
        <CTA1 />
      </Suspense>
      <Footer />
    </div>
  );
};

export default Portfolio;
