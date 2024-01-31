import React, { useEffect, useRef, useState } from 'react';
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' })
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' })
import tick from '../../assets/icons/tick.svg'
import profile from '../../assets/images/profilePic.png'
import { Toast, ToastMessage } from 'primereact/toast';
import range from '../../assets/images/whiteRange.svg'
import empty from '../../assets/icons/empty.png'
import Image from 'next/image';
import { Dialog } from 'primereact/dialog';
import ReactLoading from 'react-loading';
import edit from '../../assets/icons/edit.svg'
import icon from '../../assets/icons/certificateMini.svg'
import { UpdateProfileInfo, getProfileInfo } from '@/lib/apiConfig';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';


const Profile = (
    props: {
        isLocationIran: boolean
    }
) => {
    const isLocationInIran = props.isLocationIran
    const toastBottomRight = useRef<Toast>(null);
    const [visible, setVisible] = useState<boolean>(false);

    interface profileType {
        address: string
        created_at: string
        fullname: string
        status_verify: string
        image: any
        phone_number: string
        email: string
        purchased_accounts: {
            name: string
            price: string
            created_at: string
            payment_invoice: File
            status: string
            invoice_number: number
        }[]

    }

    const [profileInfo, setProfileInfo] = useState<profileType>()
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [profilePic, setProfilePic] = useState<File | null | string>(null);
    const [userPhotoStatic, setUserPhotoStatic] = useState<string | StaticImport>();
    const [editable, setEditable] = useState<boolean>(false)
    const [email, setEmail] = useState<string>()
    const [address, setAddress] = useState<string>()
    const [phone, setPhone] = useState<string>()
    const [firstName, setFirstName] = useState<string>()
    const [lastName, setLastName] = useState<string>()
    const [refreshProfileInfo, setRefreshProfileInfo] = useState<boolean>(false)
    const [receipt, setReceipt] = useState<any>()

    useEffect(() => {
        UpdateProfileInfo(selectedImage).then((res) => {
            setProfilePic(res.data.image)

        })
    }, [selectedImage])

    const handleFileChange = (event: any) => {
        setSelectedImage(event.target.files[0]);
        const file = event.target.files[0];

        if (file) {
            const imageUrlUserPhoto = URL.createObjectURL(file);
            setUserPhotoStatic(imageUrlUserPhoto)
        }
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
    }, [refreshProfileInfo])

    const submitEdit = () => {
        if (email || address || phone || firstName || lastName) {
            UpdateProfileInfo('', email, address, firstName, lastName, phone).then((res) => {
                if (res.status === 200) {
                    toastBottomRight.current?.show({
                        severity: 'success',
                        summary: 'Success',
                        detail: `${isLocationInIran ? 'اطلاعات شما با موفقیت ثبت و ویرایش گردید' : 'Your information has been successfully registered and edited'}`,
                        life: 3000,
                    });
                    setEditable(false)
                    setRefreshProfileInfo(!refreshProfileInfo)
                    setEmail('')
                    setPhone('')
                    setFirstName('')
                    setLastName('')
                    setAddress('')
                }
                else {
                    toastBottomRight.current?.show({
                        severity: 'error',
                        summary: 'Error',
                        detail: `${(res.response.data.error) || (isLocationInIran ? 'مشکلی در ویرایش اطلاعات رخ داد لطفا دوباره امتحان کنید' : 'There was a problem editing information. Please try again')}`,
                        life: 3000,
                    });
                }
            })
        }
        else {
            toastBottomRight.current?.show({
                severity: 'error',
                summary: 'Error',
                detail: `${isLocationInIran ? 'لطفا حداقل یکی از فیلد ها را پر نمایید' : 'Please fill out at least one of the fields'}`,
                life: 3000,
            });
        }
    }

    return (
        <div className='Profile' style={{ zIndex: '-50' }}>
            <Toast ref={toastBottomRight} position="bottom-right" />
            <Dialog header="Receipt" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                <Image src={receipt} alt='receipt' width={50} height={50} unoptimized className=' w-full h-full' />
            </Dialog>
            {profileInfo ?
                <>
                    <div className={`Profile__info bg-[#1D1D1D] rounded-md p-16 flex flex-col
                    ${isLocationInIran ? 'sm:flex-row-reverse' : 'sm:flex-row'} gap-4 justify-between items-center sm:items-end relative`}
                        style={{ zIndex: '20' }}
                    >
                        {editable &&
                            <div className={`absolute ${isLocationInIran ? 'left-8 bottom-4' : 'right-8 bottom-4'} z-10 flex flex-row-reverse gap-4`}>
                                <button
                                    onClick={submitEdit}
                                    className={`${myFontIran.className} px-5 sm:px-15 sm:py-2 py-3 text-white rounded-lg text-xs sm:text-sm
                           bg-main-orange 
                            `}
                                >
                                    {isLocationInIran ? 'ثبت اطلاعات' : 'Submit'}

                                </button>
                                <button
                                    onClick={() => {
                                        setEditable(false)
                                    }}
                                    className={`${myFontIran.className} px-5 sm:px-15 sm:py-2 py-3 text-white rounded-lg text-xs sm:text-sm
                          bg-[#740000]
                            `}
                                >
                                    {isLocationInIran ? 'لغو' : 'Cancel'}


                                </button>
                            </div>
                        }
                        <Image src={range} alt='range' className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2' style={{ zIndex: '1' }} />
                        <div className={`flex flex-col relative  ${isLocationInIran ? 'sm:flex-row-reverse' : 'sm:flex-row'} gap-4 items-center`}>
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
                                        <Image src={userPhotoStatic || profile} width={170} height={170} alt='profile' unoptimized className='rounded-full cursor-pointer relative w-36 h-36 object-cover' style={{ zIndex: '20' }} />
                                    </label>
                                    <input
                                        id="fileInput"
                                        className="hidden"
                                        type="file"
                                        onChange={handleFileChange}
                                    />
                                </div>
                            }
                            <div className={`flex flex-col items-center relative z-10 ${isLocationInIran ? 'sm:items-end' : 'sm:items-start'} gap-2`}>
                                <div className={`flex  ${isLocationInIran ? 'flex-row' : 'flex-row-reverse'}  gap-3 items-center`}>
                                    {!editable && <Image src={edit} alt='edit' className='cursor-pointer' onClick={() => {
                                        setEditable(true)
                                    }} />}

                                    {profileInfo?.status_verify === "Accepted" && <Image src={tick} alt='tick' className='w-6 h-6' />}
                                    {editable ?
                                        <div className='flex flex-col gap-2'>
                                            <div
                                                className={`${isLocationInIran ? 'flex-row' : 'flex-row-reverse'} flex gap-2 items-center`}>
                                                <input placeholder='' className='rounded-sm p-0.5'
                                                    value={firstName}
                                                    onChange={(e) => {
                                                        setFirstName(e.target.value)
                                                    }}
                                                />
                                                <p className={`text-white ${myFontIran.className}`}> {isLocationInIran ? ' : نام كوچك ' : 'First name : '} </p>
                                            </div>
                                            <div
                                                className={`${isLocationInIran ? 'flex-row' : 'flex-row-reverse'} flex gap-2 items-center`}>
                                                <input placeholder='' className='rounded-sm p-0.5'
                                                    value={lastName}
                                                    onChange={(e) => {
                                                        setLastName(e.target.value)
                                                    }}
                                                />
                                                <p className={`text-white ${myFontIran.className}`}> {isLocationInIran ? ' : نام خانوادگی ' : 'Last name : '} </p>
                                            </div>
                                        </div>
                                        :
                                        <p className={`${myFont.className} text-white text-3xl`}> {profileInfo?.fullname} </p>
                                    }
                                </div>
                                <p className={`text-base text-white ${!editable && 'opacity-[0.7]'}  text-sm`}>
                                    {editable ?
                                        <div className={`${isLocationInIran ? 'flex-row' : 'flex-row-reverse'} flex gap-2 items-center`}>
                                            <input placeholder='' className='rounded-sm p-0.5 text-black'
                                                value={email}
                                                onChange={(e) => {
                                                    setEmail(e.target.value)
                                                }}
                                            />
                                            <p className={`text-white ${myFontIran.className}`}> {isLocationInIran ? ': ایمیل' : 'Email : '} </p>
                                        </div>
                                        :
                                        <p> {profileInfo?.email} </p>
                                    }
                                </p>
                                <p className={`text-base text-white ${!editable && 'opacity-[0.7]'}  text-sm`}>
                                    {editable ?
                                        <div className={`${isLocationInIran ? 'flex-row' : 'flex-row-reverse'} flex gap-2 items-center`}>
                                            <input placeholder='' className='rounded-sm p-0.5 text-black'
                                                value={phone}
                                                onChange={(e) => {
                                                    setPhone(e.target.value)
                                                }}
                                            />
                                            <p className={`text-white ${myFontIran.className}`}> {isLocationInIran ? ': تلفن' : 'Phone : '} </p>
                                        </div>
                                        :
                                        <p >  {profileInfo?.phone_number || '09834528109'} </p>
                                    }
                                </p>
                                <p className={`text-white text-sm ${!editable && 'opacity-[0.7]'} text-center`}>
                                    {editable ?
                                        <div className={`${isLocationInIran ? 'flex-row' : 'flex-row-reverse'} flex gap-2 items-center`}>
                                            <input placeholder='' className='rounded-sm p-0.5 text-black'
                                                value={address}
                                                onChange={(e) => {
                                                    setAddress(e.target.value)
                                                }}
                                            />
                                            <p className={`text-white ${myFontIran.className}`}> {isLocationInIran ? ': آدرس' : 'Address : '} </p>
                                        </div>
                                        :
                                        <p>  {profileInfo?.address} </p>
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 bg-[#1D1D1D] mt-6 p-4 '>
                        <div className={`flex ${isLocationInIran ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-4`}>
                            <h2 className={`${myFont.className} Leaderboards__title text-white text-2xl w-fit ${isLocationInIran ? 'ml-auto' : 'mr-auto translate-y-0.5'}`}>

                                {isLocationInIran ? 'اکانت های خریداری شده' : 'Purchased accounts'}
                            </h2>
                            <Image src={icon} alt='icon' unoptimized />
                        </div>

                        <div className={`accounts__info rounded-md p-1 mt-5 w-full text-white overflow-auto`}>
                            {profileInfo?.purchased_accounts.length ? (
                                <table className={`w-full ${isLocationInIran ? '' : 'rtl'}`}>
                                    <tr>
                                        <th className={`${myFont.className}`}></th>
                                        <th className={`${myFont.className} text-xl text-center text-main-orange`}>
                                            {isLocationInIran ? 'وضعیت' : 'Status'}
                                        </th>
                                        <th className={`${myFont.className} text-xl text-center text-main-orange`}>
                                            {isLocationInIran ? 'قیمت' : 'Price'}
                                        </th>
                                        <th className={`${myFont.className} text-xl text-center text-main-orange`}>
                                            {isLocationInIran ? 'شماره سفارش' : 'Order number'}
                                        </th>
                                        <th className={`${myFont.className} text-xl text-center text-main-orange`}>
                                            {isLocationInIran ? 'حساب خریداری شده' : 'Purchased Account'}
                                        </th>
                                        <th className={`${myFont.className} text-xl text-center text-main-orange`}>
                                            {isLocationInIran ? 'تاریخ' : 'Date'}
                                        </th>
                                    </tr>

                                    {profileInfo?.purchased_accounts.map((item, index) => (
                                        <tr key={index}>
                                            <td
                                                onClick={() => {
                                                    setVisible(true)
                                                    setReceipt('https://virafundingbackend.darkube.app' + item.payment_invoice)
                                                }}
                                            >
                                                <p className='underline text-blue-500 cursor-pointer'>
                                                    {props.isLocationIran ? 'مشاهده فاكتور' : 'View receipt'}
                                                </p>
                                            </td>
                                            <td className='text-center'>
                                                <button className={`${myFontIran.className} px-5 sm:px-15 sm:py-2 py-3 text-white rounded-lg text-xs sm:text-sm
                               ${item.status === "pending" ? 'bg-main-orange' : item.status === "expired" ? 'bg-[#740000]' : item.status === "Paid" ? 'bg-[#159400]' : ''}
                               `}
                                                >
                                                    {item.status === 'pending' ? 'Success - Processing' : item.status}
                                                </button>
                                            </td>
                                            <td className='text-center'>
                                                <p className='text-white'>${item.price}</p>
                                            </td>
                                            <td className='text-center'>
                                                <p className='text-white'>{item.invoice_number}</p>
                                            </td>
                                            <td className='text-center'>
                                                <p className='text-white'>{item.name}</p>
                                            </td>
                                            <td className='text-center'>
                                                <p className='text-white'>{formatCreatedAtDate(item.created_at)}</p>
                                            </td>
                                            <td className='text-center'>
                                                <h2 className='text-main-orange text-2xl font-bold'>{index + 1}</h2>
                                            </td>

                                        </tr>
                                    ))}
                                </table>
                            ) : (
                                <div className='flex flex-col justify-center gap-4 items-center'>
                                    <Image src={empty} alt='empty' />
                                    <p className={`${myFontIran.className} ${props.isLocationIran ? 'rtl' : ''}`}>
                                        {isLocationInIran ? 'در حال حاظر هيچ حساب خريداري شده اي نداريد.' : 'You do not currently have any purchased accounts.'}
                                    </p>
                                </div>
                            )}
                        </div>

                    </div>
                </>
                :
                <ReactLoading type={'spinningBubbles'} className='mx-auto mt-12' color={'#F68D2E'} height={667} width={150} />

            }

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