'use client';

import dynamic from 'next/dynamic';
import * as React from 'react';

import AboutMe from '@/components/AboutMe/AboutMe';
import Hero from '@/components/Hero/Hero';
import Navbar from '@/components/Layout/Navbar';
import Socials from '@/components/Socials/Socials';

import { isProd } from '@/constant/env';

const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
  ssr: false,
});

export default function HomePage() {
  return (
    <main className='from-liberty-blue to-dark-eclipse relative flex min-h-screen w-full flex-col bg-gradient-to-br text-white'>
      {!isProd && (
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
      <div className='flex h-screen w-full flex-col items-center justify-center'>
        <Hero />
      </div>
      <Socials />
      <AboutMe />
    </main>
  );
}
