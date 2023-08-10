'use client';

import dynamic from 'next/dynamic';
import * as React from 'react';

import AboutMe from '@/components/AboutMe/AboutMe';
import Contact from '@/components/Contact/Contact';
import Hero from '@/components/Hero/Hero';
import Socials from '@/components/Hero/Partials/Socials';
import Footer from '@/components/Layout/Footer';
import Navbar from '@/components/Layout/Navbar';
import Projects from '@/components/Projects/Projects';
import Work from '@/components/Work/Work';

import { isProd } from '@/constant/env';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false,
});

export default function HomePage() {
  return (
    <main className='from-liberty-blue to-dark-eclipse relative flex min-h-screen w-full flex-col bg-gradient-to-br text-white'>
      {isProd && (
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color='100, 255, 218'
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      )}
      <Navbar />
      <div className='mxmd:px-5 px-20'>
        <div className='mt-[80px] flex h-[100vh] w-full flex-col items-center justify-center'>
          <Hero />
        </div>
        <Socials />
        <AboutMe />
        <Work />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
