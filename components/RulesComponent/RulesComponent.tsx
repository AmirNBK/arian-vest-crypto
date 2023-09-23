import React, { useState } from 'react';
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import logo from '../../assets/icons/rulesLogo.svg'
import whiteLogo from '../../assets/icons/logo-white.png'
import Image from 'next/image';
import { Dialog } from 'primereact/dialog';


const RulesComponent = (props: {
    text: string
    translate: number
}) => {
    const [hovered, setHovered] = useState(false);
    const [visible, setVisible] = useState<boolean>(false);


    const handleMouseEnter = () => {
        setHovered(true);
    };

    const handleMouseLeave = () => {
        setHovered(false);
    };

    return (
        <div
            className={`${myFont.className} flex items-center px-6 relative leading-relaxed cursor-pointer
          text-lg RulesComponent rounded-xl text-center text-white w-fit bg-new-black hover:bg-orange-400 transition duration-700`}
            style={{
                maxWidth: '400px',
                height: '170px',
                transform: `translateY(${props.translate}px)`,
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Dialog
                header="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است؟" visible={visible} style={{
                    width: '40vw', display: 'flex', flexDirection: 'column',
                    backgroundColor: '#252525'
                }}
                className={`${myFont.className} font-normal`}
                onHide={() => setVisible(false)}
                onShow={() => {setHovered(false)}}
            >
                <Image src={logo} alt='logo' className='absolute right-[30px] top-[-20px]' />
                <p className={`${myFontIran.className} text-right rtl my-12 text-[#E5E5E5]`}>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز صنعت چاپ، و با استفاده از طراحان گرافیک صنعت چاپ، و با استفاده از طراحان گرافیک لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز صنعت چاپ، و با استفاده.
                </p>

            </Dialog>
            <Image
                src={logo}
                unoptimized
                width={50}
                height={50}
                alt="logo"
                className={`${hovered && 'opacity-0'} transition duration-500 absolute right-1/2 translate-x-1/2`}
                style={{ top: '-15%' }}
            />
            <Image
                src={whiteLogo}
                unoptimized
                width={50}
                height={50}
                alt="logo"
                className={`opacity-0 ${hovered && 'opacity-100'} transition duration-500 absolute right-1/2 translate-x-1/2`}
                style={{ top: '-15%' }}
            />
            <p style={{ marginBottom: '-40px' }} className={`${hovered && 'text-black'} duration-700`}
                onClick={() => setVisible(true)}
            >
                {props.text}
            </p>
        </div>
    );
};
export default RulesComponent;