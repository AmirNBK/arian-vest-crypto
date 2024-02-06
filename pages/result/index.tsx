import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
const inter = Inter({ subsets: ['latin'] })
import Footer from '@/components/Footer/Footer';
import { getQueryFaq, getQueryFooter } from '@/lib/service';
import PaymentResult from '@/components/PaymentResult/PaymentResult';
import successful from '../../assets/images/succesfull-payment.png'
import { GetStaticProps } from 'next';
import Head from 'next/head';


export default function SingleBlog({ footer }: { footer: any}) {

    return (
        <div className='flex justify-center w-full'>
            <main
            className={`flex w-full min-h-screen flex-col justify-between 2xl:justify-start max-w-[1700px] min-w-full 2xl:min-w-0 ${inter.className}`}
        >
            <Head>
                <title>Result</title>
            </Head>
            <PrimeReactProvider>
                <Header active={''} />
                <PaymentResult title='پرداخت موفقیت آمیز بود' image={successful} />
                {/* <Footer data={footer?.footer} /> */}
            </PrimeReactProvider>
        </main>
        </div>
    )
}


export const getStaticProps: GetStaticProps = async () => {

    const footer = await getQueryFooter();

    return {
        props: {
            footer
        },
        revalidate: 10,
    };
};
