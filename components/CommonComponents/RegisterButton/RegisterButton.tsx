import React from 'react';

const RegisterButton = (props: {
    text: string
}) => {
    return (
        <button className='w-full text-white rounded-2xl h-16 text-3xl' style={{background : '#0A8100'}}>
            {props.text}
        </button>
    );
};

export default RegisterButton;