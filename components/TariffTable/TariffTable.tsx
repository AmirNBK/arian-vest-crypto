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
}) => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className={`${myFontIran.className} TariffTable my-32 ${props.fullWidth ? ' w-full' : 'w-full sm:w-11/12 lg:w-8/12'} sm:mx-auto rounded-lg`}
            style={{ backgroundColor: '#1D1D1D' }}
            data-aos-duration="2000" data-aos-once={true} data-aos="flip-left"
        >
            <div className='TariffTable__title gap-5 flex flex-col sm:flex-row-reverse items-center p-6'>
                <Image src={logo} alt='logo' />
                <p className='text-main-orange text-3xl'> {props.title} </p>
            </div>
            <hr
                style={{
                    background: '#252525',
                    height: '8px',
                    border: 'none'
                }}
            />

            <div className='tableItems flex flex-row-reverse justify-between'>
                <div className='tableTitles my-10'>
                    {props.data.map((item, index) => (
                        <div key={index} className="px-14 p-4 flex flex-row-reverse justify-between">
                            <h2 className="text-base sm:text-lg text-white rtl">{item.title}</h2>
                        </div>
                    ))}
                </div>
                <hr
                    style={{
                        background: '#252525',
                        height: 'auto',
                        width: '8px',
                        border: 'none'
                    }}
                />
                <div className='tableInfos flex flex-col justify-evenly text-center items-center ml-20 my-10'>
                    {props.data.map((item, index) => (
                        <div key={index} className="p-4 flex flex-row-reverse justify-between">
                            <p className="text-lg"
                                style={{ color: '#B3B3B3' }}
                            >{item.info}</p>
                        </div>
                    ))}
                </div>
            </div>
            <hr
                style={{
                    background: '#252525',
                    height: '8px',
                    border: 'none'
                }}
            />

            <div className='tablePrice flex flex-col sm:flex-row-reverse py-8 gap-8 sm:gap-56 font-bold items-center text-white text-2xl justify-center'>
                <h2>
                    هزینه حساب کاربری
                </h2>
                <h2> {props.price}$ </h2>
            </div>

            <div className='w-6/12 mx-auto'>
                <RegisterButton text='خرید' />
            </div>

            <p className='text-main-orange text-center py-6' style={{ textDecoration: 'underline' }}>
                مقایسه تعرفه ها
            </p>
        </div>
    );
};

export default TariffTable;