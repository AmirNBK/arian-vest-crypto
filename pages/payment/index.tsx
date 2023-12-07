import React, { useState, ChangeEvent, useEffect, useRef } from 'react';
import Image from 'next/image'
import { Toast, ToastMessage } from 'primereact/toast';
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import axios from 'axios';
import "primereact/resources/primereact.min.css";
import { useQuery, gql } from '@apollo/client';
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
    const nationality = ['ایران', 'آمریکا', 'عربستان']
    const socialMedia = ['instagram', 'whatsapp', 'telegram']
    const tariff = ['Classic', 'One-step', 'Rapid']
    const { data: discountData } = useQuery(GET_DISCOUNT_CODES);
    const { data: footerData } = useQuery(GET_FOOTER);
    const { data: footerDataEng } = useQuery(GET_FOOTER_ENG);
    const [chosenTariff, setChosenTariff] = useState(0);
    const [discountCode, setDiscountCode] = useState('');
    const [initialPrice, setInitialPrice] = useState<number | null>(null);
    const [finalPrice, setFinalPrice] = useState<number | null>(null);
    const toastBottomRight = useRef<Toast>(null);
    const [discountAmount, setDiscountAmount] = useState(0);
    const { locationData, error, loading } = useLocationData();
    const isLocationInIran = locationData === 'Iran (Islamic Republic of)' || !locationData;
    const [toomanPrice, setToomanPrice] = useState(0)
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [selectedTradingPlatform, setSelectedTradingPlatform] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [province, setProvince] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [city, setCity] = useState('');

    const handleDiscountInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDiscountCode(event.target.value);
    };


    const [formState, setFormState] = useState<any>({

    });

    const handleInputChange = (fieldName: string, value: string) => {
        setFormState((prevState: any) => ({
            ...prevState,
            [fieldName]: value,
        }));
    };

    const handleBuyClick = () => {
        console.log(formState);

        if (formState && formState.Email && formState['First Name'] && formState['Last Name'] && formState.Phone && formState['Street Address'] && formState.Province && formState.City && formState['Postal Code']) {
            alert('right')
        }
        else alert('wrong')
    };


    const currencyConverter = () => {
        var formdata = new FormData();
        formdata.append("srcCurrency", "btc");
        formdata.append("dstCurrency", "rls");

        var requestOptions = {
            method: 'POST',
            body: formdata,
            withCredentials: true,
            crossorigin: true,
            mode: 'no-cors',
            redirect: 'follow'
        };

        fetch("https://api.nobitex.ir/market/stats")
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    };


    useEffect(() => {
        currencyConverter()
    }, [])

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
        <main
            className={`flex min-h-screen flex-col justify-between ${myFontIran.className}`}
        >
            <Head>
                <title>Payment</title>
            </Head>
            {loading ? ''
                :
                <PrimeReactProvider>
                    <Header active={''} isLocationInIran={isLocationInIran} />

                    <Toast ref={toastBottomRight} position="bottom-right" />

                    <div className='bg-[#1D1D1D] 3xl:w-6/12 2xl:w-8/12 sm:w-9/12 w-11/12 mx-auto p-6 mt-16 mb-36 rounded-md'>

                        <h2 className={`text-white ${isLocationInIran && 'rtl'}`}>
                            {isLocationInIran ? 'اطلاعات اولیه:' : 'Initial Information:'}
                        </h2>

                        <div className='grid grid-cols-2 w-full justify-between gap-6 mt-4 rounded-md'>
                            <PaymentComponent onChange={(fieldName, value) => handleInputChange(fieldName, value)} placeholder={isLocationInIran ? 'نام خانوادگی' : 'Last Name'} selectInput={false} isLocationIran={isLocationInIran} />
                            <PaymentComponent onChange={(fieldName, value) => handleInputChange(fieldName, value)} placeholder={isLocationInIran ? 'نام کوچک' : 'First Name'} selectInput={false} isLocationIran={isLocationInIran} />
                            <PaymentComponent onChange={(fieldName, value) => handleInputChange(fieldName, value)} placeholder={isLocationInIran ? 'ایمیل' : 'Email'} selectInput={false} isLocationIran={isLocationInIran} />
                            <PaymentComponent onChange={(fieldName, value) => handleInputChange(fieldName, value)} placeholder={isLocationInIran ? 'تلفن' : 'Phone'} selectInput={false} isLocationIran={isLocationInIran} />

                        </div>


                        <h2 className={`text-white ${isLocationInIran && 'rtl'} mt-6 mb-4`}>
                            {isLocationInIran ? 'اطلاعات نشانی:' : 'Address Information:'}
                        </h2>

                        <PaymentComponent onChange={(fieldName, value) => handleInputChange(fieldName, value)} placeholder={isLocationInIran ? 'آدرس خیابان' : 'Street Address'} selectInput={false} isLocationIran={isLocationInIran} />

                        <div className='grid grid-cols-2 w-full justify-between gap-6 mt-4 rounded-md'>
                            <PaymentComponent onChange={(fieldName, value) => handleInputChange(fieldName, value)} placeholder={isLocationInIran ? 'استان' : 'Province'} selectInput={false} isLocationIran={isLocationInIran} />
                            <PaymentComponent onChange={(fieldName, value) => handleInputChange(fieldName, value)} placeholder={isLocationInIran ? 'نام خانوادگی' : 'Last Name'} selectInput selectOptions={countries} isLocationIran={isLocationInIran} />
                            <PaymentComponent onChange={(fieldName, value) => handleInputChange(fieldName, value)} placeholder={isLocationInIran ? 'کد پستی' : 'Postal Code'} selectInput={false} isLocationIran={isLocationInIran} />
                            <PaymentComponent onChange={(fieldName, value) => handleInputChange(fieldName, value)} placeholder={isLocationInIran ? 'شهر' : 'City'} selectInput={false} isLocationIran={isLocationInIran} />
                        </div>

                        {/* <h2 className={`text-white ${isLocationInIran && 'rtl'} mt-6 mb-4`}>
                            {isLocationInIran ? 'از کجا درباره ما شنیدی؟' : 'Where did you hear about us?'}
                        </h2>

                        <div className={`${isLocationInIran && 'text-end'}`}>
                            <PaymentComponent onChange={(fieldName, value) => handleInputChange(fieldName, value)} isLocationIran={isLocationInIran} placeholder={isLocationInIran ? 'نام خانوادگی' : 'Last Name'} selectInput selectOptions={socialMedia} halfWidth />
                        </div> */}

                        <h2 className={`text-white ${isLocationInIran && 'rtl'} mt-6 mb-4`}>
                            {isLocationInIran ? 'محصولات' : 'Products'}
                        </h2>

                        <h2 className={`${isLocationInIran && 'rtl'} mt-6 mb-4 text-sm ${isLocationInIran ? '' : 'text-white'}`}
                            style={{ color: isLocationInIran ? 'rgba(255, 255, 255, 0.6)' : '' }}
                        >
                            {isLocationInIran ? 'انتخاب نوع طرح:' : 'Select Plan Type:'}
                        </h2>


                        <div className={`${inter.className} flex flex-col sm:flex-row gap-12`}>
                            {tariff.map((item, index) => {
                                return (
                                    <div
                                        className={`${index === chosenTariff ? 'bg-[#F68D2E] text-white' : 'bg-[#272727] text-gray-400'}
                        text-center rounded-md py-6 text-lg flex-1 cursor-pointer`}
                                        onClick={() => {
                                            setChosenTariff(index)
                                        }}
                                    >
                                        {item}
                                    </div>
                                )
                            })}
                        </div>

                        <h2 className={`${isLocationInIran ? 'rtl' : ''} mt-16 mb-4 text-sm`}
                            style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                        >
                            {isLocationInIran ? 'انتخاب یک کارگزار:' : 'Select a Broker:'}
                        </h2>

                        <div className={`${!isLocationInIran && 'justify-end'} flex flex-row-reverse text-white gap-6 mt-8`}>
                            <div className='flex flex-row-reverse gap-3'>
                                <input type="radio" name="tradingPlatform" id="Think Markets" value="Think Markets" />
                                <label className='text-xl'> ThinkMarkets </label>
                            </div>
                            <div className='flex flex-row-reverse gap-3'>
                                <input type="radio" name="tradingPlatform" id="Eight Cap" value="Eight Cap" />
                                <label className='text-xl'> Eightcap </label>
                            </div>
                            <div className='flex flex-row-reverse gap-3'>
                                <input type="radio" name="tradingPlatform" id="Ic Markets" value="Ic Markets" />
                                <label className='text-xl'> Icmarkets </label>
                            </div>
                        </div>

                        <h2 className={`${isLocationInIran ? 'rtl' : ''} mt-16 mb-4 text-sm`}
                            style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                        >
                            {isLocationInIran ? 'یک پلت فرم را انتخاب کنید:' : 'Select a Platform:'}
                        </h2>


                        <div className={`${!isLocationInIran && 'justify-end'} flex flex-row-reverse text-white gap-6 mt-8`}>
                            <div className={'flex flex-row-reverse gap-3'}>
                                <input type="radio" id="Swap Free" name="Swap Free" value="Swap Free" />
                                <label className='text-xl'> MT4 </label>
                            </div>

                            <div className={'flex flex-row-reverse gap-3'}>
                                <input type="radio" id="Swap Free" name="Swap Free" value="Swap Free" />
                                <label className='text-xl'> MT5 </label>
                            </div>
                        </div>


                        <div className={`flex ${isLocationInIran && 'flex-row-reverse'} items-baseline text-white gap-2 mt-12 text-sm`}>
                            <input type='checkbox' />
                            <p className={`text-[#9CA3AF] ${isLocationInIran && 'text-right'}`}>
                                {isLocationInIran
                                    ? 'من اعلام می کنم که شرایط و ضوابط را مطالعه کرده و با آن موافقم'
                                    : 'I declare that I have read and agree to the terms and conditions'}
                                <span className='text-white'>
                                    {isLocationInIran ? '(برای مشاهده اینجا را کلیک کنید)' : '(Click here to view)'}
                                </span>
                            </p>
                        </div>

                        <div className={`${isLocationInIran && 'flex-row-reverse'} flex text-white gap-2 mt-4 text-sm`}>
                            <input type='checkbox' />
                            <p className={`text-[#9CA3AF] ${isLocationInIran && 'text-right'}`}>
                                {isLocationInIran
                                    ? 'من اعلام می کنم که سیاست حفظ حریم خصوصی را مطالعه کرده و با آن موافقم'
                                    : 'I declare that I have read and agree to the privacy policy'}
                                <span className='text-white'>
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

                        <div
                            onClick={handleBuyClick}
                            className='bg-[#0A8100] rounded-md w-fit py-3 mt-10 px-16 ml-auto flex flex-row-reverse gap-3 items-center'>
                            <p className={`${!isLocationInIran && 'translate-y-0.5'}`}>
                                {isLocationInIran ? 'خرید' : 'buy'}
                            </p>
                            <Image src={buy} alt='buy' />
                        </div>

                    </div>

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
            }


        </main>
    )
}