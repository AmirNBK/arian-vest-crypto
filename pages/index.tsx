import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import Header from '@/components/Header/Header';
import pic from '../assets/images/HeroSectionPic.png'
import ArrowComponent from '@/components/ArrowComponent/ArrowComponent';
import HeroSectionText from '@/components/HeroSectionText/HeroSectionText';

export default function Home() {
  const imageRef = useRef<HTMLImageElement | null>(null);

  const cumulativeOffset = (element: any) => {
    let top = 0;
    let left = 0;
    while (element) {
      top += element.current?.offsetTop || 0;
      left += element.current?.offsetLeft || 0;
      element = element.offsetParent;
    }
    return { top, left };
  };

  const moveFunc = (event: any) => {
    const e = event || window.event;

    // Check if imageRef is defined and current is not undefined
    if (imageRef && imageRef.current) {
      const x = (e.pageX - cumulativeOffset(imageRef).left - (300 / 2)) * -1 / 100;
      const y = (e.pageY - cumulativeOffset(imageRef).top - (300 / 2)) * -1 / 100;

      // Check if scrollY is greater than 400
      if (scrollY > 400) {
        // Reset x and y values to 0
        const matrix = [
          [1, 0, 0, 0],
          [0, 1, 0, 0],
          [0, 0, 1, 1],
          [0, 0, 0, 1]
        ];

        imageRef.current.style.transition = 'all 0.35s'; // Add the transition inline
        imageRef.current.style.transform = `matrix3d(${matrix.toString()})`;
      } else {
        // Apply the regular transformation
        const matrix = [
          [1, 0, 0, -x * 0.00005],
          [0, 1, 0, -y * 0.00005],
          [0, 0, 1, 1],
          [0, 0, 0, 1]
        ];

        imageRef.current.style.transition = 'all 0.35s';
        imageRef.current.style.transform = `matrix3d(${matrix.toString()})`;
      }
    }
  };

  return (
    <main
      className={`flex min-h-screen flex-col ${inter.className}`}
      onMouseMoveCapture={moveFunc}
    >

      <PrimeReactProvider>
        <Header />

        <div className='relative h-screen'>
          <div className='relative mt-20 lg:block block
                      absolute left-1/2 top-1/3 
                      '
            style={{ transform: 'translate(-50%,-54%)' }}
          >
            <Image src={pic} alt='pic' unoptimized
              ref={imageRef}
              className='mx-auto dynamic-pic  w-full lg:w-7/12 lg:h-500 h-full' />
            <div className=''>
              <HeroSectionText />
            </div>
          </div>
          <ArrowComponent />
        </div>
      </PrimeReactProvider>
    </main>
  )
}
