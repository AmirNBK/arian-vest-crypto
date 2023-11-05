import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import Header from '@/components/Header/Header';
import pic from '../assets/images/HeroSectionPic.png'
import localFont from 'next/font/local'
import { TabView, TabPanel } from 'primereact/tabview';
import ArrowComponent from '@/components/ArrowComponent/ArrowComponent';
import useWindowSize from '@/Hooks/innerSize';
import AOS from 'aos';
import 'aos/dist/aos.css';
import faqBull from '../assets/images/faqBull.png'
import HeroSectionText from '@/components/HeroSectionText/HeroSectionText';
import dynamic from 'next/dynamic';
const myFont = localFont({ src: '../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../assets/fonts/iranyekanwebregular_0.ttf' })
import rulesPic from '../assets/images/rules.png'
import 'animate.css';
const CarouselSlider = dynamic(() => import("@/components/CarouselSlider/CarouselSlider"), {
  ssr: false,
});
import pic1 from '../assets/images/pic1.png'
import bull from '../assets/images/bull.svg'
import redBull from '../assets/images/redBull.svg'
import greenBull from '../assets/images/greenBull.svg'
import button from '../assets/icons/register.svg'
import Footer from '@/components/Footer/Footer';
import container from '../assets/images/container.png'
import container2 from '../assets/images/container2.png'
import goldBUll from '../assets/images/goldBull.png'
import customer from '../assets/images/customer.png'
import customers from '../assets/images/customers.png'
import BenefitsComponent from '@/components/BenefitsComponent/BenefitsComponent';
import benefitsPic from '../assets/images/benefitsPic1.png'
import { useInView, animated } from '@react-spring/web'
import benefitsPic2 from '../assets/images/benefitsPic2.png'
import benefitsPic3 from '../assets/images/benefitsPic3.png'
import line from '../assets/icons/line.svg'
import StepsComponent from '@/components/StepsComponent/StepsComponent';
import Link from 'next/link';
import TradeChallengesSection from '@/components/TradeChallengesSection/TradeChallengesSection';
import { GetStaticProps } from 'next';
import { getQueryAboutUsSection, getQueryAccountGrowthSection, getQueryCollabrationSuccessSection, getQueryFaqHomeSection, getQueryFooter, getQuerySuccessSection, getQuerySuccessSteps, getQueryTariffSection, getQueryTariffs } from '@/lib/service';

