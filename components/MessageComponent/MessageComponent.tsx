import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import profile from '../../assets/icons/profileChat.svg'
import { getProfileInfo } from '@/lib/apiConfig'


const MessageComponent = (props: {
    message: string
    date: string
    type: string
    id: number
    isLocationIran: boolean
    file?: any
}) => {
    const { message, date, type, id, file } = props
    const [profilePic, setProfilePic] = useState<File | null | string>(null);


    useEffect(() => {
        getProfileInfo().then((res) => {
            setProfilePic(res.data.image)
        })
    }, [])

    const downloadFile = () => {
        const fileContent = file[0]
        const fileName = 'file.svg'
        const blob = new Blob([fileContent], { type: 'application/octet-stream' })
        const url = URL.createObjectURL(blob)

        const link = document.createElement('a')
        link.href = url
        link.download = fileName
        link.click()
        URL.revokeObjectURL(url)
    }

    const formatCreatedAtDateTime = (createdAt: string): string => {
        const dateObject = new Date(createdAt);
        const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
        const day = dateObject.getDate().toString().padStart(2, '0');
        const year = dateObject.getFullYear();
        const hours = dateObject.getHours().toString().padStart(2, '0');
        const minutes = dateObject.getMinutes().toString().padStart(2, '0');
        const seconds = dateObject.getSeconds().toString().padStart(2, '0');
        const formattedDateTime = `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;

        return formattedDateTime;
    };
    const parser = new DOMParser();
    const doc = parser.parseFromString(message, "text/html");

    const textContent = doc.body.textContent;
    return (
        <div className={`MessageComponent sm:w-4/12 w-full flex items-center sm:gap-4 gap-2 my-2 ${type === 'user' ? 'ml-auto mr-2 flex-row-reverse' : 'sm:ml-2 flex-row'}`}>
            {type === 'user' ?
                <Image src={profilePic ? ('https://virafundingbackend.darkube.app/media-files/' + profilePic) : profile} alt='profile' unoptimized style={{ zIndex: '20' }} width={170} height={170} className='rounded-full relative sm:w-8 sm:h-8 w-6 h-6 object-cover' />
                :
                <Image src={profile} alt='profile' className='w-8' />
            }
            <div className='flex flex-col w-full'>
                <div
                    className='MessageComponent__message rounded-md text-left text-base flex justify-content-end borderRadius-default p-2 line-height-4 bg-main-orange text-white'
                >
                    {textContent}
                </div>
                <div className='MessageComponent__options flex column-gap-2 mt-1' style={{ fontSize: '10px', color: '#AAAAAA' }}>
                    <div className='MessageComponent__options__date flex column-gap-1'>
                        <div> {props.isLocationIran ? 'ارسال در تاریخ' : 'Sent in'} : {formatCreatedAtDateTime(date)} </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MessageComponent