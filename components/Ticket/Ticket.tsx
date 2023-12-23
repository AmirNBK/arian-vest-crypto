import React, { useEffect, useRef, useState } from 'react';
import localFont from 'next/font/local';
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import certificateMini from '../../assets/icons/certificateMini.svg';
import Image from 'next/image';
import sendInfoButton from '../../assets/images/sendInfo.png'
import NewInput from '../NewInput/NewInput';
import StatisticsComponents from '../StatisticsComponents/StatisticsComponents';
import plus from '../../assets/icons/download2.svg'
import empty from '../../assets/icons/empty.png'
import { Toast, ToastMessage } from 'primereact/toast';
import ticketPic from '../../assets/images/ticketPic.png'
import SendButton from '../../assets/images/sendButton.png'
import ReactLoading from 'react-loading';
import { SendTicket, getProfileInfo, getTicketTypes, getTickets } from '@/lib/apiConfig';
import tick from '../../assets/icons/tick.svg'

const Ticket = (props: {
    isLocationIran: boolean
}) => {
    const [supportTypes, setSupportTypes] = useState<[]>()
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [userId, setUserId] = useState<number>()
    const [refreshTickets, setRefreshTickets] = useState<boolean>()
    const [tickets, setTickets] = useState<{
        subject: string
        ticket_status: string
        created_at: string
        support_type: string
    }[]>()
    const isLocationIran = props.isLocationIran



    interface FormData {
        subject: string;
        supportType: string;
        priority: string;
        orderNumber: string;
        metatraderAccount: string;
        platform: string;
        description: string;
    }

    type FormField = keyof FormData;
    const toastBottomRight = useRef<Toast>(null);
    useEffect(() => {
        getTicketTypes().then((res) => {
            setSupportTypes(res.data)
        })
        getProfileInfo().then((res) => {
            setUserId(res.data.pk)
        })
    }, [])

    useEffect(() => {
        getTickets().then((res) => {
            setTickets(res.data)
        })
    }, [refreshTickets])


    const handleFileChange = (event: any) => {
        setSelectedFile(event.target.files[0]);
    };

    const [formData, setFormData] = useState<FormData>({
        subject: '',
        supportType: '',
        priority: '',
        orderNumber: '',
        metatraderAccount: '',
        platform: '',
        description: ''
    });

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

        if (formData.subject, formData.supportType, formData.priority, formData.orderNumber, formData.metatraderAccount, formData.platform, formData.description) {
            SendTicket(
                userId,
                formData.supportType,
                formData.priority,
                formData.subject,
                formData.platform,
                formData.metatraderAccount,
                formData.orderNumber,
                formData.description,
                selectedFile
            )
                .then((res) => {
                    if (res.status === 201) {
                        toastBottomRight.current?.show({
                            severity: 'success',
                            summary: 'Success',
                            detail: `${props.isLocationIran ? 'درخواست تيكت شما با موفقيت ثبت گرديد' : 'Your ticket request has been successfully registered'}`,
                            life: 3000,
                        });
                        setRefreshTickets(!refreshTickets)
                        setTimeout(() => {
                            setFormData({
                                subject: '',
                                supportType: '',
                                priority: '',
                                orderNumber: '',
                                metatraderAccount: '',
                                platform: '',
                                description: '',
                            });
                        }, 0);
                    }
                    else {
                        toastBottomRight.current?.show({
                            severity: 'error',
                            summary: 'Error',
                            detail: `${props.isLocationIran ? 'مشكلي در ارسال تيكت ايجاد شد' : 'Error sending ticket'}`,
                            life: 3000,
                        });
                    }


                })
                .catch((err) => {
                    toastBottomRight.current?.show({
                        severity: 'error',
                        summary: 'Error',
                        detail: `${props.isLocationIran ? 'مشكلي در ارسال تيكت ايجاد شد' : 'Error sending ticket'}`,
                        life: 3000,
                    });
                });
        } else {
            toastBottomRight.current?.show({
                severity: 'error',
                summary: 'Error',
                detail: `${props.isLocationIran ? 'لطفا تمامی فیلد ها را تکمیل نمایید' : 'Please fill out all the fields'}`,
                life: 3000,
            });
        }
    };

    const handleInputChange = (fieldName: FormField, value: string) => {
        setFormData((prevData) => ({
            ...prevData,
            [fieldName]: value,
        }));
    };

    return (
        <div>
            {tickets ?
                <>
                    <Toast ref={toastBottomRight} position="bottom-right" />
                    <div className='Ticket bg-[#1A1C1F] h-full lg:w-full mx-4 lg:mx-6 sm:mx-12 py-8 px-3 sm:px-6 rounded-lg lg:mt-6 mb-10'>
                        <div className={`flex ${isLocationIran ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-4 mb-6`}>
                            <h2 className={`${myFont.className} Leaderboards__title text-white text-2xl w-fit ${isLocationIran ? 'ml-auto' : 'mr-auto translate-y-0.5'}`}>

                                {isLocationIran ? '  ارسال تیکت' : 'Send ticket'}
                            </h2>
                            <Image src={certificateMini} alt='icon' unoptimized />
                        </div>

                        <div className={`flex flex-col  ${isLocationIran ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                            <div className='flex flex-col items-center gap-5 flex-1'>
                                <div className={`${myFont.className}`}>
                                    <h2 className={`Ticket__title text-main-orange text-base w-fit ml-auto text-center`}>
                                        {isLocationIran ? 'اگر احتیاج به آپلود فایل هست در این بخش وارد کنید' : 'If you need to upload a file, enter it in this section'}
                                    </h2>
                                    {selectedFile &&
                                        <div className='flex flex-row-reverse items-end gap-2 mt-3 justify-center'>
                                            <p className={`${isLocationIran ? 'rtl' : 'ltr'} text-white text-base w-fit text-[#699F4C] translate-y-1 m-0`}>
                                                {isLocationIran ? 'فايل شما آپلود شده و آماده گرديده است' : 'Your file has been uploaded and is ready'}
                                            </p>
                                            <Image src={tick} alt='tick' className='w-4' />
                                        </div>
                                    }
                                </div>
                                <StatisticsComponents width={36} paddingY={8} dollar={false} value={
                                    <div>
                                        <label htmlFor="fileInput">
                                            <Image src={plus} alt="plus" className='cursor-pointer' />
                                        </label>
                                        <input
                                            id="fileInput"
                                            className="hidden"
                                            type="file"
                                            onChange={handleFileChange}
                                        />
                                    </div>
                                } />
                                <Image src={ticketPic} alt='ticketPic' unoptimized />
                            </div>

                            <div className='flex flex-col flex-[1.5]'>
                                <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 flex-1'>
                                    <NewInput
                                        isLocationIran={props.isLocationIran}
                                        placeholder={isLocationIran ? 'موضوع' : 'Subject'}
                                        isTextArea={false}
                                        onChange={(value) => handleInputChange('subject', value)}
                                        value={formData.subject}
                                    />
                                    <NewInput
                                        isLocationIran={props.isLocationIran}
                                        placeholder={isLocationIran ? 'نوع پشتیبانی' : 'Support Type'}
                                        isTextArea={false}
                                        selectable
                                        supportTypes={supportTypes}
                                        onChange={(value) => handleInputChange('supportType', value)}
                                    />
                                    <NewInput
                                        isLocationIran={props.isLocationIran}
                                        placeholder={isLocationIran ? 'فوریت' : 'Priority'}
                                        isTextArea={false}
                                        onChange={(value) => handleInputChange('priority', value)}
                                        value={formData.priority}
                                    />
                                    <NewInput
                                        isLocationIran={props.isLocationIran}
                                        placeholder={isLocationIran ? 'شماره سفارش' : 'Order Number'}
                                        isTextArea={false}
                                        onChange={(value) => handleInputChange('orderNumber', value)}
                                        value={formData.orderNumber}
                                    />
                                    <NewInput
                                        isLocationIran={props.isLocationIran}
                                        placeholder={isLocationIran ? 'اکانت متاتریدر' : 'Metatrader Account'}
                                        isTextArea={false}
                                        onChange={(value) => handleInputChange('metatraderAccount', value)}
                                        value={formData.metatraderAccount}
                                    />
                                    <NewInput
                                        isLocationIran={props.isLocationIran}
                                        placeholder={isLocationIran ? 'پلتفرم' : 'Platform'}
                                        isTextArea={false}
                                        onChange={(value) => handleInputChange('platform', value)}
                                        value={formData.platform}
                                    />
                                </div>
                                <div>
                                    <NewInput
                                        isLocationIran={props.isLocationIran}
                                        placeholder={isLocationIran ? 'توضیحات مربوطه خود را بنویسید' : 'Write your relevant description here'}
                                        isTextArea
                                        onChange={(value) => handleInputChange('description', value)}
                                        value={formData.description}
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='flex justify-center cursor-pointer'>
                        <Image src={isLocationIran ? SendButton : sendInfoButton} alt='button' unoptimized onClick={handleSendButtonClick} />
                    </div>
                    <div className='flex flex-col gap-2 bg-[#1D1D1D] mt-6 p-4 '>
                        <div className={`flex ${isLocationIran ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-4 mb-6`}>
                            <h2 className={`${myFont.className} Leaderboards__title text-white text-2xl w-fit ${isLocationIran ? 'ml-auto' : 'mr-auto translate-y-0.5'}`}>

                                {isLocationIran ? 'آمار تیکتینگ' : 'Ticketing statistics'}
                            </h2>
                            <Image src={certificateMini} alt='icon' unoptimized />
                        </div>
                        <div className={`accounts__info rounded-md p-1 mt-5 w-full text-white overflow-auto ${props.isLocationIran ? 'rtl' : 'ltr'}`}>
                            {tickets.length ?
                                <table className={`${myFontIran.className} w-full`}>
                                    <tr>
                                        <th className={`${myFont.className} text-xl text-center text-main-orange`}>
                                            {isLocationIran ? '' : 'Ticket ID'}
                                        </th>
                                        <th className={`${myFont.className} text-xl text-center text-main-orange`}>
                                            {isLocationIran ? 'موضوع تیکت' : 'Ticket Subject'}
                                        </th>
                                        <th className={`${myFont.className} text-xl text-center text-main-orange`}>
                                            {isLocationIran ? 'نوع پشتیبانی' : 'Support Type'}
                                        </th>
                                        <th className={`${myFont.className} text-xl text-center text-main-orange`}>
                                            {isLocationIran ? 'تاریخ' : 'Date'}
                                        </th>
                                        <th className={`${myFont.className} text-xl text-center text-main-orange`}>
                                            {isLocationIran ? 'وضعیت تیکت' : 'Ticket Status'}
                                        </th>
                                    </tr>

                                    {tickets?.map((item, index) => {
                                        return (
                                            <tr>
                                                <td className='text-center'>
                                                    <h2 className='text-main-orange text-xl sm:text-2xl font-bold'> {index + 1} </h2>
                                                </td>
                                                <td className='text-center'>
                                                    <p className='text-white'>
                                                        {item.subject}
                                                    </p>
                                                </td>
                                                <td className='text-center'>
                                                    <p className='text-white'>
                                                        {item.support_type}
                                                    </p>
                                                </td>
                                                <td className='text-center'>
                                                    <p className='text-white'>
                                                        {formatCreatedAtDate(item.created_at)}
                                                    </p>
                                                </td>
                                                <td className='text-center wrap'>
                                                    <button className={`${myFontIran.className}
                                px-5 sm:px-15 sm:py-2 py-3 text-white rounded-lg text-xs cursor-default
                                sm:text-sm ${item.ticket_status === "waiting" ? 'bg-main-orange' : item.ticket_status === "not answered" ? 'bg-[#740000]' : item.ticket_status === "has been answered" ? 'bg-[#159400]' : ''}`}
                                                    >
                                                        {item.ticket_status}
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </table>
                                :
                                <div className='flex flex-col justify-center gap-4 items-center'>
                                    <Image src={empty} alt='empty' />
                                    <p className={`${myFontIran.className} ${props.isLocationIran ? 'rtl' : ''}`}>
                                        {isLocationIran ? 'در حال حاظر هيچ تيكت ثبت شده اي نداريد.' : 'Currently, you do not have any tickets registered.'}

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

export default Ticket;