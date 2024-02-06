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
import { getQueryEngFooter, getQueryFaq, getQueryFooter } from '@/lib/service';
import { GetStaticProps } from 'next';
import useLocationData from '@/Hooks/location';
import Head from 'next/head';

export default function SingleBlog({ footer, questions, footerEng }: { footer: any, questions: any, footerEng: any }) {
    const { locationData, error, loading } = useLocationData();
    const isLocationInIran = locationData === 'Iran (Islamic Republic of)' || !locationData;

    return (
        <div className='flex justify-center'>
            <main
            className={`flex min-h-screen flex-col justify-between max-w-[1700px] min-w-full 2xl:min-w-0 ${inter.className}`}
        >
            <Head>
                <title>Faq</title>
            </Head>
            {loading
                ? ''
                :
                <PrimeReactProvider>
                    <Header active={4} isLocationInIran={isLocationInIran} />
                    <div className={`${myFont.className} flex flex-col ${isLocationInIran ? 'sm:flex-row-reverse sm:mr-12' : 'sm:flex-row sm:ml-12'} gap-4 items-center mt-8`}>
                        <Image src={faq} alt='faq' />
                        <p className='text-white text-4xl  md:text-end text-center'>
                            {isLocationInIran ? 'سوالات متداول' : 'Frequently Asked Questions'}
                            <span style={{ color: '#F68D2E' }}> {isLocationInIran ? 'برای معاملات' : 'for trades'} </span>
                        </p>
                    </div>

                    <div>
                        <Accordion multiple className='flex  flex-wrap gap-12 w-[90%] lg:w-full mx-auto justify-center lg:ml-12  3xl:ml-6 mb-24 mt-8'>
                            {
                                isLocationInIran ?
                                    questions.question.map((item: any, index: number) => {
                                        return (
                                            <AccordionTab
                                                key={index}
                                                pt={{
                                                    headerIcon: <Image src={arrow} alt='arrow' />
                                                }}
                                                className={`${myFontIran.className} text-white text-right`}
                                                style={{ boxShadow: '0px 0px 45px 0px rgba(246, 141, 46, 0.20)' }}
                                                header={item.title}>
                                                {item.description}
                                            </AccordionTab>
                                        )
                                    })
                                    :
                                    questions.engQuestion.map((item: any, index: number) => {
                                        return (
                                            <AccordionTab
                                                key={index}
                                                pt={{
                                                    headerIcon: <Image src={arrow} alt='arrow' />
                                                }}
                                                className='text-white text-left'
                                                style={{ boxShadow: '0px 0px 45px 0px rgba(246, 141, 46, 0.20)' }}
                                                header={item.title}>
                                                {item.description}
                                            </AccordionTab>
                                        )
                                    })
                            }
                        </Accordion>
                    </div>

                    <Footer data={locationData === 'Iran (Islamic Republic of)' || !locationData ? footer?.footer : footerEng?.engFooter} isLocationInIran={locationData === 'Iran (Islamic Republic of)' || !locationData} />
                </PrimeReactProvider>
            }



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
                        direction : ${isLocationInIran && 'rtl'};
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
                        direction : ${isLocationInIran && 'rtl'};
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
        width : 100%;
        @media (min-width: 640px) { 
            width: 681px;
           }
      }

      .p-accordion .p-accordion-header .p-accordion-header-link {
        height : 90px;
        justify-content : ${!isLocationInIran && 'flex-start'};
      }

      .p-accordion .p-accordion-header .p-accordion-header-link .p-accordion-toggle-icon {
        color : #F68D2E;
      }
                    
                    `
                }
            </style>
        </main>
        </div>
    )
}


export const getStaticProps: GetStaticProps = async () => {

    const footer = await getQueryFooter();
    const footerEng = await getQueryEngFooter();
    const questions = await getQueryFaq();

    return {
        props: {
            footer,
            questions,
            footerEng
        },
        revalidate: 10,
    };
};
