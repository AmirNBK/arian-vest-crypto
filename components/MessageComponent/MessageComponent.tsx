import React, { useContext } from 'react'

const MessageComponent = (props: {
    message: string
    date: string
    type: string
    id: number
    isLocationIran: boolean
    file?: any
}) => {
    const { message, date, type, id, file } = props

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

        // Extract date components
        const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
        const day = dateObject.getDate().toString().padStart(2, '0');
        const year = dateObject.getFullYear();

        // Extract time components
        const hours = dateObject.getHours().toString().padStart(2, '0');
        const minutes = dateObject.getMinutes().toString().padStart(2, '0');
        const seconds = dateObject.getSeconds().toString().padStart(2, '0');

        // Construct the formatted date-time string
        const formattedDateTime = `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;

        return formattedDateTime;
    };
    const parser = new DOMParser();
    const doc = parser.parseFromString(message, "text/html");

    const textContent = doc.body.textContent;
    return (
        <div className={`MessageComponent w-1/2 ${type === 'user' ? 'ml-auto mr-2' : 'ml-2'}`}>
            <div
                className='MessageComponent__message rounded-md text-left text-base flex justify-content-end borderRadius-default p-2 line-height-4 bg-main-orange text-white'
            >
                {textContent}
            </div>
            <div className='MessageComponent__options flex column-gap-2 mt-2' style={{ fontSize: '10px', color: '#AAAAAA' }}>
                <div className='MessageComponent__options__date flex column-gap-1'>
                    <div> {props.isLocationIran ? 'ارسال در تاریخ' : 'Sent in'} : {formatCreatedAtDateTime(date)} </div>
                </div>
            </div>
        </div>
    )
}

export default MessageComponent