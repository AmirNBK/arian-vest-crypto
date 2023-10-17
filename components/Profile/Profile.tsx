import React from 'react';
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import profile from '../../assets/icons/profile3.svg'
import Image from 'next/image';
import RegisterButton from '../CommonComponents/RegisterButton/RegisterButton';

const Profile = () => {
    return (
        <div className='Profile'>

            <h2 className={`${myFont.className} Profile__title text-white text-2xl w-fit ml-auto`}>
                حساب کاربری
            </h2>

            <div className='Profile__info bg-[#272A2E] rounded-md p-6 mt-8 flex flex-row-reverse gap-4 justify-between items-end'>
                <div className='flex flex-row-reverse gap-4 items-center'>
                    <Image src={profile} alt='profile' width={100} height={100} />
                    <div className='flex flex-col items-end gap-2'>
                        <p className={`${myFont.className} text-white text-3xl`}> محمد باقری </p>
                        <p className='text-base text-white opacity-[0.7] text-sm'> test@gmail.com </p>
                        <p className='text-white text-sm opacity-[0.7]'>
                            17shahrivar street-marashi alley-no5
                            tehran, Tehran (تهران) 1718814754
                            Iran
                        </p>
                    </div>
                </div>

                <div>
                    <button className={`${myFontIran.className} px-10 py-2 text-white rounded-lg text-base bg-main-orange`}
                    >
                        ویرایش
                    </button>
                </div>

            </div>


            <style>

                {`
                .gradient-text {
                    background: #F68D2E;
background: linear-gradient(to right, #fff 0%, #F68D2E 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

                }

                .background-gradient {
                    background: rgb(0,0,0);
background: linear-gradient(180deg, #1D1F24 0%, #1D1F24 50%, transparent 100%);
                }
                `}
            </style>
        </div>
    );
};

export default Profile;