import React, { ChangeEvent } from 'react';

interface PaymentComponentProps {
    placeholder: string;
    selectInput: boolean;
    selectOptions?: { name: string; code: string }[];
    halfWidth?: boolean;
    isLocationIran: boolean;
    onChange: (fieldName: string, value: string) => void;
    name: string;
    type: string
}

const PaymentComponent: React.FC<PaymentComponentProps> = ({
    placeholder,
    selectInput,
    selectOptions,
    halfWidth,
    isLocationIran,
    onChange,
    name,
    type
}) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        onChange(name, event.target.value);
    };

    return (
        <div>
            {!selectInput ? (
                <input
                    required
                    type={type}
                    placeholder={placeholder}
                    className={`${isLocationIran && 'rtl'} p-3 w-full text-white bg-transparent rounded-md`}
                    style={{ border: '1px solid #6B7280' }}
                    onChange={handleChange}
                />
            ) : (
                <select
                    required
                    placeholder={placeholder}
                    className={`${halfWidth ? 'w-1/2' : 'w-full'} text-[#EEEE] ${isLocationIran && 'rtl'} p-3 bg-transparent rounded-md`}
                    style={{ border: '1px solid #6B7280' }}
                    onChange={handleChange}
                >
                    {selectOptions?.map((item, index) => (
                        <option key={index} value={item.name}>
                            {item.name}
                        </option>
                    ))}
                </select>
            )}

            <style>
                {`
                select {
                    color: #9e9e9e;
                  }
                  option:not(:first-of-type) {
                    color: black;
                  }
                `}
            </style>
        </div>
    );
};

export default PaymentComponent;
