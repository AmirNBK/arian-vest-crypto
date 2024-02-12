import React, { useState, useEffect } from 'react';
import logo from '../../assets/icons/baseLogo.png'
import JsPDF from 'jspdf';
import ReactLoading from 'react-loading';
import Image, { StaticImageData } from 'next/image';
import { purchaseAccount } from '@/lib/apiConfig';
import exportIcon from '../../assets/icons/export.svg'
import successful from '../../assets/images/succesfull-payment.png'
import html2canvas from 'html2canvas';
import PaymentResult from '../PaymentResult/PaymentResult';
import useLocationData from '@/Hooks/location';

interface TransactionType {
  actually_paid: number;
  burning_percent: null | string;
  created_at: string;
  invoice_id: number;
  order_description: null | any;
  order_id: string;
  outcome_amount: number;
  outcome_currency: string;
  pay_address: string;
  pay_amount: number;
  pay_currency: string;
  payin_extra_id: null | any;
  payin_hash: null | any;
  payment_id: number;
  payment_status: string;
  payout_hash: null | any;
  price_amount: number;
  price_currency: string;
  purchase_id: number;
  type: string;
  updated_at: string;
}

interface ProfileType {
  address: string;
  created_at: string;
  documents: null | any;
  email: string;
  first_name: string;
  fullname: string;
  image: null | any;
  last_name: string;
  phone_number: string;
  pk: number;
}

