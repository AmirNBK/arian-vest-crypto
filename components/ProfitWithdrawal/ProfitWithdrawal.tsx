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
import profitWithdrawal from '../../assets/images/profitWithdrawal.png'
import { Toast, ToastMessage } from 'primereact/toast';
import buttonImage from '../../assets/images/profitButton.png'
import { Wallet, getProfileInfo, withdrawlRequest } from '@/lib/apiConfig';

const ProfitWithdrawal = (props: {
    isLocationIran: boolean
    selectedAccount: string | undefined
}) => {
    const isLocationInIran = props.isLocationIran
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
        Wallet(props.selectedAccount).then((res) => {
            setData(res.data)
            setLoading(false)
        })
    }, [props.selectedAccount])

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
                                <div className={`flex ${isLocationInIran ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-4`}>
                                    <h2 className={`${myFont.className} Leaderboards__title text-white text-2xl w-fit ${isLocationInIran ? 'ml-auto' : 'mr-auto translate-y-0.5'}`}>

                                        {isLocationInIran ? 'برداشت سود' : 'Profit Withdrawal'}
                                    </h2>
                                    <Image src={certificateMini} alt='icon' unoptimized />
                                </div>

                                <div className='flex flex-row-reverse justify-center lg:justify-between mt-8 flex-wrap lg:gap-0 gap-4'>
                                    <div>
                                        <h3 className={`${myFont.className} text-center mb-2 text-lg text-main-orange`}>
                                            {isLocationInIran ? 'مبلغ برداشت شده' : 'Withdrawn Amount'}
                                        </h3>
                                        <StatisticsComponents dollar={true} value={data?.amount_withdrawn} isReferral />
                                    </div>
                                    <div>
                                        <h3 className={`${myFont.className} text-center mb-2 text-lg text-main-orange`}>
                                            {isLocationInIran ? 'برداشت های در انتظار' : 'Pending Withdrawals'}
                                        </h3>
                                        <StatisticsComponents dollar={false} value={data?.Pending_withdrawals} isReferral />
                                    </div>
                                    <div>
                                        <h3 className={`${myFont.className} text-center mb-2 text-lg text-main-orange`}>
                                            {isLocationInIran ? 'تعداد برداشت ها' : 'Number of Withdrawals'}
                                        </h3>
                                        <StatisticsComponents dollar={false} value={data?.number_of_withdrawals} isReferral />
                                    </div>
                                    <div>
                                        <h3 className={`${myFont.className} text-center mb-2 text-lg text-main-orange`}>
                                            {isLocationInIran ? 'کل سود' : 'Total Profit'}
                                        </h3>
                                        <StatisticsComponents dollar={true} value={data?.total_profit} isReferral />
                                    </div>
                                </div>

                            </div>

                            <div className={`flex flex-col  mt-8 gap-12
                            ${isLocationInIran ? 'lg:flex-row-reverse' : 'lg:flex-row'}
                            bg-[#1A1C1F] h-full lg:w-full mx-4 lg:mx-6 sm:mx-12 py-8 px-3 sm:px-16 rounded-lg mt-6 mb-20`}>
                                <div className='flex flex-col flex-1'>
                                    <div className={`flex ${isLocationInIran ? 'flex-row' : 'flex-row-reverse'} items-center gap-3`}>
                                        <h2 className={`${myFont.className} Leaderboards__title text-white text-2xl w-fit ${isLocationInIran ? 'ml-auto' : 'mr-auto translate-y-0.5'}`}>
                                            {isLocationInIran ? 'مبلغ قابل برداشت' : 'Withdrawable Amount'}
                                        </h2>
                                        <Image src={certificateMini} alt='icon' unoptimized />
                                    </div>
                                    <p className={`${myFontIran.className} ${isLocationInIran && 'rtl'} mt-2 text-base`} style={{ color: 'rgba(255, 255, 255, 0.40)' }}>
                                        {isLocationInIran
                                            ? 'در این قسمت میتوانید مبلغ قابل برداشت خود را مشاهده و در صورت تمایل اقدام به برداشت نمایید تا به حساب شما در بازه زمانی 24 الی 48 ساعت اضافه شود.'
                                            : 'In this section, you can view your withdrawable amount and, if you wish, proceed with the withdrawal process to have it added to your account within 24 to 48 hours.'}
                                    </p>
                                </div>

                                <div className='flex-1'>
                                    <h3 className={`${myFont.className} text-center mb-2 text-lg text-main-orange`}>
                                        {isLocationInIran ? 'مبلغ فعلی' : 'Current Amount'}
                                    </h3>
                                    <StatisticsComponents dollar={true} value={data?.withdrawable_amount} isReferral />
                                </div>

                                <div className='flex-[2] flex flex-col items-center'>
                                    <h3 className={`${myFont.className} text-center mb-2 text-lg text-main-orange`}>
                                        {isLocationInIran ? 'توضیحات مربوطه خود را بنویسید' : 'Write your relevant description'}
                                    </h3>
                                    <textarea
                                        cols={65} rows={5} className={`${isLocationInIran ? 'rtl' : ''} bg-transparent border border-white rounded-md md:block hidden text-white`}
                                        value={description} onChange={handleTextareaChange}
                                    />
                                    <textarea
                                        cols={35} rows={5} className={`${isLocationInIran ? 'rtl' : ''} bg-transparent border border-white rounded-md md:hidden block text-white`}
                                        value={description} onChange={handleTextareaChange}
                                    />
                                </div>
                            </div>


                            <div className='flex justify-center'>
                                <Image src={isLocationInIran ? buttonImage : profitWithdrawal} unoptimized alt='button' className='cursor-pointer' onClick={handleSendButtonClick} />
                            </div>
                        </>
                        :
                        <div className='bg-[#1A1C1F] h-full lg:w-full mx-4 lg:mx-6 sm:mx-12 py-8 px-3 sm:px-6 rounded-lg lg:mt-6 mb-10'>
                            <div className={`flex ${isLocationInIran ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-4`}>
                                <h2 className={`${myFont.className} Leaderboards__title text-white text-2xl w-fit ${isLocationInIran ? 'ml-auto' : 'mr-auto translate-y-0.5'}`}>

                                    {isLocationInIran ? 'برداشت سود' : 'Profit Withdrawal'}
                                </h2>
                                <Image src={certificateMini} alt='icon' unoptimized />
                            </div>

                            <div className='flex flex-col justify-center gap-4 items-center'>
                                <Image src={empty} alt='empty' />
                                <p className={`${myFontIran.className} text-white ${props.isLocationIran ? 'rtl' : ''}`}>
                                    {isLocationInIran ? ' در حال حاظر اطلاعات برداشت سود شما موجود نمي باشد. لطفا بعدا امتحان كنيد.' : 'Currently, your profit withdrawal information is not available. Please try again later.'}

                                </p>
                            </div>
                        </div>
                    }

                    <div className='flex flex-col gap-2 bg-[#1D1D1D] mt-6 p-4 '>
                        <div className={`flex ${isLocationInIran ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-4 mb-6`}>
                            <h2 className={`${myFont.className} Leaderboards__title text-white text-2xl w-fit ${isLocationInIran ? 'ml-auto' : 'mr-auto translate-y-0.5'}`}>

                                {isLocationInIran ? 'آمار برداشت سود' : 'Withdrawl statistics'}
                            </h2>
                            <Image src={certificateMini} alt='icon' unoptimized />
                        </div>
                        <div className={`accounts__info rounded-md p-1 mt-5 w-full text-white overflow-auto ${props.isLocationIran ? 'rtl' : 'ltr'}`}>
                            <table className={`${myFontIran.className} w-full`}>
                                <tr>
                                    <th className={`${myFont.className} text-xl text-center text-main-orange`}>
                                        {isLocationInIran ? '' : 'Ticket ID'}
                                    </th>
                                    <th className={`${myFont.className} text-xl text-center text-main-orange`}>
                                        {isLocationInIran ? 'مبلغ برداشت' : 'Withdrawal amount'}
                                    </th>
                                    <th className={`${myFont.className} text-xl text-center text-main-orange`}>
                                        {isLocationInIran ? 'شماره پيگيري' : 'Tracking Number'}
                                    </th>
                                    <th className={`${myFont.className} text-xl text-center text-main-orange`}>

                                        {isLocationInIran ? 'تاريخ' : 'Date'}
                                    </th>
                                    <th className={`${myFont.className} text-xl text-center text-main-orange`}>
                                        {isLocationInIran ? 'وضعیت برداشت' : 'Ticket Status'}
                                    </th>
                                </tr>

                                <tr>
                                    <td className='text-center'>
                                        <h2 className='text-main-orange text-xl sm:text-2xl font-bold'> 1 </h2>
                                    </td>
                                    <td className='text-center'>
                                        <p className='text-white'>
                                            550000
                                        </p>
                                    </td>
                                    <td className='text-center'>
                                        <p className='text-white'>
                                            32412412
                                        </p>
                                    </td>
                                    <td className='text-center'>
                                        <p className='text-white'>
                                            12/23/2023
                                        </p>
                                    </td>
                                    <td className='text-center wrap'>
                                        <button className={`${myFontIran.className}
                                px-5 sm:px-15 sm:py-2 py-3 text-white rounded-lg text-xs cursor-default
                                sm:text-sm bg-main-orange`}
                                        >
                                            pending
                                        </button>
                                    </td>
                                </tr>

                                <tr>
                                    <td className='text-center'>
                                        <h2 className='text-main-orange text-xl sm:text-2xl font-bold'> 2 </h2>
                                    </td>
                                    <td className='text-center'>
                                        <p className='text-white'>
                                            550000
                                        </p>
                                    </td>
                                    <td className='text-center'>
                                        <p className='text-white'>
                                            32412412
                                        </p>
                                    </td>
                                    <td className='text-center'>
                                        <p className='text-white'>
                                            12/23/2023
                                        </p>
                                    </td>
                                    <td className='text-center wrap'>
                                        <button className={`${myFontIran.className}
                                px-5 sm:px-15 sm:py-2 py-3 text-white rounded-lg text-xs cursor-default
                                sm:text-sm bg-main-orange`}
                                        >
                                            pending
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center'>
                                        <h2 className='text-main-orange text-xl sm:text-2xl font-bold'> 3 </h2>
                                    </td>
                                    <td className='text-center'>
                                        <p className='text-white'>
                                            550000
                                        </p>
                                    </td>
                                    <td className='text-center'>
                                        <p className='text-white'>
                                            32412412
                                        </p>
                                    </td>
                                    <td className='text-center'>
                                        <p className='text-white'>
                                            12/23/2023
                                        </p>
                                    </td>
                                    <td className='text-center wrap'>
                                        <button className={`${myFontIran.className}
                                px-5 sm:px-15 sm:py-2 py-3 text-white rounded-lg text-xs cursor-default
                                sm:text-sm bg-main-orange`}
                                        >
                                            pending
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='text-center'>
                                        <h2 className='text-main-orange text-xl sm:text-2xl font-bold'> 4 </h2>
                                    </td>
                                    <td className='text-center'>
                                        <p className='text-white'>
                                            550000
                                        </p>
                                    </td>
                                    <td className='text-center'>
                                        <p className='text-white'>
                                            32412412
                                        </p>
                                    </td>
                                    <td className='text-center'>
                                        <p className='text-white'>
                                            12/23/2023
                                        </p>
                                    </td>
                                    <td className='text-center wrap'>
                                        <button className={`${myFontIran.className}
                                px-5 sm:px-15 sm:py-2 py-3 text-white rounded-lg text-xs cursor-default
                                sm:text-sm bg-main-orange`}
                                        >
                                            pending
                                        </button>
                                    </td>
                                </tr>

                            </table>

                            {/* <div className='flex flex-col justify-center gap-4 items-center'>
                                    <Image src={empty} alt='empty' />
                                    <p className={`${myFontIran.className} ${props.isLocationIran ? 'rtl' : ''}`}>
                                        {isLocationInIran ? 'در حال حاظر هيچ تيكت ثبت شده اي نداريد.' : 'Currently, you do not have any tickets registered.'}

                                    </p>
                                </div> */}
                        </div>

                    </div>

                </>
                : <ReactLoading type={'spinningBubbles'} className='mx-auto mt-12' color={'#F68D2E'} height={667} width={150} />
            }

            <style>
                {
                    `
                    .p-toast-detail {
                        text-align : ${props.isLocationIran ? 'right' : 'left'} ;
                    }
                    .wrap {
                        text-wrap: nowrap;
                    }


                    table {
                        border - collapse: separate;
                    border-spacing: 0 10px;
      }

      th {
        padding-left: 5px;
        padding-right: 5px; 
        padding-bottom: 20px;
        padding-top: 20px;
      }
    
                     td {
                        padding-left: 5px;
                        padding-right: 5px; 
                        padding-bottom: 14px;
                        padding-top: 14px;
      }   
      tr:not(:last-child,:first-child) {
        border-bottom: 1px solid rgba(255, 255, 255, 0.10);
      }
      
                    `
                }
            </style>
        </div>
    );
};

export default ProfitWithdrawal;