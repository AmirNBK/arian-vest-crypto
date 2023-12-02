import { useState } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
const inter = Inter({ subsets: ['latin'] })
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import faq from '../../assets/icons/faq.svg'
import { Accordion, AccordionTab } from 'primereact/accordion';
import arrow from '../../assets/icons/arrow2.svg'
import Footer from '@/components/Footer/Footer';
import { getQueryFaq, getQueryFooter } from '@/lib/service';
import { GetStaticProps } from 'next';

export default function SingleBlog({ footer, questions }: { footer: any, questions: any }) {

    return (
        <main
            className={`flex min-h-screen flex-col justify-between ${inter.className}`}
        >
            <PrimeReactProvider>
                <Header active={4} />
                <div className={`${myFont.className} flex flex-col sm:flex-row-reverse gap-4 items-center sm:mr-12 mt-8`}>
                    <Image src={faq} alt='faq' />
                    <p className='text-white text-4xl sm:text-end text-center'>
                        سوالات متداول <span style={{ color: '#F68D2E' }}> برای معاملات </span>
                    </p>
                </div>

                <div>
                    <Accordion multiple className='flex  flex-wrap gap-12 justify-center lg:ml-12 sm:ml-20 3xl:ml-6 mb-24 mt-8'>
                        {questions.map((item: any, index: number) => {
                            return (
                                <AccordionTab
                                    pt={{
                                        headerIcon: <Image src={arrow} alt='arrow' />
                                    }}
                                    className='text-white text-right'
                                    style={{ boxShadow: '0px 0px 45px 0px rgba(246, 141, 46, 0.20)' }}
                                    header={item.title}>
                                    {item.description}
                                </AccordionTab>
                            )
                        })}
                    </Accordion>
                </div>

                <Footer data={footer?.footer} />
            </PrimeReactProvider>


            <style>
                {
                    `
                    .p-accordion .p-accordion-header .p-accordion-header-link {
                        @media (min-width: 2000px) { 
                            font-size : 20px;
                           }
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
        @media (min-width: 640px) { 
            width: 681px;
           }
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
        </main>
    )
}


export const getStaticProps: GetStaticProps = async () => {

    const footer = await getQueryFooter();
    const questions = await getQueryFaq();


    return {
        props: {
            footer,
            questions
        },
        revalidate: 3600,
    };
};
