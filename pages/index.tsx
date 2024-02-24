import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import Header from '@/components/Header/Header';
import pic from '../assets/images/HeroSectionPic.png'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import charts from '../assets/images/charts.png'
import localFont from 'next/font/local'
import HeroText from '../assets/images/HeroText.png'
import HeroTextEn from '../assets/images/HeroTextEn.png'
import { TabView, TabPanel } from 'primereact/tabview';
import { Toast, ToastMessage } from 'primereact/toast';
import tariffButton from '../assets/images/tariffButton.svg'
import seeChallenges from '../assets/images/seeChallenges.png'
import ArrowComponent from '@/components/ArrowComponent/ArrowComponent';
import useWindowSize from '@/Hooks/innerSize';
import AOS from 'aos';
import HeroImage from '../assets/images/95.png'
import 'aos/dist/aos.css';
import faqBull from '../assets/images/faqBull.png'
import HeroSectionText from '@/components/HeroSectionText/HeroSectionText';
import dynamic from 'next/dynamic';
const myFont = localFont({ src: '../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../assets/fonts/iranyekanwebregular_0.ttf' })
import rulesPic from '../assets/images/rules.png'
import rulesPicEng from '../assets/images/rules-eng.png'
import 'animate.css';
const CarouselSlider = dynamic(() => import("@/components/CarouselSlider/CarouselSlider"), {
  ssr: false,
});
import bull2 from '../assets/images/bull2.svg'
import redBull from '../assets/images/redBull.svg'
import greenBull from '../assets/images/greenBull.svg'
import button from '../assets/icons/register.svg'
import buttonEng from '../assets/icons/register-eng.svg'
import Footer from '@/components/Footer/Footer';
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
import { getQueryAboutUsSection, getQueryAccountGrowthSection, getQueryCollabrationSuccessSection, getQueryCollabrationSuccessSectionTitle, getQueryEngFooter, getQueryFaqHomeSection, getQueryFooter, getQuerySuccessSection, getQuerySuccessSteps, getQueryTariffSection, getQueryTariffs } from '@/lib/service';
import HomepageAboutUs from '@/components/HomepageAboutUs/HomepageAboutUs';
import { GetStaticProps } from 'next';
import useLocationData from '@/Hooks/location';
import Head from 'next/head';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export default function Home({ tariffSectionData, tariffs, footerEng, faqHomeSection, successSection, aboutUsSection, accountGrowthSection, collabrationSuccessSection, collabrationSuccessSectionTitle, successSteps, footer }: { tariffSectionData: any, tariffs: any, faqHomeSection: any, successSection: any, footerEng: any, aboutUsSection: any, accountGrowthSection: any, collabrationSuccessSection: any, collabrationSuccessSectionTitle: any, successSteps: any, footer: any }) {
  const imageRef = useRef<HTMLImageElement | null>(null);

  const [selectedTab, setSelectedTab] = useState<number>(0)
  const { locationData, error, loading } = useLocationData();
  const isLocationInIran = locationData === 'Iran' || !locationData;

  const [value, setValue] = useState(0);

  console.log(locationData);
  

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

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

    if (imageRef && imageRef.current) {
      const x = (e.pageX - cumulativeOffset(imageRef).left - (300 / 2)) * -1 / (size.width && size.width > 2000 ? 200 : 100);
      const y = (e.pageY - cumulativeOffset(imageRef).top - (300 / 2)) * -1 / (size.width && size.width > 2000 ? 200 : 100);
      if (scrollY > 400) {
        const matrix = [
          [1, 0, 0, 0],
          [0, 1, 0, 0],
          [0, 0, 1, 1],
          [0, 0, 0, 1]
        ];

        imageRef.current.style.transition = 'all 0.15s';
        imageRef.current.style.transform = `translate(-50%,-50%) matrix3d(${matrix.toString()})`;
      } else {
        const matrix = [
          [1, 0, 0, -x * 0.00005],
          [0, 1, 0, -y * 0.00005],
          [0, 0, 1, 1],
          [0, 0, 0, 1]
        ];

        imageRef.current.style.transition = 'all 0.15s';
        imageRef.current.style.transform = `translate(-50%,-50%) matrix3d(${matrix.toString()})`;
      }
    }
  };

  return (
    <>
      <div className='flex justify-center w-full'>
        <main
          className={`flex min-h-screen flex-col min-w-full sm:translate-x-[22px] xl:translate-x-0 ${inter.className}`}
          onMouseMoveCapture={moveFunc}
        >
          <Head>
            <title>Vira Funding</title>
          </Head>
          {loading ? '' :
            <PrimeReactProvider>
              <Header active={0} isLocationInIran={isLocationInIran} />
<div className='h-screen'>
              <div className=' relative sm:mt-0 block  mb-[200px] sm:mb-0
                     left-1/2 top-[55%]  md:top-1/3 
                    -translate-x-1/2 sm:-translate-y-[54%] -translate-y-[85%]
                    '
              >
                <Image src={charts} alt='charts' className='md:block hidden w-screen animate__lightSpeedInRight animate__animated animate__delay-1s animate__slow'  />


                <Image src={HeroImage} alt='heroImage'
                  
                  ref={imageRef}
                  className='md:block hidden absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 animate__animated  animate__zoomIn animate__slower' />

                <div className={`${myFont.className} md:hidden block mt-96`}>
                  <h2 className='text-white text-7xl text-center'>
                    {isLocationInIran ? 'تا' : 'Up to'}

                  </h2>
                  <Image src={HeroImage} alt='heroImage'
                    
                    className='w-10/12 my-10 mx-auto' />

                  <p className='text-white text-7xl text-center'>
                    {isLocationInIran ? 'درصد' : 'percent'}
                  </p>
                  <p className='text-white text-7xl text-center mt-10'>
                    {isLocationInIran ? 'پرداخت سود' : 'payment'}

                  </p>

                  <p className={`${myFontIran.className} text-main-orange text-center text-xl mt-10`}>
                    {isLocationInIran ? 'بدون محدودیت زمانی' : 'No time limit'}

                  </p>

                  <Link href={'/tariff'}>
                    <Image src={isLocationInIran ? tariffButton : seeChallenges} alt='button' className='mx-auto mt-6' />
                  </Link>
                </div>


                <Link href={'/tariff'}>
                  <Image src={isLocationInIran ? HeroText : HeroTextEn} alt='text' 
                    className='absolute z-[2] left-[54%] 3xl:left-[52%] -translate-x-1/2 -translate-y-1/2 md:block hidden top-[70%] cursor-pointer mt-20' />
                </Link>
              </div>
              <ArrowComponent />

              <div className={` w-full justify-center flex flex-row-reverse gap-4 ${isLocationInIran ? 'lg:items-end ml-auto  lg:mr-12 sm:mt-[500px]' : ' lg:items-start mr-auto mb-56 lg:ml-12 sm:mt-[500px] 3xl:mt-[650px]'} items-center pb-20 pt-0 sm:py-20 -mt-56 flex flex-col lg:w-6/12`}
                data-aos-duration="2000" data-aos-once={true} data-aos="fade-down" id='AboutUs'
                style={{ position: 'relative', zIndex: '5' }}
              >
                <p className={`${myFont.className} text-white text-4xl text-center  sm:text-5xl my-2`}>
                  <span className='text-3xl text-main-orange'> </span>
                  {isLocationInIran ? tariffSectionData.tariffSection[0].title[0].normalTitle : tariffSectionData.engTariffSection[0].title[0].normalTitle}
                  <span style={{ color: '#F68D2E' }}>
                    {isLocationInIran ? tariffSectionData.tariffSection[0].title[0].coloredTitle : tariffSectionData.engTariffSection[0].title[0].coloredTitle} </span>
                </p>
                <p className={`${myFontIran.className} ${isLocationInIran && 'rtl'} text-white lg:text-start text-center lg:px-0 px-8`}>
                  {
                    isLocationInIran ?
                      tariffSectionData.tariffSection[0].description
                      :
                      tariffSectionData.engTariffSection[0].description
                  }
                </p>
                <Link href={'/tariff'} className={`${myFontIran.className} text-main-orange text-center`} style={{ textDecoration: 'underline' }}>
                  {isLocationInIran ? ' بررسی تعرفه ها' : 'Check challenges'}
                </Link>
              </div>

              <div className='relative lg:-mt-[20rem] 2xl:-mt-[22rem] 3xl:-mt-[27rem] sm:-mt-[27rem] -mt-[23rem]' id='Tariffs'>
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
                      <CarouselSlider type={'classic'} data={tariffs} isLocationIran={isLocationInIran} />
                    </TabPanel>
                    <TabPanel header="One-Step">
                      <CarouselSlider type={'one-step'} data={tariffs} isLocationIran={isLocationInIran} />
                    </TabPanel>
                    <TabPanel header="Rapid">
                      <CarouselSlider type={'rapid'} data={tariffs} isLocationIran={isLocationInIran} />
                    </TabPanel>
                  </TabView>

                  <div className='text-white text-center mt-6 text-3xl'>
                    {selectedTab === 0 ? `${tariffs?.tariffs[0]?.range}` : selectedTab === 1 ? `${tariffs?.tariffs[1]?.range}` : `${tariffs?.tariffs[2]?.range}`}
                  </div>
                </div>
                <Image src={bull2} alt='bull' className='absolute top-[60%] lg:block hidden' style={{ zIndex: '1' }}  />
              </div>


              <div className='lg:py-40 pb-32 pt-20 text-center tradeRules'>
                <p className={`${myFont.className} text-white text-4xl  sm:text-5xl py-12`}
                  data-aos-duration="2000" data-aos-once={true} data-aos="fade-down"
                >
                  <span className='text-3xl text-main-orange'> </span>
                  {isLocationInIran ? (
                    <>
                      نحوه دریافت سرمایه از{' '}
                      <span style={{ color: '#F68D2E' }}>
                        ویرا فاندینگ
                      </span>
                    </>
                  ) : (
                    <>
                      How to receive capital from{' '}
                      <span style={{ color: '#F68D2E' }}>
                        Vira Funding
                      </span>
                    </>
                  )}

                </p>

                <div className='relative'>
                  <Image src={isLocationInIran ? rulesPic : rulesPicEng} alt='rulesPic'  className='mx-auto mt-6'
                    data-aos-duration="3000" data-aos-once={true} data-aos="zoom-in"
                  />
                  <Image src={faqBull} alt='rulesPic' 
                    className='mx-auto w-56 md:w-fit absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2'
                  />
                </div>
                <Link
                  href={'/rules'}
                  className={`${myFontIran.className} sm:block hidden text-main-orange mt-20 text-center`}
                  style={{ textDecoration: 'underline', transform: 'translateY(-50px)' }}
                >
                  {isLocationInIran ? 'مشاهده تمام قوانین' : 'View All Rules'}
                </Link>

              </div>

              <TradeChallengesSection data={faqHomeSection.homepage} isLocationIran={isLocationInIran} />

              {/* <Box sx={{ width: '100%' , background : 'white' }}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                      <Tab label="Item One" {...a11yProps(0)} />
                      <Tab label="Item Two" {...a11yProps(1)} />
                      <Tab label="Item Three" {...a11yProps(2)} />
                    </Tabs>
                  </Box>
                  <CustomTabPanel value={value} index={0}>
                    Item One
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={1}>
                    Item Two
                  </CustomTabPanel>
                  <CustomTabPanel value={value} index={2}>
                    Item Three
                  </CustomTabPanel>
                </Box> */}

              <div className='lg:py-32'>
                <p className={`${myFont.className} text-white text-4xl  sm:text-5xl text-center leading-relaxed`}
                  data-aos-duration="1000" data-aos-once={true} data-aos="fade-up"
                >
                  <span className='text-3xl text-main-orange'> </span>
                  {isLocationInIran ? successSection?.homepage.successSection[0].title[0].normaltitle :
                    successSection?.homepage.engSuccessSection[0].title[0].normaltitle
                  }
                  <span style={{ color: '#F68D2E' }}> {
                    isLocationInIran ?
                      successSection?.homepage.successSection[0].title[0].coloredtitle
                      :
                      successSection?.homepage.engSuccessSection[0].title[0].coloredtitle
                  }</span>
                </p>
                <div className='flex flex-col items-center sm:flex-row-reverse py-6 gap-4 lg:gap-12 justify-center'>
                  <Image src={redBull} alt='redBull' data-aos-duration="2000" data-aos-once={true} data-aos="fade-left" className='lg:w-fit w-36' />
                  <div className='flex flex-col items-center justify-center gap-10'
                    data-aos-duration="2000" data-aos-once={true} data-aos="fade-up"
                    data-aos-delay="800"
                  >
                    <p className={`${myFontIran.className} text-white text-xl text-center ${isLocationInIran && 'rtl'}
              sm:px-0 px-6 leading-relaxed`}>
                      {
                        isLocationInIran ?
                          successSection?.homepage.successSection[0].description
                          :
                          successSection?.homepage.engSuccessSection[0].description
                      }
                    </p>
                    <Link href={'/register'}>
                      <Image src={isLocationInIran ? button : buttonEng} alt='register' className='cursor-pointer' />
                    </Link>
                  </div>
                  <Image src={greenBull} alt='greenBull' className='lg:w-fit w-36'
                    data-aos-duration="1000" data-aos-once={true} data-aos="fade-right"
                  />
                </div>
              </div>

              <div className='flex flex-col'>
                <HomepageAboutUs data={aboutUsSection?.homepage} isLocationIran={isLocationInIran} />

                <div className='my-20 sm:my-[100%] lg:my-56'>
                  <Image src={customer} alt='customer' className='ml-40 3xl:ml-60 translate-y-12 lg:block hidden'  />
                  <div className='relative lg:p-0 pt-24'>
                    <div className='flex flex-wrap justify-center'>
                      <p className={`${isLocationInIran && myFont.className} text-white sm:w-max ${isLocationInIran ? 'text-5xl' : 'text-4xl'} mx-auto text-center rtl relative leading-tight`}
                        data-aos-duration="2000" data-aos-once={true} data-aos="fade-up"
                        style={{ zIndex: '5' }}
                      >
                        <span className='text-3xl text-main-orange text-center '>
                        </span>{
                          isLocationInIran ?
                            accountGrowthSection?.homepage.accountGrowth[0].normalTitle
                            :
                            accountGrowthSection?.homepage.accountGrowthCop[0].normalTitle
                        } <span style={{ color: '#F68D2E' }}>
                          {
                            isLocationInIran ?
                              accountGrowthSection?.homepage.accountGrowth[0].coloredTitle
                              :
                              accountGrowthSection?.homepage.accountGrowthCop[0].coloredTitle

                          } </span>
                      </p>
                    </div>
                    <p className={`${myFontIran.className} text-white text-lg text-center ${isLocationInIran && 'rtl'} mt-6 mx-auto w-8/12 leading-loose`}>
                      {
                        isLocationInIran ?
                          accountGrowthSection?.homepage.accountGrowth[0].description
                          :
                          accountGrowthSection?.homepage.accountGrowthCop[0].description
                      }
                    </p>
                    <Image src={customers} alt='customers'  className='absolute top-[27rem] sm:top-[10rem] lg:-top-12 3xl:top-1/2 3xl:left-1/2 3xl:-z-[1] 3xl:-translate-x-1/2 3xl:-translate-y-1/2 lg:p-0 pt-24' />
                  </div>
                </div>
              </div>


              {/* *** */}

              <div className='py-72 md:py-32  cooroprate__Benefits sm:mx-12 mx-6'>
                <div className='flex justify-center flex-wrap'>
                  <p className={`${myFont.className} text-white sm:w-max text-5xl mx-auto text-center rtl leading-tight`}
                    data-aos-duration="2000" data-aos-once={true} data-aos="fade-up"
                  >
                    <span className='text-3xl text-main-orange text-center'>
                    </span> {
                      isLocationInIran ?
                        collabrationSuccessSectionTitle.homepage.collabrationSuccessTitle[0].normalTitle
                        :
                        collabrationSuccessSectionTitle.homepage.engCollabrationSuccessTitle[0].normalTitle
                    }  <span style={{ color: '#F68D2E' }}>
                      {
                        isLocationInIran ?
                          collabrationSuccessSectionTitle.homepage.collabrationSuccessTitle[0].coloredTitle
                          :
                          collabrationSuccessSectionTitle.homepage.engCollabrationSuccessTitle[0].coloredTitle
                      } </span>
                  </p>
                </div>
                <div className='flex flex-col gap-10 mt-6 relative'>
                  <BenefitsComponent
                    isLocationIran={isLocationInIran}
                    title={
                      isLocationInIran ?
                        collabrationSuccessSection?.homepage.collabrationSuccessSection[0].normalTitle
                        :
                        collabrationSuccessSection?.homepage.engCollabrationSuccessSection[0].normalTitle
                    }
                    highlightTitle={
                      isLocationInIran ?
                        collabrationSuccessSection?.homepage.collabrationSuccessSection[0].coloredTitle
                        :
                        collabrationSuccessSection?.homepage.engCollabrationSuccessSection[0].coloredTitle
                    }
                    description={
                      isLocationInIran ?
                        collabrationSuccessSection?.homepage.collabrationSuccessSection[0].description
                        :
                        collabrationSuccessSection?.homepage.engCollabrationSuccessSection[0].description
                    }
                    image={benefitsPic}
                    position='normal'
                  />
                  <BenefitsComponent
                    isLocationIran={isLocationInIran}

                    title={
                      isLocationInIran ?
                        collabrationSuccessSection?.homepage.collabrationSuccessSection[1].normalTitle
                        :
                        collabrationSuccessSection?.homepage.engCollabrationSuccessSection[1].normalTitle
                    }
                    highlightTitle={
                      isLocationInIran ?
                        collabrationSuccessSection?.homepage.collabrationSuccessSection[1].coloredTitle
                        :
                        collabrationSuccessSection?.homepage.engCollabrationSuccessSection[1].coloredTitle
                    }
                    description={
                      isLocationInIran ?
                        collabrationSuccessSection?.homepage.collabrationSuccessSection[1].description
                        :
                        collabrationSuccessSection?.homepage.engCollabrationSuccessSection[1].description
                    }
                    image={benefitsPic2}
                    position=''
                  />
                  <BenefitsComponent
                    isLocationIran={isLocationInIran}
                    title={
                      isLocationInIran ?
                        collabrationSuccessSection?.homepage.collabrationSuccessSection[2].normalTitle
                        :
                        collabrationSuccessSection?.homepage.engCollabrationSuccessSection[2].normalTitle
                    }
                    highlightTitle={
                      isLocationInIran ?
                        collabrationSuccessSection?.homepage.collabrationSuccessSection[2].coloredTitle
                        :
                        collabrationSuccessSection?.homepage.engCollabrationSuccessSection[2].coloredTitle
                    }
                    description={
                      isLocationInIran ?
                        collabrationSuccessSection?.homepage.collabrationSuccessSection[2].description
                        :
                        collabrationSuccessSection?.homepage.engCollabrationSuccessSection[2].description
                    }
                    image={benefitsPic3}
                    position='normal'
                  />

                  <Image src={line} alt='line' className='absolute left-1/2 top-[57%] -translate-y-1/2 -translate-x-1/2 z-[-1] lg:block hidden' />
                </div>
              </div>


              <div className='successSteps p-6 sm:p-12 lg:py-56 '>
                <div className='flex flex-wrap justify-center'>
                  <p className={`${myFont.className} text-white sm:w-max leading-tight text-5xl mx-auto text-center rtl`}
                    data-aos-duration="2000" data-aos-once={true} data-aos="fade-up"
                  >
                    <span className='text-3xl text-main-orange text-center'>
                    </span> {
                      isLocationInIran ?
                        successSteps.homepage.successSteps[0].title[0].normalTitle :
                        successSteps.homepage.engSuccessSteps[0].title[0].normalTitle
                    } <span style={{ color: '#F68D2E' }}>
                      {
                        isLocationInIran ?
                          successSteps.homepage.successSteps[0].title[0].coloredTitle
                          :
                          successSteps.homepage.engSuccessSteps[0].title[0].coloredTitle
                      } </span>
                  </p>
                </div>
                <div className='pt-12 h-[600px] lg:h-auto'>
                  <StepsComponent data={successSteps.homepage} isLocationIran={isLocationInIran} />
                </div>
              </div>

              <Footer data={locationData === 'Iran' || !locationData ? footer?.footer : footerEng?.engFooter} isLocationInIran={isLocationInIran} />

              </div>
            </PrimeReactProvider >
          }




        </main >
      </div>

      <style>
        {
          `
.p-toast-bottom-right {
bottom: auto;
}

.p-component {
display: flex;
flex-direction: column-reverse;
}

.p-tabview .p-tabview-panels {
max-height: 850px;
}

@media (min-width: 1024px) {
.p-tabview .p-tabview-panels {
max-height: 900px;
}
}

@media (max-width: 640px) {
.p-tabview .p-tabview-panels {
max-height: 700px;
}
}

.p-tabview-nav-content {
width: 50%;
margin: 0 auto;
z-index: 1;
}

@media (min-width: 1024px) {
.p-tabview-nav-content {
width: 35%;
}
}

@media (max-width: 640px) {
.p-tabview-nav-content {
width: 90%;
}
}

.p-accordion .p-accordion-header .p-accordion-header-link {
border: none;
background: #1D1D1D;
color: #fff;
padding: 30px 20px;
font-family: ${isLocationInIran ? '__myFont_0ebf61;' : '__Inter_e66fe9;'}
font-weight: 400;
}

.p-accordion-header-text {
font-family : '__myFontIran_ca096e', '__myFontIran_Fallback_ca096e';
text-align: left;
line-height: 1.8;
}

.p-accordion-header {
color: white;
}

.p-accordion .p-accordion-header:not(.p-disabled).p-highlight .p-accordion-header-link:hover {
background: #1D1D1D;
color: white;
}

.p-accordion .p-accordion-header:not(.p-disabled).p-highlight .p-accordion-header-link {
border: none;
background: #1D1D1D;
color: white;
}

.p-accordion .p-accordion-content {
background: #1D1D1D;
color: white;
border: none;
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
color: white;
}

.p-accordion .p-accordion-header .p-accordion-header-link {
height: auto;
}

.p-accordion .p-accordion-header .p-accordion-header-link .p-accordion-toggle-icon {
color: #F68D2E;
}
.p-toast-bottom-right {
z-index: 120000000000000000000 !important;
}
.p-tabview .p-tabview-nav {
background: transparent;
}

.p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {
background: transparent;
color: #F68D2E;
}

.p-tabview .p-tabview-nav li .p-tabview-nav-link {
background: transparent;
}

.p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {
font-size: 22px;
}

.p-tabview-title {
font-size: 22px;
}

.p-tabview .p-tabview-nav li:hover {
background: transparent
}

.p-tabview .p-tabview-nav li .p-tabview-nav-link {
color: white
}

.p-tabview .p-tabview-panels {
background: transparent
}

.p-tabview .p-tabview-nav li .p-tabview-nav-link:not(.p-disabled):focus {
box-shadow: none;
}

.p-tabview .p-tabview-nav {
border-bottom: 1px solid #F68D2E;
}

.p-tabview .p-tabview-nav .p-tabview-ink-bar {
background-color: #F68D2E
}

.p-tabview .p-tabview-nav li .p-tabview-nav-link {
border: none
}

.p-tabview-nav {
justify-content: space-between;
}
`
        }
      </style>
    </>
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
  const collabrationSuccessSectionTitle = await getQueryCollabrationSuccessSectionTitle();
  const successSteps = await getQuerySuccessSteps();
  const footerEng = await getQueryEngFooter();
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
      collabrationSuccessSectionTitle,
      successSteps,
      footer,
      footerEng
    },
    revalidate: 10,
  };
};
