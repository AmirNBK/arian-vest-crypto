import React, { useEffect } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import localFont from 'next/font/local'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import useWindowSize from '@/Hooks/innerSize';
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })

const TradeChallengesSection = (props: {
    data: any;
    isLocationIran: boolean
}) => {


    useEffect(() => {
        AOS.init();
    }, [])

    const size = useWindowSize();

    return (
        <div className='tradeChallenges sm:px-0 px-1'>
            <div className={` tradeChallenges__title flex ${props.isLocationIran ? 'flex-row-reverse' : 'flex-row'} items-baseline text-center justify-center gap-8 lg:gap-3 flex-wrap`}
                data-aos-duration="2000" data-aos-once={true} data-aos="fade-up"
            >
                <p className={`${myFont.className} text-white text-4xl  sm:text-5xl text-center leading-relaxed`}
                >
                    <span className='text-3xl text-main-orange'> </span> {
                        props.isLocationIran ?
                            props.data.faqSection[0].title[0].normalTitle
                            :
                            props.data.engFaqSection[0].title[0].normalTitle
                    } <span style={{ color: '#F68D2E' }}>
                        {
                            props.isLocationIran ?
                                props.data.faqSection[0].title[0].coloredTitle
                                :
                                props.data.engFaqSection[0].title[0].coloredTitle
                        }
                    </span>
                </p>
                <Link href={'/faq'} className={`${myFontIran.className} text-main-orange text-center`}
                    style={{ textDecoration: 'underline' }}>
                    {
                        props.isLocationIran ?
                            props.data.faqSection[0].miniTitle
                            :
                            props.data.engFaqSection[0].miniTitle
                    }
                </Link>
            </div>

            <div>
                <Accordion multiple className='flex flex-col gap-y-4 mx-12 mb-24 mt-8'
                    data-aos-duration="2000" data-aos-once={true} data-aos="fade-up"
                >
                    {
                        props.isLocationIran ?
                            props.data?.faqSection[0].question?.map((item: any, index: number) => {
                                const isEven = index % 2 === 0;
                                const marginStyle = isEven ? { marginRight: 'auto' } : { marginLeft: 'auto' };

                                return (
                                    <AccordionTab
                                        style={{ ...marginStyle, width: `${(size.width && size.width < 640) ? '100%' : '80%'}`, boxShadow: '0px 0px 20px 0px rgba(246, 141, 46, 0.20)' }}
                                        className='text-white text-right' header={item?.title}
                                    >
                                        <p className={`m-0 ${myFontIran.className} text-right`}>
                                            {item?.description}
                                        </p>
                                    </AccordionTab>
                                );
                            })
                            :
                            props.data?.engFaqSection[0].question?.map((item: any, index: number) => {
                                const isEven = index % 2 === 0;
                                const marginStyle = isEven ? { marginRight: 'auto' } : { marginLeft: 'auto' };

                                return (
                                    <AccordionTab
                                        style={{ ...marginStyle, width: `${(size.width && size.width < 640) ? '100%' : '80%'}`, boxShadow: '0px 0px 20px 0px rgba(246, 141, 46, 0.20)' }}
                                        className='text-white text-right' header={item?.title}
                                    >
                                        <p className={`m-0 ${myFontIran.className} text-left`}>
                                            {item?.description}
                                        </p>
                                    </AccordionTab>
                                );
                            })
                    }

                </Accordion>
            </div>


            <style>
                {`
                     .p-accordion .p-accordion-header .p-accordion-header-link {
                        justify-content : ${!props.isLocationIran && 'flex-start'};
                      }
                `}
            </style>
        </div>

    );
};

export default TradeChallengesSection;