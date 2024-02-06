import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import ReactLoading from 'react-loading';
import { useRouter } from 'next/router';
const inter = Inter({ subsets: ['latin'] })
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../../assets/fonts/iranyekanwebregular_0.ttf' })
import { getQueryFaq, getQueryFooter } from '@/lib/service';
import PaymentResult from '@/components/PaymentResult/PaymentResult';
import successful from '../../../assets/images/succesfull-payment.png'
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getAccounts, getPaymentInfo, getProfileInfo } from '@/lib/apiConfig';
import Receipt from '@/components/Receipt/Receipt';
import useLocationData from '@/Hooks/location';
import Link from 'next/link';


export default function SuccessResult({ footer, questions }: { footer: any, questions: any }) {

    const { locationData, error, loading } = useLocationData();
    const isLocationInIran = locationData === 'Iran (Islamic Republic of)' || !locationData;
    interface TransactionType {
        actually_paid: number;
        burning_percent: null | string;
        created_at: string;
        invoice_id: number;
        order_description: null | any;
        order_id: string;
        outcome_amount: number;
        outcome_currency: string;
        pay_address: string;
        pay_amount: number;
        pay_currency: string;
        payin_extra_id: null | any;
        payin_hash: null | any;
        payment_id: number;
        payment_status: string;
        payout_hash: null | any;
        price_amount: number;
        price_currency: string;
        purchase_id: number;
        type: string;
        updated_at: string;
    }

    type formDataType = {
        city: string;
        country: string;
        email: string;
        firstName: string;
        lastName: string;
        phone: string;
        postalCode: string;
        province: string;
        streetAddress: string;
    };

    interface ProfileType {
        address: string;
        created_at: string;
        documents: null | any;
        email: string;
        first_name: string;
        fullname: string;
        image: null | any;
        last_name: string;
        phone_number: string;
        pk: number;
    }

    const receiptRef = useRef(null);
    const [profileInfo, setProfileInfo] = useState<ProfileType>()
    const [paymentInfo, setPaymentInfo] = useState<TransactionType>()
    const [broker, setBroker] = useState<string | null>()
    const [platform, setPlatform] = useState<string | null>()
    const [formData, setFormData] = useState<formDataType>()
    const [dataLoading, setDataLoading] = useState(true);
    useEffect(() => {
        const platformLocal = localStorage.getItem('platform');
        const brokerLocal = localStorage.getItem('tradingPlatform');
        setPlatform(platformLocal)
        setBroker(brokerLocal)

        const formDataString = localStorage.getItem('formData');

        if (formDataString !== null) {
            const formDataLocal = JSON.parse(formDataString);
            setFormData(formDataLocal)
        } else {
            console.error('formData is not present in localStorage');
        }
    }, []);


    const router = useRouter();
    const npId = router.query.NP_id;
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (npId) {
                    await handleGetPaymentInfo();
                    const profileResponse = await getProfileInfo();
                    setProfileInfo(profileResponse.data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [npId]);

    const handleGetPaymentInfo = async () => {
        try {
            if (npId) {
                const response = await getPaymentInfo(npId);
                setPaymentInfo(response);
            }
        } catch (error) {
            console.error('Error getting payment info:', error);
        }
    };

    const formatDateString = (inputDateStr: string | number | Date) => {
        const inputDate = new Date(inputDateStr);

        const options: any = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZoneName: 'short',
        };

        const formattedDate = inputDate.toLocaleString('en-US', options);

        return formattedDate;
    };

    return (
        <div className='flex justify-center w-full'>
            <main
            className={`flex w-full min-h-screen flex-col justify-between 2xl:justify-start max-w-[1700px] min-w-full 2xl:min-w-0 ${inter.className}`}
        >
            <Head>
                <title>Result</title>
            </Head>
            {loading ? ''
                :
                <PrimeReactProvider>
                    <Header active={''} />
                    <div className='bg-[#1D1D1D] rounded-md w-10/12 lg:w-7/12 mx-auto py-6 my-12'>
                        {(paymentInfo && profileInfo) ?
                            <Receipt broker={broker}
                                profileInfo={profileInfo}
                                paymentInfo={paymentInfo}
                                ref={receiptRef}
                                city={formData?.city}
                                country={formData?.country}
                                firstName={formData?.firstName}
                                lastName={formData?.lastName}
                                platform={platform}
                                user={profileInfo?.fullname} price={paymentInfo?.price_amount}
                                phone={formData?.phone}
                                address={formData?.streetAddress}
                                date={formatDateString(paymentInfo.created_at)} currency={paymentInfo.pay_currency}
                                confirmationNum={paymentInfo?.invoice_id} email={formData?.email} />
                            :
                            <ReactLoading type={'spinningBubbles'} className='mx-auto mt-12' color={'#F68D2E'} height={667} width={150} />
                        }
                        <Link href={'/'} className='block cursor-pointer w-fit mx-auto'>
                            <p className={`${myFontIran.className} text-main-orange text-xl w-fit`}> {isLocationInIran ? 'بازگشت' : 'Back'} </p>
                            <hr style={{ borderColor: '#F68D2E' }} />
                        </Link>
                    </div>

                </PrimeReactProvider>
            }

        </main>
        </div>
    )
}


export const getStaticProps: GetStaticProps = async () => {

    const questions = await getQueryFaq();


    return {
        props: {
            questions
        },
        revalidate: 10,
    };
};
