import React, { useState, ChangeEvent, useEffect, useRef } from 'react';
import Image from 'next/image'
import { Toast, ToastMessage } from 'primereact/toast';
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { Dialog } from 'primereact/dialog';
import { useQuery, gql } from '@apollo/client';
import { useRouter } from 'next/router';
import ReactLoading from 'react-loading';
import login from '../../assets/icons/loginPayment.svg'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
const inter = Inter({ subsets: ['latin'] })
import localFont from 'next/font/local'
import buy from '../../assets/icons/buy.svg'
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import PaymentComponent from '@/components/PaymentComponent/PaymentComponent';
import Footer from '@/components/Footer/Footer';

import useLocationData from '@/Hooks/location';
import countries from '../../assets/countries.json'
import Head from 'next/head';
import { createInvoice } from '@/lib/apiConfig';
import useWindowSize from '@/Hooks/innerSize';

const GET_DISCOUNT_CODES = gql`
query discount {
  pages {
    nodes {
      discountCoupon {
        discountCode {
          code
          discountAmount
        }
      }
    }
  }
}
`;

const GET_PAYMENT_RULES = gql`
query PaymentRules {
    pages {
      nodes {
        paymentRules {
          paymentRules {
            faRules
            engRules
          }
        }
      }
    }
  }
`;

const GET_PAYMENT_BROKER = gql`
query PaymentBroker {
    pages {
      nodes {
        paymentRules {
          paymentBroker {
            faBroker
            engBroker
          }
        }
      }
    }
  }
`;

const GET_FOOTER = gql`
query Footer {
    pages {
      nodes {
        footer {
          phone
          email
          address
        }
      }
    }
  } 
`;

const GET_FOOTER_ENG = gql`
query engFooter {
    pages {
      nodes {
        engFooter {
          engPhone
          engEmail
          engAddress
        }
      }
    }
  }
`;


