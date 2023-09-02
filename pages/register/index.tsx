import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import icon from '../../assets/icons/registerIcon.svg'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <main
            className={`flex min-h-screen flex-col p-12 ${inter.className}`}
        >
            <Header />
            <div className='Register__title flex flex-row-reverse items-baseline gap-4 mt-16 justify-center'>
                <Image src={icon} alt='registerIcon' />
                <div  className='text-5xl flex flex-row-reverse gap-1'>
                    <p className='text-white'>
                        فرآیند
                    </p>
                    <p style={{ color: '#F68D2E' }}>
                        عضویت یا ورود
                    </p>
                </div>
            </div>
        </main>
    )
}
