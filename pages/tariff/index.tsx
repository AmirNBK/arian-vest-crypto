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
import tariff from '../../assets/icons/tariff.svg'
import TariffComponent from '@/components/TariffComponent/TariffComponent';


export default function Rules() {

    return (
        <main
            className={`flex min-h-screen flex-col ${inter.className}`}
        >
            <PrimeReactProvider>
                <Header />

                <div className='flex flex-col'>
                    <div className={`${myFont.className} justify-center flex flex-row-reverse gap-4 items-center mr-12 mt-8`}>
                        <Image src={tariff} alt='faq' />
                        <p className='text-white text-5xl'>
                            <span className='text-3xl text-main-orange'> (classic) </span> تعرفه های <span style={{ color: '#F68D2E' }}> ارین وست </span>
                        </p>
                    </div>
                    <div>
                        <p className={`${myFontIran.className} text-center text-white leading-loose text-white w-10/12 mx-auto mt-12`}>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                        </p>
                    </div>
                </div>
                <div className='mt-12'>
                    <TariffComponent title='-Classic challenge-' price={30}
                        description='لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه.' />
                </div>
            </PrimeReactProvider>
        </main>
    )
}
