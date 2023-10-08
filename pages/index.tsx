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
import AOS from 'aos';
import 'aos/dist/aos.css';
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

export default function Home() {
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

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <main
      className={`flex min-h-screen flex-col ${inter.className}`}
      onMouseMoveCapture={moveFunc}
    >
      <PrimeReactProvider>
        <Header active={0} />
        <div className='relative h-screen'>
          <div className='relative sm:mt-20 lg:block block
                      absolute left-1/2 top-1/3 
                      '
            style={{ transform: 'translate(-50%,-54%)' }}
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

          <div className={` w-full justify-center flex flex-row-reverse gap-4 lg:items-end items-center py-20 lg:mr-12 mt-8 flex flex-col lg:w-6/12 ml-auto`}
            data-aos-duration="2000" data-aos-once={true} data-aos="fade-down" id='AboutUs'
          >
            <p className={`${myFont.className} text-white text-5xl my-2`}>
              <span className='text-3xl text-main-orange'> </span> تعرفه های <span style={{ color: '#F68D2E' }}> ارین وست </span>
            </p>
            <p className={`${myFontIran.className} rtl text-white lg:text-start text-center lg:px-0 px-8`}>
              با کمال خوش آمدگویی، ما با افتخار تعرفه های منحصر به فرد وب‌سایت ArianVest را به شما معرفی می‌کنیم. در ArianVest، تلاش کرده‌ایم تا تعرفه هایی ارائه دهیم که به تمام افراد با سلیقه‌ها و سطوح تجربه در دنیای فارکس امکان دسترسی به مزایای بی‌پایان این بازار را بدهیم.
            </p>
            <Link href={'/tariff'} className={`${myFontIran.className} text-main-orange text-center`} style={{ textDecoration: 'underline' }}>
              بررسی تعرفه ها
            </Link>
          </div>

          <div className='relative lg:m-0 -mt-[27rem]'>
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
                  <CarouselSlider />
                </TabPanel>
                <TabPanel header="One-Step">
                  <CarouselSlider />
                </TabPanel>
                <TabPanel header="Rapid">
                  <CarouselSlider />
                </TabPanel>
              </TabView>
              <div className='text-white text-center mt-6 text-3xl'>
                {selectedTab === 0 ? ' 5K - 200K' : selectedTab === 1 ? '5K - 50K' : ' 5K - 200K'}
              </div>
            </div>
            <Image src={bull} alt='bull' className='absolute top-[60%] lg:block hidden' style={{ zIndex: '-1' }} unoptimized />
          </div>

          <div className='lg:py-40 pb-40 pt-20 text-center tradeRules'>
            <p className={`${myFont.className} text-white text-5xl py-12`}
              data-aos-duration="2000" data-aos-once={true} data-aos="fade-down"
            >
              <span className='text-3xl text-main-orange'> </span> قوانین <span style={{ color: '#F68D2E' }}> ترید </span>
            </p>
            <Image src={rulesPic} alt='rulesPic' unoptimized className='mx-auto'
              data-aos-duration="2000" data-aos-once={true} data-aos="fade-up"
            />
            <Link href={'/rules'} className={`${myFontIran.className} text-main-orange text-center`}
              style={{ textDecoration: 'underline', transform: 'translateY(-50px)' }}>
              مشاهده تمام قوانین
            </Link>
          </div>
          <TradeChallengesSection />
          <div className='lg:py-32'>
            <p className={`${myFont.className} text-white text-5xl text-center`}
              data-aos-duration="1000" data-aos-once={true} data-aos="fade-up"
            >
              <span className='text-3xl text-main-orange'> </span> برای موفقیت در <span style={{ color: '#F68D2E' }}> معامله های فارکس </span>
            </p>
            <div className='flex flex-row-reverse py-6 gap-4 lg:gap-12 justify-center'>
              <Image src={redBull} alt='redBull' data-aos-duration="2000" data-aos-once={true} data-aos="fade-left" className='lg:w-fit w-36' />
              <div className='flex flex-col items-center justify-center gap-10'
                data-aos-duration="2000" data-aos-once={true} data-aos="fade-up"
                data-aos-delay="800"
              >
                <p className={`${myFontIran.className} text-white text-xl text-center rtl`}>
                  وب‌سایت ما با تمرکز بر روی آموزش، تحلیل‌های بازاری پیشرفته، و ابزارهای مفید، به شما راهی به سوی موفقیت در دنیای معاملات فارکس ارائه می‌دهد.
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

          <div className='aboutUs my-40 relative'>
            <Image src={pic1} className='3xl:w-[60%] lg:visible invisible' alt='pic' unoptimized style={{ opacity: '0.5' }}
              data-aos-duration="2000" data-aos-once={true} data-aos="fade-right"
            />
            <div className='absolute right-0 top-12 3xl:w-[45%]'
              data-aos-duration="2000" data-aos-once={true} data-aos="fade-left"
            >
              <Image src={container} alt='container' />
              <p className={`${myFont.className} text-white w-max text-5xl text-center absolute top-1/2 left-1/2`}
                style={{ transform: 'translate(-50%,-50%)' }}
              >
                <span className='text-3xl text-main-orange'> </span>بیشتر درباره <span style={{ color: '#F68D2E' }}> آرین وست بدانید </span>
              </p>
            </div>
            <div className='absolute right-0 top-64 3xl:w-[45%]'
              data-aos-duration="2000" data-aos-once={true} data-aos="fade-left"
              data-aos-delay="500"
            >
              <Image src={container2} alt='container' />
              <p className={`${myFontIran.className} leading-[2.8rem]	text-white text-lg  text-right rtl w-[34.5rem] absolute top-1/2 left-1/2`}
                style={{ transform: 'translate(-50%,-65%)' }}
              >
                به ArianVest خوش آمدید، مقصد مورد اعتماد شما برای معاملات امن و قابل اطمینان فارکس. ما درک داریم که فضای فارکس همزمان هیجان‌انگیز و پیچیده است، به همین دلیل به ارائه دانش، ابزارها و منابعی که برای تصمیم‌گیری با اطلاعات کافی نیاز دارید، متعهد شده‌ایم. امروز به جامعه ArianVest بپیوندید و با اعتماد به نفس به ما بپیوندید تا در ماجرای فارکس همراهتان باشیم. با هم، در دنیای هیجان‌انگیز فارکس راهی جدید باز خواهیم کرد و در این مسیر فرصت‌ها و پتانسیل‌های جدیدی را کشف خواهیم کرد.
              </p>
              <Link href={'/about-us'} className={`${myFontIran.className} text-main-orange text-right absolute bottom-16 right-10 3xl:right-[20%]`}
                style={{ textDecoration: 'underline', transform: 'translate(-50%,0%)' }}>
                بیشتر بخوانید
              </Link>
              <Image src={goldBUll} unoptimized alt='bull' className='absolute -left-36 -bottom-16 w-96' />
            </div>
          </div>

          <div className='my-56'>
            <Image src={customer} alt='customer' className='ml-40 3xl:ml-60 translate-y-12 lg:block hidden' unoptimized />
            <div className='relative lg:p-0 pt-24'>
              <p className={`${myFont.className} text-white w-max text-5xl mx-auto text-center rtl`}
                data-aos-duration="2000" data-aos-once={true} data-aos="fade-up"
              >
                <span className='text-3xl text-main-orange text-center'>
                </span>رشد حساب 40% تا <span style={{ color: '#F68D2E' }}>
                  سقف 1 میلیون دلار </span>
              </p>
              <p className={`${myFontIran.className} text-white text-lg text-center rtl mt-6 mx-auto w-8/12 leading-loose rtl`}>
                با توانایی بهبود حساب خود تا 40% و رسیدن به سقف 1 میلیون دلار، شما می‌توانید از این فرصت منحصر به فرد بهره‌برید. اگر به دنبال راهی برای افزایش سرمایه و موفقیت در معاملات فارکس هستید، ما در اینجا هستیم تا شما را همراهی کنیم.
              </p>
              <Image src={customers} alt='customers' unoptimized className='absolute top-[10rem] lg:-top-12 3xl:top-1/2 3xl:left-1/2 3xl:-z-[1] 3xl:-translate-x-1/2 3xl:-translate-y-1/2 lg:p-0 pt-24' />
            </div>
          </div>

          <div className='py-32 cooroprate__Benefits mx-12'>
            <p className={`${myFont.className} text-white w-max text-5xl mx-auto text-center rtl`}
              data-aos-duration="2000" data-aos-once={true} data-aos="fade-up"
            >
              <span className='text-3xl text-main-orange text-center'>
              </span>مزایای همکاری  <span style={{ color: '#F68D2E' }}>
                با آرین وست </span>
            </p>
            <div className='flex flex-col gap-10 mt-6 relative'>
              <BenefitsComponent
                title='تا سقف'
                highlightTitle='یک میلیون دلار'
                description='تا سقف یک میلیون دلار اعتبار سرمایه دریافت کن و شروع به ترید کن ! اگر قصد فعالیت در بازار های مالی رو داری و سرمایه مورد نیاز نداری یا نمیخوای روی سرمایه ی خودت ریسک کنی ، پراپی این سرمایه بزرگ رو در اختیارت قرار میده'
                image={benefitsPic}
                position='normal'
              />
              <BenefitsComponent
                title='تا 90 درصد سود'
                highlightTitle='برای شما'
                description='فقط کافیه در دو مرحله توانایی های خودت رو اثبات کنی و بعد از اون هرچقدر روی حساب اعتباری سود کسب کنی تا 90 درصد مبلغ سود رو میتونی دریافت کنی !'
                image={benefitsPic2}
                position=''
              />
              <BenefitsComponent
                title='سرور اختصاصی'
                highlightTitle='آرین وست'
                description='اضافه شدن سرور اختصاصی بروکر ایت کپ قدمی بسیار بزرگ برای شروع فعالیت های بین المللی پراپ فرم پراپی است . هدف و اولویت ما راحتی و آسوده خاطر بودن تریدر های عزیز میباشد .'
                image={benefitsPic3}
                position='normal'
              />
              <Image src={line} alt='line' className='absolute left-1/2 top-[57%] -translate-y-1/2 -translate-x-1/2 z-[-1] lg:block hidden' />
            </div>
          </div>

          <div className='successSteps p-12 lg:py-56'>
            <p className={`${myFont.className} text-white w-max text-5xl mx-auto text-center rtl`}
              data-aos-duration="2000" data-aos-once={true} data-aos="fade-up"
            >
              <span className='text-3xl text-main-orange text-center'>
              </span> مراحل موفقیت <span style={{ color: '#F68D2E' }}>
                با تیم آرین وست </span>
            </p>
            <div className='pt-12'>
              <StepsComponent />
            </div>
          </div>
          <Footer />
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
            }
            .p-tabview-nav-content {

              @media (min-width: 1024px) { 
                width: 35%;
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
