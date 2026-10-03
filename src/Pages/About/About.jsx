import React, { useEffect, lazy, Suspense } from 'react';
import MainNav from '../../Common/Navbar/MainNav';
import Footer from '../../Common/Footer/Footer';


// Lazy load components
const HeroSection = lazy(() => import('./sections/HeroSection'));
const Story = lazy(() => import('./sections/Story'));
const MeetArtist = lazy(() => import('./sections/MeetArtist'));
const Mission = lazy(() => import('./sections/Mission'));
const CreativeProcess = lazy(() => import('./sections/CreativeProcess'));
const CTAsection = lazy(() => import('./sections/CTAsection'));
const ComissionForm = lazy(() => import('../../Common/ComissionForm.jsx'));

const About = () => {
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const id = window.location.hash.replace('#', '');
      let attempts = 0;
      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (attempts < 20) {
          attempts++;
          setTimeout(tryScroll, 150);
        }
      };
      tryScroll();
    }
  }, []);

  return (
    <div className="w-full font-inter overflow-x-hidden">
      <MainNav />
      <Suspense fallback={null}>
        <ComissionForm />
      </Suspense>
      <Suspense fallback={null}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={null}>
        <Story />
      </Suspense>
      <Suspense fallback={null}>
        <MeetArtist />
      </Suspense>
      <Suspense fallback={null}>
        <Mission />
      </Suspense>
      <Suspense fallback={null}>
        <CreativeProcess />
      </Suspense>
      <Suspense fallback={null}>
        <CTAsection />
      </Suspense>
      <Footer />
    </div>
  );
};

export default About;
