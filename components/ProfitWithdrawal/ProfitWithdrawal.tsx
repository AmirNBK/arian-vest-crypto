import React, { useEffect, useState, useRef } from 'react';
import localFont from 'next/font/local'
import useWindowSize from '@/Hooks/innerSize';
import Image from 'next/image';
import ReactLoading from 'react-loading';
import certificateMini from '../../assets/icons/certificateMini.svg';
import StatisticsComponents from '../StatisticsComponents/StatisticsComponents';
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
import empty from '../../assets/icons/empty.png'
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import { Toast, ToastMessage } from 'primereact/toast';
import buttonImage from '../../assets/images/profitButton.png'
import { Wallet, getProfileInfo, withdrawlRequest } from '@/lib/apiConfig';

const ProfitWithdrawal = (props: {
    isLocationIran: boolean
}) => {
    const [userId, setUserId] = useState<number>()
    const [loading, setLoading] = useState<boolean>(true)
    const [description, setDescription] = useState('');

    const handleTextareaChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setDescription(event.target.value);
    };
    const toastBottomRight = useRef<Toast>(null);


    interface dataType {
        Pending_withdrawals: number
        amount_withdrawn: number
        number_of_withdrawals: number
        total_profit: number
        withdrawable_amount: number
    }

    const [data, setData] = useState<dataType>()

    useEffect(() => {
        getProfileInfo().then((res) => {
            setUserId(res.data.pk)
        })
        Wallet().then((res) => {
            setData(res.data[0])
            setLoading(false)
        })
    }, [])

    const handleSendButtonClick = () => {
        withdrawlRequest(userId, data?.withdrawable_amount, description).then((res) => {
            if (res.status === 201) {
                toastBottomRight.current?.show({
                    severity: 'success',
                    summary: 'Success',
                    detail: `${props.isLocationIran ? 'درخواست شما با موفقيت ارسال گرديد' : 'Your request has been sent successfully'}`,
                    life: 3000,
                });
            }
            else {
                toastBottomRight.current?.show({
                    severity: 'error',
                    summary: 'Error',
                    detail: `${props.isLocationIran ? 'ارسال درخواست شما با مشكل مواجه شد' : 'There was a problem sending your request'}`,
                    life: 3000,
                });
            }
        })
    }

    return (
        <div className='ProfitWithdrawal'>
            {!loading ?
                <>
                    {data ?
                        <>
                            <Toast ref={toastBottomRight} position="bottom-right" />
                            <div className='bg-[#1A1C1F] h-full lg:w-full mx-4 lg:mx-6 sm:mx-12 py-8 px-3 sm:px-6 rounded-lg lg:mt-6 mb-10'>
                                <div className='flex flex-col lg:flex-row-reverse gap-2'>
                                    <div className='flex flex-row items-center gap-4'>
                                        <h2 className={`${myFont.className} Leaderboards__title text-white text-2xl w-fit ml-auto`}>
                                            برداشت سود
                                        </h2>
                                        <Image src={certificateMini} alt='icon' unoptimized />
                                    </div>
                                </div>

                                <div className='flex flex-row-reverse justify-center lg:justify-between mt-8 flex-wrap lg:gap-0 gap-4'>
                                    <div>
                                        <h3 className={`${myFont.className} text-center mb-2 text-lg text-main-orange`}>
                                            مبلغ برداشت شده
                                        </h3>
                                        <StatisticsComponents dollar={true} value={data?.amount_withdrawn} isReferral />
                                    </div>
                                    <div>
                                        <h3 className={`${myFont.className} text-center mb-2 text-lg text-main-orange`}>
                                            برداشت های در انتظار
                                        </h3>
                                        <StatisticsComponents dollar={false} value={data?.Pending_withdrawals} isReferral />
                                    </div>
                                    <div>
                                        <h3 className={`${myFont.className} text-center mb-2 text-lg text-main-orange`}>
                                            تعداد برداشت ها
                                        </h3>
                                        <StatisticsComponents dollar={false} value={data?.number_of_withdrawals} isReferral />
                                    </div>
                                    <div>
                                        <h3 className={`${myFont.className} text-center mb-2 text-lg text-main-orange`}>
                                            کل سود
                                        </h3>
                                        <StatisticsComponents dollar={true} value={data?.total_profit} isReferral />
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col lg:flex-row-reverse mt-8 gap-12 bg-[#1A1C1F] h-full lg:w-full mx-4 lg:mx-6 sm:mx-12 py-8 px-3 sm:px-16 rounded-lg mt-6 mb-20'>
                                <div className='flex flex-col flex-1'>
                                    <div className='flex flex-row items-center gap-4'>
                                        <h2 className={`${myFont.className} Leaderboards__title text-white text-2xl w-fit ml-auto`}>
                                            مبلغ قابل برداشت
                                        </h2>
                                        <Image src={certificateMini} alt='icon' unoptimized />
                                    </div>
                                    <p className={`${myFontIran.className} rtl mt-2 text-base`}
                                        style={{ color: 'rgba(255, 255, 255, 0.40)' }}
                                    >
                                        در این قسمت میتوانید مبلغ قابل برداشت خود را مشاهده و در صورت تمایل اقدام به برداشت نمایید تا به حساب شما در بازه زمانی 24 الی 48 ساعت اضافه شود.
                                    </p>
                                </div>

                                <div className='flex-1'>
                                    <h3 className={`${myFont.className} text-center mb-2 text-lg text-main-orange`}>
                                        مبلغ فعلی
                                    </h3>
                                    <StatisticsComponents dollar={true} value={data?.withdrawable_amount} isReferral />
                                </div>

                                <div className='flex-[2] flex flex-col items-center'>
                                    <h3 className={`${myFont.className} text-center mb-2 text-lg text-main-orange`}>
                                        توضیحات مربوطه خود را بنویسید
                                    </h3>
                                    <textarea cols={65} rows={5} className={`${props.isLocationIran ? 'rtl' : ''}
                  bg-transparent border border-white rounded-md md:block hidden text-white`}
                                        value={description}
                                        onChange={handleTextareaChange}
                                    />
                                    <textarea cols={35} rows={5} className={`
                  ${props.isLocationIran ? 'rtl' : ''}
                  bg-transparent border border-white rounded-md md:hidden block text-white`}
                                        value={description}
                                        onChange={handleTextareaChange}
                                    />

                                </div>
                            </div>

                            <div className='flex justify-center'>
                                <Image src={buttonImage} unoptimized alt='button' className='cursor-pointer' onClick={handleSendButtonClick} />
                            </div>
                        </>
                        :
                        <div className='bg-[#1A1C1F] h-full lg:w-full mx-4 lg:mx-6 sm:mx-12 py-8 px-3 sm:px-6 rounded-lg lg:mt-6 mb-10'>
                            <div className='flex flex-col lg:flex-row-reverse gap-2'>
                                <div className='flex flex-row items-center gap-4'>
                                    <h2 className={`${myFont.className} Leaderboards__title text-white text-2xl w-fit ml-auto`}>
                                        برداشت سود
                                    </h2>
                                    <Image src={certificateMini} alt='icon' unoptimized />
                                </div>
                            </div>

                            <div className='flex flex-col justify-center gap-4 items-center'>
                                <Image src={empty} alt='empty' />
                                <p className={`${myFontIran.className} text-white ${props.isLocationIran ? 'rtl' : ''}`}>
                                   در حال حاظر اطلاعات برداشت سود شما موجود نمي باشد. لطفا بعدا امتحان كنيد.
                                </p>
                            </div>
                        </div>
                    }

                </>
                : <ReactLoading type={'spinningBubbles'} className='mx-auto mt-12' color={'#F68D2E'} height={667} width={150} />
            }
        </div>
    );
};

export default ProfitWithdrawal;