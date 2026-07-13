import React, { useContext, useEffect, lazy, Suspense } from 'react';
import MainNav from '../../Common/Navbar/MainNav';
import Loader from '../../components/Loader';
import { ContextAPI } from '../../GlobalProvider/ContextAPI';

const Hero = lazy(() => import('./HomeComps/Hero'));
const WhyYummearc = lazy(() => import('./HomeComps/WhyYummearc'));
const RecentWork = lazy(() => import('./HomeComps/RecentWork'));
const OurProcess = lazy(() => import('./HomeComps/OurProcess'));
const Testimonals = lazy(() => import('./HomeComps/Testimonals'));
const CTA = lazy(() => import('../../Common/CTAs/CTA'));
const Footer = lazy(() => import('../../Common/Footer/Footer'));
const WhatWeCreate = lazy(() => import('./HomeComps/WhatWeCreate'));
const Heart = lazy(() => import('./HomeComps/Heart'));
const CommissionForm = lazy(() => import('../../Common/ComissionForm'));

const Home = () => {
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
  }, []);

  return (
    <div className="w-full font-inter overflow-x-hidden">
      {loading && <Loader text={"Home"} />}

      <MainNav />
      <Suspense fallback={<Loader text="Loading section..." />}>
        <CommissionForm />
        <Hero />
        <WhyYummearc />
        <WhatWeCreate />
        <RecentWork />
        <Heart />
        <OurProcess />
        <Testimonals />
        <CTA
          heading={"Ready to Start Your VTuber Journey?"}
          para={"See real feedback from creators who worked with YumeArc on custom models, stream visuals, and character-focused assets."}
          cta1={"Check Trustpilot Reviews"}
          cta2={"Start a Project"}
        />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Home;
