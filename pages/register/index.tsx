import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import icon from '../../assets/icons/registerIcon.svg'
import ReactLoading from 'react-loading';
import signUpIcon from '../../assets/icons/signuUp.svg'
import loginIcon from '../../assets/icons/login.svg'
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
import { getQueryEngFooter, getQueryFooter } from '@/lib/service'
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import { usePasswordStrengthCheck } from '../../functions/usePasswordStrengthCheck'
import { GetStaticProps } from 'next'
import useLocationData from '@/Hooks/location'
import Head from 'next/head'
import { ResetPassword, SendForgotPasswordCode, VerifyForgotPasswordCode, login, signUp } from '@/lib/apiConfig'

export default function Register({ footer, footerEng }: { footer: any, footerEng: any }) {

    const [checked, setChecked] = useState<any>(false);
    const [registerLoading, setRegisterLoading] = useState<boolean>(false);
    const [loginLoading, setLoginLoading] = useState<boolean>(false);
    const [loginPayment, setLoginPayment] = useState<string | null>();
    const [codeSent, setCodeSent] = useState<boolean>(false);
    const [sendedCode, setSendedCode] = useState<string | number>();
    const [tempToken, setTempToken] = useState<string | number>();
    const [resetPassword, setResetPassword] = useState<string>();
    const [confirmResetPassword, setConfirmResetPassword] = useState<string>();
    const router = useRouter();
    const { locationData, error, loading } = useLocationData();
    const isLocationInIran = locationData === 'Iran (Islamic Republic of)' || !locationData;
    const checkPasswordStrength = usePasswordStrengthCheck();
    const toastBottomRight = useRef<Toast>(null);


    const [registrationData, setRegistrationData] = useState({
        firstname: "",
        lastname: "",
        username: "",
        password: "",
        email: "",
        phone: "",
        displayName: "",
        locale: "",
        description: "",
    });

    const [loginData, setLoginData] = useState({
        username: "",
        password: "",
    });

    useEffect(() => {
        const paymentLogin = sessionStorage.getItem('payment login');
        setLoginPayment(paymentLogin)
    }, [])

    const [forgotPass, setForgotPass] = useState<boolean>(false)

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
        setRegisterLoading(true)


        if (
            registrationData.username &&
            registrationData.password &&
            registrationData.locale &&
            registrationData.email &&
            registrationData.description &&
            registrationData.phone
        ) {
            const passwordStrength = checkPasswordStrength(registrationData.password);

            if (passwordStrength === 'Strong') {
                signUp(registrationData.email, registrationData.phone, registrationData.firstname, registrationData.lastname, registrationData.username, registrationData.password, registrationData.password, registrationData.locale, registrationData.description).then((res) => {
                    if (res.status === 201) {
                        toastBottomRight.current?.show({
                            severity: 'success',
                            summary: 'Success',
                            detail: `${isLocationInIran ? 'ثبت نام با موفقیت انجام شد' : 'The registration was successful.'}`,
                            life: 3000,
                        });
                        if (checked) {
                            localStorage.setItem('authToken', res.data.access)
                        }
                        else {
                            localStorage.setItem('authToken', res.data.access)
                            sessionStorage.setItem('authToken', res.data.access)
                        }
                        setTimeout(() => {
                            if (loginPayment) {
                                window.location.href = '/payment';
                                sessionStorage.removeItem('payment login')
                            }
                            else {
                                window.location.href = '/panel';
                            }
                        }, 1000);
                    }
                    else {
                        setRegisterLoading(false)
                        toastBottomRight.current?.show({
                            severity: 'error',
                            summary: 'Error',
                            detail: `${res.response.data.error}`,
                            life: 3000,
                        });
                    }
                });
            } else {
                toastBottomRight.current?.show({
                    severity: 'error',
                    summary: 'Error',
                    detail: `${isLocationInIran ? 'لطفا رمز عبور قوی‌تری انتخاب کنید.' : 'Please choose a stronger password'}`,
                    life: 3000,
                });
            }
        } else {
            toastBottomRight.current?.show({
                severity: 'error',
                summary: 'Error',
                detail: `${isLocationInIran ? 'لطفا تمامی فیلد ها را تکمیل نمایید' : 'Please fill out all the fields'}`,
                life: 3000,
            });
        }
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoginLoading(true);


        if (!forgotPass) {
            if (
                loginData.username &&
                loginData.password
            ) {
                login(loginData.username, loginData.password).then((res) => {
                    if (res.status === 200) {
                        toastBottomRight.current?.show({
                            severity: 'success',
                            summary: 'Success',
                            detail: `${isLocationInIran ? 'ورود با موفقیت انجام شد' : 'Login was successful.'}`,
                            life: 3000,
                        });
                        if (checked) {
                            localStorage.setItem('authToken', res.data.access)
                        }
                        else {
                            localStorage.setItem('authToken', res.data.access)
                            sessionStorage.setItem('authToken', res.data.access)
                        }
                        setTimeout(() => {
                            if (loginPayment) {
                                window.location.href = '/payment';
                                sessionStorage.removeItem('payment login')
                            }
                            else {
                                window.location.href = '/panel';
                            }
                        }, 1000);
                    }
                    else {
                        setLoginLoading(false)
                        toastBottomRight.current?.show({
                            severity: 'error',
                            summary: 'Error',
                            detail: `${res.response.data.error}`,
                            life: 3000,
                        });
                    }

                });
            } else {
                toastBottomRight.current?.show({
                    severity: 'error',
                    summary: 'Error',
                    detail: `${isLocationInIran ? 'لطفا تمامی فیلد ها را تکمیل نمایید' : 'Please fill out all the fields'}`,
                    life: 3000,
                });
            }
        }
        else {
            if (!codeSent) {
                SendForgotPasswordCode(loginData.username).then((res) => {
                    if (res.status === 200) {
                        setCodeSent(true);
                        toastBottomRight.current?.show({
                            severity: 'success',
                            summary: 'Success',
                            detail: `${res.data.detail}`,
                            life: 3000,
                        });
                    }
                    else {
                        toastBottomRight.current?.show({
                            severity: 'error',
                            summary: 'Error',
                            detail: `There has been an error ocurred, please enter a valid email address and try again.`,
                            life: 3000,
                        });
                    }

                })
            }
            else {
                if (!tempToken) {
                    VerifyForgotPasswordCode(loginData.username, sendedCode).then((res) => {
                        if (res.status === 200) {
                            setTempToken(res.data.temp_token)
                            toastBottomRight.current?.show({
                                severity: 'success',
                                summary: 'Success',
                                detail: `${res.data.message}`,
                                life: 3000,
                            });
                        }
                        else {
                            toastBottomRight.current?.show({
                                severity: 'error',
                                summary: 'Error',
                                detail: `Please enter the correct verification code and try again.`,
                                life: 3000,
                            });
                        }
                    })
                }
                else {
                    ResetPassword(loginData.username, tempToken, resetPassword, confirmResetPassword).then((res) => {
                        if (res.status === 200) {
                            toastBottomRight.current?.show({
                                severity: 'success',
                                summary: 'Success',
                                detail: `${res.data.message}`,
                                life: 3000,
                            });
                            setTimeout(() => {
                                window.location.href = '/register';
                            }, 1000);
                        }
                        else {
                            toastBottomRight.current?.show({
                                severity: 'error',
                                summary: 'Error',
                                detail: `${res.response.data.error}`,
                                life: 3000,
                            });
                        }
                    })
                }
            }

        }
    };

    return (
        <div className='flex justify-center w-full'>
            <main
            className={`flex min-h-screen flex-col max-w-[1700px] min-w-full 2xl:min-w-0 ${inter.className}`}
        >
            <Head>
                <title>Register</title>
            </Head>
            <Toast ref={toastBottomRight} position="bottom-right" />
            {loading ? ''
                :
                <PrimeReactProvider>
                    <Header isLocationInIran={isLocationInIran} />
                    <div className='Register__title flex flex-col gap-4 mt-4 justify-center p-12'>
                        <div className='flex flex-col sm:flex-row-reverse w-full items-center justify-center mb-8 sm:mb-24 gap-5'>
                            <Image src={icon} alt='registerIcon' />
                            <div className={`${myFont.className} text-end text-3xl sm:text-5xl flex flex-row-reverse gap-1`}>
                                {isLocationInIran ? (
                                    <>
                                        <p className='text-white'>
                                            فرآیند
                                        </p>
                                        <p style={{ color: '#F68D2E' }}>
                                            عضویت یا ورود
                                        </p>
                                    </>
                                ) : (
                                    <>
                                        <p className='text-white ml-2'>
                                            Process
                                        </p>
                                        <p style={{ color: '#F68D2E' }}>
                                            Sign Up or Log In
                                        </p>
                                    </>
                                )}

                            </div>
                        </div>

                        <div className='flex flex-col-reverse lg:flex-row-reverse w-full gap-10 2xl:w-10/12 3xl:w-7/12 mx-auto'>
                            <div className='flex-1'>
                                <div style={{ background: '#1D1D1D', borderRadius: '20px', boxShadow: '0px 0px 45px 0px rgba(246, 141, 46, 0.20)' }} className='w-full px-8 py-8'
                                >
                                    <div className={`${isLocationInIran ? 'flex-row' : 'flex-row-reverse'} flex gap-2 items-center justify-end`}>
                                        <p style={{ color: '#F68D2E' }} className={`${myFont.className} text-4xl mr-2`}>
                                            {isLocationInIran ? 'عضویت' : 'Register'}
                                        </p>
                                        <Image src={signUpIcon} alt='signup' />
                                    </div>
                                    <form onSubmit={handleRegistration} className='mt-16 flex flex-col gap-10'>
                                        <RegisterInput
                                            isLocationIran={isLocationInIran}
                                            placeholder={isLocationInIran ? 'نام' : 'First name'}
                                            value={registrationData.firstname}
                                            onChange={(value) => handleInputChange("firstname", value)}
                                            type='text'
                                        />
                                        <RegisterInput
                                            isLocationIran={isLocationInIran}
                                            placeholder={isLocationInIran ? 'نام خانوادگی' : 'Last name'}
                                            value={registrationData.lastname}
                                            onChange={(value) => handleInputChange("lastname", value)}
                                            type='text'
                                        />
                                        <RegisterInput
                                            isLocationIran={isLocationInIran}
                                            placeholder={isLocationInIran ? 'نام کاربری' : 'Username'}
                                            value={registrationData.username}
                                            onChange={(value) => handleInputChange("username", value)}
                                            type='text'
                                        />
                                        <RegisterInput
                                            isLocationIran={isLocationInIran}
                                            placeholder={isLocationInIran ? 'محل سکونت' : 'Location'}
                                            value={registrationData.locale}
                                            onChange={(value) => handleInputChange("locale", value)}
                                            type='text'
                                        />
                                        <RegisterInput
                                            isLocationIran={isLocationInIran}
                                            placeholder={isLocationInIran ? 'آدرس ایمیل' : 'Email Address'}
                                            value={registrationData.email}
                                            onChange={(value) => handleInputChange("email", value)}
                                            type='email'
                                        />
                                        <RegisterInput
                                            isLocationIran={isLocationInIran}
                                            placeholder={isLocationInIran ? 'تلفن' : 'Phone'}
                                            value={registrationData.phone}
                                            onChange={(value) => handleInputChange("phone", value)}
                                            type='phone'
                                        />
                                        <RegisterInput
                                            isLocationIran={isLocationInIran}
                                            placeholder={isLocationInIran ? 'رمز عبور' : 'Password'}
                                            value={registrationData.password}
                                            onChange={(value) => handleInputChange("password", value)}
                                            type='password'
                                        />
                                        <RegisterTextarea
                                            isLocationIran={isLocationInIran}
                                            placeholder={isLocationInIran ? 'چه مقدار سابقه کار در بازار مالی را دارید؟' : 'What is your experience in the financial market?'}
                                            value={registrationData.description}
                                            onChange={(value) => handleInputChange("description", value)}
                                        />
                                        {registerLoading ?
                                            <ReactLoading type={'spinningBubbles'} className='mx-auto mt-12' color={'#F68D2E'} height={100} width={60} />
                                            :
                                            <RegisterButton text={isLocationInIran ? 'عضویت' : 'Register'} />
                                        }
                                    </form>

                                </div>
                                <p className={`${myFontIran.className} text-white text-center mt-4 text-base`}>
                                    {isLocationInIran ? (
                                        'اطلاعات شخصی شما برای پردازش سفارش شما استفاده می‌شود، و پشتیبانی از تجربه شما در این وبسایت، و برای اهداف دیگری که در'
                                    ) : (
                                        'Your personal information is used to process your order, support your experience throughout this website, and for other purposes as explained in the'
                                    )}
                                    <span className='inline text-underline' style={{ color: '#F68D2E', textDecoration: 'underline' }}>
                                        {' '}
                                        {isLocationInIran ? 'سیاست حفظ حریم خصوصی' : 'Privacy Policy'}
                                    </span>
                                    {isLocationInIran ? ' توضیح داده شده است.' : ' explained therein.'}
                                </p>

                            </div>

                            <div className='flex-1'>
                                <div style={{ background: '#1D1D1D', borderRadius: '20px', boxShadow: '0px 0px 45px 0px rgba(246, 141, 46, 0.20)' }} className='w-full px-8 py-8 h-fit'

                                >
                                    <div className={`${isLocationInIran ? 'flex-row' : 'flex-row-reverse'} flex gap-2 items-center justify-end `}>
                                        <p style={{ color: '#F68D2E' }} className={`${myFont.className} text-4xl mr-2`}>
                                            {isLocationInIran ? 'ورود' : 'Login'}
                                        </p>
                                        <Image src={loginIcon} alt='login' />
                                    </div>
                                    <form onSubmit={handleLogin} className='mt-12 flex flex-col gap-10'>
                                        {
                                            !forgotPass ?
                                                <>
                                                    <RegisterInput
                                                        isLocationIran={isLocationInIran}
                                                        placeholder={isLocationInIran ? 'نام کاربری یا ایمیل' : 'Username or Email'}
                                                        value={loginData.username}
                                                        onChange={(value) => handleInputChangeLogin("username", value)}
                                                        type='text'
                                                    />
                                                    <RegisterInput
                                                        isLocationIran={isLocationInIran}
                                                        placeholder={isLocationInIran ? 'رمز عبور' : 'Password'}
                                                        value={loginData.password}
                                                        onChange={(value) => handleInputChangeLogin("password", value)}
                                                        type='password'
                                                    />
                                                </>
                                                :
                                                <>
                                                    {!tempToken &&
                                                        <RegisterInput
                                                            isLocationIran={isLocationInIran}
                                                            placeholder={isLocationInIran ? 'نام کاربری یا ایمیل' : 'Username or Email'}
                                                            value={loginData.username}
                                                            onChange={(value) => handleInputChangeLogin("username", value)}
                                                            type='text'
                                                        />
                                                    }
                                                    {(codeSent && !tempToken) &&
                                                        <RegisterInput
                                                            isLocationIran={isLocationInIran}
                                                            placeholder={isLocationInIran ? 'كد فراموشي' : 'Reset code'}
                                                            value={sendedCode}
                                                            onChange={(value) => {
                                                                setSendedCode(value)
                                                            }}
                                                            type='text'
                                                        />
                                                    }
                                                    {tempToken &&
                                                        <>
                                                            <RegisterInput
                                                                isLocationIran={isLocationInIran}
                                                                placeholder={isLocationInIran ? 'رمز عبور جديد' : 'New password'}
                                                                value={resetPassword}
                                                                onChange={(value) => {
                                                                    setResetPassword(value)
                                                                }}
                                                                type='password'
                                                            />
                                                            <RegisterInput
                                                                isLocationIran={isLocationInIran}
                                                                placeholder={isLocationInIran ? 'ورود دوباره رمز عبور جديد' : 'Re-enter new password'}
                                                                value={confirmResetPassword}
                                                                onChange={(value) => {
                                                                    setConfirmResetPassword(value)
                                                                }}
                                                                type='password'
                                                            />
                                                        </>
                                                    }

                                                </>
                                        }
                                        {
                                            !forgotPass &&
                                            <p style={{ color: '#00A3FF' }}
                                                onClick={() => {
                                                    setForgotPass(true)
                                                }}
                                                className={`${myFontIran.className} cursor-pointer text-base ${isLocationInIran && 'text-right'}`}>
                                                {isLocationInIran ? 'رمز عبور خود را فراموش کرده اید؟' : 'Forgot your password?'}
                                            </p>
                                        }
                                        {!forgotPass &&
                                            <div className={`flex flex-row items-center gap-2 ${isLocationInIran && 'text-right justify-end'}`}>
                                                <p className={`${myFontIran.className} text-white text-base`}>
                                                    {isLocationInIran ? 'مرا به خاطر بسپار' : 'Remember me'}
                                                </p>
                                                <Checkbox onChange={e => setChecked(e.checked)} checked={checked}></Checkbox>
                                            </div>
                                        }


                                        {loginLoading ?
                                            <ReactLoading type={'spinningBubbles'} className='mx-auto mt-12' color={'#F68D2E'} height={100} width={60} />
                                            :
                                            forgotPass ?
                                                <RegisterButton text={isLocationInIran ? `${codeSent ? 'تاييد' : 'ارسال کد'}` : `${codeSent ? 'Confirm' : 'Send email'}`} />
                                                :
                                                <RegisterButton text={isLocationInIran ? 'ورود' : 'Login'} />

                                        }
                                    </form>
                                </div>

                                <Image src={chart} alt='chart' className='lg:block hidden' style={{ opacity: '0.3' }} />
                            </div>
                        </div>
                    </div>
                    <Footer data={locationData === 'Iran (Islamic Republic of)' || !locationData ? footer?.footer : footerEng?.engFooter} isLocationInIran={locationData === 'Iran (Islamic Republic of)' || !locationData} />

                </PrimeReactProvider>
            }
            <style>
                {
                    `
                    .p-toast-detail {
                        text-align : ${isLocationInIran ? 'right' : 'left'} ;
                    }
                    `
                }
            </style>
        </main>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const footer = await getQueryFooter();
    const footerEng = await getQueryEngFooter();


    return {
        props: {
            footer,
            footerEng
        },
        revalidate: 10,
    };
};