const Receipt = (props: {
  firstName: string | undefined
  lastName: string | undefined
  user: string | undefined
  price: number
  ref: React.Ref<HTMLDivElement>
  address: string | undefined
  confirmationNum: string | undefined | number
  date: string
  currency: string | undefined
  email: string | undefined
  platform: string | null | undefined
  broker: string | null | undefined
  country: string | undefined
  city: string | undefined
  phone: string | undefined
  paymentInfo: TransactionType
  profileInfo: ProfileType | undefined
}) => {
  const paymentInfo = props.paymentInfo
  const profileInfo = props.profileInfo
  interface BreakDownEntry {
    text: string;
    main: string;
    icon: string;
  }

  interface BreakDownEntryProps {
    details: {
      text: string;
      main: string;
      icon: string;
    };
  }

  interface OverviewHeaderProps {
    logo: string | undefined | StaticImageData | any;
  }

  interface PurchaseOverviewProps {
    product: string;
  }

  interface OverviewBodyProps {
    name: string;
    value: string;
    merchant: string;
    merchantEmail: string;
  }

  const [receipt, setReceipt] = useState<File | undefined>()
  const [pdfGenerated, setPdfGenerated] = useState(false);
  const [loadingData, setLoadingData] = useState(true);
  const { locationData, error, loading } = useLocationData();
  const isLocationInIran = locationData === 'Iran (Islamic Republic of)' || !locationData;

  const challengeType = localStorage.getItem('challenge');
  const challengeName = localStorage.getItem('challenge amount');

  useEffect(() => {
    const fetchData = async () => {
      try {
        await generatePDF();

        if (paymentInfo && profileInfo && receipt && challengeName && challengeType) {
          try {
            const res = await purchaseAccount(challengeType + ' ' + challengeName, profileInfo.pk, challengeType, paymentInfo.price_amount, receipt);
            setLoadingData(false);
          } catch (error) {
            console.error('Error making purchase:', error);
            setLoadingData(false);
          }
        }
      } catch (error) {
        console.error('Error generating PDF:', error);
      }
    };

    fetchData();
  }, [paymentInfo, profileInfo, challengeType, pdfGenerated, challengeName]);

  const generatePDF = async () => {
    const element = document.querySelector('#overview');
    if (element) {
      try {
        setTimeout(async () => {
          const canvas = await html2canvas(element as HTMLElement);
          const imageDataURL = canvas.toDataURL('image/png');

          const blobData = await (await fetch(imageDataURL)).blob();
          const imageFile = new File([blobData], 'report.png', { type: 'image/png' });

          console.log(imageDataURL);

          setReceipt(imageFile);
          setPdfGenerated(true);
        }, 2000);

      } catch (error) {
        console.error('Error generating PDF:', error);
        throw error;
      }
    }
  };

  const PdfExport = async () => {
    const report = new JsPDF('portrait', 'pt', 'a3');
    const element = document.querySelector('#overview');

    if (element) {
      try {
        await report.html(element as HTMLElement);
        const pdfBlob = report.output('blob');
        const pdfUrl = URL.createObjectURL(pdfBlob);
        window.open(pdfUrl, '_blank');
      } catch (error) {
        console.error('Error generating PDF:', error);
        throw error; // Propagate the error for better error handling
      }
    }
  };


  const BreakDownContent = [
    {
      text: 'Plan type:',
      main: `${challengeType}`,
      icon: 'fa fa-money',
    },
    {
      text: 'Amount:',
      main: `$${props.price}`,
      icon: 'fa fa-money',
    },
    {
      text: 'Country:',
      main: `${props.country}`,
      icon: 'fa fa-list-alt',
    },
    {
      text: 'City:',
      main: `${props.city}`,
      icon: 'fa fa-map-marker',
    },
    {
      text: 'Issuer:',
      main: 'Vira Funding',
      icon: 'fa fa-star-o',
    },
    {
      text: 'Purchase id:',
      main: `${props.confirmationNum}`,
      icon: 'fa fa-list-alt',
    },
  ];


  const BreakDownEntry: React.FC<BreakDownEntryProps> = ({ details }) => (
    <li>
      <span className={details.icon}></span>
      <div className="list-content">
        <p>
          {details.text}
          <span className="list-bold">{details.main}</span>
        </p>
      </div>
    </li>
  );

  const OverviewHeader: React.FC<OverviewHeaderProps> = ({ logo }) => (
    <div className="overview-header flex flex-col items-center">
      <Image className="logo" src={logo} unoptimized alt="Logo" />
      <div className="timestamp">
        <div> {props.date} </div>
      </div>

      <hr />
    </div>
  );

  const PurchaseOverview: React.FC<PurchaseOverviewProps> = ({ product }) => (
    <div className="purchase-overview text-center">
      <h3>{product}</h3>
    </div>
  );

  const OverviewBody: React.FC<OverviewBodyProps> = ({ name, value, merchant, merchantEmail }) => (
    <div className="overview-body">
      <PurchaseOverview product="Receipt for your purchase payment at Vira Funding" />
      <p className="user-info-name my-4">Hello {props.firstName} {props.lastName} </p>
      <span>
        You sent a payment of <span>${props.price}</span> to Vira Funding.
      </span>
      <hr />
      <div className='my-4'>
        a confirmation email will be sent to your email for this purchase
      </div>
      <hr />
      <p className='mt-4 text-base'>
        You have bought our <span className=' font-bold'>{challengeType} </span> challenge with {props.currency} currency
      </p>
      <hr />
      <div className='mt-4 flex flex-row justify-between'>
        <p>
          Platform : {props.platform}
        </p>
        <p>
          Broker : {props.broker}
        </p>
      </div>
      <div className='mt-4'>
        <p> Address : {props.address} </p>
      </div>
      <div className='mt-4'>
        <p> Phone : {props.phone} </p>
      </div>
      <p className='text-center font-bold text-xl mt-20'>Thank you for choosing Vira Funding.</p>
    </div>
  );

  const OverviewFooter = () => (
    <footer className="overview-footer">
      <span className="site">
        <a href="https://virafunding.com/" className='text-[#3ba4ff]' target="_blank" rel="noopener noreferrer">
          https://virafunding.com/
        </a>
      </span>
      <span className="invoice-id"> {props.email} </span>
    </footer>
  );

  const Overview = () => (
    <div className="receipt-overview">
      <OverviewHeader logo={logo} />
      <OverviewBody
        merchant={'Allied Steel Buildings'}
        merchantEmail={'info@alliedbuildings.com'}
        name={'John'}
        value={'$20,000.00 USD'}
      />
      <OverviewFooter />
    </div>
  );

  const [breakdown, setBreakdown] = useState<BreakDownEntry[]>([]);

  useEffect(() => {
    setBreakdown(BreakDownContent);
  }, []);

  return (
    <>
      {
        <div className='Receipt'
        >
          {!loadingData ?
            <PaymentResult title={isLocationInIran ? 'پرداخت موفقیت آمیز بود' : 'Payment was successful'} image={successful} />
            :
            <ReactLoading type={'spinningBubbles'} className='mx-auto mt-12' color={'#F68D2E'} height={667} width={150} />

          }
          <div className="receipt"
            id='overview'
          >
            <div className="receipt-breakdown">
              <div className="receipt-breakdown--header">
                <p>Receipt for</p>
                <h2>
                  {props.user}
                </h2>
              </div>
              <ul className="receipt-breakdown--list">
                {breakdown.map((entry, index) => (
                  <BreakDownEntry key={index} details={entry} />
                ))}
              </ul>
            </div>
            <Overview />
          </div>

          <div className=' bg-main-orange w-fit p-2 rounded-md cursor-pointer mx-auto mb-6'>
            <Image src={exportIcon} alt='export' className='w-8' onClick={PdfExport} />
          </div>


          <style>
            {`
          
                    $grey : black;
                    
                    @mixin reset-list() {
                      text-indent: 0;
                      list-style: none;
                      padding: 0;
                      margin: 0;
                      &:before {
                        display: none;
                        content: "";
                      }
                    }
                  
                    
                    .view-design {
                      position:absolute;
                      top:30px;
                      left: 30px;
                    }
                    
                    .container {
                       height: 1060px;
                       overflow: hidden;
                       position:relative;
                    }
                    
                    .circle {
                      display: none;
                      
                      @media(min-width:768px){
                        height: 1600px;
                        width: 1100px;
                        background: linear-gradient(180deg,#3ba4ff,#66a5ff);
                        position: absolute;
                        top: -400px;
                        right: -300px;
                        z-index: -1;
                        border-radius: 50%;
                        display:block;
                      }
                    }
                    
                    .receipt {
                      display: flex;
                      flex-wrap: wrap;
                      margin: 60px auto;
                      margin-bottom : 30px;
                      justify-content : center;
                      box-shadow: 0px 0px 50px 10px rgba(0,0,0,.1);
                      vertical-align:top;
                      border-radius : 6px;
                      border : 1px solid grey;
                      width : fit-content;

                      @media(max-width:768px){
                      width : auto;
                      }
                    }
                    
                    .receipt-breakdown {
                      background: #F68D2E;
                      color:#fff;
                      width: 220px;
                      display:inline-block;
                      position:relative;
                      float:left;
                      padding: 40px 30px;
                      border-radius: 5px 0 0 5px;
                      @media(max-width:768px){
                        width : 100%;
                        }

                      .receipt-breakdown--list {
                        @include reset-list;
                        
                        li {
                          padding: 25px 0;
                          border-bottom:1px solid rgba(255,255,255,.4);
                          
                          &:last-of-type {
                            border-bottom: none;
                          }
                        }
                        
                        .fa {
                          display: inline-block;
                          width:15%;
                          float:left;
                        }
                        
                        .list-content {
                          width: 75%;
                          display:inline-block;
                        }
                        
                        p {
                          font-weight:300;
                          font-size: 13px;
                          margin: 0;
                          .list-bold {
                            font-weight:600;
                            display:block;
                            font-size: 15px;
                            padding-top:5px;
                          }
                        }
                      }
                    }
                    
                    .receipt-breakdown--header {
                      border-bottom:1px solid rgba(255,255,255,.4);  
                      padding: 10px 0;
                      
                      h2 {
                        margin: 0;
                        font-size: 22px;
                        padding-bottom: 15px;
                      }
                      
                      p {
                        padding: 0 0 7px 0;
                        margin: 0;
                      }
                    }
                    
                    .receipt-overview {
                      width: 490px;
                      display: inline-block;
                      border-radius: 0 5px 5px 0;
                      padding: 0 30px;
                      background-color: #fff;
                        
                      hr {
                        margin-top: 15px;
                        border-top: 1px solid lighten($grey, 30%) !important;
                        box-shadow: none;
                      }
                      
                      .user-info {
                        padding-top: 15px;
                      }
                    }
                    
                    .overview-header {
                      padding: 38px 0 20px 0;
                    }
                    
                    .logo {
                      display: inline-block;
                      width:70px;
                      float: right;
                    }
                    
                    .timestamp {
                      display: inline-block;
                      float:left;
                      padding-top:15px;
                    
                      span {
                        color: lighten($grey, 25%);
                        font-size: 15px;
                        font-family:inherit;
                        font-weight: 600;
                        
                        &:first-of-type {
                          padding: 15px;
                        }
                      }
                    }
                    
                    .descriptor {
                      width: 60%;
                      padding-top:8px;
                      
                      p {
                        font-size: 13px;
                        color: black;
                        line-height: 1.5;
                      }
                    }
                    
                    .overview-body {
                        color: black;
                        
                        span {
                          color: #000;
                        }
                    }
                    
                    .salutation {
                      text-align: center;
                      font-style: italic;
                      font-size: 130%;
                    }
                    .salutation img {
                      height:55px;
                      padding-top: 8px;
                    }
                    .user-info-name {
                      font-weight:600;
                      font-size: 18px;
                    }
                    
                    .user-info-text {
                      line-height:1.5;
                      font-weight: 500;
                      
                      a {
                        color: #3ba4ff;
                        text-decoration: none;
                      }
                    }
                    
                    
                    .purchase-overview {
                      color: darken($grey, 12%);
                    }
                    
                    .overview-footer {
                      padding: 20px 0 15px;
                      margin-top: 30px;
                      border-top: 1px solid lighten($grey, 30%) !important;
                      
                      a {
                        font-size: 13px;
                        font-weight: 600;
                      }
                      
                      .invoice-id {
                        float:right;
                        font-size: 13px;
                        color: black;
                        font-weight: 600;
                      }
                    }
                    `}
          </style>
        </div>
      }
    </>
  );
};

export default Receipt;