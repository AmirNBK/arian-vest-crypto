import React, { useEffect } from 'react';
import logo from '../../assets/icons/rulesLogo.svg'
import Image from 'next/image';
import localFont from 'next/font/local'
import RegisterButton from '../CommonComponents/RegisterButton/RegisterButton';
import AOS from 'aos';
import 'aos/dist/aos.css';
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })


const TariffTable = (props: {
    title: string
    data: Array<{ title: string, info: string }>
    price: number
    fullWidth?: boolean
    removeTitle?: boolean
    minimal?: boolean
}) => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className={`${myFontIran.className} TariffTable ${!(props.removeTitle) ? 'my-32' : 'my-0'}
        ${props.fullWidth ? ' w-full' : 'w-full sm:w-11/12 lg:w-8/12 3xl:w-5/12'} sm:mx-auto`}
            style={{ backgroundColor: '#1D1D1D',
            borderRadius : '20px',
            boxShadow : '0px 0px 45px 0px rgba(246, 141, 46, 0.20)'
        }}
            data-aos-duration="2000" data-aos-once={true} data-aos="flip-left"
        >
            {!(props.removeTitle) && 
                        <div className='TariffTable__title gap-5 flex flex-col sm:flex-row-reverse items-center p-6'>
                        <Image src={logo} alt='logo' />
                        <p className='text-main-orange text-3xl'> {props.title} </p>
                    </div>
            }

            <div>
                {props.data.map((item,index) => {
                    return (
                        <div key={index} className={`${index%2===0 ? 'bg-gradient-2' : 'bg-gradient'} flex flex-row-reverse
                        px-6 py-4
                        justify-between`}
                        >
                            <div>
                            <h2 className={`text-base sm:text-${props.minimal ? 'xs' : 'base'}
                            text-main-orange text-lg
                            rtl`}>{item.title}</h2>
                            </div>
                            <div>
                            <p className={`text-${props.minimal ? 'sm' : 'lg'}`}
                                style={{ color: '#B3B3B3' }}
                            >{item.info}</p>
                            </div>
                        </div>
                    )
                })}
            </div>

            <div className='tablePrice flex flex-col sm:flex-row-reverse py-8 gap-8 sm:gap-56 font-bold items-center text-white text-2xl justify-center'>
                <h2>
                    هزینه حساب کاربری
                </h2>
                <h2> {props.price} <span className='text-main-orange -ml-1'> $ </span> </h2>
            </div>

            <div className='w-6/12 mx-auto pb-10'>
                <RegisterButton text='خرید' />
            </div>

            {/* <p className='text-main-orange text-center py-6' style={{ textDecoration: 'underline' }}>
                مقایسه تعرفه ها
            </p> */}



            <style>
                {
                    `
                    .bg-gradient {
                        background : linear-gradient(90deg, rgba(255, 255, 255, 0.11) 20.73%, rgba(246, 141, 46, 0.00) 100%);
                    }
                    .bg-gradient-2 {
                        background : linear-gradient(270deg, rgba(255, 255, 255, 0.11) 20.73%, rgba(246, 141, 46, 0.00) 100%);
                        box-shadow: 0px 5px 30px 0px rgba(246, 141, 46, 0.05);
                    }
                    `
                }
            </style>
        </div>
    );
};

export default TariffTable;