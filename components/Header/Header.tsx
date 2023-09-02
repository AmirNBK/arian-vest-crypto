import Image from 'next/image';
import React from 'react';
import logo from '../../assets/icons/logo.png'
import profile from '../../assets/icons/profile.svg'

const Header = () => {
    const header = ['صفحه اصلی', 'تعرفه ها', 'قوانین', 'سوالات متداول', 'درباره ما', 'بلاگ']
    return (
        <div className='Header flex flex-row-reverse justify-between w-full items-center'>
            <div>
                <Image src={logo} alt='logo' style={{ width: '191px' }} />
            </div>
            <div className='flex flex-row-reverse gap-20 text-white text-xl'>
                {header.map((item: string, index: number) => {
                    return (
                        <p className='pb-1' style={{ borderBottom: `${index === 0 ? '3px solid #F68D2E' : ''}` }}>
                            {item}
                        </p>
                    )
                })}
            </div>
            <div>
                <div className='flex flex-row-reverse items-center px-6 gap-2 border-solid border-white border-2 rounded-2xl px-4 py-2'>
                    <p className='text-white'> عضویت و ورود </p>
                    <Image src={profile} alt='profile' />
                </div>
            </div>
        </div>
    );
};

export default Header;