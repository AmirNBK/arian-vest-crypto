import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
const inter = Inter({ subsets: ['latin'] })
import localFont from 'next/font/local'
import team from '../../assets/icons/team.svg'
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import range from '../../assets/images/rangeTrading.png'
import shape from '../../assets/images/shape.png'
import AboutUsItems from '@/components/AboutUsItems/AboutUsItems';
import Footer from '@/components/Footer/Footer';
import Stats from '@/components/Stats/Stats';
import users from '../../assets/icons/users.svg'
import payment from '../../assets/icons/payment.svg'
import profit from '../../assets/icons/profit.svg'


export default function SingleBlog() {

    const items = ['لورم ایپسوم با تولید ساده', 'لورم ایپسوم متن ساختگی', 'متن ساختگی با تولید ساده', 'لورم ایپسوم ساختگی با تولید ساده', 'لورم ایپسوم متن ساختگی با تولید ساده']
    return (
        <main
            className={`flex min-h-screen flex-col ${inter.className}`}
        >
            <PrimeReactProvider>
                <Header active={4} />

                <div className={`${myFont.className} justify-center flex flex-row-reverse gap-4 items-center mr-12 mt-8`}>
                    <Image src={team} alt='faq' />
                    <p className='text-white text-5xl'>
                        درباره <span style={{ color: '#F68D2E' }}>  تیم ما <span className='text-3xl'> (ارین وست) </span> </span>
                    </p>
                </div>

                <p className={`${myFontIran.className} text-center leading-loose text-white w-10/12 mx-auto mt-12`}>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                </p>

                    <div className='mt-24 img-wrap' style={{ opacity: '0.3' }}>
                        <Image src={range} alt='rangeTrading' />
                    </div>

                <div className='flex flex-row-reverse justify-center m-24'>
                    <Image src={shape} alt='shape' unoptimized />
                    <div className='flex flex-col justify-around mr-12'>
                        <AboutUsItems delay={0} translate={60} text='کاهش کلاهبرداری های اینترنتی' />
                        <AboutUsItems delay={500} translate={0} text='تامین سرمایه معامله گران فعال در بازار سرمایه' />
                        <AboutUsItems delay={1000} translate={60} text='کاهش خطرات تحریم بر کارکرد' />
                    </div>
                </div>

                <div className={`${myFont.className} flex flex-col justify-center flex flex-row-reverse gap-4 items-center mr-12 mt-8 mb-44`}>
                    <p className='text-white text-5xl'>
                        آمار کاربران <span style={{ color: '#F68D2E' }}> سایت ارین وست <span className='text-3xl'> (1402) </span> </span>
                    </p>
                    <div className='mt-24 flex flex-row gap-24'>
                        <Stats fadePosition='right' icon={profit} text='بزرگترین پرداخت سود' stat='+25000$' translate={0} />
                        <Stats fadePosition='up' icon={users} text='تعداد کاربران' stat='+68589' translate={40} />
                        <Stats fadePosition='left' icon={payment} text='مجموع پرداخت‌ها' stat='+3,000,000$' translate={0} />
                    </div>
                </div>


                <Footer />
            </PrimeReactProvider>
        </main>
    )
}
