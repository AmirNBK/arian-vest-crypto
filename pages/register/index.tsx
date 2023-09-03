import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import icon from '../../assets/icons/registerIcon.svg'
import signUp from '../../assets/icons/signuUp.svg'
import login from '../../assets/icons/login.svg'
import RegisterInput from '@/components/CommonComponents/RegisterInput/RegisterInput'
import RegisterButton from '@/components/CommonComponents/RegisterButton/RegisterButton'
import RegisterTextarea from '@/components/CommonComponents/RegisterTextarea/RegisterTextarea'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <main
            className={`flex min-h-screen flex-col p-12 ${inter.className}`}
        >
            <Header />
            <div className='Register__title flex flex-col gap-4 mt-16 justify-center'>
                <div className='flex flex-row-reverse w-full items-baseline justify-center mb-12 gap-5'>
                    <Image src={icon} alt='registerIcon' />
                    <div className='text-5xl flex flex-row-reverse gap-1'>
                        <p className='text-white'>
                            فرآیند
                        </p>
                        <p style={{ color: '#F68D2E' }}>
                            عضویت یا ورود
                        </p>
                    </div>
                </div>


                <div className='flex flex-row-reverse w-full gap-10'>
                    <div style={{ background: '#1D1D1D', borderRadius: '20px' }} className='flex-1 w-full px-14 py-8'>
                        <div className='flex flex-row gap-2 items-center justify-end'>
                            <p style={{ color: '#F68D2E' }} className='text-3xl mr-2'> عضویت </p>
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

                    <div style={{ background: '#1D1D1D', borderRadius: '20px' }} className='flex-1 w-full px-14 py-8 h-fit'>
                        <div className='flex flex-row gap-2 items-center justify-end '>
                            <p style={{ color: '#F68D2E' }} className='text-3xl mr-2'> ورود </p>
                            <Image src={login} alt='login' />
                        </div>
                        <div className='mt-12 flex flex-col gap-10'>
                            <RegisterInput placeholder='آدرس ایمیل*' />
                            <RegisterInput placeholder='پسورد ایمیل*' />
                            <p style={{ color: '#00A3FF' }} className='text-lg text-right'>
                                رمز عبور خود را فراموش کرده اید؟
                            </p>
                            <div className='flex flex-row items-center gap-2 text-right justify-end'>
                                <p className='text-white text-lg'>
                                    مرا به خاطر بسپار
                                </p>
                                <input type='checkbox' className='bg-transparent'
                                    style={{ width: '32px', height: '32px', border: '1px solid #FFF', background: '#1D1D1D' }} />
                            </div>

                            <RegisterButton text='ورود' />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
