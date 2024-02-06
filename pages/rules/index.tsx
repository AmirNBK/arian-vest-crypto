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
import { getQueryEngFooter, getQueryFooter, getQueryRules, getQueryRulesTitles } from '@/lib/service';
import { GetStaticProps } from 'next';
import useLocationData from '@/Hooks/location';
import Head from 'next/head';

export default function Rules({ footer, data, titles, footerEng }: { footer: any, data: any, titles: any, footerEng: any }) {

    useEffect(() => {
        AOS.init();
    }, [])
    const size = useWindowSize();
    const { locationData, error, loading } = useLocationData();
    const [visibleDialog, setVisibleDialog] = useState<boolean>(false);
    const [clickedRule, setClickedRule] = useState<number>(0);
    const isLocationInIran = locationData === 'Iran (Islamic Republic of)' || !locationData;

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

    console.log(titles);


    return (
        <div className='flex justify-center'>
            <main
                className={`flex min-h-screen flex-col max-w-[1700px] min-w-full 2xl:min-w-0 ${inter.className}`}
            >
                <Head>
                    <title>Rules</title>
                </Head>
                {loading ? ''
                    :
                    <PrimeReactProvider>
                        <Dialog
                            header={
                                isLocationInIran ?
                                    data.classRules[clickedRule].headerText
                                    :
                                    data.engClassRules[clickedRule].headerText
                            }
                            visible={visibleDialog} style={{
                                width: `${size.width && size.width < 1024 ? '90vw' : '60vw'}`, display: 'flex', flexDirection: 'column',
                                backgroundColor: '#252525'
                            }}
                            className={`${isLocationInIran && myFont.className} font-normal`}
                            onHide={() => setVisibleDialog(false)}
                        >
                            <Image src={logo} alt='logo' className='absolute right-[30px] top-[-20px]' />

                            <Accordion multiple className='gap-y-4 lg:mx-auto mb-24 mt-8 '>
                                {
                                    isLocationInIran ?
                                        data.classRules[clickedRule]?.items?.map((item: any, index: number) => (
                                            <AccordionTab
                                                key={index}
                                                style={{ width: '100%' }}
                                                className='text-white text-right w-full'
                                                header={item.title}
                                            >
                                                <p
                                                    className={`m-0 ${isLocationInIran && myFontIran.className} text-right`}
                                                    dangerouslySetInnerHTML={{ __html: item.description !== null ? item.description.replace(/\r\n/g, '<br />') : '0' }}
                                                />
                                            </AccordionTab>
                                        ))
                                        :
                                        data.engClassRules[clickedRule]?.items?.map((item: any, index: number) => (
                                            <AccordionTab
                                                key={index}
                                                style={{ width: '100%' }}
                                                className='text-white text-right w-full'
                                                header={item.title}
                                            >
                                                <p
                                                    className={`m-0 ${isLocationInIran && myFontIran.className} text-left`}
                                                    dangerouslySetInnerHTML={{ __html: item.description !== null ? item.description.replace(/\r\n/g, '<br />') : '0' }}
                                                />

                                            </AccordionTab>
                                        ))
                                }
                            </Accordion>
                        </Dialog>
                        <Header active={3} isLocationInIran={isLocationInIran} />
                        <div className='text-white w-10/12 mx-auto mt-10'>
                            <h2 className={`${isLocationInIran && myFont.className} text-3xl 3xl:text-5xl mb-6 text-center text-white`}
                            >
                                {isLocationInIran ? titles.mainTitles[0].title : titles.engMainTitles[0].title}
                                <span style={{ color: '#F68D2E' }}>
                                    {isLocationInIran ? titles.mainTitles[0].coloredTitle : titles.engMainTitles[0].coloredTitle}
                                </span>
                            </h2>
                            <p className={`${isLocationInIran && myFontIran.className} text-center 3xl:text-xl ${isLocationInIran && 'rtl'}`} style={{ lineHeight: '2' }}>
                                {isLocationInIran ? data.description : data.engDescription}
                            </p>
                        </div>

                        <div className={`flex flex-col ${isLocationInIran ? 'sm:flex-row-reverse' : 'sm:flex-row'}
        sm:gap-0 gap-4 justify-center items-center mt-24`}
                            data-aos-duration="2000" data-aos-once={true} data-aos="zoom-in"
                        >
                            <Image src={rules} alt='rules' unoptimized />
                            <p className={`${isLocationInIran && myFont.className} ${isLocationInIran ? 'mr-5' : 'ml-5'} text-white text-4xl 3xl:text-5xl`}>
                                {isLocationInIran ? data.title[0].normalTitle : data.engTitle[0].normalTitle} <span style={{ color: '#F68D2E' }}> {isLocationInIran ? data.title[0].coloredTitle : data.engTitle[0].coloredTitle} </span>
                            </p>
                        </div>

                        <div className='px-12 mt-20 flex-wrap flex flex-col lg:flex-row justify-center lg:gap-y-20 gap-y-16 gap-x-32 mb-32'
                            data-aos-duration="2000" data-aos-once={true} data-aos="zoom-in-up"
                        >
                            {
                                isLocationInIran ?
                                    data.classRules.map((item: rulesType, index: number) => {
                                        return (
                                            <RulesComponent isLocationIran onClick={() => rulesClickHandler(index)} translate={0} text={item.title} feature={item.feature} />

                                        )
                                    })
                                    :
                                    data.engClassRules.map((item: rulesType, index: number) => {
                                        return (
                                            <RulesComponent isLocationIran={false} onClick={() => rulesClickHandler(index)} translate={0} text={item.title} feature={item.feature} />

                                        )
                                    })
                            }
                        </div>

                        <div className='relative'>
                            <Image src={trading} alt='trading' unoptimized className='w-full' />
                            <Image src={bull} alt='bull' unoptimized className='absolute left-1/2 top-1/2'
                                style={{ transform: 'translate(-50%,-50%)' }}
                            />
                        </div>

                        <div className={`flex flex-col
        ${isLocationInIran ? 'sm:flex-row-reverse' : 'sm:flex-row'}
        sm:gap-0 gap-4 justify-center items-center mt-24`}>
                            <Image src={book} alt='rules' unoptimized />
                            <p className={`${isLocationInIran && myFont.className} ${isLocationInIran ? 'mr-5' : 'ml-5'}
            text-white text-4xl 3xl:text-5xl sm:text-end text-center`}>
                                {isLocationInIran ? `${titles.secondTitle[0].normalTitle}` : `${titles.engSecondTitle[0].normalTitle}`} <span style={{ color: '#F68D2E' }}>
                                    {isLocationInIran ? `${titles.secondTitle[0].coloredTitle}` : `${titles.engSecondTitle[0].secondTitle}`} </span>
                            </p>
                        </div>
                        <div>
                            <Accordion multiple className='grid grid-cols-1 lg:grid-cols-2 gap-4 mx-4 sm:mx-12 xl:mx-32 3xl:ml-56 mb-24 mt-8 3xl:mt-16'>
                                {
                                    isLocationInIran ?
                                        data.allRules.map((item: any, index: number) => {
                                            return (
                                                <AccordionTab
                                                    key={index}
                                                    className='text-white'
                                                    header={item.title}
                                                >
                                                    <p
                                                        className={`m-0 ${isLocationInIran && myFontIran.className} text-right`}
                                                        dangerouslySetInnerHTML={{ __html: item.description !== null ? item.description.replace(/\r\n/g, '<br />') : '0' }}
                                                    />
                                                </AccordionTab>
                                            );
                                        })
                                        :
                                        data.engAllRules.map((item: any, index: number) => {
                                            return (
                                                <AccordionTab
                                                    key={index}
                                                    className='text-white text-left'
                                                    header={item.title}
                                                >
                                                    <p
                                                        className={`m-0 ${isLocationInIran && myFontIran.className} text-left`}
                                                        dangerouslySetInnerHTML={{ __html: item.description !== null ? item.description.replace(/\r\n/g, '<br />') : '0' }}
                                                    />
                                                </AccordionTab>
                                            );
                                        })
                                }
                            </Accordion>

                        </div>

                        <Footer data={locationData === 'Iran (Islamic Republic of)' || !locationData ? footer?.footer : footerEng?.engFooter} isLocationInIran={locationData === 'Iran (Islamic Republic of)' || !locationData} />

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

            .p-dialog .p-dialog-header {
            padding : 1.5rem 1.5rem 0.5rem 1.5rem;
        }

            .p-dialog .p-dialog-header .p-dialog-title {
                text-align: ${isLocationInIran ? 'right' : 'left'};
                transform: translateY(20px);
                font-size : 23px;
                color : white;
                z-index : 20;
                font-family: ${isLocationInIran ? '__myFont_0ebf61;' : '__Inter_e66fe9;'}
                        @media (max-width: 640px) {
                            font - size : 1rem;
                   }
            }

                        .p-dialog-draggable .p-dialog-header {
                            flex - direction: row-reverse;
            }
                        .p-accordion .p-accordion-header .p-accordion-header-link {
                            border: none;
                        background: #1D1D1D;
                        color: #fff;
                        padding: 30px 20px;
                        font-family: ${isLocationInIran ? '__myFont_0ebf61;' : '__Inter_e66fe9;'}
                        font-weight:400;
            }

                        .p-accordion-header-text {
                            text - align: ${isLocationInIran && 'text-right'};
                        line-height:1.8;
                        direction : ${isLocationInIran && 'rtl'};
            }

                        .p-accordion-header {
                            color : white;
            }

                        .p-accordion .p-accordion-header:not(.p-disabled).p-highlight .p-accordion-header-link:hover {
                            background: #1D1D1D !important;
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
                        direction : ${isLocationInIran && 'rtl'};
            }


                        .p-checkbox .p-checkbox-box {
                            background - color: transparent;
}

                        .p-accordion-header-link {

                            justify - content: space-between;
}

                        .p-accordion .p-accordion-header:not(.p-highlight):not(.p-disabled):hover .p-accordion-header-link {
                            background - color: #1D1D1D;
                        border: none;
                        color : white;
}

                        .p-accordion-tab {
                            width: 100%;
}

                        .p-accordion .p-accordion-header .p-accordion-header-link {
                            height : auto;
                        justify-content : ${!isLocationInIran && 'flex-start'};
}

                        .p-accordion .p-accordion-header .p-accordion-header-link .p-accordion-toggle-icon {
                            color : #F68D2E;
}

                        `
                            }
                        </style>
                    </PrimeReactProvider>
                }
            </main>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {

    const footer = await getQueryFooter();
    const footerEng = await getQueryEngFooter();
    const data = await getQueryRules();
    const titles = await getQueryRulesTitles();

    return {
        props: {
            footer,
            data,
            titles,
            footerEng
        },
        revalidate: 10,
    };
};