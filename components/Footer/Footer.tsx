import React from 'react';
import footerBg from '../../assets/images/footerBg.png'
import Image from 'next/image';
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../assets/Fonts/iranyekanwebregular_0.ttf' })
import arrow from '../../assets/icons/arrowWithCircle.svg'
import bull from '../../assets/icons/bull.svg'

const Footer = () => {
    return (
        <div className='Footer relative'
            style={{}}
        >
            <Image src={footerBg} alt='footerBg' className='w-full' style={{ height: '500px' }} />

            <div className='Footer__content'>
                <div className={`${myFont.className} Footer__rightside w-3/12 absolute translate-y-2/4`} style={{ right: '6%', bottom: '45%' }}>
                    <p className='text-white text-right mb-3'>
                        همیشه به روز باشید
                    </p>
                    <p style={{ color: '#1D252D' }} className='text-right text-6xl mb-6 leading-normal font-bold'>
                        اخبار را از ما دریافت کنید
                    </p>
                    <div className='Footer_rightSide__email flex flex-row-reverse items-center justify-between w-full gap-6'>
                        <input placeholder='ایمیل خود را وارد کنید' className={` outline-none bg-transparent text-black placeholder:text-black pb-1 placeholder:text-right w-full`}
                            style={{ borderBottom: '3px solid #101010', direction: 'ltr' }}
                        />
                        <Image src={arrow} alt='arrow' className='cursor-pointer' />
                    </div>
                </div>


                <div className='Footer__center absolute translate-y-2/4 translate-x-2/4'
                    style={{ right: '50%', bottom: '45%' }}
                >
                    <Image src={bull} alt='bull' />
                </div>

                <div className='Footer__leftside absolute'
                    style={{ left: '6%', bottom: '45%' }}
                >
                    <p className='text-white text-right mb-3'>
                        راه های ارتباط با ما
                    </p>
                </div>

            </div>

        </div>
    );
};

export default Footer;