import React, { useContext, useEffect, Suspense, lazy } from 'react';
import Loader from '../../components/Loader';
import { ContextAPI } from '../../GlobalProvider/ContextAPI';

// ✅ Lazy load components
const MainNav = lazy(() => import('../../Common/Navbar/MainNav'));
const Hero = lazy(() => import('./PortfolioComps/Hero'));
const Speak = lazy(() => import('./PortfolioComps/Speak'));
const Stream = lazy(() => import('./PortfolioComps/Stream'));
const CTA1 = lazy(() => import('./PortfolioComps/CTA1'));
const Emotes = lazy(() => import('./PortfolioComps/Emotes'));
const ArtScenes = lazy(() => import('./PortfolioComps/ArtScenes'));
const PFP = lazy(() => import('./PortfolioComps/PFP'));
const Footer = lazy(() => import('../../Common/Footer/Footer'));
const CommissionForm = lazy(() => import('../../Common/ComissionForm'));

const Portfolio = () => {
  const { loading, setLoading } = useContext(ContextAPI);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const images = document.images;
    let loadedCount = 0;

    if (images.length === 0) {
      setLoading(false);
      return;
    }

    const handleImageLoad = () => {
      loadedCount++;
      if (loadedCount === images.length) {
        setLoading(false);
      }
    };

    for (let img of images) {
      if (img.complete) {
        loadedCount++;
      } else {
        img.addEventListener('load', handleImageLoad);
        img.addEventListener('error', handleImageLoad);
      }
    }

    if (loadedCount === images.length) {
      setLoading(false);
    }

    return () => {
      for (let img of images) {
        img.removeEventListener('load', handleImageLoad);
        img.removeEventListener('error', handleImageLoad);
      }
    };
  }, [setLoading]);

  return (
    <div className="w-full font-inter overflow-x-hidden">
      {loading && <Loader text="Portfolio" />}
      <Suspense fallback={<Loader text="Loading..." />}>
        <MainNav />
        <CommissionForm />
        <Hero />
        <Speak />
        <Stream />
        <div className='hidden'>
          <Emotes />
        </div>
        <ArtScenes />
        <div className='hidden'>
          <PFP />
        </div>
        <CTA1 />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Portfolio;
