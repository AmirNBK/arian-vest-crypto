import React, { useRef, useState } from 'react';
import footerBg from '../../assets/images/footerBg.png'
import Image from 'next/image';
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
const myFontLight = localFont({ src: '../../assets/fonts/iranyekanweblight_0.ttf' })
const myFont2 = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFont3 = localFont({ src: '../../assets/fonts/SquadaOne Regular.ttf' })
import arrow from '../../assets/icons/arrowWithCircle.svg'
import bull from '../../assets/icons/bull.svg'
import bullRed from '../../assets/icons/bull-red-eye.svg'
import FooterInfo from '../CommonComponents/FooterInfo/FooterInfo';
const myFontSquad = localFont({ src: '../../assets/fonts/SquadaOne Regular.ttf' })
import facebook from '../../assets/icons/facebook.svg'
import twitter from '../../assets/icons/twitter.svg'
import { Toast, ToastMessage } from 'primereact/toast';
import telegram from '../../assets/icons/telegram.svg'
import instagram from '../../assets/icons/instagram.svg'
import { useQuery, gql } from '@apollo/client';
import discord from '../../assets/icons/discord.svg'
import Link from 'next/link';

const Footer = (props: {
    data: any
    dataEng?: any
    isLocationInIran?: boolean
}) => {
    const GET_LEADERBOARDS = gql`
    query socialMedia {
        pages {
          nodes {
            socialMedia {
              socialMediaItems {
                discord
                instagram
                telegram
              }
            }
          }
        }
      }
`;
    const { data: socialMediaLinks } = useQuery(GET_LEADERBOARDS);
    const isLocationInIran = props.isLocationInIran;
    const toastBottomRight = useRef<Toast>(null);
    const [email, setEmail] = useState('');
    const englishPolicies = [
        { title: 'Rules', link: '/rules' },
        { title: 'Terms and Conditions', link: '/rules' },
        { title: 'Suggestions', link: '/' }
    ];
    const policies = [
        { title: 'قوانین و مقررات', link: '/rules' },
        { title: 'شرایط و ضوابط', link: '/rules' },
        { title: 'انتقادات و پیشنهادات', link: '/' }
    ];

    const socialMedia = [{ icon: telegram, link: socialMediaLinks?.pages.nodes[2].socialMedia.socialMediaItems[0].telegram },
    { icon: instagram, link: socialMediaLinks?.pages.nodes[2].socialMedia.socialMediaItems[0].instagram },
    { icon: discord, link: socialMediaLinks?.pages.nodes[2].socialMedia.socialMediaItems[0].discord }]
    const [isHovered, setIsHovered] = useState(false);

    const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setEmail(e.target.value);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const isValidEmail = (value: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
    };

    const handleFormSubmit = () => {
        if (!email.trim() || !isValidEmail(email)) {
            toastBottomRight.current?.show({
                severity: 'error',
                summary: 'Error',
                detail: `${isLocationInIran ? 'لطفا یک ایمیل معتبر وارد کنید.' : 'Please enter a valid email address.'}`,
                life: 300000,
            });
            return;
        }

        toastBottomRight.current?.show({
            severity: 'success',
            summary: 'Success',
            detail: `${isLocationInIran ? 'ایمیل شما ثبت گردید' : 'Email submitted'}`,
            life: 3000,
        });
    };


    const policiesToRender = isLocationInIran ? policies : englishPolicies;

    return (
        <div className='Footer relative'
        >
            <Toast ref={toastBottomRight} position="bottom-right" />
            <div className='Footer__mobile md:hidden block px-5 bg-[#F68D2F] w-[110%] translate-x-[-22px]'>
                <div className={`${myFont.className} Footer__rightside px-12 pt-12`}>
                    <p className={`text-white ${isLocationInIran ? 'text-right' : 'text-left'} mb-3 lg:text-base text-sm`}>
                        {isLocationInIran ? ' همیشه به روز باشید' : ' Always stay up to date'}

                    </p>
                    <p style={{ color: '#1D252D' }} className={`${isLocationInIran ? 'text-right' : 'text-left'} text-2xl lg:text-6xl mb-6 !leading-normal font-bold`}>

                        {isLocationInIran ? 'اخبار را از ما دریافت کنید' : ' Receive news from us'}
                    </p>
                    <div className={`${isLocationInIran ? 'flex-row-reverse' : 'flex-row'} Footer_rightSide__email flex items-center justify-between w-full gap-6`}>
                        <input
                            value={email}
                            onChange={handleInputChange}
                            placeholder={`${isLocationInIran ? 'ایمیل خود را وارد کنید' : 'Enter your email address'} `} className={` outline-none bg-transparent text-black placeholder:text-black pb-1 placeholder:${isLocationInIran ? 'text-right' : 'text-left'} w-full`}
                            style={{ borderBottom: '3px solid #101010', direction: 'ltr' }}
                        />
                        <Image src={arrow} alt='arrow' className={`cursor-pointer lg:w-fit w-12`}
                            onClick={handleFormSubmit}
                        />
                    </div>
                </div>

                <div className='Footer__center'
                >
                    <Image src={bull} alt='bull' className='mx-auto w-48 mt-4' />
                </div>

                <div className={`${myFont.className} Footer__leftside flex flex-col ${isLocationInIran ? 'items-end' : 'items-start'} px-12 pt-3 gap-4`}
                >
                    <p className='text-white text-right mb-3'>
                        {isLocationInIran ? 'راه های ارتباط با ما' : 'Ways to contact us'}
                    </p>
                    <FooterInfo title={`${isLocationInIran ? 'شماره تماس' : 'phone number'}`} isLocationIran={isLocationInIran} info={isLocationInIran ? props.data?.phone : props.data?.engPhone} />
                    <FooterInfo title={`${isLocationInIran ? 'ایمیل' : 'email'}`} info={isLocationInIran ? props.data?.email : props.data?.engEmail} isLocationIran={isLocationInIran} />
                    <p className={`${isLocationInIran ? 'text-right' : 'text-left'} ${myFont3.className} text-xl lg:text-xl rtl`}>
                        <span className={`${myFont3.className} font-semibold`}> {isLocationInIran ? 'آدرس:' : 'address:'} </span> {isLocationInIran ? props.data?.address : props.data?.engAddress} <span className='text-white'>  </span>
                    </p>
                </div>


                <div className=''
                >
                    <hr className='mb-4 lg:mb-0 mt-6' />
                    <div className='flex flex-col justify-between items-center lg:items-baseline'>
                        <div className='flex flex-row gap-6 lg:gap-16'>
                            {socialMedia.map((item) => {
                                if (item.link) {
                                    return (
                                        <Link href={item.link && item.link}>
                                            <Image src={item.icon} alt={'icon'} unoptimized className=' w-7' />
                                        </Link>
                                    )
                                }
                                else {
                                    return (
                                        <Image src={item.icon} alt={'icon'} unoptimized className=' w-7' />
                                    )
                                }
                            })}
                        </div>

                        <p className={`text-white text-center my-2 text-base ${myFont2.className}`}
                            style={{ color: '#000' }}
                        >
                            {/* {isLocationInIran ? 'طراحی شده توسط زفره مدیا' : 'Designed by Zafre Media'} */}
                        </p>
                    </div>
                </div>
            </div>

            <div className='Footer__default md:block hidden'>
                <Toast ref={toastBottomRight} position="bottom-right" />

                <Image src={footerBg} alt='footerBg' className='w-full lg:h-[420px]' />

                <div className='Footer__content'>
                    <div className={`${myFont.className} Footer__rightside w-3/12 absolute translate-y-2/4 pb-10 lg:pb-0`} style={{ right: '6%', bottom: '52%' }}>
                        <p className={`text-white ${isLocationInIran ? 'text-right' : 'text-left'} mb-3 text-sm`}>
                            {isLocationInIran ? ' همیشه به روز باشید' : ' Always stay up to date'}

                        </p>
                        <p style={{ color: '#1D252D' }} className={`${isLocationInIran ? 'text-right' : 'text-left'} text-3xl lg:text-4xl mb-6 !leading-normal font-bold`}>
                            {isLocationInIran ? 'اخبار را از ما دریافت کنید' : ' Receive news from us'}
                        </p>
                        <div className={`${isLocationInIran ? 'flex-row-reverse' : 'flex-row'} Footer_rightSide__email flex items-center justify-between w-full gap-6`}>
                            <input
                                value={email}
                                onChange={handleInputChange}
                                placeholder={`${isLocationInIran ? 'ایمیل خود را وارد کنید' : 'Enter your email address'} `} className={` outline-none bg-transparent text-black placeholder:text-black pb-1 placeholder:${isLocationInIran ? 'text-right' : 'text-left'} w-full`}
                                style={{ borderBottom: '3px solid #101010', direction: 'ltr' }}
                            />
                            <Image src={arrow} alt='arrow'
                                onClick={handleFormSubmit}
                                className={`${!isLocationInIran && 'rotate-180'} cursor-pointer lg:w-fit w-12`} />
                        </div>
                    </div>


                    <div className='Footer__center pb-10 lg:pb-0 absolute translate-y-2/4 translate-x-2/4 right-[47%] lg:right-1/2 bottom-[52%]'
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            transition: 'all 0.3s ease-in-out',
                        }}
                    >
                        <Image src={bull} alt='bull' className={`w-72 md:w-52 lg:w-72 absolute translate-y-2/4 translate-x-2/4 right-[47%] lg:right-1/2 bottom-[50%] ${isHovered ? 'opacity-0' : ' opacity-1'}`} />
                        <Image src={bullRed} alt='bull' className={`w-72 md:w-52 lg:w-72  ${isHovered ? ' opacity-1' : 'opacity-0'}`} />
                    </div>

                    <div className={`${myFont.className}  Footer__leftside pb-10 lg:pb-0 absolute flex flex-col items-end w-4/12 gap-6 translate-y-2/4`}
                        style={{ left: '1%', bottom: '52%' }}
                    >
                        <p className='text-white text-right mb-3'>

                            {isLocationInIran ? 'راه های ارتباط با ما' : 'Ways to contact us'}
                        </p>
                        <FooterInfo title={`${isLocationInIran ? 'شماره تماس' : 'phone number'}`} isLocationIran={isLocationInIran} info={isLocationInIran ? props.data?.phone : props.data?.engPhone} />
                        <FooterInfo title={`${isLocationInIran ? 'ایمیل' : 'email'}`} info={isLocationInIran ? props.data?.email : props.data?.engEmail} isLocationIran={isLocationInIran} />
                        <p className={`${myFont3.className} text-xl lg:text-xl text-right rtl`}>
                            <span className={`${myFontSquad.className}`}> {isLocationInIran ? 'آدرس:' : 'address:'} </span> {isLocationInIran ? props.data?.address : props.data?.engAddress} <span className={`${myFont3.className} text-white`}>  </span>
                        </p>
                    </div>

                    <div className='absolute w-11/12 left-1/2 pb-2'
                        style={{ bottom: '0%', transform: 'translateX(-50%)' }}
                    >
                        <hr className='mb-6 lg:mb-0' />
                        <div className='flex flex-row-reverse justify-between items-center lg:items-baseline'>
                            <div className='policies flex flex-row gap-6 items-center pt-8'>
                                {policiesToRender.map((item, index) => (
                                    <Link href={`${item.link}`} key={index} className={`${myFontLight.className} text-white font-light`}>
                                        {item?.title}
                                    </Link>
                                ))}
                            </div>
                            <p className={`text-white text-center mt-6 text-xl lg:block hidden ${myFont2.className}`}
                                style={{ color: '#000' }}
                            >
                            </p>

                            <div className='flex flex-row gap-6 lg:gap-16'>
                                {socialMedia.map((item) => {
                                    if (item.link) {
                                        return (
                                            <Link href={item.link && item.link}>
                                                <Image src={item.icon} alt={'icon'} unoptimized className=' w-7' />
                                            </Link>
                                        )
                                    }
                                    else {
                                        return (
                                            <Image src={item.icon} alt={'icon'} unoptimized className=' w-7' />
                                        )
                                    }
                                })}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

