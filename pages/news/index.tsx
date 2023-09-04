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
import newspaper from '../../assets/icons/newspaper2.svg'
import NewsComponent from '@/components/NewsComponent/NewsComponent';
import pic from '../../assets/images/newsPic.png'
import Footer from '@/components/Footer/Footer';

export default function SingleBlog() {

    const items = ['لورم ایپسوم با تولید ساده', 'لورم ایپسوم متن ساختگی', 'متن ساختگی با تولید ساده', 'لورم ایپسوم ساختگی با تولید ساده', 'لورم ایپسوم متن ساختگی با تولید ساده']

    return (
        <main
            className={`flex min-h-screen flex-col ${inter.className}`}
        >
            <PrimeReactProvider>
                <Header />

                <div className={`${myFont.className} justify-center flex flex-row-reverse gap-4 items-center mr-12 mt-8`}>
                    <Image src={newspaper} alt='faq' />
                    <p className='text-white text-4xl'>
                        آرشیو <span style={{ color: '#F68D2E' }}>  اخبار و مقالات </span>
                    </p>
                </div>


                <div className='px-12 mt-20 grid grid-cols-3 gap-y-24 mb-32'>
                    <NewsComponent text='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها.' translate={0} image={pic} />
                    <NewsComponent text='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها.' translate={30} image={pic} />
                    <NewsComponent text='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها.' translate={0} image={pic} />
                    <NewsComponent text='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها.' translate={0} image={pic} />
                    <NewsComponent text='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها.' translate={30} image={pic} />
                    <NewsComponent text='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها.' translate={0} image={pic} />
                </div>

                <Footer />

            </PrimeReactProvider>
        </main>
    )
}
