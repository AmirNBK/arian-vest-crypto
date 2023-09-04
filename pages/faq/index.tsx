import { useState } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
const inter = Inter({ subsets: ['latin'] })
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../assets/Fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/Fonts/iranyekanwebregular_0.ttf' })
import faq from '../../assets/icons/faq.svg'
import { Accordion, AccordionTab } from 'primereact/accordion';
import arrow from '../../assets/icons/arrow2.svg'
import Footer from '@/components/Footer/Footer';

export default function SingleBlog() {

    const items = ['لورم ایپسوم با تولید ساده', 'لورم ایپسوم متن ساختگی', 'متن ساختگی با تولید ساده', 'لورم ایپسوم ساختگی با تولید ساده', 'لورم ایپسوم متن ساختگی با تولید ساده']

    return (
        <main
            className={`flex min-h-screen flex-col ${inter.className}`}
        >
            <PrimeReactProvider>
                <Header />

                <div className={`${myFont.className} flex flex-row-reverse gap-4 items-center mr-12 mt-8`}>
                    <Image src={faq} alt='faq' />
                    <p className='text-white text-4xl'>
                        سوالات متداول <span style={{ color: '#F68D2E' }}> برای معاملات </span>
                    </p>
                </div>

                <div>
                    <Accordion multiple className='grid grid-cols-2 gap-y-4 ml-12 mb-24 mt-8'>
                        <AccordionTab
                            pt={{
                                headerIcon: <Image src={arrow} alt='arrow'/>
                            }}
                            className='text-white text-right' header="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ؟">
                            <p className={`m-0 ${myFontIran.className} text-right`}>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز صنعت چاپ، و با استفاده از طراحان گرافیک صنعت چاپ، و با استفاده از طراحان گرافیک لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز صنعت چاپ، و با استفاده.
                            </p>
                        </AccordionTab>
                        <AccordionTab header="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک؟">
                            <p className={`m-0 ${myFontIran.className} text-right`}>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز صنعت چاپ، و با استفاده از طراحان گرافیک صنعت چاپ، و با استفاده از طراحان گرافیک لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز صنعت چاپ، و با استفاده.
                            </p>
                        </AccordionTab>
                        <AccordionTab header="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک ، چاپگرها و متونن بلکه روزنامه؟">
                            <p className={`m-0 ${myFontIran.className} text-right`}>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز صنعت چاپ، و با استفاده از طراحان گرافیک صنعت چاپ، و با استفاده از طراحان گرافیک لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز صنعت چاپ، و با استفاده.
                            </p>
                        </AccordionTab>
                        <AccordionTab header="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک ، چاپگرها و متونن بلکه روزنامه؟">
                            <p className={`m-0 ${myFontIran.className} text-right`}>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز صنعت چاپ، و با استفاده از طراحان گرافیک صنعت چاپ، و با استفاده از طراحان گرافیک لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز صنعت چاپ، و با استفاده.
                            </p>
                        </AccordionTab>
                        <AccordionTab header="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک ، چاپگرها و متونن بلکه روزنامه؟">
                            <p className={`m-0 ${myFontIran.className} text-right`}>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز صنعت چاپ، و با استفاده از طراحان گرافیک صنعت چاپ، و با استفاده از طراحان گرافیک لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز صنعت چاپ، و با استفاده.
                            </p>
                        </AccordionTab>
                        <AccordionTab header="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک ، چاپگرها و متونن بلکه روزنامه؟">
                            <p className={`m-0 ${myFontIran.className} text-right`}>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز صنعت چاپ، و با استفاده از طراحان گرافیک صنعت چاپ، و با استفاده از طراحان گرافیک لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز صنعت چاپ، و با استفاده.
                            </p>
                        </AccordionTab>
                        <AccordionTab header="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک ، چاپگرها و متونن بلکه روزنامه؟">
                            <p className={`m-0 ${myFontIran.className} text-right`}>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز صنعت چاپ، و با استفاده از طراحان گرافیک صنعت چاپ، و با استفاده از طراحان گرافیک لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز صنعت چاپ، و با استفاده.
                            </p>
                        </AccordionTab>
                        <AccordionTab header="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک ، چاپگرها و متونن بلکه روزنامه؟">
                            <p className={`m-0 ${myFontIran.className} text-right`}>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز صنعت چاپ، و با استفاده از طراحان گرافیک صنعت چاپ، و با استفاده از طراحان گرافیک لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز صنعت چاپ، و با استفاده.
                            </p>
                        </AccordionTab>
                        <AccordionTab header="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک ، چاپگرها و متونن بلکه روزنامه؟">
                            <p className={`m-0 ${myFontIran.className} text-right`}>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز صنعت چاپ، و با استفاده از طراحان گرافیک صنعت چاپ، و با استفاده از طراحان گرافیک لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز صنعت چاپ، و با استفاده.
                            </p>
                        </AccordionTab>
                        <AccordionTab header="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک ، چاپگرها و متونن بلکه روزنامه؟">
                            <p className={`m-0 ${myFontIran.className} text-right`}>
                                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز صنعت چاپ، و با استفاده از طراحان گرافیک صنعت چاپ، و با استفاده از طراحان گرافیک لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز صنعت چاپ، و با استفاده.
                            </p>
                        </AccordionTab>

                    </Accordion>
                </div>

                <Footer />
            </PrimeReactProvider>


            <style>
                {
                    `
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

      .p-accordion-tab {
        width: 681px;
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
