import React, { useContext, useEffect } from 'react';
import MessageComponent from '../MessageComponent/MessageComponent';
import SendMessageComponent from '../SendMessageComponent/SendMessageComponent';
import Image from 'next/image';
import cancel from '../../assets/icons/cancel2.svg'
import profile from '../../assets/icons/profileChat.svg'

interface Message {
    file: string;
    message_id: number;
    author: number;
    content: string;
    created_at: string;
}

const ChatScreen = (props: {
    messageBox?: boolean, messages: Message[] | undefined; isLocationIran: boolean; onClick: () => void
}) => {
    const messageBox = props.messageBox
    const messages = props.messages

    return (
        <div className='ChatScreen' style={{ fontFamily: 'IranSans' }}>
            <div className='overflow-auto max-h-30rem'>
                {
                    messages &&
                    messages.slice(0).reverse().map((item) => {
                        return (
                            <div className='relative'>
                                <Image src={cancel} alt='cancel' className='w-6 absolute right-0 top-0 cursor-pointer'
                                    onClick={props.onClick}
                                />
                                <div className='flex flex-row items-center'>
                                    <Image src={profile} alt='profile' className='w-8' />
                                    <MessageComponent isLocationIran={props.isLocationIran} file={item.file} id={item?.message_id} type={item?.author == 1 ? 'support' : 'user'} message={item?.content} date={item?.created_at} />
                                </div>
                            </div>
                        )
                    })
                }

            </div>

            <div className='my-2'>
                <SendMessageComponent messageBox={true} icon={''} isLocationIran={props.isLocationIran} />
            </div>
        </div>
    );
};

export default ChatScreen;