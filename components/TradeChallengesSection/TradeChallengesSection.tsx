import React, { useEffect } from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';
import localFont from 'next/font/local'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })

const TradeChallengesSection = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className='tradeChallenges'>
            <div className='tradeChallenges__title flex flex-row-reverse items-baseline text-center justify-center gap-3'
                data-aos-duration="2000" data-aos-once={true} data-aos="fade-up"
            >
                <p className={`${myFont.className} text-white text-5xl text-center`}
                >
                    <span className='text-3xl text-main-orange'> </span>سوالات متداول <span style={{ color: '#F68D2E' }}> چالش های تریدینگ </span>
                </p>
                <Link href={'/faq'} className={`${myFontIran.className} text-main-orange text-center`}
                    style={{ textDecoration: 'underline' }}>
                    مشاهده تمام سوالات
                </Link>
            </div>

            <div>
                <Accordion multiple className='flex flex-col gap-y-4 mx-12 mb-24 mt-8'
                    data-aos-duration="2000" data-aos-once={true} data-aos="fade-up"
                >
                    <AccordionTab
                        style={{ marginLeft: 'auto', width: '80%' }}
                        className='text-white text-right' header="حداقل زمان برای تکمیل مرحله ارزیابی چقدر است؟"
                    >
                        <p className={`m-0 ${myFontIran.className} text-right`}>
                            حداقل زمان برای تکمیل مرحله ی ارزیابی، 5 روز معاملاتی و 30 روز تقویمی است. چنانچه در انتهای دوره حساب شما در سود باشد میتوانید از کابین شخصی خود درخواست بازنشانی(reset) و یا تمدید(extend) ثبت کنید.
                        </p>
                    </AccordionTab>
                    <AccordionTab
                        style={{ marginRight: 'auto', width: '80%' }}
                        header="ساعات کاری مجموعه چه زمانی است؟">
                        <p className={`m-0 ${myFontIran.className} text-right`}>
                            از بامداد دوشنبه تا بامداد شنبه تیم های پشتیبانی و فروش در خدمت شما هستند. پشتیبانی این مجموعه در روز های شنبه و یکشنبه بصورت پاره وقت آماده پاسخگویی به شما خواهد بود.
                            به عبارتی در طول بازبودن بازار فارکس، 5 روز هفته به طور مداوم و 24 ساعته برای خدمت گزاری حاضر هستیم.
                        </p>
                    </AccordionTab>
                    <AccordionTab
                        style={{ marginLeft: 'auto', width: '80%' }}
                        header="حداکثر ضرر روزانه چگونه محاسبه می شود؟"
                    >
                        <p className={`m-0 ${myFontIran.className} text-right`}>
                            از ساعت صفر بروکر رقم بالانس مبنای محاسبه حدضرر روزانه است. در آن روز شما مجاز هستید حداکثر تا 5% از مبلغ بالانس، حساب خود را در معرض ریسک قرار دهید.
                            توجه داشته باشید اکوئیتی(مبلغ شناور) تا انتهای بسته شدن کندل روزانه نباید مقدار حدضرر روزانه را لمس کند در غیر اینصورت نقض قوانین صورت گرفته است.
                        </p>
                    </AccordionTab>
                    <AccordionTab
                        style={{ marginRight: 'auto', width: '80%' }}
                        header="بجز هزینه خرید پلن ، آیا هزینه دیگری هم باید پرداخت کنم؟">
                        <p className={`m-0 ${myFontIran.className} text-right`}>
                            خیر، هیچ گونه هزینه اضافی دیگری وجود ندارد.
                            لازم به ذکر است هزینه پرداختی شما بابت خرید پلن چالش هاست و درصورت نقض قوانین، مردود شدن و بازماندن به مرحله بعد، مبلغ پرداختی شما برگشت داده نخواهد شد لذا عودت وجه تنها درصورت انصراف قبل از انجام معامله و پیش از اتمام فرصت شروع یک هفته ای از زمان دریافت حساب و همچنین پس از پاس کردن هر دو مرحله چالش با برداشت اولین سود حاصل از معامله گری در مرحله دریافت سرمایه امکان‌پذیر خواهد بود.
                        </p>
                    </AccordionTab>

                </Accordion>
            </div>

        </div>

    );
};

export default TradeChallengesSection;