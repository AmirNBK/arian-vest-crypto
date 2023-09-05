import Image from 'next/image';
import React from 'react';
import logo from '../../assets/icons/logo.png'
import profile from '../../assets/icons/profile.svg'
import localFont from 'next/font/local'
import Link from 'next/link';
const myFont = localFont({ src: '../../assets/Fonts/iranyekanwebregular_0.ttf' })

const Header = () => {
    const header = [
        { label: 'صفحه اصلی', url: '/' },
        { label: 'تعرفه ها', url: '/' },
        { label: 'قوانین', url: '/rules' },
        { label: 'سوالات متداول', url: '/faq' },
        { label: 'درباره ما', url: '/about-us' },
        { label: 'بلاگ', url: '/blogs' }
    ];

    return (
        <div className='Header flex flex-row-reverse justify-between w-full items-center px-12'>
            <div>
                <Image src={logo} alt='logo' style={{ width: '191px' }} />
            </div>
            <div className='flex flex-row-reverse gap-20 text-white text-xl'>
                {header.map((item, index) => (
                    <Link
                        key={index}
                        href={item.url}
                        className={`pb-1 ${myFont.className}`}
                        style={{ borderBottom: `${index === 0 ? '3px solid #F68D2E' : ''}` }}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
            <div>
                <Link href={'/register'}>
                    <div className='flex flex-row-reverse items-center px-6 gap-2 border-solid border-white border-2 rounded-2xl px-4 py-2'>
                        <p className={`${myFont.className} text-white`}> عضویت و ورود </p>
                        <Image src={profile} alt='profile' />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Header;
