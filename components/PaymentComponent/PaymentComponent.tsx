import React, { ChangeEvent } from 'react';

interface PaymentComponentProps {
    placeholder: string;
    selectInput: boolean;
    selectOptions?: { name: string; code: string }[];
    halfWidth?: boolean;
    isLocationIran: boolean;
    onChange: (fieldName: string, value: string) => void;
}

const PaymentComponent: React.FC<PaymentComponentProps> = ({
    placeholder,
    selectInput,
    selectOptions,
    halfWidth,
    isLocationIran,
    onChange,
}) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        onChange(placeholder, event.target.value);
    };

    return (
        <div>
            {!selectInput ? (
                <input
                    placeholder={placeholder}
                    className={`${isLocationIran && 'rtl'} p-3 w-full text-white bg-transparent rounded-md`}
                    style={{ border: '1px solid #6B7280' }}
                    onChange={handleChange}
                />
            ) : (
                <select
                    placeholder={placeholder}
                    className={`${halfWidth ? 'w-1/2' : 'w-full'} text-white ${isLocationIran && 'rtl'} p-3 bg-transparent rounded-md`}
                    style={{ border: '1px solid #6B7280' }}
                    onChange={handleChange}
                >
                    {selectOptions?.map((item, index) => (
                        <option key={index} value={item.code}>
                            {item.name}
                        </option>
                    ))}
                </select>
            )}
        </div>
    );
};

export default PaymentComponent;
