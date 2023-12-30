import React, { useContext, useEffect, useState } from 'react';
// import { sendMessage } from '../../../../Utills/Api';
import close from '../../../../Assets/img/close.svg'
import { postTicketMessage } from '@/lib/apiConfig';
// import FileUploadPage from '../../../CommonComponents/fileUpload/FileUploadPage';

const SendMessageComponent = (props: {
    icon?: any
    messageBox: boolean
    isLocationIran: boolean
    userId: number | undefined
    ticketId: number
    onClick: () => void
}) => {
    const messageBox = props.messageBox
    const icon = props.icon
    // const { messageBoxCurrentContact, setIsMessageSent, isMessageSent, myTicketCurrentContact,
    //     userId, messageId, repliedMessage, setRepliedMessage } = useContext<mainContextType>(MainContext);
    const [selectedFile, setSelectedFile] = useState(null);
    const [message, setMessage] = useState('');
    const handleFileUpload = (file: any) => {
        setSelectedFile(file);
    };

    const send = () => {
        postTicketMessage(props.userId, props.ticketId, message, '').then((res) => {
            // setRepliedMessage('')
            // setIsMessageSent(!isMessageSent)
            props.onClick()
        })
        setMessage('')
    }



    return (
        <div className='SendMessageComponent w-full my-auto mx-auto'>
            {/* {repliedMessage &&
                <div className='text-right text-xs mb-1 py-2 px-2 borderRadius-default flex justify-content-between'
                    style={{ direction: 'rtl', backgroundColor: '#F6F1F1', }}>
                    <div> پاسخ به : {repliedMessage} </div>
                    <img style={{ cursor: 'pointer' }} className='w-1rem' src={close}
                        onClick={() => { setRepliedMessage('') }}
                    />
                </div>
            } */}
            <textarea rows={5} cols={50} className={`w-full border border-solid border-slate-300 rounded-md p-text-sm ${props.isLocationIran && 'rtl'} p-4 placeholder:text-sm text-sm bg-slate-100`} dir='auto' value={message}
                placeholder={`${props.isLocationIran ? 'پاسخ خود را وارد كنيد' : 'Enter your answer'}`}
                onChange={(e) => { setMessage(e.target.value) }}>

            </textarea>
            <div>
                <div className=' text-right'>
                    <button className='text-white text-xs borderRadius-default bg-main-orange rounded-sm' onClick={() => { send() }}
                        style={{ border: 'none', padding: '8px 35px' }}>
                        {props.isLocationIran ? 'ارسال' : 'Send'}
                    </button>
                </div>
                {/* {!messageBox &&
                    <button className='text-white text-xs borderRadius-default ml-2'
                        style={{ border: 'none', backgroundColor: '#AAAAAA', padding: '8px 25px' }}> ارسال فایل
                        <img className='ml-2' style={{ transform: 'translateY(1px)' }} src={icon} />
                    </button>
                    <FileUploadPage
                        setFile={handleFileUpload}
                        file={selectedFile}
                    />

                } */}
            </div>
        </div>
    );
};

export default SendMessageComponent;