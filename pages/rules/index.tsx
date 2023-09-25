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
import rules from '../../assets/icons/rules.svg'
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

export default function Rules() {

    useEffect(() => {
        AOS.init();
    }, [])

    const planADatas = [
        {
            header: "حداقل روزهای معاملاتی در هر مرحله چقدر است؟",
            content: (
                <p className={`m-0 ${myFontIran.className} text-right rtl`}>
                    مرحله اول:
                    <br />
                    نیازمند 5 روز معاملاتی است. پس از تکمیل روزهای معاملاتی می‌توانید درخواست مرحله دوم را ارسال کنید.
                    <br />

                    مرحله دوم:
                    حداقل به مدت 5 روز معاملاتی، برای پاس شدن اهداف نیاز دارید.
                    <br />

                    اگر تریدر روز دوشنبه معامله‌ی خود را باز کند و روز پنج شنبه معامله‌ی خود را ببندد، فقط یک روز معاملاتی برای آن منظور خواهد شد که روز باز شدن ترید می‌باشد.
                    حداکثر 30 روز برای اجرای اولین معامله از زمان دریافت حساب معاملاتی زمان خواهید داشت.
                    با اولین ترید، زمان چلنج اغاز خواهد شد.
                </p>
            ),
        },
        {
            header: "اینسترومنت های (instruments) قابل معامله",
            content: (
                <p className={`m-0 ${myFontIran.className} text-right rtl`}>
                    تمامی جفت ارزهای فارکس، فارکس، شاخص ها و فلزات قابل استفاده هستند.
                </p>
            ),
        },
        {
            header: "درادون روزانه چگونه محاسبه میشود؟",
            content: (
                <p className={`m-0 ${myFontIran.className} text-right`}>
                    دراداون روزانه 5% است و بر حسب بالانس ابتدای روز، مقدار آن محاسبه می‌شود . افت حساب نباید از آن عدد عبور کند. (بالانس و اکوئیتی)
                    <br />
                    اگر تریدر، در شروع روز جدید یک یا چند پوزیشن باز داشته باشد ، بالانس و اکوئیتی حساب یکسان نخواهد بود و دراداون روزانه نسبت به “بالانس” ابتدای روز، محاسبه میگردد.
                    بررسی حالات:
                    <br />

                    در یک حساب با بالانس ابتدای روز 50,000$ ، درادون روزانه تریدر 2500$ است و نهایت افت مجاز از اکوئیتی و بالانس ، 47500$ میباشد
                    اگر در ابتدای روز اکوئیتی بالاتر از بالانس باشد، دراودان روزانه چگونه محاسبه می شود؟
                    در صورتی که ابتدای روز بالانس $10000 و اکوئیتی $10300 باشد، دراودان به نسبت بالانس $10000 محاسبه خواهد شد و مقدار آن $9500 است.
                    <br />

                    اگر در ابتدای روز اکوئیتی پایین تر از بالانس باشد، دراودان روزانه چگونه محاسبه می شود؟
                    فرض کنید بالانس $10000 و اکوئیتی $9800 باشد، به همین علت دراودان روزانه $9500 خواهد بود.
                    <br />

                    ابتدای روز چه زمانی است ؟
                    <br />

                    ساعت صفر به وقت بروکر که در متاتریدر با روشن کردن گزینه  Show period separator با خط چین عمودی نمایش داده می شود به عنوان زمان ابتدای روز در نظر گرفته خواهد شد.
                </p>
            ),
        },
        {
            header: "مقدار ریسک ممکن در هر ترید چقدر است؟",
            content: (
                <p className={`m-0 ${myFontIran.className} text-right`}>
                    حداقل و حداکثری وجود ندارد و مدیریت ریسک و سرمایه به عهده تریدر است. معامله‌گر در نوع استراتژی محدودیتی ندارد.
                    <br />
                    شایان ذکر است، موضوع فوق شامل معاملات قمارگونه نخواهد بود. برای اطلاعات بیشتر کلیک کنید.
                    <br />

                    نکته : در صورت قمار گونه بودن ترید ها به معامله گر اطلاع رسانی خواهد شد و در صورت عدم ارسال پیام مدیریت ریسک هیچ گونه محدودیتی برای درصد ریسک و سبک مدیریت سرمایه استفاده شده در هیچکدام از پلن ها وجود نخواهد داشت.
                    <br />

                    قراردادن SL و TP  ضرورتی ندارد اما پیشنهاد می‌شود برای مدیریت بهتر سرمایه استفاده شود.
                    <br />

                    بیش از 60 ٪ کاربرانی که حساب خود را از دست می‌دهند، از حدضرر استفاده نمی‌کنند.
                </p>
            ),
        },
        {
            header: "اگر پیش از تکمیل شدن روزهای معاملاتی به تارگت برسیم، اجازه باز کردن ترید با حداقل حجم را داریم؟",
            content: (
                <p className={`m-0 ${myFontIran.className} text-right`}>
                    در همه حساب ها میتوانید حجم خود را تا حد امکان کاهش دهید.
                </p>
            ),
        },
        {
            header: "پس از موفقیت در مرحله اول چلنج باید چه کاری انجام دهیم؟",
            content: (
                <p className={`m-0 ${myFontIran.className} text-right`}>
                    با ضمن تبریک به شما ،
                    <br />
                    حساب های سرور اختصاصی SGB، به صورت خودکار ارسال میشود و نیاز به اطلاع رسانی کاربر ندارد.
                    <br />

                    در بروکر های دیگر، شما باید به پشتیبان سایت اطلاع دهید و پس از بررسی اکانت، مرحله دوم چلنج را دریافت کنید.
                </p>
            ),
        },
        {
            header: "اگر ترید از درادون عبور کند و سپس به سود برگردد، قوانین نقض شده است؟",
            content: (
                <p className={`m-0 ${myFontIran.className} text-right`}>
                    بله، به هیچ عنوان نباید اکوئیتی حساب از مقدار 5% روزانه و 12% کل بالانس عبور کند. در صورت گذر کردن از آن قوانین نقض شده و معامله گر اکانت خود را از دست میدهد.
                    <br />
                    اگر در حساب لایو، تریدر بیشتر از دراودان کلی ضرر کند، آیا باید به شرکت خسارت پرداخت کند؟
                    <br />

                    خیر، تریدر برای ضررها به شرکت خسارتی پرداخت نخواهد کرد.
                    <br />

                    اگر قوانین نقض شود چه اتفاقی می افتد؟
                    <br />

                    پس از نقض قوانین شما از دور خارج خواهید شد و شانس خود را برای دریافت فاند از دست خواهید داد . توجه داشته باشید میتوانید دوباره ثبت نام کنید و توانایی های خود را در ترید کردن اثبات کنید.
                </p>
            ),
        },
        {
            header: "آیا تریدها را میتوان هولد (Hold) کرد؟",
            content: (
                <p className={`m-0 ${myFontIran.className} text-right`}>
                    بله ؛ شما میتوانید تریدها را در پایان روز و هفته نگه دارید.
                    <br />
                    امکان بستن تریدها در روز های تعطیل (شنبه و یکشنبه) در نمادهای فارکس وجود ندارد.
                    <br />

                    پس از باز شدن مارکت در روز دوشنبه، ممکن است با فاصله قیمتی زیادی از حدضرر شما عبور کند.
                    <br />

                    آیا در روزهای شنبه و یکشنبه میتوان در فارکس ها ترید کرد؟
                    <br />

                    خیر، مطلقاً در تمامی حساب ها ممنوع میباشد و در صورت ترید کردن، حساب مسدود خواهد شد.
                    <br />

                    فعال شدن هر گونه اردری موجب نقض قانون خواهد شد ( Pending Orders ،TP ،SL و Buy ,Sell )
                </p>
            ),
        },
        {
            header: "احراز هویت چگونه انجام میشود؟",
            content: (
                <p className={`m-0 ${myFontIran.className} text-right`}>
                    معامله گر برای احراز هویت باید حداقل 18 سال داشته باشد.
                    ارسال یک مدرک شناسایی معتبر اعم از : پاسپورت ، کارت ملی یا شناسنامه الزامی است.
                    برای ارسال عکس سلفی باید پاسپورت، کارت ملی یا شناسنامه در دست چپ، مقابل سینه قرار داشته باشد. تصویر ارسالی باید واضح، با لباس تیره درپس زمینه روشن ساده، بدون عینک باشند. دقت نمایید در عکس شانه ها کاملا در قاب قرار گیرند. عکس هایی که شانه ی کامل در آن‌ها مشخص نباشد رد خواهند شد.
                    <br />
                    با عبور از مراحل چلنج، لطفا به آدرس روبه رو verify@ArainVest.com ایمیل بزنید.
                    اطلاعات پرداخت کننده (درگاه های پرداخت) با اطلاعات شخص در وبسایت باید یکسان باشد.
                    حجم تصاویر بیش از 4 مگابایت، مورد پذیرش نخواهد بود و پسوند تصاویر ترجیحا JPG باشد.
                </p>
            ),
        },
        {
            header: "عودت وجه چگونه انجام میشود؟(ریفاند)",
            content: (
                <p className={`m-0 ${myFontIran.className} text-right`}>
                    پس از موفقیت در مرحله اول و دوم 20% و پس از اولین برداشت 100% از مبلغ چلنج عودت داده میشود. (مجموعا 120%)
                </p>
            ),
        },
        {
            header: "آیا اکانت ها قابلیت ریست دارند ؟",
            content: (
                <p className={`m-0 ${myFontIran.className} text-right`}>
                    به معنای دریافت اکانت، از نو است.
                    <br />
                    یعنی میتوانید اکانتی جدید دریافت کنید که مهلت زمانی و درصد سود در اکانت بازنشانی شده است.
                    <br />

                    شرایط ریست:
                    <br />

                    حساب در سود باشد. (مقدار آن مهم نیست)
                    قوانین نقض نشده باشد.
                    روزهای معاملاتی تکمیل باشد. (5 روز معاملاتی)
                    مهلت چلنج پایان یافته باشد.
                    اگر اکانت در پایان ماه و یا پس از اکستند شدن در سود باشد اکانت شما ریست میشود ؛ ریست شدن اکانت بصورت نامحدود است .
                </p>
            ),
        },
    ];

    const planBDatas = [
        {
            header: "زمان چلنج",
            content: (
                <p className={`m-0 ${myFontIran.className} text-right rtl`}>
                    سپری نمودن دو مرحله
                    <br />
                    تریدر برای تکمیل کردن فاز اول و دوم، محدودیت زمانی ندارد. ( روزهای معاملاتی نامحدود)
                    <br />
                    در هر مرحله پس از ارسال اطلاعات چلنج، حداکثر 30 روز تقویمی برای شروع، زمان در نظر گرفته شده و در صورت عدم ثبت ترید، چلنج منقضی میگردد.
                </p>
            ),
        },
        {
            header: "تارگت های سودمند یا هدف ها",
            content: (
                <p className={`m-0 ${myFontIran.className} text-right rtl`}>
                    تارگت مرحله اول 10% و تارگت مرحله دوم 5% است.
                    <br />
                    حساب های سرور اختصاصی SGB، به صورت خودکار ارسال میشود و نیاز به اطلاع رسانی کاربر ندارد.
                    <br />
                    قابل توجه تریدرهای عزیز، در اکانت Real  تارگت سودی وجود ندارد.
                </p>
            ),
        },
        {
            header: "اُفت حساب",
            content: (
                <p className={`m-0 ${myFontIran.className} text-right`}>
                    Maximum Drawdown  بر حسب بالانس اولیه اکانت محاسبه میشود و مقدار آن 12% است.
                    <br />
                    بدین معنا که درادون اکانت بر روی 12% موجودی اولیه ثابت است و نباید بالانس یا اکوئیتی حساب از آن عبور کند.
                    <br />

                    مثال اول: اگر در اکانت 2% سود کسب نمایید، درادون شما 14% می‌باشد.
                    <br />

                    مثال دوم: در پلن 50,000$، بالانس و اکوئیتی حساب نباید از 44,000$ عبور کند.
                    <br />

                    Daily Drawdown  بر حسب بالانس اکانت در ابتدای روز محاسبه میشود و مقدار آن 5% میباشد. افت حساب نباید از آن عدد عبور کند.
                </p>
            ),
        },
        {
            header: "مقدار ریسک ممکن در هر ترید چقدر است؟",
            content: (
                <p className={`m-0 ${myFontIran.className} text-right`}>
                    حداقل و حداکثری وجود ندارد و مدیریت ریسک و سرمایه به عهده تریدر است. معامله‌گر در نوع استراتژی محدودیتی ندارد.
                    <br />
                    شایان ذکر است، موضوع فوق شامل معاملات قمارگونه نخواهد بود. برای اطلاعات بیشتر کلیک کنید.
                    <br />

                    نکته : در صورت قمار گونه بودن ترید ها به معامله گر اطلاع رسانی خواهد شد و در صورت عدم ارسال پیام مدیریت ریسک هیچ گونه محدودیتی برای درصد ریسک و سبک مدیریت سرمایه استفاده شده در هیچکدام از پلن ها وجود نخواهد داشت.
                    <br />

                    قراردادن SL و TP  ضرورتی ندارد اما پیشنهاد می‌شود برای مدیریت بهتر سرمایه استفاده شود.
                    <br />

                    بیش از 60 ٪ کاربرانی که حساب خود را از دست می‌دهند، از حدضرر استفاده نمی‌کنند.
                </p>
            ),
        },
        {
            header: "اگر پیش از تکمیل شدن روزهای معاملاتی به تارگت برسیم، اجازه باز کردن ترید با حداقل حجم را داریم؟",
            content: (
                <p className={`m-0 ${myFontIran.className} text-right`}>
                    در همه حساب ها میتوانید حجم خود را تا حد امکان کاهش دهید.
                </p>
            ),
        },
        {
            header: "پس از موفقیت در مرحله اول چلنج باید چه کاری انجام دهیم؟",
            content: (
                <p className={`m-0 ${myFontIran.className} text-right`}>
                    با ضمن تبریک به شما ،
                    <br />
                    حساب های سرور اختصاصی SGB، به صورت خودکار ارسال میشود و نیاز به اطلاع رسانی کاربر ندارد.
                    <br />

                    در بروکر های دیگر، شما باید به پشتیبان سایت اطلاع دهید و پس از بررسی اکانت، مرحله دوم چلنج را دریافت کنید.
                </p>
            ),
        },
        {
            header: "اگر ترید از درادون عبور کند و سپس به سود برگردد، قوانین نقض شده است؟",
            content: (
                <p className={`m-0 ${myFontIran.className} text-right`}>
                    بله، به هیچ عنوان نباید اکوئیتی حساب از مقدار 5% روزانه و 12% کل بالانس عبور کند. در صورت گذر کردن از آن قوانین نقض شده و معامله گر اکانت خود را از دست میدهد.
                    <br />
                    اگر در حساب لایو، تریدر بیشتر از دراودان کلی ضرر کند، آیا باید به شرکت خسارت پرداخت کند؟
                    <br />

                    خیر، تریدر برای ضررها به شرکت خسارتی پرداخت نخواهد کرد.
                    <br />

                    اگر قوانین نقض شود چه اتفاقی می افتد؟
                    <br />

                    پس از نقض قوانین شما از دور خارج خواهید شد و شانس خود را برای دریافت فاند از دست خواهید داد . توجه داشته باشید میتوانید دوباره ثبت نام کنید و توانایی های خود را در ترید کردن اثبات کنید.
                </p>
            ),
        },
        {
            header: "آیا تریدها را میتوان هولد (Hold) کرد؟",
            content: (
                <p className={`m-0 ${myFontIran.className} text-right`}>
                    بله ؛ شما میتوانید تریدها را در پایان روز و هفته نگه دارید.
                    <br />
                    امکان بستن تریدها در روز های تعطیل (شنبه و یکشنبه) در نمادهای فارکس وجود ندارد.
                    <br />

                    پس از باز شدن مارکت در روز دوشنبه، ممکن است با فاصله قیمتی زیادی از حدضرر شما عبور کند.
                    <br />

                    آیا در روزهای شنبه و یکشنبه میتوان در فارکس ها ترید کرد؟
                    <br />

                    خیر، مطلقاً در تمامی حساب ها ممنوع میباشد و در صورت ترید کردن، حساب مسدود خواهد شد.
                    <br />

                    فعال شدن هر گونه اردری موجب نقض قانون خواهد شد ( Pending Orders ،TP ،SL و Buy ,Sell )
                </p>
            ),
        },
        {
            header: "احراز هویت چگونه انجام میشود؟",
            content: (
                <p className={`m-0 ${myFontIran.className} text-right`}>
                    معامله گر برای احراز هویت باید حداقل 18 سال داشته باشد.
                    ارسال یک مدرک شناسایی معتبر اعم از : پاسپورت ، کارت ملی یا شناسنامه الزامی است.
                    برای ارسال عکس سلفی باید پاسپورت، کارت ملی یا شناسنامه در دست چپ، مقابل سینه قرار داشته باشد. تصویر ارسالی باید واضح، با لباس تیره درپس زمینه روشن ساده، بدون عینک باشند. دقت نمایید در عکس شانه ها کاملا در قاب قرار گیرند. عکس هایی که شانه ی کامل در آن‌ها مشخص نباشد رد خواهند شد.
                    <br />
                    با عبور از مراحل چلنج، لطفا به آدرس روبه رو verify@ArainVest.com ایمیل بزنید.
                    اطلاعات پرداخت کننده (درگاه های پرداخت) با اطلاعات شخص در وبسایت باید یکسان باشد.
                    حجم تصاویر بیش از 4 مگابایت، مورد پذیرش نخواهد بود و پسوند تصاویر ترجیحا JPG باشد.
                </p>
            ),
        },
        {
            header: "عودت وجه چگونه انجام میشود؟(ریفاند)",
            content: (
                <p className={`m-0 ${myFontIran.className} text-right`}>
                    پس از موفقیت در مرحله اول و دوم 20% و پس از اولین برداشت 100% از مبلغ چلنج عودت داده میشود. (مجموعا 120%)
                </p>
            ),
        },
        {
            header: "آیا اکانت ها قابلیت ریست دارند ؟",
            content: (
                <p className={`m-0 ${myFontIran.className} text-right`}>
                    به معنای دریافت اکانت، از نو است.
                    <br />
                    یعنی میتوانید اکانتی جدید دریافت کنید که مهلت زمانی و درصد سود در اکانت بازنشانی شده است.
                    <br />

                    شرایط ریست:
                    <br />

                    حساب در سود باشد. (مقدار آن مهم نیست)
                    قوانین نقض نشده باشد.
                    روزهای معاملاتی تکمیل باشد. (5 روز معاملاتی)
                    مهلت چلنج پایان یافته باشد.
                    اگر اکانت در پایان ماه و یا پس از اکستند شدن در سود باشد اکانت شما ریست میشود ؛ ریست شدن اکانت بصورت نامحدود است .
                </p>
            ),
        },
    ];

    const [visibleA, setVisibleA] = useState<boolean>(false);
    const [visibleB, setVisibleB] = useState<boolean>(false);



    return (
        <main
            className={`flex min-h-screen flex-col ${inter.className}`}
        >
            <PrimeReactProvider>
                <Dialog
                    header="پلن قدیمی، محبوب و خاص SGB، برای عموم تریدرهای مجموعه" visible={visibleA} style={{
                        width: '60vw', display: 'flex', flexDirection: 'column',
                        backgroundColor: '#252525'
                    }}
                    className={`${myFont.className} font-normal`}
                    onHide={() => setVisibleA(false)}
                >
                    <Image src={logo} alt='logo' className='absolute right-[30px] top-[-20px]' />
                    <Accordion multiple className='gap-y-4 ml-48 mb-24 mt-8'>
                        {planADatas.map((item, index) => (
                            <AccordionTab
                                key={index}
                                style={{ width: '100%' }}
                                className='text-white text-right w-full'
                                header={item.header}
                            >
                                {item.content}
                            </AccordionTab>
                        ))}
                    </Accordion>
                </Dialog>
                <Dialog
                    header="SGB راه حل جدیدی برای گروهی از کاربران توانا یافته است. این پلن حاشیه امنی است که باعث میشود منسجم تر از پیش به تخصص خود ادامه دهید.
                    " visible={visibleB} style={{
                        width: '60vw', display: 'flex', flexDirection: 'column',
                        backgroundColor: '#252525'
                    }}
                    className={`${myFont.className} font-normal`}
                    onHide={() => setVisibleB(false)}
                >
                    <Image src={logo} alt='logo' className='absolute right-[30px] top-[-20px]' />

                    <Accordion multiple className='gap-y-4 ml-48 mb-24 mt-8'>
                        {planBDatas.map((item, index) => (
                            <AccordionTab
                                key={index}
                                style={{ width: '100%' }}
                                className='text-white text-right w-full'
                                header={item.header}
                            >
                                {item.content}
                            </AccordionTab>
                        ))}
                    </Accordion>
                </Dialog>
                <Header active={2} />
                <div className='text-white w-10/12 mx-auto mt-20'>
                    <h2 className={`${myFont.className} text-3xl mb-6 text-center text-white`}
                    >
                        قوانین پلن انتخابی را  <span style={{ color: '#F68D2E' }}> به دقت مطالعه نمایید</span>
                    </h2>
                    <p className={`${myFontIran.className} text-center leading-loose`}>
                        بسیاری از ابهامات و سوال هایی که ممکن است برای شما ایجاد شود در این بخش مورد بررسی قرار گرفته است. تریدر باید دو مرحله در اکانت دمو ترید کند و بدون نقض قوانین، به تارگت های پیش رو برسد. پس از تکمیل سفارش، معامله گران در چلنج شرکت خواهند نمود. تریدر باید در حساب های Demo، با رعایت قوانین، به تارگت مراحل برسد.
                    </p>
                </div>

                <div className='flex flex-row-reverse justify-center items-center mt-24'
                    data-aos-duration="2000" data-aos-once={true} data-aos="zoom-in"
                >
                    <Image src={rules} alt='rules' unoptimized />
                    <p className={`${myFont.className} mr-5 text-white text-4xl`}>
                        قوانین کلی <span style={{ color: '#F68D2E' }}> پلن ها </span>
                    </p>
                </div>

                <div className='px-12 mt-20 flex flex-row justify-center gap-x-32 mb-32'
                    data-aos-duration="2000" data-aos-once={true} data-aos="zoom-in-up"
                >
                    <RulesComponent onClick={() => setVisibleA(true)} translate={0} text='قوانین پلن کِلاس A' feature='(تارگت سود کمتر)' />
                    <RulesComponent onClick={() => setVisibleB(true)} translate={0} text='قوانین پلن کِلاس B' feature='(بدون محدودیت زمانی)' />
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
                        قوانین کلی <span style={{ color: '#F68D2E' }}> مربوط به سایت </span>
                    </p>
                </div>

                <div>
                    <Accordion multiple className='grid grid-cols-2 gap-y-4 ml-12 mb-24 mt-8'>
                        <AccordionTab
                            className='text-white text-right' header="آیا میتوانیم پسورد حساب متاتریدر را تغییر دهیم؟">
                            <p className={`m-0 ${myFontIran.className} text-right`}>
                                تریدر قادر است پسورد اصلی حساب متاتریدر خود را تغییر دهد.
                                <br />
                                تغییر Investor Password ممنوع میباشد.
                                <br />
                                اطلاعات اکانت به ایمیل شما ارسال خواهد شد و مسئولیت حفظ و امنیت آن برعهده تریدر است.
                            </p>
                        </AccordionTab>
                        <AccordionTab header="زمان چلنج">
                            <p className={`m-0 ${myFontIran.className} text-right rtl`}>
                                سپری نمودن دو مرحله
                                <br />
                                هرمرحله به ترتیب 30 روز تقویمی و 60 روز تقویمی مهلت دارد.
                                <br />
                                با اولین ترید مهلت چلنج آغاز شده و 30 روز تقویمی زمان در نظر گرفته میشود.
                                <br />
                                در پلن کلاس B، محدودیت زمانی وجود ندارد..
                            </p>
                        </AccordionTab>
                        <AccordionTab header="اُفت حساب">
                            <p className={`m-0 ${myFontIran.className} text-right rtl`}>
                                Maximum Drawdown بر حسب بالانس اولیه اکانت محاسبه میشود و مقدار آن 12% است.
                                <br />
                                بدین معنا که درادون اکانت بر روی 12% موجودی اولیه ثابت است و نباید بالانس یا اکوئیتی حساب از آن عبور کند.
                                <br />

                                مثال اول: اگر در اکانت 2% سود کسب نمایید، درادون شما 14% می‌باشد.
                                <br />

                                مثال دوم: در پلن 50,000$، بالانس و اکوئیتی حساب نباید از 44,000$ عبور کند.
                                <br />

                                Daily Drawdown بر حسب بالانس اکانت در ابتدای روز محاسبه میشود و مقدار آن 5% میباشد. افت حساب نباید از آن عدد عبور کند.
                            </p>
                        </AccordionTab>
                        <AccordionTab header="تارگت های سودمند یا هدف ها">
                            <p className={`m-0 ${myFontIran.className} text-right rtl`}>
                                به معنای مقدار سودی است که تریدر باید کسب کند تا بتواند مراحل چلنج را با موفقیت سپری نمابد.
                                <br />
                                مثال:
                                <br />

                                در پلن کلاس A تارگت سود مرحله اول، 8% است.
                                پس در یک حساب 50,000$، برای پاس شدن فاز یک، سود حساب باید به 4,000$ برسد.
                                <br />

                                در پلن کلاس B تارگت سود مرحله اول، 10% است.
                                پس در یک حساب 50,000$، برای پاس شدن فاز یک، سود حساب باید به 5,000$ برسد.
                                <br />

                                قابل توجه معامله گران، در اکانت Real تارگت سودی وجود ندارد.
                            </p>
                        </AccordionTab>
                        <AccordionTab header="SGB Trader">
                            <p className={`m-0 ${myFontIran.className} text-right rtl`}>
                                چگونه می‌توانیم تریدر ویژه‌ی شرکت شویم؟(SGB Trader)
                                <br />
                                🔸تریدر ویژه، معامله‌گری است که ریسک خود را مدیریت می‌کند. این موقعیت برای افرادی است که ریسک تریدهای باز خود را بیشتر از 2% افزایش نمی‌دهند.
                                <br />

                                – تقسیم سود 90% برای SGB Traders پس از دو ماه فعالیت
                                <br />

                                – پرداخت سود هفتگی، برای SGB Traders پس از دو ماه فعالیت
                                <br />

                                – افزایش تایم اکستند از 10 روز به  20 روز برای SGB Traders
                                <br />

                                – رشد حساب 40 درصدی در بازه های دو ماهه

                            </p>
                        </AccordionTab>
                        <AccordionTab header="احراز هویت چگونه انجام میشود؟">
                            <p className={`m-0 ${myFontIran.className} text-right rtl`}>
                                معامله گر برای احراز هویت باید حداقل 18 سال داشته باشد.
                                ارسال یک مدرک شناسایی معتبر اعم از : پاسپورت ، کارت ملی یا شناسنامه الزامی است.
                                <br />
                                برای ارسال عکس سلفی باید پاسپورت، کارت ملی یا شناسنامه در دست چپ، مقابل سینه قرار داشته باشد. تصویر ارسالی باید واضح، با لباس تیره درپس زمینه روشن ساده، بدون عینک باشند. دقت نمایید در عکس شانه ها کاملا در قاب قرار گیرند. عکس هایی که شانه ی کامل در آن‌ها مشخص نباشد رد خواهند شد.
                                <br />

                                با عبور از مراحل چلنج، لطفا به آدرس روبه رو verify@ArainVest.com ایمیل بزنید.
                                اطلاعات پرداخت کننده (درگاه های پرداخت) با اطلاعات شخص در وبسایت باید یکسان باشد.
                                حجم تصاویر بیش از 4 مگابایت، مورد پذیرش نخواهد بود و پسوند تصاویر ترجیحا JPG باشد.
                            </p>
                        </AccordionTab>
                        <AccordionTab header="مقدار ریسک ممکن در هر ترید چقدر است؟">
                            <p className={`m-0 ${myFontIran.className} text-right rtl`}>
                                حداقل و حداکثری وجود ندارد و مدیریت ریسک و سرمایه به عهده تریدر است. معامله‌گر در نوع استراتژی محدودیتی ندارد.
                                <br />
                                شایان ذکر است، موضوع فوق شامل معاملات قمارگونه نخواهد بود. برای اطلاعات بیشتر کلیک کنید.
                                <br />

                                نکته : در صورت قمار گونه بودن ترید ها به معامله گر اطلاع رسانی خواهد شد و در صورت عدم ارسال پیام مدیریت ریسک هیچ گونه محدودیتی برای درصد ریسک و سبک مدیریت سرمایه استفاده شده در هیچکدام از پلن ها وجود نخواهد داشت.
                                <br />

                                قراردادن SL و TP  ضرورتی ندارد اما پیشنهاد می‌شود برای مدیریت بهتر سرمایه استفاده شود.
                            </p>
                        </AccordionTab>
                        <AccordionTab header="اینسترومنت های (instruments) قابل معامله">
                            <p className={`m-0 ${myFontIran.className} text-right rtl`}>
                                تمامی جفت ارزهای فارکس، فارکس، شاخص ها و فلزات قابل استفاده هستند.
                            </p>
                        </AccordionTab>
                        <AccordionTab header="آیا تریدها را میتوان هولد (Hold) کرد؟">
                            <p className={`m-0 ${myFontIran.className} text-right rtl`}>
                                بله ؛ شما میتوانید تریدها را در پایان روز و هفته نگه دارید.
                                <br />
                                امکان بستن تریدها در روز های تعطیل (شنبه و یکشنبه) در نمادهای فارکس وجود ندارد.
                                <br />

                                پس از باز شدن مارکت در روز دوشنبه، ممکن است با فاصله قیمتی زیادی از حدضرر شما عبور کند.
                            </p>
                        </AccordionTab>
                        <AccordionTab header="آیا پس از دریافت اکانت لایو باید هزینه ای پرداخت شود؟">
                            <p className={`m-0 ${myFontIran.className} text-right rtl`}>
                                خیر ؛ پلن ها one-time fee هستند و تنها یکبار در ابتدای ثبت نام ، نیاز به پرداخت میباشد .
                            </p>
                        </AccordionTab>

                        <AccordionTab header="چند اکانت میتوانیم دریافت کنیم ؟">
                            <p className={`m-0 ${myFontIran.className} text-right rtl`}>
                                در تعداد حساب ها محدودیتی وجود ندارد. سقف دریافت حساب 250,000$ است.
                                <br />
                                در حساب ریل امکان ادغام حساب ها در پلن مربوطه وجود دارد.
                            </p>
                        </AccordionTab>

                        <AccordionTab header="پرداخت و تقسیم سود چگونه انجام میشود ؟">
                            <p className={`m-0 ${myFontIran.className} text-right rtl`}>
                                در SGB، تقسیم سود تا سقف 90%، امکان پذیر است.
                                <br />
                                پلن های کلاس A و B، شرایط برداشت متفاوتی نسبت به یکدیگر دارد. برای اطلاعات بیشتر، قوانین بخش مربوطه را در بالای صفحه مطالعه کنید.
                                <br />

                                برداشت سود، در حال حاضر از طریق فارکس (TETHER – TRC20) میسر است.
                                <br />

                                آیا تریدر میتواند مقداری از سود خود را برداشت نکند؟
                                <br />

                                بله، تریدر می تواند مقداری از سود خود را برداشت نکند.
                                <br />

                                اگر شما در حساب ده هزاردلاری لایو، حساب خود را تا 12,000$ رشد دهید و سپس هزار دلار دلار آن را برداشت کنید، مقدار بالانس جدید شما 11,000$ می شود ، اما دراودان کلی شما همان 8800 دلار می ماند.
                                <br />

                                در زمان رشد حساب توسط شرکت (رشد 40 درصدی)، درادون کل نسبت به بالانس جدید محاسبه میشود.
                                <br />

                                در یک حساب 200,000$ و رشد به 280,000$، سقف افت حساب 246,400$ است.
                                <br />

                                آیا میتوانیم بعد از نقض قوانین در حساب ریل، سود باقی مانده در اکانت خود را برداشت نمائیم؟
                                <br />

                                خیر، اگر بعد از نقض قوانین اکانت شما در سود باشد نمی توانید سود باقی مانده را برداشت کنید
                                <br />

                                به عنوان مثال اگر شما اکانت ده هزاردلاری خود را به 12,000$ رسانده و بعد از آن در یک روز 1,000$ ضرر کنید و حساب را به 11,000$ برسانید، متاسفانه شما قوانین دراودان روزانه را نقض کرده اید و دیگر نمیتوانید هزار دلار سود باقیمانده را برداشت کنید.
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
            </PrimeReactProvider>
        </main>
    )
}
