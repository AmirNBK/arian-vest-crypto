import Image, { StaticImageData } from 'next/image';
import localFont from 'next/font/local'
import React from 'react';
import Link from 'next/link';
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
const myFontIranLight = localFont({ src: '../../assets/fonts/iranyekanweblight_0.ttf' })

const NewsComponent = (props: {
    image: StaticImageData
    text: string
    translate: number
    id: number
    isLocationIran?: boolean
}) => {
    return (
        <Link href={`/blogs/${props.id}`} className={`${myFontIran.className} flex items-center px-6 relative leading-relaxed cursor-pointer
        text-lg RulesComponent rounded-xl text-center text-white w-fit bg-new-black transition duration-700	`}
            style={{ maxWidth: '350px', height: '450px', transform: `translateY(${props.translate}px)` }}
        >
            <Image src={props.image} alt='logo' width={270} height={270} className='absolute rounded-lg right-1/2 h-[290px] object-cover translate-x-1/2' unoptimized
                style={{ top: '-15%' }}
            />

            <div style={{ marginBottom: '-250px' }}>
                <p style={{ direction: 'rtl' }} className={`${myFontIranLight.className} mb-6 duration-700 font-light`}
                >
                    {props.text}
                </p>

                <p className='text-main-orange' style={{ textDecoration: 'underline' }}>
                    {props.isLocationIran ? ' اطلاعات بیشتر' : 'More information'}

                </p>
            </div>
        </Link>
    );
};

export default NewsComponent;