{/* <div className='Footer__default md:block hidden px-5'>
                <Toast ref={toastBottomRight} position="bottom-right" />

                <Image src={footerBg} alt='footerBg' className='w-full lg:h-[420px]' />

                <div className='Footer__content'>
                    <div className={`${myFont.className} Footer__rightside w-3/12 absolute translate-y-2/4`} style={{ right: '6%', bottom: '52%' }}>
                        <p className={`text-white ${isLocationInIran ? 'text-right' : 'text-left'} mb-3 text-sm`}>
                            {isLocationInIran ? ' همیشه به روز باشید' : ' Always stay up to date'}

                        </p>
                        <p style={{ color: '#1D252D' }} className={`${isLocationInIran ? 'text-right' : 'text-left'} text-3xl lg:text-4xl mb-6 !leading-normal font-bold`}>
                            {isLocationInIran ? 'اخبار را از ما دریافت کنید' : ' Receive news from us'}
                        </p>
                        <div className={`${isLocationInIran ? 'flex-row-reverse' : 'flex-row'} Footer_rightSide__email flex items-center justify-between w-full gap-6`}>
                            <input
                                value={email}
                                onChange={handleInputChange}
                                placeholder={`${isLocationInIran ? 'ایمیل خود را وارد کنید' : 'Enter your email address'} `} className={` outline-none bg-transparent text-black placeholder:text-black pb-1 placeholder:${isLocationInIran ? 'text-right' : 'text-left'} w-full`}
                                style={{ borderBottom: '3px solid #101010', direction: 'ltr' }}
                            />
                            <Image src={arrow} alt='arrow'
                                onClick={handleFormSubmit}
                                className={`${!isLocationInIran && 'rotate-180'} cursor-pointer lg:w-fit w-12`} />
                        </div>
                    </div>


                    <div className='Footer__center absolute  translate-y-2/4 translate-x-2/4 right-[47%] lg:right-1/2 bottom-[52%]'
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            transition: 'all 0.3s ease-in-out',
                        }}
                    >
                        <Image src={bull} alt='bull' className={`w-72 absolute translate-y-2/4 translate-x-2/4 right-[47%] lg:right-1/2 bottom-[50%] ${isHovered ? 'opacity-0' : ' opacity-1'}`} />
                        <Image src={bullRed} alt='bull' className={`w-72  ${isHovered ? ' opacity-1' : 'opacity-0'}`} />
                    </div>

                    <div className={`${myFont.className} Footer__leftside absolute flex flex-col items-end w-4/12 gap-6 translate-y-2/4`}
                        style={{ left: '1%', bottom: '52%' }}
                    >
                        <p className='text-white text-right mb-3'>

                            {isLocationInIran ? 'راه های ارتباط با ما' : 'Ways to contact us'}
                        </p>
                        <FooterInfo title={`${isLocationInIran ? 'شماره تماس' : 'phone number'}`} isLocationIran={isLocationInIran} info={isLocationInIran ? props.data?.phone : props.data?.engPhone} />
                        <FooterInfo title={`${isLocationInIran ? 'ایمیل' : 'email'}`} info={isLocationInIran ? props.data?.email : props.data?.engEmail} isLocationIran={isLocationInIran} />
                        <p className={`${myFont3.className} text-xl lg:text-xl text-right rtl`}>
                            <span className={`${myFontSquad.className}`}> {isLocationInIran ? 'آدرس:' : 'address:'} </span> {isLocationInIran ? props.data?.address : props.data?.engAddress} <span className={`${myFont3.className} text-white`}>  </span>
                        </p>
                    </div>

                    <div className='absolute w-11/12 left-1/2'
                        style={{ bottom: '20px', transform: 'translateX(-50%)' }}
                    >
                        <hr className='mb-6 lg:mb-0' />
                        <div className='flex flex-row-reverse justify-between items-center lg:items-baseline'>
                            <div className='policies flex flex-row gap-6 items-center pt-8'>
                                {policiesToRender.map((item, index) => (
                                    <Link href={`${item.link}`} key={index} className={`${myFontLight.className} text-white font-light`}>
                                        {item?.title}
                                    </Link>
                                ))}
                            </div>
                            <p className={`text-white text-center mt-6 text-xl lg:block hidden ${myFont2.className}`}
                                style={{ color: '#000' }}
                            >
                            </p>

                            <div className='flex flex-row gap-6 lg:gap-16'>
                                {socialMedia.map((item) => {
                                    if (item.link) {
                                        return (
                                            <Link href={item.link && item.link}>
                                                <Image src={item.icon} alt={'icon'} unoptimized className=' w-7' />
                                            </Link>
                                        )
                                    }
                                    else {
                                        return (
                                            <Image src={item.icon} alt={'icon'} unoptimized className=' w-7' />
                                        )
                                    }
                                })}
                            </div>
                        </div>
                    </div>

                </div>
            </div> */}




            


            <style>
                {
                    `
                    .p-toast-detail {
                        text-align :                     ${isLocationInIran ? 'right' : 'left'};
                    }
                    `
                }
            </style>
        </div>
    );
};

export default Footer;