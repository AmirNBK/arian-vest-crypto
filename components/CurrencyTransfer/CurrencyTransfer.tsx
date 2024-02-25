import useLocationData from '@/Hooks/location';
import React, { useEffect, useRef, useState } from 'react';
import localFont from 'next/font/local'
import StatisticsComponents from '../StatisticsComponents/StatisticsComponents';
import NewInput from '../NewInput/NewInput';
import ReactLoading from 'react-loading';
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import SendButton from '../../assets/images/sendButton.png'
import sendInfoButton from '../../assets/images/sendInfo.png'
import Image from 'next/image';
import { Toast, ToastMessage } from 'primereact/toast';
import { CurrencyTransfer, getProfileInfo } from '@/lib/apiConfig';

const CurrencyTransferComponent = (onRender: any) => {
    const { locationData, error, loading } = useLocationData();
    const [loadingSubmit, setLoadingSubmit] = useState<boolean>(false)
    const [userId, setUserId] = useState<number>()
    const isLocationInIran = locationData === 'IR' || !locationData;
    const [trackCode, setTrackCode] = useState()
    const challengeName = localStorage.getItem('challenge amount');
    const toastBottomRight = useRef<Toast>(null);
    const price = sessionStorage.getItem('buying price');
    const challengeType = localStorage.getItem('challenge');

    const handleInputChange = (value: any) => {
        setTrackCode(value)
    };

    useEffect(() => {
        getProfileInfo().then((res) => {
            setUserId(res.data.pk)
        })

    }, [])

    const submit = () => {
        setLoadingSubmit(true)
        if (trackCode) {
            CurrencyTransfer(userId, challengeType + ' ' + challengeName, price, trackCode).then((res) => {
                setLoadingSubmit(false)
                if (res.status === 201) {
                    toastBottomRight.current?.show({
                        severity: 'success',
                        summary: 'Success',
                        detail: `${isLocationInIran ? 'اطلاعات شما با موفقیت ارسال شدو بعد از پیگیری پشتیبانی و تایید به حساب شما اضافه خواهد شد' : 'Your information has been successfully submitted and will be added to your account after following up with support'}`,
                        life: 3000,
                    });
                }
            })
        }
        else {
            setLoadingSubmit(false)
            toastBottomRight.current?.show({
                severity: 'error',
                summary: 'Error',
                detail: `Please enter your Tracking code`,
                life: 3000,
            });
        }

    }

    return (
        <>
            {loading ? '' :
                <div className='CurrencyTransfer text-white mb-24 mt-6'>
                    <Toast ref={toastBottomRight} position="bottom-right" />
                    <div className='Ticket bg-[#1A1C1F] h-full lg:w-11/12 mx-4 lg:mx-auto sm:mx-12 py-8 px-3 sm:px-6 rounded-lg lg:mt-6 mb-10'>
                        <div className={`flex ${isLocationInIran ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-4 mb-2`}>
                            <h2 className={`${myFont.className} Leaderboards__title text-white text-2xl w-fit ${isLocationInIran ? 'ml-auto' : 'mr-auto translate-y-0.5'}`}>
                                {isLocationInIran ? 'انتقال ارز' : 'Currency transfer'}
                            </h2>
                        </div>
                        <p
                            className={`${myFontIran.className} ${isLocationInIran && 'rtl'} text-sm mt-2 mb-8`}
                            style={{
                                color: 'rgba(255, 255, 255, 0.40)'
                            }}>
                            {isLocationInIran ?
                                'لطفاً در این بخش یک عکس سلفی به همراه مدرک شناسایی خود، یک عکس از قسمت جلوی کارت شناسایی و یک عکس از پشت کارت شناسایی خود ارسال کنید. علاوه بر این، لطفاً برای تکمیل فرآیند تأیید هویت، اطلاعات زیر شامل نام خانوادگی و نام، شماره تماس و شماره شناسایی خود را در فرم زیر ارائه دهید.                                    توجه داشته باشید که حجم تصاویر آپلود شده نباید بیشتر از 4 مگابایت باشد و ترجیحاً این تصاویر با فرمت JPG ارسال شوند.'
                                :
                                'In this section, kindly submit a selfie along with your identification document, a photo of the front side of your identification card, and a photo of the back side of your identification card. Additionally, please provide the following information in the form below, including your last name and first name, contact number, and identification number, to complete the identity verification process.                                    Please be aware that the size of the uploaded images should not exceed 4 megabytes, and it is preferable to send these images in JPG format.'
                            }

                        </p>
                        <div>
                            <h3 className={`${myFont.className} text-center mb-2 text-xl text-main-orange`}>
                                {isLocationInIran ? 'آدرس کیف پول' : 'Wallet address'}
                            </h3>
                            <StatisticsComponents dollar={false} title={isLocationInIran ? 'تعداد جوایز' : 'Wallet address'} width={'fit'} value={'A122-223A-JN5L-IO2P'} icon={''} />
                        </div>
                        <div className='sm:block hidden my-10'>
                            <NewInput
                                isLocationIran={isLocationInIran}
                                placeholder={isLocationInIran ? 'کد رهگیری' : 'Tracking Code'}
                                isTextArea={false}
                                width={'1/3'}
                                onChange={(value) => handleInputChange(value)}
                                value={trackCode}
                            />
                        </div>
                        <div className='sm:hidden block my-10'>
                            <NewInput
                                isLocationIran={isLocationInIran}
                                placeholder={isLocationInIran ? 'کد رهگیری' : 'Tracking Code'}
                                isTextArea={false}
                                width={'full'}
                                onChange={(value) => handleInputChange(value)}
                                value={trackCode}
                            />
                        </div>

                        {loadingSubmit ?
                            <ReactLoading type={'spinningBubbles'} className='mx-auto' color={'#F68D2E'} height={50} width={50} />
                            :
                            <div className={`flex justify-center cursor-pointer`}>
                                <Image src={isLocationInIran ? SendButton : sendInfoButton} alt='button' unoptimized onClick={() => {
                                    submit()
                                }} />
                            </div>
                        }
                    </div>
                </div>
            }
        </>
    );
};

export default CurrencyTransferComponent;