import React from 'react';
import footerBg from '../../assets/images/footerBg.png'
import Image from 'next/image';
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
const myFontLight = localFont({ src: '../../assets/fonts/iranyekanweblight_0.ttf' })
const myFont2 = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
import arrow from '../../assets/icons/arrowWithCircle.svg'
import bull from '../../assets/icons/bull.svg'
import FooterInfo from '../CommonComponents/FooterInfo/FooterInfo';
import facebook from '../../assets/icons/facebook.svg'
import twitter from '../../assets/icons/twitter.svg'
import dribble from '../../assets/icons/dribble.svg'
import pinterest from '../../assets/icons/pinterest.svg'
import linkedin from '../../assets/icons/linkedin.svg'


const Footer = () => {

    const policies = ['قوانین و مقررات', 'شرایط و ضوابط', 'انتقادات و پیشنهادات']
    const socialMedia = [facebook, twitter, dribble, pinterest, linkedin]
    return (
        <div className='Footer relative'
            style={{}}
        >
            <Image src={footerBg} alt='footerBg' className='w-full lg:h-[600px] h-[500px]' />

            <div className='Footer__content'>
                <div className={`${myFont.className} Footer__rightside w-3/12 absolute translate-y-2/4`} style={{ right: '6%', bottom: '50%' }}>
                    <p className='text-white text-right mb-3 lg:text-base text-sm'>
                        همیشه به روز باشید
                    </p>
                    <p style={{ color: '#1D252D' }} className='text-right text-3xl lg:text-6xl mb-6 leading-normal font-bold'>
                        اخبار را از ما دریافت کنید
                    </p>
                    <div className='Footer_rightSide__email flex flex-row-reverse items-center justify-between w-full gap-6'>
                        <input placeholder='ایمیل خود را وارد کنید' className={` outline-none bg-transparent text-black placeholder:text-black pb-1 placeholder:text-right w-full`}
                            style={{ borderBottom: '3px solid #101010', direction: 'ltr' }}
                        />
                        <Image src={arrow} alt='arrow' className='cursor-pointer lg:w-fit w-12' />
                    </div>
                </div>


                <div className='Footer__center absolute translate-y-2/4 translate-x-2/4 right-[47%] lg:right-1/2 bottom-1/2'
                >
                    <Image src={bull} alt='bull' className='lg:w-fit w-72' />
                </div>

                <div className={`${myFont.className} Footer__leftside absolute flex flex-col items-end w-4/12 gap-6 translate-y-2/4`}
                    style={{ left: '1%', bottom: '50%' }}
                >
                    <p className='text-white text-right mb-3'>
                        راه های ارتباط با ما
                    </p>
                    <FooterInfo title='شماره تماس' info='به زودی' />
                    <FooterInfo title='ایمیل' info='Arianvest@gmail.com' />
                    <p className='text-xl lg:text-2xl text-right'>
                        <span className='font-semibold'> آدرس: </span> مطهری ، میرعماد ، کوچه یازدهم ، پلاک 23 شرکت ، <span className='text-white'> آریان‌وست </span>
                    </p>
                </div>


                <div className='absolute w-11/12 left-1/2'
                    style={{ bottom: '20px', transform: 'translateX(-50%)' }}
                >
                    <hr className='mb-6 lg:mb-0' />
                    <div className='flex flex-row-reverse justify-between items-center lg:items-baseline'>
                        <div className='policies flex flex-row gap-6 items-center'>
                            {policies.map((item) => {
                                return (
                                    <p className={`${myFontLight.className} text-white font-light`}>
                                        {item}
                                    </p>
                                )
                            })}
                        </div>
                        <p className={`text-white text-center mt-6 text-xl lg:block hidden ${myFont2.className}`}
                            style={{ color: '#000' }}
                        > طراحی شده توسط زفره مدیا </p>

                        <div className='flex flex-row gap-6 lg:gap-16'>
                            {socialMedia.map((item) => {
                                return (
                                    <Image src={item} alt={item} unoptimized />
                                )
                            })}
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    );
};

export default Footer;