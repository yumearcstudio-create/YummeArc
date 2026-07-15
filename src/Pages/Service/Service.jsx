import React, { Suspense, useContext, useEffect } from 'react';
import MainNav from '../../Common/Navbar/MainNav';
import Footer from '../../Common/Footer/Footer';
import Loader from '../../components/Loader';
import CommissionForm from '../../Common/ComissionForm';
import { ContextAPI } from '../../GlobalProvider/ContextAPI';

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
  const { loading, setLoading } = useContext(ContextAPI);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Keep loader for a short time before rendering sections
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full font-inter overflow-x-hidden">
      {loading && <Loader text={"Services"} />}

      <MainNav />
      <CommissionForm />

      {/* ✅ Suspense wrapper for lazy loaded sections */}
      <Suspense fallback={<Loader text="Loading Section..." />}>
        <Hero />
        <Custom />
        <Custom3D />
        <Chibbi />
        <div className='hidden'>
          <Sec5_vtuber />
        </div>
        {/* <Sec6_lorebased /> */}
        <Sec7_art2d />
        <Sec8_pfp />
        <Sec9_emote />
        <div className='hidden'>
          <Sec10_overlay />
        </div>
        <Sec11_intro />
        <FAQs />
        <CTA />
      </Suspense>

      <Footer />
    </div>
  );
};

export default Service;
