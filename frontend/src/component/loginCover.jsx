import React, { useEffect, useState } from 'react';
import LoginForm from '../pages/loginForm';

const LoginCover = () => {
  const [screenType, setScreenType] = useState("desktop");



  return (
    <div className="relative h-screen bg-amber-700 w-full overflow-hidden">
      <div className='bg-transparent absolute top-0 w-full h-90 ' ></div>
      <div className=" absolute md:-top-32  -top-1 lg:top-20 left-0 w-full h-screen"><LoginForm/> </div>
      <div className='bg-white absolute bottom-0 w-full md:h-8/12 lg:h-90 h-8/12   lg:[clip-path:polygon(0%_0%,50%_120px,100%_0%,100%_100%,0%_100%)]   md:[clip-path:polygon(0%_0%,50%_100px,100%_0%,100%_100%,0%_100%)]  [clip-path:polygon(0%_0%,50%_60px,100%_0%,100%_100%,0%_100%)]'></div>
    </div>

  );
};

export default LoginCover;
