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
import newspaper from '../../../assets/icons/newspaper.svg'
import Footer from '@/components/Footer/Footer'
const myFont = localFont({ src: '../../../assets/Fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../../assets/Fonts/iranyekanwebregular_0.ttf' })
import blogImage from '../../../assets/images/blog.png'
import blogImage2 from '../../../assets/images/blog2.png'
import blogImage3 from '../../../assets/images/blog3.png'



export default function SingleBlog() {

    const items = ['لورم ایپسوم با تولید ساده', 'لورم ایپسوم متن ساختگی', 'متن ساختگی با تولید ساده', 'لورم ایپسوم ساختگی با تولید ساده', 'لورم ایپسوم متن ساختگی با تولید ساده']

    return (
        <main
            className={`flex min-h-screen flex-col ${inter.className}`}
        >
            <PrimeReactProvider>
                <Header />
                <div className='flex flex-row-reverse gap-6 justify-center items-center mt-16'>
                    <Image src={newspaper} alt='newspaper' unoptimized />
                    <p className={`${myFont.className} text-white text-4xl`}>
                        اسم و تایتل <span style={{ color: '#F68D2E' }}> خبر مورد نظر </span>
                    </p>
                </div>

                <div>
                    <Image src={blogImage} alt='blogimage' className='mx-auto mt-12' unoptimized />
                </div>

                <div className='text-white w-10/12 mx-auto mt-20'>
                    <h2 className={`${myFont.className} text-3xl mb-6 text-center`}>
                        لورم ایپسوم متن ساختگی با تولید ساده
                    </h2>
                    <p className={`${myFontIran.className} text-center leading-loose`}>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                    </p>
                </div>

                <div className='text-white w-10/12 mx-auto mt-20'>
                    <h2 className={`${myFont.className} text-3xl mb-6 text-center`}
                        style={{ color: '#F68D2E' }}
                    >
                        لورم ایپسوم متن ساختگی با تولید ساده
                    </h2>
                    <p className={`${myFontIran.className} text-center leading-loose`}>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                    </p>
                </div>

                <div>
                    <Image src={blogImage2} alt='blogimage' className='mx-auto mt-12' unoptimized />
                </div>

                <div className='text-white w-10/12 mx-auto mt-20'>
                    <h2 className={`${myFont.className} text-3xl mb-6 text-center`}
                        style={{ color: '#F68D2E' }}
                    >
                        لورم ایپسوم متن ساختگی با تولید ساده
                    </h2>
                    <p className={`${myFontIran.className} text-center leading-loose`}>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                    </p>
                </div>

                <div className={`${myFontIran.className} flex flex-row justify-center gap-x-12 gap-y-4 flex-wrap mt-20`}>
                    {items.map((item) => {
                        return (
                            <div className='flex flex-row-reverse gap-2 items-center'>
                                <div className='rounded-full' style={{ background: '#F68D2E', width: '10px', height: '10px' }}>
                                </div>
                                <p style={{ color: '#F68D2E' }} className='text-xl'>
                                    {item}
                                </p>
                            </div>
                        )
                    })}
                </div>
                <div className='text-white w-10/12 mx-auto mt-44'>
                    <p className={`${myFontIran.className} text-center leading-loose`}>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                    </p>
                </div>

                <div>
                    <Image src={blogImage3} alt='blogimage' className='mx-auto mt-12' unoptimized />
                </div>

                <div className='w-8/12 mx-auto text-white px-6 pb-12 pt-4 mt-6 mb-40'
                    style={{ backgroundColor: 'rgba(206, 206, 206, 0.25)', borderRadius: '15px', backdropFilter: 'blur(2px)' }}>
                    <h2 className={`${myFont.className} text-3xl mb-6 text-center`}
                    >
                        - لورم ایپسوم متن ساختگی با تولید ساده -
                    </h2>
                    <p className={`${myFontIran.className} text-center leading-loose`}>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                    </p>
                </div>


                <Footer />
            </PrimeReactProvider>
        </main>
    )
}
