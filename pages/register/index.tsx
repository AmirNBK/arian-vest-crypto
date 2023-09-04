import { useState } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import icon from '../../assets/icons/registerIcon.svg'
import signUp from '../../assets/icons/signuUp.svg'
import login from '../../assets/icons/login.svg'
import RegisterInput from '@/components/CommonComponents/RegisterInput/RegisterInput'
import RegisterButton from '@/components/CommonComponents/RegisterButton/RegisterButton'
import RegisterTextarea from '@/components/CommonComponents/RegisterTextarea/RegisterTextarea'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { Checkbox } from "primereact/checkbox";
import chart from '../../assets/images/chart.png'
const inter = Inter({ subsets: ['latin'] })
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../assets/Fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/Fonts/iranyekanwebregular_0.ttf' })

export default function Register() {

    const [checked, setChecked] = useState<boolean>(false);

    return (
        <main
            className={`flex min-h-screen flex-col p-12 ${inter.className}`}
        >
            <PrimeReactProvider>
                <Header />
                <div className='Register__title flex flex-col gap-4 mt-16 justify-center'>
                    <div className='flex flex-row-reverse w-full items-center justify-center mb-24 gap-5'>
                        <Image src={icon} alt='registerIcon' />
                        <div className={`${myFont.className} text-5xl flex flex-row-reverse gap-1`}>
                            <p className='text-white'>
                                فرآیند
                            </p>
                            <p style={{ color: '#F68D2E' }}>
                                عضویت یا ورود
                            </p>
                        </div>
                    </div>


                    <div className='flex flex-row-reverse w-full gap-10'>
                        <div className='flex-1'>
                            <div style={{ background: '#1D1D1D', borderRadius: '20px' }} className='w-full px-8 py-8'>
                                <div className='flex flex-row gap-2 items-center justify-end'>
                                    <p style={{ color: '#F68D2E' }} className={`${myFont.className} text-4xl mr-2`}> عضویت </p>
                                    <Image src={signUp} alt='signup' />
                                </div>
                                <div className='mt-16 flex flex-col gap-10'>
                                    <RegisterInput placeholder='نام و نام خانوادگی' />
                                    <RegisterInput placeholder='محل سکونت*' />
                                    <RegisterInput placeholder='آدرس ایمیل*' />
                                    <RegisterInput placeholder='پسورد ایمیل*' />
                                    <RegisterInput placeholder='شماره تماس*' />
                                    <RegisterTextarea placeholder='چه مقدار سابقه کار در بازار مالی را دارید؟**' />
                                    <RegisterButton text='عضویت' />
                                </div>
                            </div>
                            <p className={`${myFontIran.className} text-white text-center mt-4 text-base`}>
                                اطلاعات شخصی شما برای پردازش سفارش شما استفاده می‌شود، و پشتیبانی از تجربه شما در این وبسایت، و برای اهداف دیگری که در  <span className='inline text-underline' style={{ color: '#F68D2E', textDecoration: 'underline' }}> سیاست حفظ حریم خصوصی </span> توضیح داده شده است.
                            </p>
                        </div>

                        <div className='flex-1'>
                            <div style={{ background: '#1D1D1D', borderRadius: '20px' }} className='w-full px-8 py-8 h-fit'>
                                <div className='flex flex-row gap-2 items-center justify-end '>
                                    <p style={{ color: '#F68D2E' }} className={`${myFont.className} text-4xl mr-2`}> ورود </p>
                                    <Image src={login} alt='login' />
                                </div>
                                <div className='mt-12 flex flex-col gap-10'>
                                    <RegisterInput placeholder='آدرس ایمیل*' />
                                    <RegisterInput placeholder='پسورد ایمیل*' />
                                    <p style={{ color: '#00A3FF' }} className={`${myFontIran.className} text-base text-right`}>
                                        رمز عبور خود را فراموش کرده اید؟
                                    </p>
                                    <div className='flex flex-row items-center gap-2 text-right justify-end'>
                                        <p className={`${myFontIran.className} text-white text-base`}>
                                            مرا به خاطر بسپار
                                        </p>
                                        <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
                                    </div>
                                    <RegisterButton text='ورود' />
                                </div>
                            </div>

                            <Image src={chart} alt='chart' className='w-' style={{ opacity: '0.3' }} />
                        </div>
                    </div>
                </div>
            </PrimeReactProvider>
        </main>
    )
}
