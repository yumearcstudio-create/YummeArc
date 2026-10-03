import React, { useContext, useEffect, lazy, Suspense } from 'react';
import Loader from '../../components/Loader';
import { ContextAPI } from '../../GlobalProvider/ContextAPI.jsx';


// Lazy load components
const MainNav = lazy(() => import('../../Common/Navbar/MainNav'));
const Footer = lazy(() => import('../../Common/Footer/Footer'));
const HeroSection = lazy(() => import('./sections/HeroSection'));
const Story = lazy(() => import('./sections/Story'));
const MeetArtist = lazy(() => import('./sections/MeetArtist'));
const Mission = lazy(() => import('./sections/Mission'));
const CreativeProcess = lazy(() => import('./sections/CreativeProcess'));
const CTAsection = lazy(() => import('./sections/CTAsection'));
const ComissionForm = lazy(() => import('../../Common/ComissionForm.jsx'));

const About = () => {
  const { loading, setLoading } = useContext(ContextAPI);

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
      {loading && <Loader text={"About Page"} />}

      <Suspense fallback={<Loader text="Loading About Page..." />}>
        <MainNav />
        <ComissionForm />
        <HeroSection />
        <Story />
        <MeetArtist />
        <Mission />
        <CreativeProcess />
        <CTAsection />
        <Footer />
      </Suspense>
    </div>
  );
};

export default About;
