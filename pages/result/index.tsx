import { useState } from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
const inter = Inter({ subsets: ['latin'] })
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import Footer from '@/components/Footer/Footer';
import { getQueryFaq, getQueryFooter } from '@/lib/service';
import PaymentResult from '@/components/PaymentResult/PaymentResult';
import successful from '../../assets/images/succesfull-payment.png'
import unsuccessful from '../../assets/images/unsuccesful-payment.png'
import { GetStaticProps } from 'next';


export default function SingleBlog({ footer, questions }: { footer: any, questions: any }) {

    return (
        <main
            className={`flex min-h-screen flex-col justify-between ${inter.className}`}
        >
            <PrimeReactProvider>
                <Header active={''} />
                <PaymentResult title='پرداخت موفقیت آمیز بود' image={successful} />
                {/* <PaymentResult title='پرداخت موفقیت آمیز نبود' image={unsuccessful} /> */}
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
        revalidate: 3600,
    };
};
