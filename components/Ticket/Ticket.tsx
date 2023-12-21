import React, { useEffect, useRef, useState } from 'react';
import localFont from 'next/font/local';
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import certificateMini from '../../assets/icons/certificateMini.svg';
import Image from 'next/image';
import NewInput from '../NewInput/NewInput';
import StatisticsComponents from '../StatisticsComponents/StatisticsComponents';
import plus from '../../assets/icons/download2.svg'
import { Toast, ToastMessage } from 'primereact/toast';
import ticketPic from '../../assets/images/ticketPic.png'
import SendButton from '../../assets/images/sendButton.png'
import { SendTicket, getProfileInfo, getTicketTypes, getTickets } from '@/lib/apiConfig';
import tick from '../../assets/icons/tick.svg'

const Ticket = (props: {
    isLocationIran: boolean
}) => {
    const [supportTypes, setSupportTypes] = useState<[]>()
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [userId, setUserId] = useState<number>()
    const [tickets, setTickets] = useState<{
        subject: string
        ticket_status: string
        created_at: string
        support_type: string
    }[]>()


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
        getTickets().then((res) => {
            setTickets(res.data)
        })
    }, [])


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
            <Toast ref={toastBottomRight} position="bottom-right" />
            <div className='Ticket bg-[#1A1C1F] h-full lg:w-full mx-4 lg:mx-6 sm:mx-12 py-8 px-3 sm:px-6 rounded-lg lg:mt-6 mb-10'>
                <div className='flex flex-col lg:flex-row-reverse gap-2'>
                    <div className='flex flex-row items-center gap-4'>
                        <h2 className={`${myFont.className} Ticket__title text-white text-2xl w-fit ml-auto`}>
                            ارسال تیکت
                        </h2>
                        <Image src={certificateMini} alt='icon' unoptimized />
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row'>
                    <div className='flex flex-col items-center gap-5 flex-1'>
                        <div className={`${myFont.className}`}>
                            <h2 className={`Ticket__title text-main-orange text-base w-fit ml-auto text-center`}>
                                اگر احتیاج به آپلود فایل هست در این بخش وارد کنید
                            </h2>
                            {selectedFile &&
                                <div className='flex flex-row-reverse items-end gap-2 mt-3 justify-center'>
                                    <p className={`${props.isLocationIran ? 'rtl' : 'ltr'}
                              text-white text-base w-fit text-[#699F4C] translate-y-1 m-0`}>
                                        فايل شما آپلود شده و آماده گرديده است
                                    </p>
                                    <Image src={tick} alt='tick' className='w-4 ' />
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
                                placeholder='موضوع'
                                isTextArea={false}
                                onChange={(value) => handleInputChange('subject', value)}
                            />
                            <NewInput
                                placeholder='نوع پشتیبانی'
                                isTextArea={false}
                                selectable
                                supportTypes={supportTypes}
                                onChange={(value) => handleInputChange('supportType', value)}
                            />
                            <NewInput
                                placeholder='فوریت'
                                isTextArea={false}
                                onChange={(value) => handleInputChange('priority', value)}
                            />
                            <NewInput
                                placeholder='شماره سفارش'
                                isTextArea={false}
                                onChange={(value) => handleInputChange('orderNumber', value)}
                            />
                            <NewInput
                                placeholder='اکانت متاتریدر'
                                isTextArea={false}
                                onChange={(value) => handleInputChange('metatraderAccount', value)}
                            />
                            <NewInput
                                placeholder='پلتفرم'
                                isTextArea={false}
                                onChange={(value) => handleInputChange('platform', value)}
                            />
                        </div>
                        <div>
                            <NewInput
                                placeholder='توضیحات مربوطه خود را بنویسید'
                                isTextArea
                                onChange={(value) => handleInputChange('description', value)}
                            />
                        </div>
                    </div>

                </div>
            </div>
            <div className='flex justify-center cursor-pointer'>
                <Image src={SendButton} alt='button' unoptimized onClick={handleSendButtonClick} />
            </div>
            <div className='flex flex-col gap-2 bg-[#1D1D1D] mt-6 p-4 '>
                <div className='flex flex-row items-center gap-4'>
                    <h2 className={`${myFont.className} Profile__title text-white text-2xl w-fit ml-auto`}>
                        آمار تیکتینگ
                    </h2>
                    <Image src={certificateMini} alt='icon' unoptimized />
                </div>

                <div className={`accounts__info rounded-md p-1 mt-5 w-full text-white overflow-auto rtl`}>
                    <table className={`${myFontIran.className} w-full`}>
                        <tr>
                            <th className={`${myFont.className} text-xl text-center text-main-orange`}></th>
                            <th className={`${myFont.className} text-xl text-center text-main-orange`}>موضوع تیکت</th>
                            <th className={`${myFont.className} text-xl text-center text-main-orange`}>نوع پشتیبانی</th>
                            <th className={`${myFont.className} text-xl text-center text-main-orange`}>تاریخ</th>
                            <th className={`${myFont.className} text-xl text-center text-main-orange`}>وضعیت تیکت</th>
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
                                        
                                        sm:text-sm ${item.ticket_status === "در انتظار" ? 'bg-main-orange' : item.ticket_status === "منقضی شده" ? 'bg-[#740000]' : item.ticket_status === "پاسخ داده شد" ? 'bg-[#159400]' : ''}`}
                                        >
                                            {item.ticket_status}
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </table>

                </div>
            </div>


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