import React, { useEffect, useState } from 'react';
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import tick from '../../assets/icons/tick.svg'
import profile from '../../assets/images/profilePic.png'
import range from '../../assets/images/whiteRange.svg'
import Image from 'next/image';
import edit from '../../assets/icons/edit.svg'
import icon from '../../assets/icons/certificateMini.svg'
import StatisticsComponents from '../StatisticsComponents/StatisticsComponents';
import { UpdateProfileInfo, getProfileInfo } from '@/lib/apiConfig';


const Profile = () => {

    interface profileType {
        address: string
        created_at: string
        fullname: string
        status_verify: string
        image: any
        email: string
        purchased_accounts: {
            name: string
            price: string
            created_at: string
            status: string
        }[]

    }

    const [profileInfo, setProfileInfo] = useState<profileType>()
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [profilePic, setProfilePic] = useState<File | null | string>(null);

    useEffect(() => {
        UpdateProfileInfo(selectedImage).then((res) => {
            setProfilePic(res.data.image)
        })
    }, [selectedImage])


    const handleFileChange = (event: any) => {
        setSelectedImage(event.target.files[0]);
    };

    const formatCreatedAtDate = (createdAt: string): string => {
        const dateObject = new Date(createdAt);
        const formattedDate = `${(dateObject.getMonth() + 1)
            .toString()
            .padStart(2, '0')}/${dateObject
                .getDate()
                .toString()
                .padStart(2, '0')}/${dateObject.getFullYear()}`;
        return formattedDate;
    };

    useEffect(() => {
        getProfileInfo().then((res) => {
            setProfileInfo(res.data)
        })
    }, [])

    return (
        <div className='Profile' style={{ zIndex: '-50' }}>
            <div className='Profile__info bg-[#1D1D1D] rounded-md p-16 flex flex-col sm:flex-row-reverse gap-4
            justify-between items-center sm:items-end relative'
                style={{ zIndex: '20' }}
            >
                <Image src={range} alt='range' className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' style={{ zIndex: '1' }} />
                <div className='flex flex-col sm:flex-row-reverse gap-4 items-center'>
                    {profileInfo?.image ?
                        <div>
                            <label htmlFor="fileInput">
                                <Image src={'https://virafundingbackend.darkube.app/media-files/' + profilePic} alt='profile' unoptimized style={{ zIndex: '20' }} width={170} height={170} className='rounded-full cursor-pointer relative w-36 h-36 object-cover' />
                            </label>
                            <input
                                id="fileInput"
                                className="hidden"
                                type="file"
                                onChange={handleFileChange}
                            />
                        </div>
                        :
                        <div>
                            <label htmlFor="fileInput">
                                <Image src={profile} alt='profile' unoptimized className='cursor-pointer relative' style={{ zIndex: '20' }} />
                            </label>
                            <input
                                id="fileInput"
                                className="hidden"
                                type="file"
                                onChange={handleFileChange}
                            />
                        </div>
                    }
                    <div className='flex flex-col items-center sm:items-end gap-2'>
                        <div className='flex flex-row gap-3 items-center'>
                            <Image src={edit} alt='edit' />
                            {profileInfo?.status_verify === "تایید شده" && <Image src={tick} alt='tick' className='w-6 h-6' />}
                            <p className={`${myFont.className} text-white text-3xl`}> {profileInfo?.fullname} </p>
                        </div>
                        <p className='text-base text-white opacity-[0.7] text-sm'> {profileInfo?.email} </p>
                        <p className='text-white text-sm opacity-[0.7] sm:text-right text-center'>
                            {profileInfo?.address}
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-2 bg-[#1D1D1D] mt-6 p-4 '>
                <div className='flex flex-row items-center gap-4'>
                    <h2 className={`${myFont.className} Profile__title text-white text-2xl w-fit ml-auto`}>
                        اکانت های خریداری شده
                    </h2>
                    <Image src={icon} alt='icon' unoptimized />
                </div>

                <div className={`accounts__info rounded-md p-1 mt-5 w-full text-white overflow-auto`}>
                    <table className='w-full'>
                        <tr>
                            <th className={`${myFont.className} text-xl text-center text-main-orange`}>وضعیت</th>
                            <th className={`${myFont.className} text-xl text-center text-main-orange`}>قیمت</th>
                            <th className={`${myFont.className} text-xl text-center text-main-orange`}>حساب خریداری شده</th>
                            <th className={`${myFont.className} text-xl text-center text-main-orange`}>تاریخ</th>
                            <th className={`${myFont.className} text-xl text-center text-main-orange`}></th>
                        </tr>

                        {profileInfo?.purchased_accounts.map((item, index) => {
                            return (

                                <tr>
                                    <td className='text-center'>

                                        <button className={`${myFontIran.className} px-5 sm:px-15 sm:py-2 py-3 text-white rounded-lg text-xs sm:text-sm
                                        ${item.status === "در انتظار" ? 'bg-main-orange' : item.status === "منقضی شده" ? 'bg-[#740000]' : item.status === "پرداخت شده" ? 'bg-[#159400]' : ''}
                                        `}
                                        >
                                            {item.status}
                                        </button>
                                    </td>
                                    <td className='text-center'>
                                        <p className='text-white'>
                                            {item.price}
                                        </p>
                                    </td>
                                    <td className='text-center'>
                                        <p className='text-white'>
                                            {item.name}
                                        </p>
                                    </td>
                                    <td className='text-center'>
                                        <p className='text-white'>
                                            {formatCreatedAtDate(item.created_at)}
                                        </p>
                                    </td>
                                    <td className='text-center'>
                                        <h2 className='text-main-orange text-2xl font-bold'> {index + 1} </h2>
                                    </td>
                                </tr>
                            )
                        })}


                    </table>

                </div>
            </div>


            <style>
                {
                    `
                    table {
                        border - collapse: separate;
                    border-spacing: 0 10px;
      }
    
      th {
        padding-left: 5px;
        padding-right: 5px; 
        padding-bottom: 20px;
        padding-top: 20px;
      }
    
                     td {
                        padding-left: 5px;
                        padding-right: 5px; 
                        padding-bottom: 14px;
                        padding-top: 14px;
      }   
      tr:not(:last-child,:first-child) {
        border-bottom: 1px solid rgba(255, 255, 255, 0.10);
      }
      
                    `
                }
            </style>
        </div>
    );
};

export default Profile;