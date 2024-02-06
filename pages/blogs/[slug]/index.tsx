import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '@/components/Header/Header'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
const inter = Inter({ subsets: ['latin'] })
import localFont from 'next/font/local'
import newspaper from '../../../assets/icons/newspaper.svg'
import Footer from '@/components/Footer/Footer'
const myFont = localFont({ src: '../../../assets/fonts/Mj Dinar Two Medium.ttf' })
import ReactLoading from 'react-loading';
const myFontIran = localFont({ src: '../../../assets/fonts/iranyekanwebregular_0.ttf' })
import DOMPurify from 'isomorphic-dompurify';
import { useRouter } from 'next/router'
import { gql, useQuery } from '@apollo/client';
import useLocationData from '@/Hooks/location';


const GET_FOOTER = gql`
query Footer {
    pages {
      nodes {
        footer {
          phone
          email
          address
        }
      }
    }
  } 
`;

const GET_CONTENT = gql`
query blogs {
    pages {
      nodes {
        blog {
          blogs {
            title
            image {
              mediaItemUrl
            }
            content
          }
        }
      }
    }
  }
`;


export default function SingleBlog() {
  const { data: footerData } = useQuery(GET_FOOTER);
  const { data: blogData, loading: blogLoading } = useQuery(GET_CONTENT);
  const router = useRouter()
  const { locationData, error, loading } = useLocationData();
  const isLocationInIran = locationData === 'Iran (Islamic Republic of)' || !locationData;
  const id = Number(router.query.slug);
  const data = blogData?.pages?.nodes[2]?.blog?.blogs[id];

  const sanitizedHTML = DOMPurify.sanitize(data?.content);

  return (
   <div className='w-full flex justify-center'>
     <main
      className={`flex min-h-screen flex-col max-w-[1700px] min-w-full 2xl:min-w-0 ${inter.className}`}
    >
      {loading ? ''
        :
        <PrimeReactProvider>
          <Header isLocationInIran={isLocationInIran} />
          {blogLoading ? <ReactLoading type={'spinningBubbles'} className='mx-auto mt-12' color={'#F68D2E'} height={667} width={150} />
            :
            <>
              <div className='flex flex-col sm:flex-row-reverse gap-6 justify-center items-center mt-16'>
                <Image src={newspaper} alt='newspaper' unoptimized />
                <p className={`${myFont.className} text-white text-3xl text-center sm:text-4xl`}>
                  {data?.title}
                </p>
              </div>
              <div>
                <Image src={data?.image?.mediaItemUrl} width={1200} height={100} alt='blogimage' className='mx-auto mt-12 w-[1200px] h-[550px] object-cover' unoptimized />
              </div>

              <div className='text-white my-16' dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
            </>
          }

          {/* <Footer data={footerData?.pages?.nodes[2].footer} isLocationInIran={locationData === 'Iran (Islamic Republic of)' || !locationData} /> */}

        </PrimeReactProvider>
      }
    </main >
   </div>
  )
}
