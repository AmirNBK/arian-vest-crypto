import React, { useContext } from 'react'
import calender from '../../../../Assets/img/calender.svg'
// import reply from '../../../../Assets/img/reply.svg'
// import download from '../../../../Assets/img/download.svg'

const MessageComponent = (props: {
    message: string
    date: string
    type: string
    id: number
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

    const parser = new DOMParser();

    const doc = parser.parseFromString(message, "text/html");

    const textContent = doc.body.textContent;
    return (
        <div className={`MessageComponent w-1/2 mt-2 mb-5 ${type === 'user' ? 'ml-auto mr-2' : 'ml-2'}`}>
            <div
                className='MessageComponent__message rounded-md text-left text-lg flex justify-content-end borderRadius-default p-2 line-height-4'
                style={{ backgroundColor: '#E5E5E5' }}
            >
                {textContent}
            </div>
            <div className='MessageComponent__options flex column-gap-2 mt-2' style={{ fontSize: '10px', color: '#AAAAAA' }}>
                <div className='MessageComponent__options__reply flex column-gap-1' style={{ cursor: 'pointer' }}>
                    {/* <div> پاسخ دادن </div> */}
                    {/* <img src={reply} /> */}
                </div>
                {/* <div className='MessageComponent__options__date flex column-gap-1'>
                    <div> ارسال در تاریخ : {persianDate} </div>
                    <img src={calender} />
                </div> */}
                {file && (
                    <div style={{ cursor: 'pointer' }} onClick={downloadFile}>
                        دانلود فایل
                        {/* <img src={download} className='ml-1' /> */}
                    </div>
                )}
            </div>
        </div>
    )
}

export default MessageComponent