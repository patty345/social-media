import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';

import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
      setIsSSR(false);
  }, []);

  if(isSSR) return null;


  return (
    <div>
      Navbar 
      <div className='flex gap-6 md:gap-20'>
        <div className='j-[92vh] overflow-hidden x1:hover:overflow-auto'>
          Sidebar 
        </div>
        <div className='mt-4 flex flex-col gap-10 overflow-auto h-[88vh] vidoes flex-1'>
          <Component {...pageProps} />
        </div>
      </div>
      
    </div>
  ) 
}

export default MyApp
