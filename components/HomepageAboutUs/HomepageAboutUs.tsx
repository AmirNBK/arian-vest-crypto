import Image from 'next/image';
import React from 'react';
import localFont from 'next/font/local'
import Link from 'next/link';
import goldBUll from '../../assets/images/goldBull.png'
import container from '../../assets/images/container.png'
import pic1 from '../../assets/images/pic1.png'
import container2 from '../../assets/images/container2.png'
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })

const HomepageAboutUs = (props: {
    data: any
}) => {

    return (
        <>
            <div className='HomepageAboutUs sm:block hidden'>
                <div className='aboutUs sm:mx-0 mx-6 my-20 sm:my-40 relative'>
                    <Image src={pic1} className='3xl:w-[60%] lg:block hidden' alt='pic' unoptimized style={{ opacity: '0.5' }}
                        data-aos-duration="2000" data-aos-once={true} data-aos="fade-right"
                    />
                    <div className='sm:absolute right-0 top-12 3xl:w-[45%]'
                        data-aos-duration="2000" data-aos-once={true} data-aos="fade-left"
                    >
                        <Image src={container} alt='container' className='sm:block hidden' />
                        <p className={`${myFont.className} text-white sm:w-max text-5xl text-center
              sm:-translate-x-1/2 sm:-translate-y-1/2 leading-tight
              sm:absolute top-1/2 left-1/2`}
                        >
                            <span className='text-3xl text-main-orange'> </span> {props.data?.normaltitle}
                            <span style={{ color: '#F68D2E' }}>  {props.data?.coloredtitle} </span>
                        </p>
                    </div>
                    <div className='sm:absolute right-0 top-64 3xl:w-[45%]'
                        data-aos-duration="2000" data-aos-once={true} data-aos="fade-left"
                        data-aos-delay="500"
                    >
                        <Image src={container2} alt='container' className='sm:block hidden' />
                        <p className={`${myFontIran.className} leading-[2.8rem] sm:my-3 my-12 text-white text-lg
              sm:text-right text-center rtl sm:w-[34.5rem] sm:absolute top-1/2 left-1/2 sm:-translate-x-1/2 sm:-translate-y-[65%]`}
                        >
                            {props.data?.description}
                        </p>
                        <Link href={'/about-us'} className={`${myFontIran.className} block text-main-orange sm:-translate-x-1/2 text-center sm:absolute bottom-16 right-10 3xl:right-[20%]`}
                            style={{ textDecoration: 'underline' }}>
                            بیشتر بخوانید
                        </Link>
                        <Image src={goldBUll} unoptimized alt='bull' className='sm:block hidden absolute -left-36 -bottom-16 w-96' />
                    </div>
                </div>
            </div>

            <div className='HomepageAboutUs sm:hidden block'>
                <div className='aboutUs sm:mx-0 mx-6 my-20 sm:my-40 relative'>
                    <Image src={pic1} className='3xl:w-[60%] lg:block hidden' alt='pic' unoptimized style={{ opacity: '0.5' }}
                    />
                    <div className='sm:absolute right-0 top-12 3xl:w-[45%]'
                    >
                        <Image src={container} alt='container' className='sm:block hidden' />
                        <p className={`${myFont.className} text-white sm:w-max text-5xl text-center
              sm:-translate-x-1/2 sm:-translate-y-1/2 leading-tight
              sm:absolute top-1/2 left-1/2`}
                        >
                            <span className='text-3xl text-main-orange'> </span>  {props.data?.normaltitle}
                            <span style={{ color: '#F68D2E' }}>  {props.data?.coloredtitle} </span>
                        </p>
                    </div>
                    <div className='sm:absolute right-0 top-64 3xl:w-[45%]'
                    >
                        <Image src={container2} alt='container' className='sm:block hidden' />
                        <p className={`${myFontIran.className} leading-[2.8rem] sm:my-0 my-12	text-white text-lg
              sm:text-right text-center rtl sm:w-[34.5rem] sm:absolute top-1/2 left-1/2 sm:-translate-x-1/2 sm:-translate-y-[65%]`}
                        >
                            {props.data?.description}
                        </p>
                        <Link href={'/about-us'} className={`${myFontIran.className} block text-main-orange sm:-translate-x-1/2 text-center sm:absolute bottom-16 right-10 3xl:right-[20%]`}
                            style={{ textDecoration: 'underline' }}>
                            بیشتر بخوانید
                        </Link>
                        <Image src={goldBUll} unoptimized alt='bull' className='sm:block hidden absolute -left-36 -bottom-16 w-96' />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomepageAboutUs;