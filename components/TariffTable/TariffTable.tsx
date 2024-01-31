import React, { useEffect, useState } from 'react';
import logo from '../../assets/icons/rulesLogo.svg'
import Image from 'next/image';
import localFont from 'next/font/local'
import RegisterButton from '../CommonComponents/RegisterButton/RegisterButton';
import AOS from 'aos';
import ReactLoading from 'react-loading';
import 'aos/dist/aos.css';
import Link from 'next/link';
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })


const TariffTable = (props: {
    title: string
    data: Array<{ title: string, info: string }>
    price: number
    fullWidth?: boolean
    removeTitle?: boolean
    minimal?: boolean
    hasRadius?: boolean
    isLocationIran?: boolean
    challenge: string
}) => {
    useEffect(() => {
        AOS.init();
    }, [])

    const [isLogin, setIsLogin] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (localStorage.getItem("authToken") || sessionStorage.getItem("authToken")) {
            setIsLogin(true)
        }
        else setIsLogin(false)
    }, [])

    return (
        <div className={`${myFontIran.className} TariffTable ${!(props.removeTitle) ? 'my-32' : 'my-4'}
        ${props.fullWidth ? ' w-full' : 'w-full sm:w-11/12 lg:w-8/12 3xl:w-5/12'} sm:mx-auto`}
            style={{
                backgroundColor: '#1D1D1D',
                borderRadius: '20px',
                boxShadow: '0px 0px 45px 0px rgba(246, 141, 46, 0.20)'
            }}
            data-aos-duration="2000" data-aos-once={true} data-aos="flip-left"
        >
            {!(props.removeTitle) &&
                <div className='TariffTable__title gap-5 flex flex-col sm:flex-row-reverse items-center p-6'>
                    <Image src={logo} alt='logo' />
                    <p className='text-main-orange text-3xl'> {props.title} </p>
                </div>
            }

            <div className={`${props.isLocationIran ? 'flex-row-reverse' : 'flex-row'} flex w-full`}>
                <div className='flex-1 sm:block flex flex-col justify-between'>
                    {props.data.map((item, index) => {
                        return (
                            <div key={index} className={`${index % 2 === 0 ? 'bg-gradient-2' : 'bg-gradient'} flex flex-row-reverse sm:h-fit
                            h-[55px] -translate-y-[1px] sm:translate-y-0
                        px-6 py-4
                         ${props.isLocationIran ? 'justify-between' : 'justify-end'}`}
                                style={{ borderTop: '1px solid rgba(246, 141, 46, 0.40)' }}
                            >
                                <div>
                                    <h2 className={`text-sm whitespace-nowrap 3xl:ml-16 sm:text-base sm:text-${props.minimal ? 'xs' : 'base'}
                            text-main-orange
                            ${props.isLocationIran ? 'rtl' : 'ltr'}`}>{item.title}</h2>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className='flex-1'
                    style={{ borderRight: '1px solid rgba(246, 141, 46, 0.40)' }}
                >
                    {props.data.map((item, index) => {
                        return (
                            <div key={index} className={`${index % 2 === 0 ? 'bg-gradient-2' : 'bg-gradient'} flex flex-row-reverse
                        px-6 py-4
                        justify-between`}
                                style={{ borderTop: '1px solid rgba(246, 141, 46, 0.40)' }}
                            >
                                <div>
                                    <p className={`text-${props.minimal ? 'sm' : 'sm:lg sm'} text-white whitespace-nowrap 3xl:mr-16`}>
                                        {item.info !== undefined && item.info !== null ? item.info : '0'}
                                    </p>

                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className={`tablePrice flex flex-col ${props.isLocationIran ? 'sm:flex-row-reverse' : 'sm:flex-row'} py-8 gap-8 sm:gap-56 font-bold items-center text-white text-2xl justify-center`}>
                <h2>
                    {props.isLocationIran ? 'هزینه حساب کاربری' : 'User account fee'}

                </h2>
                <h2> {props.price} <span className='text-main-orange -ml-1'> $ </span> </h2>
            </div>

            <div className='w-6/12 mx-auto pb-10'
                onClick={() => {
                    setLoading(true)
                    sessionStorage.setItem('buying price', props.price.toLocaleString())
                    localStorage.setItem('challenge', props.challenge.toLocaleString())
                    localStorage.setItem('challenge amount', props.data[0].info.toLocaleString())
                    if (!isLogin) {
                        sessionStorage.setItem('payment login', 'true')
                    }
                }}
            >
                {loading ?
                    <ReactLoading type={'spinningBubbles'} className='mx-auto' color={'#F68D2E'} height={50} width={50} />
                    :
                    <Link href={`${isLogin ? '/payment' : '/register'}`}>
                        <RegisterButton text={props.isLocationIran ? 'خرید' : 'Purchase'} />
                    </Link>
                }
            </div>

            <style>
                {
                    `
                    .bg-gradient {
                        background : 0px 0px 45px 0px rgba(246, 141, 46, 0.20);
                    }
                    .bg-gradient-2 {
                        background : rgba(255, 255, 255, 0.05);
                    }
                    `
                }
            </style>
        </div>
    );
};

export default TariffTable;