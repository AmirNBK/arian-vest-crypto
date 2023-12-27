import React, { useContext, useEffect } from 'react';
// import link from '../../../Assets/img/link.svg'
import MessageComponent from '../MessageComponent/MessageComponent';
import SendMessageComponent from '../SendMessageComponent/SendMessageComponent';

interface Message {
    file: string;
    message_id: number;
    author: number;
    content: string;
    date: string;
}

const ChatScreen = (props: {
    messageBox?: boolean, messages: Message[] | undefined; isLocationIran: boolean
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
                            <MessageComponent file={item.file} id={item?.message_id} type={item?.author == 1 ? 'support' : 'user'} message={item?.content} date={item?.date} />
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