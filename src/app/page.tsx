"use client";
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import LandingLayout from '@components/LandingLayout';
import Footer from '@components/Footer';
import Tokenomics from '@components/Tokenomics';
import Roadmap from '@components/Roadmap';
import AboutSection from '@components/About';

const HeroSection = dynamic(() => import('@components/HeroSection'), {
  ssr: false,
  loading: () => <div className="h-screen " />
});

const HomePage: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <LandingLayout>
      {isMounted && (
        <>
          <HeroSection />
          <AboutSection />
          <Tokenomics />
          <Roadmap />
          <Footer />
        </>
      )}
    </LandingLayout>
  );
};

export default HomePage;