export default function Payment() {
    const tariff = ['Classic', 'One-step', 'Rapid']
    const { data: discountData } = useQuery(GET_DISCOUNT_CODES);
    const { data: paymentRules } = useQuery(GET_PAYMENT_RULES);
    const { data: paymentBroker } = useQuery(GET_PAYMENT_BROKER);
    const { data: footerData } = useQuery(GET_FOOTER);
    const { data: footerDataEng } = useQuery(GET_FOOTER_ENG);
    const [chosenTariffIndex, setChosenTariffIndex] = useState(0);
    const [chosenTariff, setChosenTariff] = useState<string>('');
    const [discountCode, setDiscountCode] = useState('');
    const [initialPrice, setInitialPrice] = useState<number | null>(null);
    const [finalPrice, setFinalPrice] = useState<number | null>(null);
    const toastBottomRight = useRef<Toast>(null);
    const [discountAmount, setDiscountAmount] = useState(0);
    const { locationData, error, loading } = useLocationData();
    const isLocationInIran = locationData === 'Iran (Islamic Republic of)' || !locationData;
    const [toomanPrice, setToomanPrice] = useState(0)
    const [selectedTradingPlatform, setSelectedTradingPlatform] = useState<string>('');
    const [selectedPlatform, setSelectedPlatform] = useState('');
    const [rules1, setRules1] = useState<boolean>(false);
    const [isLogin, setIsLogin] = useState<boolean>(true);
    const [rules2, setRules2] = useState<boolean>(false);
    const [paymentRulesModal, setPaymentRulesModal] = useState<boolean>(false);
    const [paymentBrokerModal, setPaymentBrokerModal] = useState<boolean>(false);
    const [submitLoading, setSubmitLoading] = useState<boolean>(false);
    const router = useRouter();
    const size = useWindowSize();



    const handleDiscountInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDiscountCode(event.target.value);
    };

    useEffect(() => {
        if (localStorage.getItem("authToken") || sessionStorage.getItem("authToken")) {
            setIsLogin(true)
        }
        else setIsLogin(false)
    }, [])

    const handleRadioChange = (value: any) => {
        setSelectedTradingPlatform(value);
    };

    const handleRadioPlatformChange = (value: any) => {
        setSelectedPlatform(value);
    };

    const [formState, setFormState] = useState<any>({

    });

    const handleInputChange = (fieldName: string, value: string) => {
        setFormState((prevState: any) => ({
            ...prevState,
            [fieldName]: value,
        }));
    };

    const handleBuyClick = (e: React.FormEvent) => {
        e.preventDefault();
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email);

        if (
            formState &&
            selectedTradingPlatform &&
            selectedPlatform &&
            formState.email &&
            isValidEmail &&
            formState.firstName &&
            formState.lastName &&
            formState.phone &&
            formState.streetAddress &&
            formState.province &&
            formState.city &&
            formState.postalCode &&
            rules1 &&
            rules2
        ) {
            setSubmitLoading(true)
            handleCreateInvoice();
        } else {
            let errorMessage;

            if (!formState.email || !isValidEmail) {
                errorMessage = isLocationInIran
                    ? 'لطفا آدرس ايميل معتبر وارد نماييد'
                    : 'Please enter a valid email address';
            } else if (!formState.firstName) {
                errorMessage = isLocationInIran
                    ? 'لطفا نام خود را وارد نماييد'
                    : 'Please enter your first name';
            } else if (!formState.lastName) {
                errorMessage = isLocationInIran
                    ? 'لطفا نام خانوادگي خود را وارد نماييد'
                    : 'Please enter your last name';
            } else if (!formState.phone) {
                errorMessage = isLocationInIran
                    ? 'لطفا شماره تلفن خود را وارد نماييد'
                    : 'Please enter your phone number';
            } else if (!formState.streetAddress) {
                errorMessage = isLocationInIran
                    ? 'لطفا آدرس خود را وارد نماييد'
                    : 'Please enter your street address';
            } else if (!formState.province) {
                errorMessage = isLocationInIran
                    ? 'لطفا استان خود را انتخاب نماييد'
                    : 'Please select your province';
            } else if (!formState.city) {
                errorMessage = isLocationInIran
                    ? 'لطفا شهر خود را وارد نماييد'
                    : 'Please enter your city';
            } else if (!formState.postalCode) {
                errorMessage = isLocationInIran
                    ? 'لطفا کدپستی خود را وارد نماييد'
                    : 'Please enter your postal code';
            } else if (!rules1) {
                errorMessage = isLocationInIran
                    ? 'لطفا با شرایط 1 موافقت کنید'
                    : 'Please agree to rule 1';
            } else if (!rules2) {
                errorMessage = isLocationInIran
                    ? 'لطفا با شرایط 2 موافقت کنید'
                    : 'Please agree to rule 2';
            }
            else if (!selectedTradingPlatform) {
                errorMessage = isLocationInIran
                    ? 'لطفا پلتفرم معاملاتی خود را انتخاب نمایید'
                    : 'Please select your trading platform';
            } else if (!selectedPlatform) {
                errorMessage = isLocationInIran
                    ? 'لطفا پلتفرم معاملاتی مورد نظر خود را انتخاب نمایید'
                    : 'Please select your specific platform';
            }

            toastBottomRight.current?.show({
                severity: 'error',
                summary: 'Error',
                detail: errorMessage,
                life: 3000,
            });
        }
    };


    const handleCreateInvoice = async () => {
        try {
            const response = await createInvoice(finalPrice || initialPrice, '', 'This is a test');
            const invoiceUrl = response.invoice_url;

            const formDataString = JSON.stringify(formState);

            localStorage.setItem('formData', formDataString);
            localStorage.setItem('tradingPlatform', selectedTradingPlatform);
            localStorage.setItem('platform', selectedPlatform);
            localStorage.setItem('chosenTariff', chosenTariff);

            window.location.href = invoiceUrl;

        } catch (error) {
            console.error('Error creating invoice:', error);
        }
    };


    const discountValidation = () => {
        const enteredCode = discountCode.trim();
        const matchingCode = discountData?.pages?.nodes[2].discountCoupon.discountCode.find((codeObj: any) => codeObj.code === enteredCode);

        if (matchingCode) {
            setDiscountAmount(matchingCode.discountAmount);

        } else {
            toastBottomRight.current?.show({
                severity: 'error',
                summary: 'Error',
                detail: `${isLocationInIran ? 'کد تخفیف معتبر نمیباشد' : 'The discount code is not valid'}`,
                life: 3000,
            });
            setDiscountAmount(0);
        }
    };

    useEffect(() => {
        const price = sessionStorage.getItem('buying price');
        setInitialPrice(price ? parseFloat(price) : null);
        if (!price) {
            setInitialPrice(0);
        }
    }, []);

    useEffect(() => {
        if (discountAmount > 0) {
            const discountedPrice = initialPrice && initialPrice - (initialPrice * discountAmount) / 100;
            setFinalPrice(discountedPrice);
        }
    }, [discountAmount])



    return (
       <div className='flex justify-center w-full'>
         <main
            className={`flex w-full min-h-screen flex-col justify-between max-w-[1700px] min-w-full 2xl:min-w-0 ${myFontIran.className}`}
        >
            <Head>
                <title>Payment</title>
            </Head>
            {loading ? ''
                :
                isLogin ?
                    <PrimeReactProvider>
                        <Header active={''} isLocationInIran={isLocationInIran} />

                        <Toast ref={toastBottomRight} position="bottom-right" />

                        <Dialog
                            visible={paymentRulesModal}
                            className={`${myFontIran.className} ${isLocationInIran && 'rtl'}`}

                            style={{ width: `${size.width && size.width < 1024 ? '90vw' : '60vw'}`, fontFamily: `${isLocationInIran && '__myFont_a44d44'}` }} onHide={() => setPaymentRulesModal(false)}>
                            {
                                isLocationInIran ?
                                    <p
                                        dangerouslySetInnerHTML={{ __html: paymentRules?.pages?.nodes[2].paymentRules.paymentRules[0].faRules.replace(/\r\n/g, '<br />') }}
                                    >
                                    </p>
                                    :
                                    <p
                                        dangerouslySetInnerHTML={{ __html: paymentRules?.pages?.nodes[2].paymentRules.paymentRules[0].engRules.replace(/\r\n/g, '<br />') }}
                                    >
                                    </p>

                            }
                        </Dialog>

                        <Dialog visible={paymentBrokerModal}
                            className={`${myFontIran.className} ${isLocationInIran && 'rtl'}`}
                            style={{ width: `${size.width && size.width < 1024 ? '90vw' : '60vw'}`, fontFamily: `${isLocationInIran && '__myFont_a44d44'}` }} onHide={() => setPaymentBrokerModal(false)}>
                            {
                                isLocationInIran ?
                                    <p
                                        dangerouslySetInnerHTML={{ __html: paymentBroker?.pages?.nodes[2].paymentRules.paymentBroker[0].faBroker.replace(/\r\n/g, '<br />') }}
                                    >
                                    </p>
                                    :
                                    <p
                                        dangerouslySetInnerHTML={{ __html: paymentBroker?.pages?.nodes[2].paymentRules.paymentBroker[0].engBroker.replace(/\r\n/g, '<br />') }}
                                    >
                                    </p>
                            }
                        </Dialog>

                        <form
                            onSubmit={handleBuyClick}
                            className='bg-[#1D1D1D] 3xl:w-6/12 2xl:w-8/12 sm:w-9/12 w-11/12 mx-auto p-6 mt-16 mb-36 rounded-md'>
                            <h2 className={`text-white ${isLocationInIran && 'rtl'}`}>
                                {isLocationInIran ? 'اطلاعات اولیه:' : 'Initial Information:'}
                            </h2>
                            <div className='grid grid-cols-2 w-full justify-between gap-6 mt-4 rounded-md'>
                                <PaymentComponent type='text' name='lastName' onChange={(lastName, value) => handleInputChange(lastName, value)} placeholder={isLocationInIran ? 'نام خانوادگی' : 'Last Name'} selectInput={false} isLocationIran={isLocationInIran} />
                                <PaymentComponent type='text' name='firstName' onChange={(firstName, value) => handleInputChange(firstName, value)} placeholder={isLocationInIran ? 'نام کوچک' : 'First Name'} selectInput={false} isLocationIran={isLocationInIran} />
                                <PaymentComponent type='email' name='email' onChange={(email, value) => handleInputChange(email, value)} placeholder={isLocationInIran ? 'ایمیل' : 'Email'} selectInput={false} isLocationIran={isLocationInIran} />
                                <PaymentComponent type='text' name='phone' onChange={(phone, value) => handleInputChange(phone, value)} placeholder={isLocationInIran ? 'تلفن' : 'Phone'} selectInput={false} isLocationIran={isLocationInIran} />
                            </div>

                            <h2 className={`text-white ${isLocationInIran && 'rtl'} mt-6 mb-4`}>
                                {isLocationInIran ? 'اطلاعات نشانی:' : 'Address Information:'}
                            </h2>

                            <PaymentComponent type='text' name='streetAddress' onChange={(fieldName, value) => handleInputChange(fieldName, value)} placeholder={isLocationInIran ? 'آدرس خیابان' : 'Street Address'} selectInput={false} isLocationIran={isLocationInIran} />

                            <div className='grid grid-cols-2 w-full justify-between gap-6 mt-4 rounded-md'>
                                <PaymentComponent type='text' name='province' onChange={(province, value) => handleInputChange(province, value)} placeholder={isLocationInIran ? 'استان' : 'Province'} selectInput={false} isLocationIran={isLocationInIran} />
                                <PaymentComponent type='text' name='country' onChange={(country, value) => handleInputChange(country, value)} placeholder={''} selectInput selectOptions={countries} isLocationIran={isLocationInIran} />
                                <PaymentComponent type='text' name='postalCode' onChange={(postalCode, value) => handleInputChange(postalCode, value)} placeholder={isLocationInIran ? 'کد پستی' : 'Postal Code'} selectInput={false} isLocationIran={isLocationInIran} />
                                <PaymentComponent type='text' name='city' onChange={(city, value) => handleInputChange(city, value)} placeholder={isLocationInIran ? 'شهر' : 'City'} selectInput={false} isLocationIran={isLocationInIran} />
                            </div>

                            <h2 className={`${isLocationInIran ? 'rtl' : ''} mt-16 mb-4 text-sm`}
                                style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                            >
                                {isLocationInIran ? 'انتخاب یک کارگزار:' : 'Select a Broker:'}
                            </h2>

                            <div className={`${!isLocationInIran && 'justify-end'} flex flex-row-reverse flex-wrap text-white gap-6 mt-8`}>
                                <div className='flex flex-row-reverse gap-3'>
                                    <input type="radio" name="tradingPlatform" id="Think Markets" value="Think Markets"
                                        onChange={() => handleRadioChange('Think Markets')}
                                    />
                                    <label className='text-xl'> ThinkMarkets </label>
                                </div>
                                <div className='flex flex-row-reverse gap-3'>
                                    <input type="radio" name="tradingPlatform" id="Eight Cap" value="Eight Cap"
                                        onChange={() => handleRadioChange('Eight Cap')}
                                    />
                                    <label className='text-xl'> Eightcap </label>
                                </div>
                                <div className='flex flex-row-reverse gap-3'>
                                    <input type="radio" name="tradingPlatform" id="Ic Markets" value="Ic Markets"
                                        onChange={() => handleRadioChange('Ic Markets')}
                                    />
                                    <label className='text-xl'> Icmarkets </label>
                                </div>
                            </div>

                            <h2 className={`${isLocationInIran ? 'rtl' : ''} mt-16 mb-4 text-sm`}
                                style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                            >
                                {isLocationInIran ? 'یک پلت فرم را انتخاب کنید:' : 'Select a Platform:'}
                            </h2>


                            <div className={`${!isLocationInIran && 'justify-start'} flex flex-row text-white gap-6 mt-8`}>
                                <div className={'flex flex-row-reverse gap-3'}>
                                    <input type="radio" id="MT4" name="platform" value="MT4"
                                        onChange={() => handleRadioPlatformChange('MT4')}
                                    />
                                    <label className='text-xl'> MT4 </label>
                                </div>

                                <div className={'flex flex-row-reverse gap-3'}>
                                    <input type="radio" id="MT5" name="platform" value="MT5"
                                        onChange={() => handleRadioPlatformChange('MT5')}
                                    />
                                    <label className='text-xl'> MT5 </label>
                                </div>
                            </div>


                            <div className={`flex ${isLocationInIran && 'flex-row-reverse'} items-baseline text-white gap-2 mt-12 text-sm`}>
                                <input type='checkbox' onChange={() => setRules1(!rules1)} />
                                <p className={`text-[#9CA3AF] ${isLocationInIran && 'text-right'}`}>
                                    {isLocationInIran
                                        ? 'بروکر موردنظر توسط تریدر تست شده و سرمایه گذار برتر هیچ مسئولیتی در قبال آن ندارد.'
                                        : 'The chosen broker has been tested by the trader, and the superior investor assumes no responsibility for it.'}
                                    <span className='text-white ml-1 cursor-pointer'
                                        onClick={() => {
                                            setPaymentBrokerModal(true)
                                        }}
                                    >
                                        {isLocationInIran ? '(برای مشاهده اینجا را کلیک کنید)' : '(Click here to view)'}
                                    </span>
                                </p>
                            </div>

                            <div className={`${isLocationInIran && 'flex-row-reverse'} flex text-white gap-2 mt-4 text-sm`}>
                                <input type='checkbox' onChange={() => setRules2(!rules2)} />
                                <p className={`text-[#9CA3AF] ${isLocationInIran && 'text-right rtl'}`}>
                                    {isLocationInIran
                                        ? ' قوانین و terms & conditions را مطالعه کرده و شرایط پلن ها را میپذیرم.'
                                        : 'I have read the rules and terms & conditions and accept the terms of the plans.'}
                                    <span className='text-white ml-1 cursor-pointer' onClick={() => {
                                        setPaymentRulesModal(true)
                                    }}>
                                        {isLocationInIran ? '(برای مشاهده اینجا را کلیک کنید)' : '(Click here to view)'}
                                    </span>
                                </p>
                            </div>


                            <div className='w-full relative mt-16'>
                                <input
                                    placeholder={isLocationInIran ? 'کد تخفیف' : 'Discount Code'}
                                    className={` placeholder:text-xs text-lg text-white rounded-md w-full px-6 py-8 bg-transparent ${isLocationInIran && 'rtl'}`}
                                    value={discountCode}
                                    onChange={handleDiscountInputChange}
                                    style={{ border: '1px solid #6B7280' }}
                                />
                                <button
                                    onClick={() => {
                                        discountValidation();
                                    }}
                                    className={`text-white absolute ${isLocationInIran ? 'left-2' : 'right-2'} text-sm h-4/5 top-1/2 -translate-y-1/2 rounded-md w-4/12 sm:w-2/12 bg-main-orange`}
                                >
                                    {isLocationInIran ? 'تایید اعتبار' : 'Validate Discount'}
                                </button>
                            </div>

                            <div className='text-center text-[#0A8100] mt-12'>
                                <p className={`${discountAmount > 0 ? 'line-through text-2xl text-[#ef4444]' : 'text-4xl'} font-bold`}>
                                    ${initialPrice}
                                </p>

                                {discountAmount > 0 &&
                                    <p className='text-4xl font-bold mt-8'>
                                        ${finalPrice}
                                    </p>
                                }
                            </div>

                            {submitLoading ?
                                <ReactLoading type={'spinningBubbles'} className='mx-auto mt-10' color={'#F68D2E'} height={50} width={50} />
                                :
                                <button
                                    type='submit'
                                    className='bg-[#0A8100] rounded-md cursor-pointer w-fit py-3 mt-10 px-16 ml-auto flex flex-row-reverse gap-3 items-center'>
                                    <p className={`${!isLocationInIran && 'translate-y-0.5'}`}>
                                        {isLocationInIran ? 'خرید' : 'buy'}
                                    </p>
                                    <Image src={buy} alt='buy' />
                                </button>
                            }

                        </form>

                        <Footer data={isLocationInIran ? footerData?.pages?.nodes[2].footer : footerDataEng?.pages?.nodes[2].engFooter} isLocationInIran={isLocationInIran} />

                        <style>
                            {
                                `
            .p-toast-detail {
                text-align : ${isLocationInIran ? 'right' : 'left'};
            }
            `
                            }
                        </style>
                    </PrimeReactProvider>
                    :
                    <>
                        <Header active={''} isLocationInIran={isLocationInIran} />
                        <div className=' bg-white w-1/2 mx-auto p-6 rounded-md items-center flex  flex-col my-20'>
                            <Image src={login} alt='login' className='w-16' />
                            <p className="mt-6 text-center">
                                {isLocationInIran ? ' برای مشاهده پنل کاربری ابتدا وارد حساب کاربری خود شوید' : 'To view the user panel, first log in to your account'}
                            </p>
                            <div className='flex flex-row justify-center mt-6 gap-6'>
                                <button className='bg-main-orange px-12 py-2 text-white rounded-lg text-center text-lg'
                                    onClick={() => {
                                        router.push('/register')
                                    }}
                                >
                                    {isLocationInIran ? ' ثبت نام / عضویت' : 'Registration / membership'}
                                </button>
                            </div>
                        </div>

                        <Footer data={isLocationInIran ? footerData?.pages?.nodes[2].footer : footerDataEng?.pages?.nodes[2].engFooter} isLocationInIran={isLocationInIran} />



                    </>

            }


        </main >
       </div>
    )
}