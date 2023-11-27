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


export default function Payment() {
    const nationality = ['ایران', 'آمریکا', 'عربستان']
    const socialMedia = ['instagram', 'whatsapp', 'telegram']
    const tariff = ['Traders Choice', 'Classic Challenge']
    const { data: discountData } = useQuery(GET_DISCOUNT_CODES);
    const { data: footerData } = useQuery(GET_FOOTER);
    const [chosenTariff, setChosenTariff] = useState(0);
    const [discountCode, setDiscountCode] = useState('');
    const [initialPrice, setInitialPrice] = useState<number | null>(null);
    const [finalPrice, setFinalPrice] = useState<number | null>(null);
    const toastBottomRight = useRef<Toast>(null);
    const [discountAmount, setDiscountAmount] = useState(0);
    const [toomanPrice, setToomanPrice] = useState(0)
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setDiscountCode(event.target.value);
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
                detail: 'کد تخفیف معتبر نمیباشد',
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
            <PrimeReactProvider>
                <Header active={''} />

                <Toast ref={toastBottomRight} position="bottom-right" />

                <div className='bg-[#1D1D1D] 3xl:w-6/12 2xl:w-8/12 sm:w-9/12 w-11/12 mx-auto p-6 mt-16 mb-36 rounded-md'>

                    <h2 className='text-white rtl'>
                        اطلاعات اولیه:
                    </h2>

                    <div className='grid grid-cols-2 w-full justify-between gap-6 mt-4 rounded-md'>
                        <PaymentComponent placeholder='نام خانوادگی' selectInput={false} />
                        <PaymentComponent placeholder='نام کوچک' selectInput={false} />
                        <PaymentComponent placeholder='ایمیل' selectInput={false} />
                        <PaymentComponent placeholder='تلفن' selectInput={false} />
                    </div>


                    <h2 className='text-white rtl mt-6 mb-4'>
                        اطلاعات نشانی:
                    </h2>

                    <PaymentComponent placeholder='آدرس خیابان' selectInput={false} />

                    <div className='grid grid-cols-2 w-full justify-between gap-6 mt-4 rounded-md'>
                        <PaymentComponent placeholder='استان' selectInput={false} />
                        <PaymentComponent placeholder='نام خانوادگی' selectInput selectOptions={nationality} />
                        <PaymentComponent placeholder='کد پستی' selectInput={false} />
                        <PaymentComponent placeholder='شهر' selectInput={false} />
                    </div>

                    <h2 className='text-white rtl mt-6 mb-4'>
                        از کجا درباره ما شنیدی؟
                    </h2>

                    <div className='text-end'>
                        <PaymentComponent placeholder='نام خانوادگی' selectInput selectOptions={socialMedia} halfWidth />
                    </div>

                    <h2 className='text-white rtl mt-6 mb-4'>
                        محصولات
                    </h2>

                    <h2 className='rtl mt-6 mb-4 text-sm'
                        style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                    >
                        انتخاب نوع طرح:
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

                    <h2 className='rtl mt-16 mb-4 text-sm'
                        style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                    >
                        نوع حساب را انتخاب کنید:
                    </h2>

                    <div className='flex flex-row-reverse text-white gap-6 mt-8'>
                        <div className='flex flex-row-reverse gap-3'>
                            <input type="radio" id="Swap Free" name="Swap Free" value="Swap Free" />
                            <label className='text-xl'> Swap Free </label>
                        </div>
                        <div className='flex flex-row-reverse gap-3'>
                            <input type="radio" id="Swap Free" name="Swap Free" value="Swap Free" />
                            <label className='text-xl'> Regular </label>
                        </div>
                    </div>


                    <h2 className='rtl mt-16 mb-4 text-sm'
                        style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                    >
                        انتخاب یک کارگزار:
                    </h2>

                    <div className='flex flex-row-reverse text-white gap-6 mt-8'>
                        <div className='flex flex-row-reverse gap-3'>
                            <input type="radio" id="Swap Free" name="Swap Free" value="Swap Free" />
                            <label className='text-xl'> ThinkMarkets </label>
                        </div>
                    </div>

                    <h2 className='rtl mt-16 mb-4 text-sm'
                        style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                    >
                        یک پلت فرم را انتخاب کنید:
                    </h2>

                    <div className='flex flex-row-reverse text-white gap-6 mt-8'>
                        <div className='flex flex-row-reverse gap-3'>
                            <input type="radio" id="Swap Free" name="Swap Free" value="Swap Free" />
                            <label className='text-xl'> MT4 </label>
                        </div>

                        <div className='flex flex-row-reverse gap-3'>
                            <input type="radio" id="Swap Free" name="Swap Free" value="Swap Free" />
                            <label className='text-xl'> MT5 </label>
                        </div>
                    </div>


                    <div className='flex flex-row-reverse text-white gap-2 mt-12 text-sm'>
                        <input type='checkbox' />
                        <p className='text-[#9CA3AF] text-right'> من اعلام می کنم که شرایط و ضوابط را مطالعه کرده و با آن موافقم <span className='text-white'>
                            (برای مشاهده اینجا را کلیک کنید)</span> </p>
                    </div>

                    <div className='flex flex-row-reverse text-white gap-2 mt-4 text-sm'>
                        <input type='checkbox' />
                        <p className='text-[#9CA3AF] text-right'> من اعلام می کنم که سیاست حفظ حریم خصوصی را مطالعه کرده و با آن موافقم                             <span className='text-white'>
                            (برای مشاهده اینجا را کلیک کنید)
                        </span>
                        </p>
                    </div>


                    <h2 className='text-[#EF4444] text-xl text-right my-16'>
                        لطفا یک کارگزار انتخاب کنید...
                    </h2>


                    <div className='w-full relative'>
                        <input placeholder='کد تخفیف' className='placeholder:text-xs text-lg text-white rounded-md w-full px-6 py-8 bg-transparent rtl'
                            value={discountCode}
                            onChange={handleInputChange}
                            style={{ border: '1px solid #6B7280' }}
                        />
                        <button
                            onClick={() => {
                                discountValidation()
                            }}
                            className='text-white absolute left-2 text-sm h-4/5 top-1/2 -translate-y-1/2 rounded-md w-4/12 sm:w-2/12 bg-main-orange'>
                            تایید اعتبار
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

                    <div className='bg-[#0A8100] rounded-md w-fit py-3 mt-10 px-16 ml-auto flex flex-row-reverse gap-3 items-start'>
                        <p> خرید </p>
                        <Image src={buy} alt='buy' />
                    </div>

                </div>

                <Footer data={footerData?.pages?.nodes[2].footer} />


                <style>
                    {
                        `
                    .p-toast-detail {
                        text-align : right;
                    }
                    `
                    }
                </style>
            </PrimeReactProvider>

        </main>
    )
}