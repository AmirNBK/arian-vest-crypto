import React from 'react';
import logo from '../../assets/icons/rulesLogo.svg'
import Image from 'next/image';
import localFont from 'next/font/local'
import RegisterButton from '../CommonComponents/RegisterButton/RegisterButton';
const myFontIran = localFont({ src: '../../assets/Fonts/iranyekanwebregular_0.ttf' })

const TariffTable = (props: {
    title: string
    data: Array<{ title: string, info: string }>
    price: number
}) => {
    return (
        <div className={`${myFontIran.className} TariffTable my-32 w-8/12 mx-auto rounded-lg`}
            style={{ backgroundColor: '#1D1D1D' }}
        >
            <div className='TariffTable__title gap-5 flex flex-row-reverse items-center p-6'>
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
                        <div key={index} className="p-4 flex flex-row-reverse justify-between">
                            <h2 className="text-lg text-white rtl">{item.title}</h2>
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
                <div className='tableInfos flex flex-col items-center ml-20 my-10'>
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

            <div className='tablePrice flex flex-row-reverse py-8 gap-56 font-bold items-center text-white text-2xl justify-center'>
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