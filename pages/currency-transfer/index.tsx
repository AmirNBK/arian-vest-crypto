import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
const inter = Inter({ subsets: ['latin'] })
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import Footer from '@/components/Footer/Footer';
import { getQueryEngFooter, getQueryFaq, getQueryFooter } from '@/lib/service';
import { GetStaticProps } from 'next';
import useLocationData from '@/Hooks/location';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
const CurrencyTransferComponent = dynamic(() => import("@/components/CurrencyTransfer/CurrencyTransfer"), {
    ssr: false,
});

export default function SingleBlog({ footer, footerEng }: { footer: any, footerEng: any }) {
    const { locationData, error, loading } = useLocationData();
    const isLocationInIran = locationData === 'IR' || !locationData;
    const [currencyComponentRendered, setCurrencyComponentRendered] = useState(false);
    const [showHeaderAndFooter, setShowHeaderAndFooter] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowHeaderAndFooter(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, [currencyComponentRendered]);

    return (
        <>
                <div>
                    <>
                        <>
                            {showHeaderAndFooter && <Header isLocationInIran={isLocationInIran} />}
                            <CurrencyTransferComponent onRender={() => setCurrencyComponentRendered(true)} />
                            {showHeaderAndFooter && <Footer
                                data={locationData === 'IR' || !locationData ? footer?.footer : footerEng?.engFooter}
                                isLocationInIran={locationData === 'IR' || !locationData}
                            />}
                        </>
                    </>
                </div>
            
        </>
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
