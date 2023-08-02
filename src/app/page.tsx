'use client';

import * as React from 'react';
import AnimatedCursor from 'react-animated-cursor';

import Hero from '@/components/Hero/Hero';
import Socials from '@/components/Socials/Socials';

export default function HomePage() {
  return (
    <main className='bg-liberty-blue relative flex h-screen w-full flex-col items-center justify-center text-white'>
      <Hero />
      <Socials />
      <AnimatedCursor
        color='#fff'
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={1.7}
        outerAlpha={0}
        outerStyle={{
          mixBlendMode: 'exclusion',
        }}
      />
    </main>
  );
}
