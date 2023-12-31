import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import { useRouter } from 'next/router';
const inter = Inter({ subsets: ['latin'] })
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../../assets/fonts/iranyekanwebregular_0.ttf' })
import Footer from '@/components/Footer/Footer';
import { getQueryFaq, getQueryFooter } from '@/lib/service';
import PaymentResult from '@/components/PaymentResult/PaymentResult';
import successful from '../../../assets/images/succesfull-payment.png'
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getPaymentInfo, getProfileInfo } from '@/lib/apiConfig';
import Receipt from '@/components/Receipt/Receipt';


export default function SuccessResult({ footer, questions }: { footer: any, questions: any }) {

    interface TransactionType {
        actually_paid: number;
        burning_percent: null | string; // Replace 'string' with the actual type if 'burning_percent' has a specific type
        created_at: string;
        invoice_id: number;
        order_description: null | any; // Replace 'any' with the actual type of 'order_description' if known
        order_id: string;
        outcome_amount: number;
        outcome_currency: string;
        pay_address: string;
        pay_amount: number;
        pay_currency: string;
        payin_extra_id: null | any; // Replace 'any' with the actual type of 'payin_extra_id' if known
        payin_hash: null | any; // Replace 'any' with the actual type of 'payin_hash' if known
        payment_id: number;
        payment_status: string;
        payout_hash: null | any; // Replace 'any' with the actual type of 'payout_hash' if known
        price_amount: number;
        price_currency: string;
        purchase_id: number;
        type: string;
        updated_at: string;
    }

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

    const [profileInfo, setProfileInfo] = useState<ProfileType>()
    const [paymentInfo, setPaymentInfo] = useState<any>()


    const router = useRouter();
    const npId = router.query.NP_id;

    useEffect(() => {
        if (npId) {
            handleGetPaymentInfo();
            getProfileInfo().then((res) => {
                setProfileInfo(res.data)
            });
        }
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
        <main
            className={`flex min-h-screen flex-col justify-between ${inter.className}`}
        >
            <Head>
                <title>Result</title>
            </Head>
            <PrimeReactProvider>
                <Header active={''} />
                <PaymentResult title='پرداخت موفقیت آمیز بود' image={successful} />
                {paymentInfo &&
                    <Receipt user={profileInfo?.fullname} price={paymentInfo?.price_amount} address={profileInfo?.address}
                        date={formatDateString(paymentInfo.created_at)} currency={paymentInfo.pay_currency}
                        confirmationNum={paymentInfo?.purchase_id} email={profileInfo?.email} />
                }
                <Footer data={footer?.footer} />
            </PrimeReactProvider>
        </main>
    )
}


export const getStaticProps: GetStaticProps = async () => {

    const footer = await getQueryFooter();
    const questions = await getQueryFaq();


    return {
        props: {
            footer,
            questions
        },
        revalidate: 10,
    };
};
