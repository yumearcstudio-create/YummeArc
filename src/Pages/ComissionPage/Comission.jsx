import React, { useEffect, Suspense, lazy } from 'react';
import MainNav from '../../Common/Navbar/MainNav';
import Footer from '../../Common/Footer/Footer';

// ✅ Lazy imports
const Hero = lazy(() => import('./ComissionComps/Hero'));
const OurProcess = lazy(() => import('./ComissionComps/OurProcess'));
const Packages = lazy(() => import('./ComissionComps/Packeges'));
const FAQs = lazy(() => import('./ComissionComps/FAQs'));
const CTA = lazy(() => import('../../Common/CTAs/CTA'));
const Costs = lazy(() => import('./ComissionComps/Costs'));
const OrderFrom = lazy(() => import('./ComissionComps/OrderFrom'));
const Terms = lazy(() => import('./ComissionComps/Terms'));
const CommissionForm = lazy(() => import('../../Common/ComissionForm'));

const Comission = () => {
  useEffect(() => {
    // Scroll to top when page mounts
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
        <OurProcess />
      </Suspense>
      <Suspense fallback={null}>
        <Costs />
      </Suspense>
      <Suspense fallback={null}>
        <OrderFrom />
      </Suspense>
      <Suspense fallback={null}>
        <Terms />
      </Suspense>
      <Suspense fallback={null}>
        <CTA
          heading="Ready to share your idea?"
          para="Send us your lore, references, current model, rough notes, or just the feeling you want your character to have. We'll review it, help clarify the direction, and send the next steps."
          cta1="Send Your Request"
        />
      </Suspense>
      <Footer />
    </div>
  );
};

export default Comission;
