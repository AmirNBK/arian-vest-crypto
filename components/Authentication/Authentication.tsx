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
import idCardFront from '../../assets/icons/idCard.png'
import idCardBack from '../../assets/icons/idCard2.png'
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { AuthenticationApi, getProfileInfo } from '@/lib/apiConfig';

const Authentication = (
    props: {
        isLocationIran: boolean
    }
) => {
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
        if (formData.name && formData.lastName && formData.nationalCode && formData.phone && frontCard && userPhoto && backCard) {
            AuthenticationApi(userPhoto, frontCard, backCard, userId, formData.name, formData.lastName, formData.nationalCode, formData.phone).then((res) => {
                // console.log(res);
                if (res.status === 201) {
                    toastBottomRight.current?.show({
                        severity: 'success',
                        summary: 'Success',
                        detail: `${props.isLocationIran ? 'اطلاعات شما براي احراز هويت ثبت گرديد و به زودي نتيجه به شما اطلاع اعلام خواهد شد.' : 'Your information has been registered for identity verification and the result will be announced to you soon.'}`,
                        life: 3000,
                    });
                }
                else {
                    toastBottomRight.current?.show({
                        severity: 'error',
                        summary: 'Error',
                        detail: `${res.response.data.non_field_errors[0]}`,
                        life: 3000,
                    });
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
        }
    }

    return (
        <div>
            <Toast ref={toastBottomRight} position="bottom-right" />
            <div className='Authentication bg-[#1A1C1F] h-full lg:w-full mx-4 lg:mx-6 sm:mx-12 py-8 px-3 sm:px-6 rounded-lg lg:mt-6 mb-10'>
                <div className='flex flex-col lg:flex-row-reverse gap-2'>
                    <div className='flex flex-row items-center gap-4'>
                        <h2 className={`${myFont.className} Leaderboards__title text-white text-2xl w-fit ml-auto`}>
                            احراز هویت
                        </h2>
                        <Image src={certificateMini} alt='icon' unoptimized />
                    </div>
                </div>

                <div>
                    <p
                        className={`${myFontIran.className} rtl text-sm mt-2`}
                        style={{
                            color: 'rgba(255, 255, 255, 0.40)'
                        }}>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتر.
                    </p>
                </div>

                <div className='flex flex-col lg:flex-row-reverse items-center lg:items-end gap-6 mt-10'>
                    <div className='flex flex-col items-center gap-2'>
                        <div>
                            <h2 className={`${myFont.className} Leaderboards__title text-main-orange text-2xl w-fit ml-auto`}>
                                تصویر کاربر با مدارک
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
                                روی کارت‌ ملی
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
                                پشت کارت‌ ملی
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
                        <NewInput placeholder='نام‌ خانوادگی'
                            onChange={(value) => handleInputChange('lastName', value)}

                        />
                        <NewInput placeholder='نام'
                            onChange={(value) => handleInputChange('name', value)}

                        />
                        <NewInput placeholder='شماره تماس'
                            onChange={(value) => handleInputChange('phone', value)}
                        />
                        <NewInput placeholder='کد ملی'
                            onChange={(value) => handleInputChange('nationalCode', value)}
                        />
                    </div>

                </div>
            </div>

            <div className='flex justify-center cursor-pointer'>
                <Image src={SendButton} alt='button' unoptimized onClick={handleSendButtonClick} />
            </div>


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