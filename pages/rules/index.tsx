import { useState } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { Checkbox } from "primereact/checkbox";
import chart from '../../assets/images/chart.png'
const inter = Inter({ subsets: ['latin'] })
import localFont from 'next/font/local'
import rules from '../../assets/icons/rules.svg'
import Footer from '@/components/Footer/Footer'
import RulesComponent from '@/components/RulesComponent/RulesComponent';
const myFont = localFont({ src: '../../assets/Fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/Fonts/iranyekanwebregular_0.ttf' })



export default function Rules() {

    const items = ['لورم ایپسوم با تولید ساده', 'لورم ایپسوم متن ساختگی', 'متن ساختگی با تولید ساده', 'لورم ایپسوم ساختگی با تولید ساده', 'لورم ایپسوم متن ساختگی با تولید ساده']

    return (
        <main
            className={`flex min-h-screen flex-col ${inter.className}`}
        >
            <PrimeReactProvider>
                <Header />

                <div className='text-white w-10/12 mx-auto mt-20'>
                    <h2 className={`${myFont.className} text-3xl mb-6 text-center text-white`}
                    >
                        پیش از ثبت نام قوانین را  <span style={{ color: '#F68D2E' }}> کامل مطالعه کنید </span>
                    </h2>
                    <p className={`${myFontIran.className} text-center leading-loose`}>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                    </p>
                </div>

                <div className='flex flex-row-reverse justify-center items-center mt-24'>
                    <Image src={rules} alt='rules' unoptimized />
                    <p className={`${myFont.className} mr-5 text-white text-4xl`}>
                        قوانین کلی <span style={{ color: '#F68D2E' }}> مربوط به سایت </span>
                    </p>
                </div>

                <div className='px-12 mt-20 grid grid-cols-3 gap-y-12 mb-32'>
                    <RulesComponent translate={0} text='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است؟' />
                    <RulesComponent translate={20} text='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است؟' />
                    <RulesComponent translate={50} text='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است؟' />
                    <RulesComponent translate={0} text='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است؟' />
                    <RulesComponent translate={20} text='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است؟' />
                    <RulesComponent translate={50} text='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است؟' />

                </div>

                <Footer />
            </PrimeReactProvider>
        </main>
    )
}
