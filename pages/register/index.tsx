import { useState, useRef } from 'react'
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
import { useRouter } from 'next/router';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { Checkbox } from "primereact/checkbox";
import chart from '../../assets/images/chart.png'
const inter = Inter({ subsets: ['latin'] })
import { Toast, ToastMessage } from 'primereact/toast';
import localFont from 'next/font/local'
import Footer from '@/components/Footer/Footer'
import { GetStaticProps } from 'next'
import { getQueryFooter, loginMutation, registerUserMutation } from '@/lib/service'
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import { usePasswordStrengthCheck } from '../../functions/usePasswordStrengthCheck'

export default function Register({ footer }: { footer: any }) {

    const [checked, setChecked] = useState<any>(false);
    const router = useRouter();
    const checkPasswordStrength = usePasswordStrengthCheck();
    const toastBottomRight = useRef<Toast>(null);
    const showMessage = (event: React.MouseEvent<HTMLButtonElement>, ref: React.RefObject<Toast>, severity: ToastMessage['severity']) => {
        const target = event.target as HTMLButtonElement;
        const label = target.innerText;

        ref.current?.show({ severity: severity, summary: label, detail: label, life: 3000 });
    };

    const [registrationData, setRegistrationData] = useState({
        username: "",
        password: "",
        email: "",
        displayName: "",
        locale: "",
        description: "",
    });

    const [loginData, setLoginData] = useState({
        username: "",
        password: "",
    });

    const handleInputChange = (fieldName: string, value: string) => {
        setRegistrationData((prevData) => ({
            ...prevData,
            [fieldName]: value,
        }));
    };

    const handleInputChangeLogin = (field: string, value: string) => {
        setLoginData({
            ...loginData,
            [field]: value,
        });
    };


    const handleRegistration = async (e: React.FormEvent) => {
        e.preventDefault();

        if (
            registrationData.username &&
            registrationData.password &&
            registrationData.locale &&
            registrationData.email &&
            registrationData.description
        ) {
            const passwordStrength = checkPasswordStrength(registrationData.password);

            if (passwordStrength === 'Strong') {
                try {
                    const result = await registerUserMutation(registrationData);

                    if (result.errors) {
                        toastBottomRight.current?.show({
                            severity: 'error',
                            summary: 'Error',
                            detail: result.errors[0].message,
                            life: 3000,
                        });
                    }
                    else {
                        toastBottomRight.current?.show({
                            severity: 'success',
                            summary: 'Success',
                            detail: 'ثبت نام با موفقیت انجام شد',
                            life: 3000,
                        });
                        if (checked) {
                            localStorage.setItem('authToken', result.login.authToken)
                        }
                        else {
                            sessionStorage.setItem('authToken', result.login.authToken)
                        }
                        setTimeout(() => {
                            router.push('/');
                        }, 2000);
                    }
                } catch (error) {

                }
            } else {
                toastBottomRight.current?.show({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'لطفا رمز عبور قوی‌تری انتخاب کنید.',
                    life: 3000,
                });

            }
        } else {
            toastBottomRight.current?.show({
                severity: 'error',
                summary: 'Error',
                detail: 'لطفا تمامی فیلد ها را تکمیل نمایید',
                life: 3000,
            });
        }
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        if (
            loginData.username &&
            loginData.password
        ) {
            const passwordStrength = checkPasswordStrength(loginData.password);

            if (passwordStrength === 'Strong') {
                try {
                    const result = await loginMutation(loginData);

                    if (result.errors) {
                        toastBottomRight.current?.show({
                            severity: 'error',
                            summary: 'Error',
                            detail: result.errors[0].message,
                            life: 3000,
                        });
                    }
                    else {
                        toastBottomRight.current?.show({
                            severity: 'success',
                            summary: 'Success',
                            detail: 'ورود با موفقیت انجام شد',
                            life: 3000,
                        });
                        if (checked) {
                            localStorage.setItem('authToken', result.login.authToken)
                        }
                        else {
                            sessionStorage.setItem('authToken', result.login.authToken)
                        }
                        setTimeout(() => {
                            router.push('/');
                        }, 2000);
                    }
                } catch (error) {

                }
            } else {
                toastBottomRight.current?.show({
                    severity: 'error',
                    summary: 'Error',
                    detail: 'لطفا رمز عبور قوی‌تری انتخاب کنید.',
                    life: 3000,
                });

            }
        } else {
            toastBottomRight.current?.show({
                severity: 'error',
                summary: 'Error',
                detail: 'لطفا تمامی فیلد ها را تکمیل نمایید',
                life: 3000,
            });
        }

    };

    return (
        <main
            className={`flex min-h-screen flex-col ${inter.className}`}
        >
            <Toast ref={toastBottomRight} position="bottom-right" />
            <PrimeReactProvider>
                <Header />
                <div className='Register__title flex flex-col gap-4 mt-16 justify-center p-12'>
                    <div className='flex flex-col sm:flex-row-reverse w-full items-center justify-center mb-8 sm:mb-24 gap-5'>
                        <Image src={icon} alt='registerIcon' />
                        <div className={`${myFont.className} text-end text-3xl sm:text-5xl flex flex-row-reverse gap-1`}>
                            <p className='text-white'>
                                فرآیند
                            </p>
                            <p style={{ color: '#F68D2E' }}>
                                عضویت یا ورود
                            </p>
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row-reverse w-full gap-10 2xl:w-10/12 3xl:w-7/12 mx-auto'>
                        <div className='flex-1'>
                            <div style={{ background: '#1D1D1D', borderRadius: '20px' }} className='w-full px-8 py-8'>
                                <div className='flex flex-row gap-2 items-center justify-end'>
                                    <p style={{ color: '#F68D2E' }} className={`${myFont.className} text-4xl mr-2`}> عضویت </p>
                                    <Image src={signUp} alt='signup' />
                                </div>
                                <form onSubmit={handleRegistration} className='mt-16 flex flex-col gap-10'>
                                    <RegisterInput placeholder='نام کاربری' value={registrationData.username}
                                        onChange={(value) => handleInputChange("username", value)}
                                        type='text'
                                    />
                                    <RegisterInput placeholder='محل سکونت' value={registrationData.locale}
                                        onChange={(value) => handleInputChange("locale", value)}
                                        type='text'
                                    />
                                    <RegisterInput placeholder='آدرس ایمیل' value={registrationData.email}
                                        onChange={(value) => handleInputChange("email", value)}
                                        type='email'
                                    />
                                    <RegisterInput placeholder='رمز عبور' value={registrationData.password}
                                        onChange={(value) => handleInputChange("password", value)}
                                        type='password'
                                    />
                                    <RegisterTextarea placeholder='چه مقدار سابقه کار در بازار مالی را دارید؟'
                                        value={registrationData.description}
                                        onChange={(value) => handleInputChange("description", value)}
                                    />
                                    <RegisterButton text='عضویت' />
                                </form>
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
                                <form onSubmit={handleLogin} className='mt-12 flex flex-col gap-10'>
                                    <RegisterInput placeholder='نام کاربری یا ایمیل' value={loginData.username}
                                        onChange={(value) => handleInputChangeLogin("username", value)} type='text' />
                                    <RegisterInput placeholder='رمز عبور' value={loginData.password}
                                        onChange={(value) => handleInputChangeLogin("password", value)} type='password' />
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
                                </form>
                            </div>

                            <Image src={chart} alt='chart' className='lg:block hidden' style={{ opacity: '0.3' }} />
                        </div>
                    </div>
                </div>
                <Footer data={footer?.footer} />
            </PrimeReactProvider>

            <style>
                {
                    `
                    .p-toast-detail {
                        text-align : right;
                    }
                    `
                }
            </style>
        </main>
    )
}


export const getStaticProps: GetStaticProps = async () => {
    const footer = await getQueryFooter();

    return {
        props: {
            footer
        },
        revalidate: 3600,
    };
};