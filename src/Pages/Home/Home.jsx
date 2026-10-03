import React, { useEffect, lazy, Suspense } from 'react';
import MainNav from '../../Common/Navbar/MainNav';
import Footer from '../../Common/Footer/Footer';

const Hero = lazy(() => import('./HomeComps/Hero'));
const VerifyArtistNotice = lazy(() => import('./HomeComps/VerifyArtistNotice'));
const WhyYummearc = lazy(() => import('./HomeComps/WhyYummearc'));
const RecentWork = lazy(() => import('./HomeComps/RecentWork'));
const OurProcess = lazy(() => import('./HomeComps/OurProcess'));
const Testimonals = lazy(() => import('./HomeComps/Testimonals'));
const CTA = lazy(() => import('../../Common/CTAs/CTA'));
const WhatWeCreate = lazy(() => import('./HomeComps/WhatWeCreate'));
const Heart = lazy(() => import('./HomeComps/Heart'));
const CommissionForm = lazy(() => import('../../Common/ComissionForm'));

const Home = () => {
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
        <VerifyArtistNotice />
      </Suspense>
      <Suspense fallback={null}>
        <WhyYummearc />
      </Suspense>
      <Suspense fallback={null}>
        <WhatWeCreate />
      </Suspense>
      <Suspense fallback={null}>
        <RecentWork />
      </Suspense>
      <Suspense fallback={null}>
        <Heart />
      </Suspense>
      <Suspense fallback={null}>
        <OurProcess />
      </Suspense>
      <Suspense fallback={null}>
        <Testimonals />
      </Suspense>
      <Suspense fallback={null}>
        <CTA
          heading={"Trusted by creators building their next identity"}
          para={"See real feedback from creators who worked with YumeArc on custom models, stream visuals, and character-focused assets."}
          cta1={"Check Trustpilot Reviews"}
          ctaLink1={"https://www.trustpilot.com/review/yumearc.com"}
          cta2={"Start a Project"}
        />
      </Suspense>
      <Footer />
    </div>
  );
};

export default Home;