export default function Home({ tariffSectionData, tariffs, faqHomeSection, successSection, aboutUsSection, accountGrowthSection, collabrationSuccessSection, successSteps, footer }: { tariffSectionData: any, tariffs: any, faqHomeSection: any, successSection: any, aboutUsSection: any, accountGrowthSection: any, collabrationSuccessSection: any, successSteps: any, footer: any }) {
  const imageRef = useRef<HTMLImageElement | null>(null);
  const [ref, inView] = useInView()
  const [selectedTab, setSelectedTab] = useState<number>(0)

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
  const size = useWindowSize();

  const moveFunc = (event: any) => {
    const e = event || window.event;

    // Check if imageRef is defined and current is not undefined
    if (imageRef && imageRef.current) {
      const x = (e.pageX - cumulativeOffset(imageRef).left - (300 / 2)) * -1 / (size.width && size.width > 2000 ? 200 : 100);
      const y = (e.pageY - cumulativeOffset(imageRef).top - (300 / 2)) * -1 / (size.width && size.width > 2000 ? 200 : 100);

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
      className={`flex min-h-screen flex-col sm:translate-x-0 translate-x-[22px] ${inter.className}`}
      onMouseMoveCapture={moveFunc}
    >
      <PrimeReactProvider>
        <Header active={0} />
        <div className='relative h-screen'>
          <div className='relative sm:mt-20 block
                      absolute left-1/2 top-1/3 
                      -translate-x-1/2 sm:-translate-y-[54%] -translate-y-[85%]
                      '
          >
            <Image src={pic} alt='pic' unoptimized
              ref={imageRef}
              className='mx-auto dynamic-pic  w-full lg:w-7/12 lg:h-500 3xl:w-5/12 h-full animate__animated  animate__zoomIn animate__slower' />
            <div className='animate__lightSpeedInRight animate__animated animate__delay-1s animate__slow'
            >
              <HeroSectionText />
            </div>
          </div>
          <ArrowComponent />

          <div className={` w-full justify-center flex flex-row-reverse gap-4  lg:items-end items-center pb-20 pt-0 sm:py-20 lg:mr-12 mt-20 sm:mt-32 flex flex-col lg:w-6/12 ml-auto`}
            data-aos-duration="2000" data-aos-once={true} data-aos="fade-down" id='AboutUs'
          >
            <p className={`${myFont.className} text-white text-4xl  sm:text-5xl my-2`}>
              <span className='text-3xl text-main-orange'> </span> تعرفه های <span style={{ color: '#F68D2E' }}> ارین وست </span>
            </p>
            <p className={`${myFontIran.className} rtl text-white lg:text-start text-center lg:px-0 px-8`}>
              {tariffSectionData.description}
            </p>
            <Link href={'/tariff'} className={`${myFontIran.className} text-main-orange text-center`} style={{ textDecoration: 'underline' }}>
              بررسی تعرفه ها
            </Link>
          </div>

          <div className='relative lg:m-0 sm:-mt-[27rem] -mt-[23rem]' id='Tariffs'>
            <div className="card"
              style={{ margin: '0 auto', marginTop: '50px' }}
            >
              <TabView
                activeIndex={selectedTab}
                onTabChange={(e) => {
                  setSelectedTab(e.index)
                }}
              >
                <TabPanel header="Classic">
                  <CarouselSlider type={'classic'} data={tariffs} />
                </TabPanel>
                <TabPanel header="One-Step">
                  <CarouselSlider type={'one-step'} data={tariffs} />
                </TabPanel>
                <TabPanel header="Rapid">
                  <CarouselSlider type={'rapid'} data={tariffs} />
                </TabPanel>
              </TabView>
              <div className='text-white text-center mt-6 text-3xl'>
                {selectedTab === 0 ? `${tariffs?.tariffs[0]?.range}` : selectedTab === 1 ? `${tariffs?.tariffs[1]?.range}` : `${tariffs?.tariffs[2]?.range}`}
              </div>
            </div>
            <Image src={bull} alt='bull' className='absolute top-[60%] lg:block hidden' style={{ zIndex: '-1' }} unoptimized />
          </div>

          <div className='lg:py-40 pb-32 pt-20 text-center tradeRules'>
            <p className={`${myFont.className} text-white text-4xl  sm:text-5xl py-12`}
              data-aos-duration="2000" data-aos-once={true} data-aos="fade-down"
            >
              <span className='text-3xl text-main-orange'> </span> قوانین <span style={{ color: '#F68D2E' }}> ترید </span>
            </p>

            <div className='relative'>
              <Image src={rulesPic} alt='rulesPic' unoptimized className='mx-auto'
                data-aos-duration="3000" data-aos-once={true} data-aos="zoom-in"
              />
              <Image src={faqBull} alt='rulesPic' unoptimized className='mx-auto absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2'
              />
            </div>
            <Link href={'/rules'} className={`${myFontIran.className} text-main-orange text-center`}
              style={{ textDecoration: 'underline', transform: 'translateY(-50px)' }}>
              مشاهده تمام قوانین
            </Link>
          </div>
          <TradeChallengesSection data={faqHomeSection.homepage.faqSection[0].question} />
          <div className='lg:py-32'>
            <p className={`${myFont.className} text-white text-4xl  sm:text-5xl text-center leading-relaxed`}
              data-aos-duration="1000" data-aos-once={true} data-aos="fade-up"
            >
              <span className='text-3xl text-main-orange'> </span> برای موفقیت در <span style={{ color: '#F68D2E' }}> معامله های فارکس </span>
            </p>
            <div className='flex flex-col items-center sm:flex-row-reverse py-6 gap-4 lg:gap-12 justify-center'>
              <Image src={redBull} alt='redBull' data-aos-duration="2000" data-aos-once={true} data-aos="fade-left" className='lg:w-fit w-36' />
              <div className='flex flex-col items-center justify-center gap-10'
                data-aos-duration="2000" data-aos-once={true} data-aos="fade-up"
                data-aos-delay="800"
              >
                <p className={`${myFontIran.className} text-white text-xl text-center rtl sm:px-0 px-6 leading-relaxed`}>
                  {successSection?.homepage.successSection}
                </p>
                <Link href={'/register'}>
                  <Image src={button} alt='register' className='cursor-pointer' />
                </Link>
              </div>
              <Image src={greenBull} alt='greenBull' className='lg:w-fit w-36'
                data-aos-duration="1000" data-aos-once={true} data-aos="fade-right"
              />
            </div>
          </div>

          <div className='aboutUs sm:mx-0 mx-6 my-20 sm:my-40 relative'>
            <Image src={pic1} className='3xl:w-[60%] lg:block hidden' alt='pic' unoptimized style={{ opacity: '0.5' }}
              data-aos-duration="2000" data-aos-once={true} data-aos="fade-right"
            />
            <div className='sm:absolute right-0 top-12 3xl:w-[45%]'
              data-aos-duration="2000" data-aos-once={true} data-aos="fade-left"
            >
              <Image src={container} alt='container' className='sm:block hidden' />
              <p className={`${myFont.className} text-white sm:w-max text-5xl text-center
              sm:-translate-x-1/2 sm:-translate-y-1/2 leading-tight
              sm:absolute top-1/2 left-1/2`}
              >
                <span className='text-3xl text-main-orange'> </span>بیشتر درباره <span style={{ color: '#F68D2E' }}> آرین وست بدانید </span>
              </p>
            </div>
            <div className='sm:absolute right-0 top-64 3xl:w-[45%]'
              data-aos-duration="2000" data-aos-once={true} data-aos="fade-left"
              data-aos-delay="500"
            >
              <Image src={container2} alt='container' className='sm:block hidden' />
              <p className={`${myFontIran.className} leading-[2.8rem] sm:my-0 my-12	text-white text-lg
              sm:text-right text-center rtl sm:w-[34.5rem] sm:absolute top-1/2 left-1/2 sm:-translate-x-1/2 sm:-translate-y-[65%]`}
              >
                {aboutUsSection?.homepage.aboutUs}
              </p>
              <Link href={'/about-us'} className={`${myFontIran.className} block text-main-orange sm:-translate-x-1/2 text-center sm:absolute bottom-16 right-10 3xl:right-[20%]`}
                style={{ textDecoration: 'underline' }}>
                بیشتر بخوانید
              </Link>
              <Image src={goldBUll} unoptimized alt='bull' className='sm:block hidden absolute -left-36 -bottom-16 w-96' />
            </div>
          </div>

          <div className='my-20 sm:my-56'>
            <Image src={customer} alt='customer' className='ml-40 3xl:ml-60 translate-y-12 lg:block hidden' unoptimized />
            <div className='relative lg:p-0 pt-24'>
              <p className={`${myFont.className} text-white sm:w-max text-5xl mx-auto text-center rtl leading-tight`}
                data-aos-duration="2000" data-aos-once={true} data-aos="fade-up"
              >
                <span className='text-3xl text-main-orange text-center '>
                </span>{accountGrowthSection?.homepage.accountGrowth[0].normalTitle} <span style={{ color: '#F68D2E' }}>
                  {accountGrowthSection?.homepage.accountGrowth[0].coloredTitle} </span>
              </p>
              <p className={`${myFontIran.className} text-white text-lg text-center rtl mt-6 mx-auto w-8/12 leading-loose rtl`}>
                {accountGrowthSection?.homepage.accountGrowth[0].description}
              </p>
              <Image src={customers} alt='customers' unoptimized className='absolute top-[27rem] sm:top-[10rem] lg:-top-12 3xl:top-1/2 3xl:left-1/2 3xl:-z-[1] 3xl:-translate-x-1/2 3xl:-translate-y-1/2 lg:p-0 pt-24' />
            </div>
          </div>

          <div className='py-32 cooroprate__Benefits sm:mx-12 mx-6'>
            <p className={`${myFont.className} text-white sm:w-max text-5xl mx-auto text-center rtl leading-tight`}
              data-aos-duration="2000" data-aos-once={true} data-aos="fade-up"
            >
              <span className='text-3xl text-main-orange text-center'>
              </span>مزایای همکاری  <span style={{ color: '#F68D2E' }}>
                با آرین وست </span>
            </p>
            <div className='flex flex-col gap-10 mt-6 relative'>
              <BenefitsComponent
                title={collabrationSuccessSection?.homepage.collabrationSuccessSection[0].normalTitle}
                highlightTitle={collabrationSuccessSection?.homepage.collabrationSuccessSection[0].coloredTitle}
                description={collabrationSuccessSection?.homepage.collabrationSuccessSection[0].description}
                image={benefitsPic}
                position='normal'
              />
              <BenefitsComponent
                title={collabrationSuccessSection?.homepage.collabrationSuccessSection[1].normalTitle}
                highlightTitle={collabrationSuccessSection?.homepage.collabrationSuccessSection[1].coloredTitle}
                description={collabrationSuccessSection?.homepage.collabrationSuccessSection[1].description}
                image={benefitsPic2}
                position=''
              />
              <BenefitsComponent
                title={collabrationSuccessSection?.homepage.collabrationSuccessSection[2].normalTitle}
                highlightTitle={collabrationSuccessSection?.homepage.collabrationSuccessSection[2].coloredTitle}
                description={collabrationSuccessSection?.homepage.collabrationSuccessSection[2].description}
                image={benefitsPic3}
                position='normal'
              />
              <Image src={line} alt='line' className='absolute left-1/2 top-[57%] -translate-y-1/2 -translate-x-1/2 z-[-1] lg:block hidden' />
            </div>
          </div>

          <div className='successSteps p-6 sm:p-12 lg:py-56'>
            <p className={`${myFont.className} text-white sm:w-max leading-tight text-5xl mx-auto text-center rtl`}
              data-aos-duration="2000" data-aos-once={true} data-aos="fade-up"
            >
              <span className='text-3xl text-main-orange text-center'>
              </span> مراحل موفقیت <span style={{ color: '#F68D2E' }}>
                با تیم آرین وست </span>
            </p>
            <div className='pt-12'>
              <StepsComponent data={successSteps.homepage.successSteps[0].item} />
            </div>
          </div>
          <Footer data={footer?.footer} />
        </div >

        <style>
          {
            `
            .p-component {
              display: flex;
    flex-direction: column-reverse;
            }
            .p-tabview .p-tabview-panels {
              max-height: 850px;

              @media (min-width: 1024px) { 
                max-height: 900px;
               }

               @media (max-width: 640px) { 
                max-height: 700px;
               }
               
            }
            .p-tabview-nav-content {
              @media (min-width: 1024px) { 
                width: 35%;
               }
               @media (max-width: 640px) { 
                width: 90%;
               }
               width: 50%;
              margin: 0 auto;
              z-index : 1;
            }
                    .p-accordion .p-accordion-header .p-accordion-header-link {
                        border: none;
                        background: #1D1D1D;
                        color: #fff;
                        padding: 30px 20px;
                        font-family: '__myFont_0ebf61';
                        font-weight:400;
                    }

                    .p-accordion-header-text {
                        text-align:right;
                        line-height:1.8
                    }

                    .p-accordion-header {
                        color : white;
                    }

                    .p-accordion .p-accordion-header:not(.p-disabled).p-highlight .p-accordion-header-link:hover {
                        background: #1D1D1D;
                        color : white
                    }

                    .p-accordion .p-accordion-header:not(.p-disabled).p-highlight .p-accordion-header-link {
                        border:none;
                        background : #1D1D1D;
                        color : white;
                    }

                    .p-accordion .p-accordion-content {
                        background : #1D1D1D;
                        color : white;
                        border:none
                    }

                    
    .p-checkbox .p-checkbox-box {
        background-color: transparent;
      }
  
      .p-accordion-header-link {

        justify-content: space-between;
      }

      .p-accordion .p-accordion-header:not(.p-highlight):not(.p-disabled):hover .p-accordion-header-link {
        background-color: #1D1D1D;
        border: none;
        color : white;
      }

      .p-accordion .p-accordion-header .p-accordion-header-link {
        height : 70px;
      }

      .p-accordion .p-accordion-header .p-accordion-header-link .p-accordion-toggle-icon {
        color : #F68D2E;
      }
                    
                    `
          }
        </style>
      </PrimeReactProvider >
    </main >
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const tariffSectionData = await getQueryTariffSection();
  const tariffs = await getQueryTariffs();
  const faqHomeSection = await getQueryFaqHomeSection();
  const successSection = await getQuerySuccessSection();
  const aboutUsSection = await getQueryAboutUsSection();
  const accountGrowthSection = await getQueryAccountGrowthSection();
  const collabrationSuccessSection = await getQueryCollabrationSuccessSection();
  const successSteps = await getQuerySuccessSteps();
  const footer = await getQueryFooter();

  return {
    props: {
      tariffSectionData,
      tariffs,
      faqHomeSection,
      successSection,
      aboutUsSection,
      accountGrowthSection,
      collabrationSuccessSection,
      successSteps,
      footer
    },
    revalidate: 3600,
  };
};