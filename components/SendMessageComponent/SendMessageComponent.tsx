import React, { useContext, useEffect, useState } from 'react';
// import { sendMessage } from '../../../../Utills/Api';
import close from '../../../../Assets/img/close.svg'
// import FileUploadPage from '../../../CommonComponents/fileUpload/FileUploadPage';

const SendMessageComponent = (props: {
    icon?: any
    messageBox: boolean
    isLocationIran: boolean
}) => {
    const messageBox = props.messageBox
    const icon = props.icon
    // const { messageBoxCurrentContact, setIsMessageSent, isMessageSent, myTicketCurrentContact,
    //     userId, messageId, repliedMessage, setRepliedMessage } = useContext<mainContextType>(MainContext);
    const [selectedFile, setSelectedFile] = useState(null);
    const [message, setMessage] = useState('')
    const handleFileUpload = (file: any) => {
        setSelectedFile(file);
    };



    const send = () => {
        // sendMessage(userId, messageBox ? messageBoxCurrentContact : myTicketCurrentContact, myTicketCurrentContact, message, messageId, selectedFile).then((res) => {
        //     setRepliedMessage('')
        //     setIsMessageSent(!isMessageSent)
        // })
        // setMessage('')
    }



    return (
        <div className='SendMessageComponent w-full my-auto mx-auto'>
            <div className='text-right text-xs mb-1'> پاسخ درخواست شما </div>
            {/* {repliedMessage &&
                <div className='text-right text-xs mb-1 py-2 px-2 borderRadius-default flex justify-content-between'
                    style={{ direction: 'rtl', backgroundColor: '#F6F1F1', }}>
                    <div> پاسخ به : {repliedMessage} </div>
                    <img style={{ cursor: 'pointer' }} className='w-1rem' src={close}
                        onClick={() => { setRepliedMessage('') }}
                    />
                </div>
            } */}
            <textarea rows={5} cols={50} className='w-full p-text-sm rtl' dir='auto' value={message}
                placeholder={`${props.isLocationIran ? 'پاسخ خود را وارد كنيد' : 'Enter your answer'}`}
                onChange={(e) => { setMessage(e.target.value) }}>

            </textarea>
            <div>
                <div>
                    <button className='text-white text-xs borderRadius-default' onClick={() => { send() }}
                        style={{ border: 'none', backgroundColor: '#222222', padding: '8px 25px' }}> ارسال </button>
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