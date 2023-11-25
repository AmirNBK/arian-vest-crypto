import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import trading from '../../assets/icons/Range_trading.png'
const inter = Inter({ subsets: ['latin'] })
import localFont from 'next/font/local'
import rules from '../../assets/icons/justice.svg'
import Footer from '@/components/Footer/Footer'
import RulesComponent from '@/components/RulesComponent/RulesComponent';
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import bull from '../../assets/images/bull.png'
import book from '../../assets/icons/book.svg'
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Dialog } from 'primereact/dialog';
import AOS from 'aos';
import logo from '../../assets/icons/rulesLogo.svg'
import 'aos/dist/aos.css';
import useWindowSize from '@/Hooks/innerSize';
import { GetStaticProps } from 'next';
import { getQueryFooter, getQueryRules } from '@/lib/service';

export default function Rules({ footer, data }: { footer: any, data: any }) {

    useEffect(() => {
        AOS.init();
    }, [])
    const size = useWindowSize();
    const [visibleDialog, setVisibleDialog] = useState<boolean>(false);
    const [clickedRule, setClickedRule] = useState<number>(0);

    console.log(data);

    type ItemType = {
        title: string;
        description: string;
    };


    type rulesType = {
        feature: string;
        items: ItemType[];
        title: string;
    };

    const rulesClickHandler = (index: number) => {
        setVisibleDialog(true);
        setClickedRule(index);
    }


    return (
        <main
            className={`flex min-h-screen flex-col ${inter.className}`}
        >
            <PrimeReactProvider>
                <Dialog
                    header="SGB راه حل جدیدی برای گروهی از کاربران توانا یافته است. این پلن حاشیه امنی است که باعث میشود منسجم تر از پیش به تخصص خود ادامه دهید.
                    " visible={visibleDialog} style={{
                        width: `${size.width && size.width < 1024 ? '90vw' : '60vw'}`, display: 'flex', flexDirection: 'column',
                        backgroundColor: '#252525'
                    }}
                    className={`${myFont.className} font-normal`}
                    onHide={() => setVisibleDialog(false)}
                >
                    <Image src={logo} alt='logo' className='absolute right-[30px] top-[-20px]' />

                    <Accordion multiple className='gap-y-4 lg:mx-auto mb-24 mt-8 '>
                        {data.classRules[clickedRule].items.map((item: any, index: number) => (
                            <AccordionTab
                                key={index}
                                style={{ width: '100%' }}
                                className='text-white text-right w-full'
                                header={item.title}
                            >
                                <p
                                    className={`m-0 ${myFontIran.className} text-right`}
                                    dangerouslySetInnerHTML={{ __html: item.description.replace(/\r\n/g, '<br />') }}
                                />
                            </AccordionTab>
                        ))}
                    </Accordion>
                </Dialog>
                <Header active={3} />
                <div className='text-white w-10/12 mx-auto mt-20'>
                    <h2 className={`${myFont.className} text-3xl 3xl:text-5xl mb-6 text-center text-white`}
                    >
                        {data.title[0].normalTitle} <span style={{ color: '#F68D2E' }}> {data.title[0].coloredTitle} </span>
                    </h2>
                    <p className={`${myFontIran.className} text-center 3xl:text-xl rtl`} style={{ lineHeight: '2' }}>
                        {data.description}
                    </p>
                </div>

                <div className='flex flex-col sm:flex-row-reverse sm:gap-0 gap-4 justify-center items-center mt-24'
                    data-aos-duration="2000" data-aos-once={true} data-aos="zoom-in"
                >
                    <Image src={rules} alt='rules' unoptimized />
                    <p className={`${myFont.className} mr-5 text-white text-4xl 3xl:text-5xl`}>
                        قوانین کلی <span style={{ color: '#F68D2E' }}> پلن ها </span>
                    </p>
                </div>

                <div className='px-12 mt-20 flex flex-col lg:flex-row justify-center lg:gap-y-0 gap-y-12 gap-x-32 mb-32'
                    data-aos-duration="2000" data-aos-once={true} data-aos="zoom-in-up"
                >
                    {data.classRules.map((item: rulesType, index: number) => {
                        return (
                            <RulesComponent onClick={() => rulesClickHandler(index)} translate={0} text={item.title} feature={item.feature} />

                        )
                    })}
                </div>

                <div className='relative'>
                    <Image src={trading} alt='trading' unoptimized className='w-full' />
                    <Image src={bull} alt='bull' unoptimized className='absolute left-1/2 top-1/2'
                        style={{ transform: 'translate(-50%,-50%)' }}
                    />
                </div>

                <div className='flex flex-col sm:flex-row-reverse sm:gap-0 gap-4 justify-center items-center mt-24'>
                    <Image src={book} alt='rules' unoptimized />
                    <p className={`${myFont.className} mr-5 text-white text-4xl 3xl:text-5xl sm:text-end text-center`}>
                        قوانین کلی <span style={{ color: '#F68D2E' }}> مربوط به سایت </span>
                    </p>
                </div>

                <div>
                    <Accordion multiple className='grid grid-cols-1 lg:grid-cols-2 gap-4 mx-4 sm:ml-12 3xl:ml-56 mb-24 mt-8 3xl:mt-16'>
                        {data.allRules.map((item: any, index: number) => {
                            return (
                                <AccordionTab
                                    className='text-white text-right'
                                    header={item.title}
                                >
                                    <p
                                        className={`m-0 ${myFontIran.className} text-right`}
                                        dangerouslySetInnerHTML={{ __html: item.description.replace(/\r\n/g, '<br />') }}
                                    />
                                </AccordionTab>
                            );
                        })}
                    </Accordion>

                </div>

                <Footer data={footer?.footer} />


                <style>
                    {
                        `

                        .p-accordion .p-accordion-header .p-accordion-header-link {
                            @media (min-width: 2000px) { 
                                font-size : 23px;
                               }
                               @media (max-width: 640px) { 
                                font-size : 13px;
                               }
                        }
                    .p-dialog-draggable .p-dialog-header {
                        background: #252525;
                    }

                    .p-dialog .p-dialog-content:last-of-type {
                        background: #252525;
                    }

                    .p-dialog .p-dialog-header .p-dialog-title {
                        text-align: right;
                        transform: translateY(40px);
                        color : white;
                        z-index : 20;

                        @media (max-width: 640px) { 
                            font-size : 1rem;
                           }
                    }

                    .p-dialog-draggable .p-dialog-header {
                        flex-direction: row-reverse;
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
                        line-height:1.8;
                        direction : rtl;
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
                        border:none;
                        direction : rtl;
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

      .p-accordion-tab {
        width: 100%;
      }

      .p-accordion .p-accordion-header .p-accordion-header-link {
        height : 90px;
      }

      .p-accordion .p-accordion-header .p-accordion-header-link .p-accordion-toggle-icon {
        color : #F68D2E;
      }
                    
                    `
                    }
                </style>
            </PrimeReactProvider>
        </main>
    )
}


export const getStaticProps: GetStaticProps = async () => {

    const footer = await getQueryFooter();
    const data = await getQueryRules();


    return {
        props: {
            footer,
            data
        },
        revalidate: 3600,
    };
};