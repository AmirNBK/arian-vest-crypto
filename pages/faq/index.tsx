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

export default function SingleBlog() {

    const items = ['لورم ایپسوم با تولید ساده', 'لورم ایپسوم متن ساختگی', 'متن ساختگی با تولید ساده', 'لورم ایپسوم ساختگی با تولید ساده', 'لورم ایپسوم متن ساختگی با تولید ساده']

    return (
        <main
            className={`flex min-h-screen flex-col ${inter.className}`}
        >
            <PrimeReactProvider>
                <Header active={3} />

                <div className={`${myFont.className} flex flex-row-reverse gap-4 items-center mr-12 mt-8`}>
                    <Image src={faq} alt='faq' />
                    <p className='text-white text-4xl'>
                        سوالات متداول <span style={{ color: '#F68D2E' }}> برای معاملات </span>
                    </p>
                </div>

                <div>
                    <Accordion multiple className='grid lg:grid-cols-2 grid-cols-1 gap-y-4 lg:ml-12 ml-20 3xl:ml-56 mb-24 mt-8'>
                        <AccordionTab
                            pt={{
                                headerIcon: <Image src={arrow} alt='arrow' />
                            }}
                            className='text-white text-right' header="چگونه در مجموعه ArianVest شروع به فعالیت کنیم؟">
                            <p className={`m-0 ${myFontIran.className} text-right`}>
                                پیش از آن که تصمیم بگیرید با مجموعه تامین سرمایه ما کار کنید، می خواهیم مطمئن شویم تمامی اصول و اجزای کار را میدانید.
                                <br />
                                برای اخذ سرمایه توسط ما، می بایست در دو مرحله شرکت کنید. مرحله اول “ارزیابی” و مرحله دوم “راستی آزمایی” است که در مرحله راستی آزمایی اطمینان حاصل میکنیم شما مرحله ارزیابی را به طور شانسی نگذرانده اید.
                                <br />

                                سرمایه ها متنوع است. شما بر اساس نیاز خود، میتوانید مبلغ درخواست سرمایه خود را انتخاب، و سپس آن را در یک حساب معاملاتی دریافت کنید. همچنین میتوانید در پنل آنالیز وبسایت بصورت کامل فرایند حسابتان را مشاهده کنید.


                            </p>
                        </AccordionTab>
                        <AccordionTab header="مراحل ثبت نام در مجموعه ArianVest به چه صورت می باشد؟">
                            <p className={`m-0 ${myFontIran.className} text-right`}>
                                در ابتدا باید فرم ثبت نام را پر کنید و سپس برای تکمیل فرایند ثبت نام مدارک شناسایی خود را در بخش احراز هویت بارگزاری نمایید. کارشناسان واحد پشتیبانی پس از بررسی مدارک هویتی، حساب کاربری شما را تائید خواهند کرد. پس از آن میتوانید پلن مورد نظر را انتخاب و اقدام به خرید نمایید تا پروسه ی دریافت حساب انجام گردد.
                            </p>
                        </AccordionTab>
                        <AccordionTab header="برای اثبات هویت چه مدارکی باید ارائه دهم؟">
                            <p className={`m-0 ${myFontIran.className} text-right`}>
                                هر نوع مدرک شناسایی که نام، نام خانوادگی، تاریخ تولد و شماره مدرک هویتی را جهت صحت سنجی شفاف سازد برای ما قابل تائید است. این مدارک میتواند شامل کارت ملی، شناسنامه، و یا پاسپورت باشد. (توجه داشته باشید کارت بانکی و کارت خودرو شامل مدارک هویتی نمی باشند)
                            </p>
                        </AccordionTab>
                        <AccordionTab header="بجز هزینه خرید پلن ، آیا هزینه دیگری هم باید پرداخت کنم؟">
                            <p className={`m-0 ${myFontIran.className} text-right`}>
                                خیر، هیچ گونه هزینه اضافی دیگری وجود ندارد.
                                لازم به ذکر است هزینه پرداختی شما بابت خرید پلن چالش هاست و درصورت نقض قوانین، مردود شدن و بازماندن به مرحله بعد، مبلغ پرداختی شما برگشت داده نخواهد شد لذا عودت وجه تنها درصورت انصراف قبل از انجام معامله و پیش از اتمام فرصت شروع یک هفته ای از زمان دریافت حساب و همچنین پس از پاس کردن هر دو مرحله چالش با برداشت اولین سود حاصل از معامله گری در مرحله دریافت سرمایه امکان‌پذیر خواهد بود.
                            </p>
                        </AccordionTab>
                        <AccordionTab header="چه روش هایی برای پرداخت و دریافت سود وجود دارد؟">
                            <p className={`m-0 ${myFontIran.className} text-right`}>
                                در حال حاضر تمامی پرداخت و دریافت ها از طریق تتر انجام می شود.
                            </p>
                        </AccordionTab>
                        <AccordionTab header="چقدر زمان می برد تا حساب معاملاتی من راه اندازی شود؟">
                            <p className={`m-0 ${myFontIran.className} text-right`}>
                                بلافاصله بعد از تکمیل خرید طرح مورد نظر جهت درخواست سرمایه، مراحل ساخت حساب برای شما به کارشناسان مجموعه ارجاع و نهایتا تا یک روز کاری، حساب معاملاتی شما ایجاد و ارسال خواهد شد.
                            </p>
                        </AccordionTab>
                        <AccordionTab header="آیا مجموعه ArianVest قوانینی برای بازگشت وجه دارد ؟">
                            <p className={`m-0 ${myFontIran.className} text-right`}>
                                چنانچه به هر دلیلی قبل از شروع معاملات خود از ادامه فعالیت در این مجموعه منصرف شدید کل وجه پرداختی را تا 72 ساعت کاری به حساب شما عودت خواهیم داد.
                                توجه داشته باشید عودت وجه در حالت فریز حساب تنها تا یک ماه پس از ثبت خرید امکان پذیر می باشد. چنانچه حساب معاملاتی به شما اختصاص داده شود فقط تا قبل از انجام معامله و فرصت شروع یک هفته ای مهلت انصراف جهت عودت وجه خواهید داشت.
                                قانون عودت وجه در حسابهای اختصاص یافته شامل حسابهایی که قبلا فریز بوده اند نمیگردد.
                            </p>
                        </AccordionTab>
                        <AccordionTab header="ساعات کاری مجموعه چه زمانی است؟">
                            <p className={`m-0 ${myFontIran.className} text-right`}>
                                از بامداد دوشنبه تا بامداد شنبه تیم های پشتیبانی و فروش در خدمت شما هستند. پشتیبانی این مجموعه در روز های شنبه و یکشنبه بصورت پاره وقت آماده پاسخگویی به شما خواهد بود.
                                به عبارتی در طول بازبودن بازار فارکس، 5 روز هفته به طور مداوم و 24 ساعته برای خدمت گزاری حاضر هستیم.
                            </p>
                        </AccordionTab>
                        <AccordionTab header="حداقل زمان برای تکمیل مرحله ارزیابی چقدر است؟">
                            <p className={`m-0 ${myFontIran.className} text-right`}>
                                حداقل زمان برای تکمیل مرحله ی ارزیابی، 5 روز معاملاتی و 30 روز تقویمی است. چنانچه در انتهای دوره حساب شما در سود باشد میتوانید از کابین شخصی خود درخواست بازنشانی(reset) و یا تمدید(extend) ثبت کنید.

                            </p>
                        </AccordionTab>
                        <AccordionTab header="حداکثر ضرر روزانه چگونه محاسبه می شود؟">
                            <p className={`m-0 ${myFontIran.className} text-right`}>
                                از ساعت صفر بروکر رقم بالانس مبنای محاسبه حدضرر روزانه است. در آن روز شما مجاز هستید حداکثر تا 5% از مبلغ بالانس، حساب خود را در معرض ریسک قرار دهید.
                                توجه داشته باشید اکوئیتی(مبلغ شناور) تا انتهای بسته شدن کندل روزانه نباید مقدار حدضرر روزانه را لمس کند در غیر اینصورت نقض قوانین صورت گرفته است.
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
