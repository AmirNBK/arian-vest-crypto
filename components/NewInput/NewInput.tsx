import React, { ChangeEvent } from 'react';
import localFont from 'next/font/local'
const myFont = localFont({ src: '../../assets/fonts/Mj Dinar Two Medium.ttf' });
const myFontIran = localFont({ src: '../../assets/fonts/iranyekanwebregular_0.ttf' });

const NewInput = (props: {
  placeholder?: string
  selectablePlaceholder?: string
  isTextArea?: boolean
  selectable?: boolean
  value?: any
  onChange?: (value: string) => void;
  types?: [] | string[]
  isLocationIran: boolean
}) => {
  const isLocationInIran = props.isLocationIran

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (props.onChange) {
      props.onChange(event.target.value);
    }
  };

  return (
    <div className={`${isLocationInIran && myFont.className} NewInput`}>
      <div className="input-box active-grey">
        <label className={`${isLocationInIran && myFont.className} input-label`}>
          {props.placeholder}
        </label>
        <input type="text" className={`input-1 ${isLocationInIran && 'rtl'} ${props.isTextArea ? 'h-[150px]' : 'h-[50px]'}`}
          onChange={handleChange}
          value={props.value}
        />
        {props.selectable && <select
          onChange={handleChange}
          className={`${isLocationInIran ? 'rtl left-[55%]' : 'left-[45%]'} absolute top-1/2 px-6 outline-none -translate-x-1/2 -translate-y-1/2 w-full bg-transparent`}
          style={{ color: 'white' }}
        >
          <option disabled selected> {props.selectablePlaceholder} </option>
          {props.types?.map((item, index) => (
            <option key={index} className='text-black'>{item}</option>
          ))}
        </select>
        }
      </div>


      <style>
        {
          `
                    @import url("https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,700");

input {
  background: transparent;
}

#form {
  width: 40vw;
  margin: 0 auto;
  margin-top: 50px;
}

.input-box.active-grey .input-1 {
  border: 1px solid #dadce0;
}
.input-box.active-grey .input-label {
  color: #F68D2E;
  top: -8px;
  background: #1D1D1D;
  font-size: 11px;
  transition: 250ms;
}
.input-box.active-grey .input-label svg {
  position: relative;
  width: 11px;
  height: 11px;
  top: 2px;
  transition: 250ms;
}

.input-box {
  position: relative;
  margin: 10px 0;
}
.input-box .input-label {
  position: absolute;
  color: #80868b;
  font-size: 16px;
  font-weight: 400;
  max-width: calc(100% - (2 * 8px));
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${isLocationInIran ? 'right: 8px;' : 'left: 8px;'}
  top: 13px;
  padding: 0 8px;
  transition: 250ms;
  user-select: none;
  pointer-events: none;
}
.input-box .input-label svg {
  position: relative;
  width: 15px;
  height: 15px;
  top: 2px;
  transition: 250ms;
}
.input-box .input-1 {
  box-sizing: border-box;
  width: 100%;
  border-radius: 8px;
  color: #fff;
  border: 1px solid #dadce0;
  padding: 13px 15px;
  transition: 250ms;
}
.input-box .input-1:focus {
  outline: none;
  border: 2px solid #F68D2E;
  transition: 250ms;
}

.input-box.error .input-label {
  color: #f44336;
  top: -8px;
  background: #fff;
  font-size: 11px;
  transition: 250ms;
}
.input-box.error .input-1 {
  border: 2px solid #f44336;
}

.input-box.focus .input-label,
.input-box.active .input-label {
  color: #1a73e8;
  top: -8px;
  background: #fff;
  font-size: 11px;
  transition: 250ms;
}
.input-box.focus .input-label svg,
.input-box.active .input-label svg {
  position: relative;
  width: 11px;
  height: 11px;
  top: 2px;
  transition: 250ms;
}

.input-box.active .input-1 {
  border: 2px solid #1a73e8;
}

.btn {
  background: #fff;
  color: #333;
  cursor: pointer;
  border: none;
  white-space: normal;
  letter-spacing: 0.25px;
  font-weight: 400;
  font-size: 14px;
  padding: 8px 16px;
  border-radius: 4px;
  line-height: 20px;
  min-width: 88px;
  transition: 250ms;
}
.btn:hover {
  background: #ddd;
  transition: 250ms;
}
.btn:focus {
  outline: none;
}

.btn-primary {
  background: #1a73e8;
  color: #fff;
  transition: 250ms;
}
.btn-primary:hover {
  background: #287ae6;
  box-shadow: 0 1px 1px 0 rgba(66, 133, 244, 0.45), 0 1px 3px 1px rgba(66, 133, 244, 0.3);
  transition: 250ms;
}

.pull-right {
  float: right;
}

.clear {
  clear: both;
}
                    `
        }
      </style>
    </div>
  );
};

export default NewInput;