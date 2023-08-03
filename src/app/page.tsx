'use client';

import { Contact } from 'lucide-react';
import dynamic from 'next/dynamic';
import * as React from 'react';

import AboutMe from '@/components/AboutMe/AboutMe';
import Hero from '@/components/Hero/Hero';
import Navbar from '@/components/Layout/Navbar';
import Projects from '@/components/Projects/Projects';
import Socials from '@/components/Socials/Socials';
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
      <div className='mxmd:px-8 px-20'>
        <div className='mt-[80px] flex h-[100vh] w-full flex-col items-center justify-center'>
          <Hero />
        </div>
        <Socials />
        <AboutMe />
        <Work />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
