import Image from 'next/image';
import React from 'react';
import logo from '../../assets/icons/logo.png'
import profile from '../../assets/icons/profile.svg'
import localFont from 'next/font/local'
import Link from 'next/link';
import 'animate.css';
const myFont = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })

const Header = (props: {
    active?: number
}) => {
    const header = [
        { label: 'صفحه اصلی', url: '/' },
        { label: 'تعرفه ها', url: '/tariff' },
        { label: 'قوانین', url: '/rules' },
        { label: 'سوالات متداول', url: '/faq' },
        { label: 'درباره ما', url: '/about-us' },
        { label: 'بلاگ', url: '/blogs' }
    ];

    return (
        <div className='Header flex flex-wrap flex-row-reverse justify-center xl:justify-between w-full items-center sm:px-12 animate__animated animate__fadeInLeft animate__slow xl:gap-0 gap-8'>
            <Link href={'/'}>
                <Image src={logo} alt='logo' className='w-[230px] lg:w-[150px] 2xl:w-[191px] 3xl:w-[250px]' />
            </Link>
            <div className='flex flex-row-reverse md:justify-end justify-center gap-10 xl:gap-16 2xl:gap-20 text-white flex-wrap text-lg 2xl:text-xl 3xl:text-3xl'>
                {header.map((item, index) => (
                    <Link
                        key={index}
                        href={item.url}
                        className={`pb-1 ${myFont.className}`}
                        style={{ borderBottom: `${index === props.active ? '3px solid #F68D2E' : ''}` }}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
            <div>
                <Link href={'/register'}>
                    <div className='flex flex-row-reverse items-center gap-2 border-solid border-white border-2 rounded-2xl px-4 py-2 2xl:py-4'>
                        <p className={`${myFont.className} text-white 3xl:text-2xl `}> عضویت و ورود </p>
                        <Image src={profile} alt='profile' />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Header;
