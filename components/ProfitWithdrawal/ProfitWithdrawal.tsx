import React, { useEffect, useState, useRef } from 'react';
import localFont from 'next/font/local'
import useWindowSize from '@/Hooks/innerSize';
import Image from 'next/image';
import ReactLoading from 'react-loading';
import certificateMini from '../../assets/icons/certificateMini.svg';
import StatisticsComponents from '../StatisticsComponents/StatisticsComponents';
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
import { Dialog } from 'primereact/dialog';
import empty from '../../assets/icons/empty.png'
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import profitWithdrawal from '../../assets/images/profitWithdrawal.png'
import { Toast, ToastMessage } from 'primereact/toast';
import buttonImage from '../../assets/images/profitButton.png'
import { Wallet, getProfileInfo, getPurchasedAccounts, profitWithdrawlHistory, withdrawlRequest } from '@/lib/apiConfig';

const ProfitWithdrawal = (props: {
    isLocationIran: boolean
    selectedAccount: any
}) => {
    const isLocationInIran = props.isLocationIran
    const [userId, setUserId] = useState<number>()
    const [walletId, setWalletId] = useState<number>()
    const [loading, setLoading] = useState<boolean>(true)
    const [loadingData, setLoadingData] = useState<boolean>(false)
    const [description, setDescription] = useState('');
    const [visible, setVisible] = useState<boolean>(false);
    const [receipt, setReceipt] = useState<any>()


    const handleTextareaChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setDescription(event.target.value);
    };
    const toastBottomRight = useRef<Toast>(null);
    interface Account {
        name: string;
        code: string;
    }
    interface dataType {
        Pending_withdrawals: number
        amount_withdrawn: number
        number_of_withdrawals: number
        total_profit: number
        withdrawable_amount: number
    }

    interface profitHistoryType {
        amount: number;
        created_at: string;
        description: string;
        pk: number;
        length: number;
        status: string;
        invoice_number: number
        certification: File
    };

    const [data, setData] = useState<dataType>()
    const [selectedAccount, setSelectedAccount] = useState<Account | null>(null);
    const [purchasedAccounts, setPurchasedAccounts] = useState<any>();
    const [refreshHistory, setRefreshHistory] = useState<boolean>(true);
    const [profitHistory, setProfitHistory] = useState<profitHistoryType[]>();

    useEffect(() => {
        getPurchasedAccounts().then((res) => {
            const formattedAccounts = res.data.map((account: { accounts: any; pk: { toString: () => any; }; }) => ({
                name: account.accounts,
                code: account.pk.toString(),
            }));

            setPurchasedAccounts(formattedAccounts);
        });
    }, [props.selectedAccount])

    useEffect(() => {
        if (purchasedAccounts && !selectedAccount) {
            setSelectedAccount(purchasedAccounts[0]?.code)
        }
        else setSelectedAccount(props.selectedAccount)
    }, [purchasedAccounts])

    useEffect(() => {
        getProfileInfo().then((res) => {
            setUserId(res.data.pk);
        });

        if (selectedAccount) {
            Wallet(selectedAccount).then((res) => {
                setData(res.data);
                if (res.data) setWalletId(res.data.pk);
                setLoading(false);
            });
        } else {
            const timeoutId = setTimeout(() => {
                setLoading(false);
            }, 2000);

            return () => clearTimeout(timeoutId);
        }
    }, [selectedAccount]);


    useEffect(() => {
        if (walletId) {
            profitWithdrawlHistory(walletId).then((res) => {
                setProfitHistory(res.data)
            })
        }
    }, [walletId, refreshHistory])


    const formatCreatedAtDate = (createdAt: string): string => {
        const dateObject = new Date(createdAt);
        const formattedDate = `${(dateObject.getMonth() + 1)
            .toString()
            .padStart(2, '0')}/${dateObject
                .getDate()
                .toString()
                .padStart(2, '0')}/${dateObject.getFullYear()}`;
        return formattedDate;
    };

    const handleSendButtonClick = () => {
        setLoadingData(true)
        withdrawlRequest(userId, walletId, data?.withdrawable_amount, description).then((res) => {
            if (res.status === 201) {
                toastBottomRight.current?.show({
                    severity: 'success',
                    summary: 'Success',
                    detail: `${props.isLocationIran ? 'درخواست شما با موفقيت ارسال گرديد' : 'Your request has been sent successfully'}`,
                    life: 3000,
                });
                setLoadingData(false)
            }
            else {
                toastBottomRight.current?.show({
                    severity: 'error',
                    summary: 'Error',
                    detail: `${props.isLocationIran ? 'ارسال درخواست شما با مشكل مواجه شد' : 'There was a problem sending your request'}`,
                    life: 3000,
                });
                setLoadingData(false)
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
                            <Dialog header="Certificate" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                                <Image src={receipt} alt='There is no receipt for this withdrawl' width={50} height={50} unoptimized
                                    className='w-full h-full'
                                />
                            </Dialog>
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


                            <div className='flex justify-center'
                                onClick={() => {
                                    setRefreshHistory(!refreshHistory)
                                }}
                            >
                                {loadingData ?
                                    <ReactLoading type={'spinningBubbles'} className='mx-auto' color={'#F68D2E'} height={50} width={50} />
                                    :
                                    <Image src={isLocationInIran ? buttonImage : profitWithdrawal} unoptimized alt='button' className='cursor-pointer' onClick={handleSendButtonClick} />
                                }
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
                                    {isLocationInIran ? ' در حال حاظر اطلاعات برداشت سود شما موجود نمي باشد. لطفا بعدا امتحان كنيد.' : 'Currently, your profit withdrawal information is not available. Please purchase an account or try again later.'}
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

                            {
                                profitHistory &&
                                    profitHistory?.length > 0 ?
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

                                        {profitHistory?.map((item, index) => {
                                            return (
                                                <tr>

                                                    <td className='text-center'>
                                                        <h2 className='text-main-orange text-xl sm:text-2xl font-bold'> {index + 1} </h2>
                                                    </td>
                                                    <td className='text-center'>
                                                        <p className='text-white'>
                                                            ${item.amount}
                                                        </p>
                                                    </td>
                                                    <td className='text-center'>
                                                        <p className='text-white'>
                                                            {item.invoice_number}
                                                        </p>
                                                    </td>
                                                    <td className='text-center'>
                                                        <p className='text-white'>
                                                            {formatCreatedAtDate(item.created_at)}
                                                        </p>
                                                    </td>
                                                    <td className='text-center wrap'>
                                                        <button className={`${myFontIran.className} px-5 sm:px-15 sm:py-2 py-3 text-white rounded-lg text-xs sm:text-sm
                                                   ${item.status === "pending" ? 'bg-main-orange' : item.status === "expired" ? 'bg-[#740000]' : item.status === "Paid" ? 'bg-[#159400]' : ''}
                                                   `}
                                                        >
                                                            {item.status}
                                                        </button>
                                                    </td>
                                                    {
                                                        (item.status === "Paid") &&
                                                        <td
                                                            onClick={() => {
                                                                setVisible(true)
                                                                setReceipt('https://virafundingbackend.darkube.app' + item.certification)
                                                            }}
                                                        >
                                                            <p className='underline text-blue-500 cursor-pointer'>
                                                                {props.isLocationIran ? 'مشاهده فاكتور' : 'View receipt'}
                                                            </p>
                                                        </td>
                                                    }
                                                </tr>
                                            )
                                        })}
                                    </table>
                                    :

                                    <div className='flex flex-col justify-center gap-4 items-center text-white'>
                                        <Image src={empty} alt='empty' />
                                        <p className={`${myFontIran.className} ${props.isLocationIran ? 'rtl' : ''}`}>
                                            {props.isLocationIran ? 'در حال حاظر هيچ تاريخچه برداشت سودی نداريد.' : 'Currently, you do not have any profit withdrawl history.'}

                                        </p>
                                    </div>
                            }
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