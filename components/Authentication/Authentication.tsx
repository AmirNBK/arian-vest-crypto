import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import certificateMini from '../../assets/icons/certificateMini.svg';
import localFont from 'next/font/local';
import NewInput from '../NewInput/NewInput';
import StatisticsComponents from '../StatisticsComponents/StatisticsComponents';
import { Toast, ToastMessage } from 'primereact/toast';
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import person from '../../assets/icons/person.svg'
import SendButton from '../../assets/images/sendButton.png'
import sendInfoButton from '../../assets/images/sendInfo.png'
import tick from '../../assets/icons/tick.svg'
import idCardFront from '../../assets/icons/idCard.png'
import idCardBack from '../../assets/icons/idCard2.png'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import pending from '../../assets/icons/pending.png'
import ReactLoading from 'react-loading';
import { AuthenticationApi, getProfileInfo } from '@/lib/apiConfig';

const Authentication = (
    props: {
        isLocationIran: boolean
    }
) => {
    const isLocationInIran = props.isLocationIran
    interface FormData {
        name: string;
        lastName: string;
        nationalCode: string;
        phone: string
    }

    const [userPhoto, setUserPhoto] = useState<string | StaticImport>();
    const [userPhotoStatic, setUserPhotoStatic] = useState<string | StaticImport>();
    const [frontCard, setFrontCard] = useState<string | StaticImport>();
    const [frontCardStatic, setFrontCardStatic] = useState<string | StaticImport>();
    const [backCard, setBackCard] = useState<string | StaticImport>();
    const [backCardStatic, setBackCardStatic] = useState<string | StaticImport>();
    const toastBottomRight = useRef<Toast>(null);
    const [userId, setUserId] = useState<number>()
    const [isVerifiedPending, setIsVerifiedPending] = useState<boolean>()
    const [isVerified, setIsVerified] = useState<boolean>()
    const [loading, setLoading] = useState<boolean>(false)

    interface FormData {
        name: string;
        lastName: string;
        nationalCode: string;
        phone: string
    }

    type FormField = keyof FormData;


    const handleUserPhotoFile = (event: any) => {
        const file = event.target.files[0];
        setUserPhoto(event.target.files[0]);

        if (file) {
            const imageUrlUserPhoto = URL.createObjectURL(file);
            setUserPhotoStatic(imageUrlUserPhoto)
        }
    };

    useEffect(() => {
        getProfileInfo().then((res) => {
            setUserId(res.data.pk)
            setIsVerifiedPending(res.data.status_verify === "Pending")
            setIsVerified(res.data.status_verify === "Accepted")
        })

    }, [])

    const handleUserFrontCard = (event: any) => {
        const file = event.target.files[0];
        setFrontCard(event.target.files[0]);

        if (file) {
            const imageUrlFront = URL.createObjectURL(file);
            setFrontCardStatic(imageUrlFront)
        }
    };

    const handleUserBackCard = (event: any) => {
        const file = event.target.files[0];
        setBackCard(event.target.files[0]);

        if (file) {
            const imageUrlBack = URL.createObjectURL(file);
            setBackCardStatic(imageUrlBack)
        }
    };

    const handleInputChange = (fieldName: FormField, value: string) => {
        setFormData((prevData) => ({
            ...prevData,
            [fieldName]: value,
        }));
    };

    const [formData, setFormData] = useState<FormData>({
        name: '',
        lastName: '',
        nationalCode: '',
        phone: ''
    });

    const handleSendButtonClick = () => {
        setLoading(true)
        if (formData.name && formData.lastName && formData.nationalCode && formData.phone && frontCard && userPhoto && backCard) {
            AuthenticationApi(userPhoto, frontCard, backCard, userId, formData.name, formData.lastName, formData.nationalCode, formData.phone).then((res) => {
                if (res.status === 201) {
                    toastBottomRight.current?.show({
                        severity: 'success',
                        summary: 'Success',
                        detail: `${props.isLocationIran ? 'اطلاعات شما براي احراز هويت ثبت گرديد و به زودي نتيجه به شما اطلاع اعلام خواهد شد.' : 'Your information has been registered for identity verification and the result will be announced to you soon.'}`,
                        life: 3000,
                    });
                    setLoading(false)
                }
                else {
                    toastBottomRight.current?.show({
                        severity: 'error',
                        summary: 'Error',
                        detail: `${res.response.data.non_field_errors[0]}`,
                        life: 3000,
                    });
                    setLoading(false)
                }
            })
        }
        else {
            toastBottomRight.current?.show({
                severity: 'error',
                summary: 'Error',
                detail: `${props.isLocationIran ? 'لطفا تمامی فیلد ها را تکمیل نمایید' : 'Please fill out all the fields'}`,
                life: 3000,
            });
            setLoading(false)
        }
    }

    return (
        <div>
            {userId ?
                <>
                    <Toast ref={toastBottomRight} position="bottom-right" />
                    <div className='Authentication bg-[#1A1C1F] h-full lg:w-full mx-4 lg:mx-6 sm:mx-12 py-8 px-3 sm:px-6 rounded-lg lg:mt-6 mb-10'>
                        <div className={`flex ${isLocationInIran ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-4`}>
                            <h2 className={`${myFont.className} Leaderboards__title text-white text-2xl w-fit ${isLocationInIran ? 'ml-auto' : 'mr-auto translate-y-0.5'}`}>

                                {isLocationInIran ? 'احراز هویت' : 'Authentication'}
                            </h2>
                            <Image src={certificateMini} alt='icon' unoptimized />
                        </div>

                        <div>
                            <p
                                className={`${myFontIran.className} ${isLocationInIran && 'rtl'} text-sm mt-2`}
                                style={{
                                    color: 'rgba(255, 255, 255, 0.40)'
                                }}>
                                {isLocationInIran ?
                                    'لطفاً در این بخش یک عکس سلفی به همراه مدرک شناسایی خود، یک عکس از قسمت جلوی کارت شناسایی و یک عکس از پشت کارت شناسایی خود ارسال کنید. علاوه بر این، لطفاً برای تکمیل فرآیند تأیید هویت، اطلاعات زیر شامل نام خانوادگی و نام، شماره تماس و شماره شناسایی خود را در فرم زیر ارائه دهید.                                    توجه داشته باشید که حجم تصاویر آپلود شده نباید بیشتر از 4 مگابایت باشد و ترجیحاً این تصاویر با فرمت JPG ارسال شوند.'
                                    :
                                    'In this section, kindly submit a selfie along with your identification document, a photo of the front side of your identification card, and a photo of the back side of your identification card. Additionally, please provide the following information in the form below, including your last name and first name, contact number, and identification number, to complete the identity verification process.                                    Please be aware that the size of the uploaded images should not exceed 4 megabytes, and it is preferable to send these images in JPG format.'
                                }

                            </p>
                        </div>

                        {isVerifiedPending ?
                            <div className='flex flex-col items-center mt-16 gap-4 justify-center'>
                                <Image src={pending} alt='pending' />
                                <p className={`${myFontIran.className} text-white ${isLocationInIran && 'rtl'}`}>
                                    {isLocationInIran ? 'درخواست احراز هويت شما در حال بررسي است و به محض تعيين شدن نتيجه به شما اطلاع خواهد داده شد.' :
                                        'Your identity verification request is being reviewed and you will be notified as soon as the result is determined.'
                                    }
                                </p>
                            </div>
                            :
                            isVerified ?

                                <div className='flex flex-col items-center mt-16 gap-4 justify-center'>
                                    <Image src={tick} alt='pending' />
                                    <p className={`${myFontIran.className} text-white ${props.isLocationIran && 'rtl'}`}>
                                        {isLocationInIran ? 'شما با موفقيت احراز هويت و موردتاييد ما قرار گرفته ايد.'
                                            : 'You have been successfully authenticated and approved by us.'
                                        }
                                    </p>
                                </div>
                                :
                                <div className={`flex flex-col ${isLocationInIran ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center lg:items-end gap-6 mt-10`}>
                                    <div className='flex flex-col items-center gap-2'>
                                        <div>
                                            <h2 className={`${myFont.className} Leaderboards__title text-main-orange text-2xl w-fit ml-auto`}>
                                                {isLocationInIran ? 'تصویر کاربر با مدارک' : 'User Photo with Documents'}
                                            </h2>
                                        </div>
                                        <div className=''>
                                            <StatisticsComponents havePlusButton paddingY={0.5} value={
                                                <div>
                                                    <label htmlFor="userPhoto">
                                                        <Image src={userPhotoStatic || person} alt='image' className='cursor-pointer w-full h-full ' width={20} height={20} />
                                                    </label>
                                                    <input
                                                        id="userPhoto"
                                                        className="hidden"
                                                        type="file"
                                                        onChange={handleUserPhotoFile}
                                                    />
                                                </div>
                                            } dollar={false} />
                                        </div>
                                    </div>

                                    <div className='flex flex-col items-center gap-2'>
                                        <div>
                                            <h2 className={`${myFont.className} Leaderboards__title text-main-orange text-2xl w-fit ml-auto`}>
                                                {isLocationInIran ? 'روی کارت‌ ملی' : 'On National ID Card'}
                                            </h2>

                                        </div>
                                        <div className=''>
                                            <StatisticsComponents havePlusButton paddingY={3} value={
                                                <div>
                                                    <label htmlFor="idCardFront">
                                                        <Image src={frontCardStatic || idCardFront} alt='image' className='cursor-pointer w-full h-full ' width={120} height={120} />
                                                    </label>
                                                    <input
                                                        id="idCardFront"
                                                        className="hidden"
                                                        type="file"
                                                        onChange={handleUserFrontCard}
                                                    />
                                                </div>
                                            } dollar={false} />
                                        </div>
                                    </div>

                                    <div className='flex flex-col items-center gap-2'>
                                        <div>
                                            <h2 className={`${myFont.className} Leaderboards__title text-main-orange text-2xl w-fit ml-auto`}>
                                                {isLocationInIran ? 'پشت کارت‌ ملی' : 'Back of the National ID Card'}
                                            </h2>

                                        </div>
                                        <div className=''>
                                            <StatisticsComponents havePlusButton paddingY={3} value={
                                                <div>
                                                    <label htmlFor="idCardBack">
                                                        <Image src={backCardStatic || idCardBack} alt='image' className='cursor-pointer w-full h-full ' width={120} height={120} />
                                                    </label>
                                                    <input
                                                        id="idCardBack"
                                                        className="hidden"
                                                        type="file"
                                                        onChange={handleUserBackCard}
                                                    />
                                                </div>
                                            } dollar={false} />
                                        </div>
                                    </div>

                                    <div className='grid grid-cols-2 gap-4 mt-8'>
                                        <NewInput
                                            isLocationIran={isLocationInIran}
                                            placeholder={isLocationInIran ? 'نام‌ خانوادگی' : 'Last Name'}
                                            onChange={(value) => handleInputChange('lastName', value)}
                                        />

                                        <NewInput
                                            isLocationIran={isLocationInIran}
                                            placeholder={isLocationInIran ? 'نام' : 'First Name'}
                                            onChange={(value) => handleInputChange('name', value)}
                                        />

                                        <NewInput
                                            isLocationIran={isLocationInIran}
                                            placeholder={isLocationInIran ? 'شماره تماس' : 'Phone Number'}
                                            onChange={(value) => handleInputChange('phone', value)}
                                        />

                                        <NewInput
                                            isLocationIran={isLocationInIran}
                                            placeholder={isLocationInIran ? 'کد ملی' : 'National Code'}
                                            onChange={(value) => handleInputChange('nationalCode', value)}
                                        />

                                    </div>

                                </div>
                        }
                    </div>

                    {loading ?
                        <ReactLoading type={'spinningBubbles'} className='mx-auto' color={'#F68D2E'} height={50} width={50} />
                        :
                        <div className={`${(isVerifiedPending || isVerified) ? 'hidden' : ''} flex justify-center cursor-pointer`}>
                            <Image src={isLocationInIran ? SendButton : sendInfoButton} alt='button' unoptimized onClick={handleSendButtonClick} />
                        </div>
                    }
                </>

                :
                <ReactLoading type={'spinningBubbles'} className='mx-auto mt-12' color={'#F68D2E'} height={667} width={150} />

            }
            <style>
                {`
                                    .p-toast-detail {
                                        text-align : ${props.isLocationIran ? 'right' : 'left'} ;
                                    }
                `}
            </style>
        </div>
    );
};

export default Authentication;