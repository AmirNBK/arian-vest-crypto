import Image from 'next/image';
import React, { useState } from 'react';
import logo from '../../assets/icons/logo.png'
import profile from '../../assets/icons/profile.svg'
import { useRouter } from 'next/router';
import localFont from 'next/font/local'
import Link from 'next/link';
import useWindowSize from '@/Hooks/innerSize';
import 'animate.css';
import { Sidebar } from 'primereact/sidebar';
import withAuth from '../../HOC/withAuth';
const myFont = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import menu from '../../assets/icons/hamburgerMenu.png'

const Header = (props: {
    active?: number | string
    loggedIn: boolean;
    isLocationInIran?: boolean
}) => {
    const router = useRouter();
    const [visible, setVisible] = useState<boolean>(false);
    const isLocationInIran = props.isLocationInIran;
    const size = useWindowSize();

    const header = [
        { label: 'صفحه اصلی', url: '/' },
        {
            label: `${(props.loggedIn && (size.width && size.width < 640)) ? 'پنل کاربری' :
                `${(!(props.loggedIn) && (size.width && size.width < 640)) ? 'ورود و عضویت' : ''}`}`,
            url: `${(props.loggedIn && (size.width && size.width < 640)) ? '/panel' :
                `${(!(props.loggedIn) && (size.width && size.width < 640)) ? '/register' : ''}`}`
        },
        { label: 'تعرفه ها', url: '/tariff' },
        { label: 'قوانین', url: '/rules' },
        { label: 'سوالات متداول', url: '/faq' },
        { label: 'درباره ما', url: '/about-us' },
        { label: 'بلاگ', url: '/blogs' }
    ];

    const headerEng = [
        { label: 'Home', url: '/' },
        {
            label: `${props.loggedIn && size.width && size.width < 640
                ? 'User Panel'
                : !props.loggedIn && size.width && size.width < 640
                    ? 'Login and Register'
                    : ''
                }`,
            url: `${props.loggedIn && size.width && size.width < 640
                ? '/panel'
                : !props.loggedIn && size.width && size.width < 640
                    ? '/register'
                    : ''
                }`,
        },
        { label: 'Challenges', url: '/tariff' },
        { label: 'Rules', url: '/rules' },
        { label: 'FAQs', url: '/faq' },
        { label: 'About Us', url: '/about-us' },
        { label: 'Blog', url: '/blogs' },
    ];


    return (
        <div className={`Header flex flex-wrap z-[3] 
        flex-row-reverse ${props.active === 'panel' ? 'justify-center' : `${props.isLocationInIran ? 'justify-start' : 'justify-end'}`}
        lg:justify-center xl:justify-between w-full items-center lg:px-12 animate__animated animate__fadeInLeft
        animate__slow xl:gap-0 gap-8`}>

            <Image src={menu} alt='menu' width={50} className='mt-10 lg:hidden block mr-6' onClick={() => {
                setVisible(true)
            }} />
            <Sidebar visible={visible} position={isLocationInIran ? "right" : 'left'} onHide={() => setVisible(false)}
                style={{ backgroundColor: 'black' }}
            >
                <Image src={logo} alt='logo' className='mx-auto w-7/12' />

                <div className={`${myFont.className} flex flex-col gap-8 ${props.isLocationInIran && 'text-end'} text-white`}>
                    {
                        isLocationInIran ?
                            header.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.url}
                                    className={`pb-1 ${myFont.className} ${item.label === '' && 'hidden'}`}
                                    style={{ borderBottom: `${index === props.active ? '3px solid #F68D2E' : ''}` }}
                                >
                                    {item.label}
                                </Link>
                            ))

                            :
                            headerEng.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.url}
                                    className={`pb-1 ${myFont.className} ${item.label === '' && 'hidden'}`}
                                    style={{ borderBottom: `${index === props.active ? '3px solid #F68D2E' : ''}` }}
                                >
                                    {item.label}
                                </Link>
                            ))
                    }
                </div>
            </Sidebar>
            <Link href={'/'}>
                <Image src={logo} alt='logo' className='w-[230px] lg:w-[150px] 2xl:w-[191px] 3xl:w-[250px]  lg:block hidden' />
            </Link>
            <div className={`flex
            ${isLocationInIran ? 'flex-row-reverse' : 'flex-row'}
            lg:flex hidden md:justify-end justify-center gap-20 xl:gap-16 3xl:gap-20 text-white flex-wrap text-lg 2xl:text-xl 3xl:text-3xl`}>
                {
                    isLocationInIran ?

                        header.map((item, index) => (
                            <Link
                                key={index}
                                href={item.url}
                                className={`pb-1 ${myFont.className} ${item.label === '' && 'hidden'}`}
                                style={{ borderBottom: `${index === props.active ? '3px solid #F68D2E' : ''}` }}
                            >
                                {item.label}
                            </Link>
                        ))

                        :
                        headerEng.map((item, index) => (
                            <Link
                                key={index}
                                href={item.url}
                                className={`pb-1 ${myFont.className} ${item.label === '' && 'hidden'}`}
                                style={{ borderBottom: `${index === props.active ? '3px solid #F68D2E' : ''}` }}
                            >
                                {item.label}
                            </Link>
                        ))
                }
            </div>
            <div className='lg:block hidden'>
                <div
                    onClick={() => {
                        if (props.loggedIn) {
                            router.push('/panel')
                        }
                        else router.push('/register')
                    }}
                    className='cursor-pointer flex flex-row-reverse items-center gap-2 border-solid border-white border-2 rounded-2xl px-4 py-2 2xl:py-4'>
                    <p className={`${myFont.className} text-white 3xl:text-2xl `}> {props.loggedIn ? `${isLocationInIran ? 'پنل کاربری' : 'User panel'} ` : `${isLocationInIran ? 'عضویت و ورود' : 'register'}`} </p>
                    <Image src={profile} alt='profile' />
                </div>
            </div>
        </div>
    );
};

export default withAuth(Header);
