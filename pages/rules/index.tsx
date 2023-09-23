import React, { useEffect } from 'react';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import trading from '../../assets/icons/Range_trading.png'
const inter = Inter({ subsets: ['latin'] })
import localFont from 'next/font/local'
import rules from '../../assets/icons/rules.svg'
import Footer from '@/components/Footer/Footer'
import RulesComponent from '@/components/RulesComponent/RulesComponent';
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import bull from '../../assets/images/bull.png'
import book from '../../assets/icons/book.svg'
import { Accordion, AccordionTab } from 'primereact/accordion';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Rules() {

    useEffect(() => {
        AOS.init();
    }, [])

    const items = ['لورم ایپسوم با تولید ساده', 'لورم ایپسوم متن ساختگی', 'متن ساختگی با تولید ساده', 'لورم ایپسوم ساختگی با تولید ساده', 'لورم ایپسوم متن ساختگی با تولید ساده']

    return (
        <main
            className={`flex min-h-screen flex-col ${inter.className}`}
        >
            <PrimeReactProvider>
                <Header active={2} />
                <div className='text-white w-10/12 mx-auto mt-20'>
                    <h2 className={`${myFont.className} text-3xl mb-6 text-center text-white`}
                    >
                        پیش از ثبت نام قوانین را  <span style={{ color: '#F68D2E' }}> کامل مطالعه کنید </span>
                    </h2>
                    <p className={`${myFontIran.className} text-center leading-loose`}>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                    </p>
                </div>

                <div className='flex flex-row-reverse justify-center items-center mt-24'
                    data-aos-duration="2000" data-aos-once={true} data-aos="zoom-in"
                >
                    <Image src={rules} alt='rules' unoptimized />
                    <p className={`${myFont.className} mr-5 text-white text-4xl`}>
                        قوانین کلی <span style={{ color: '#F68D2E' }}> مربوط به سایت </span>
                    </p>
                </div>

                <div className='px-12 mt-20 grid grid-cols-3 gap-y-12 mb-32'
                    data-aos-duration="2000" data-aos-once={true} data-aos="zoom-in-up"
                >
                    <RulesComponent translate={0} text='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است؟' />
                    <RulesComponent translate={20} text='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است؟' />
                    <RulesComponent translate={50} text='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است؟' />
                    <RulesComponent translate={0} text='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است؟' />
                    <RulesComponent translate={20} text='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است؟' />
                    <RulesComponent translate={50} text='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است؟' />
                </div>

                <div className='relative'>
                    <Image src={trading} alt='trading' unoptimized />
                    <Image src={bull} alt='bull' unoptimized className='absolute left-1/2 top-1/2'
                        style={{ transform: 'translate(-50%,-50%)' }}
                    />
                </div>

                <div className='flex flex-row-reverse justify-center items-center mt-24'>
                    <Image src={book} alt='rules' unoptimized />
                    <p className={`${myFont.className} mr-5 text-white text-4xl`}>
                        بررسی کامل <span style={{ color: '#F68D2E' }}>قوانین معامله </span>
                    </p>
                </div>

                <div>
                    <Accordion multiple className='grid grid-cols-2 gap-y-4 ml-12 mb-24 mt-8'>
                        <AccordionTab
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


                <style>
                    {
                        `

                        
                    .p-dialog-draggable .p-dialog-header {
                        background: #252525;
                    }

                    .p-dialog .p-dialog-content:last-of-type {
                        background: #252525;
                    }

                    .p-dialog .p-dialog-header .p-dialog-title {
                        text-align: right;
                        transform: translateY(40px);
                        color : white
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
            </PrimeReactProvider>
        </main>
    )
}
