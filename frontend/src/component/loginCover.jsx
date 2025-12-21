import React from 'react';
import { useEffect, useState } from 'react';
import LoginForm from '../pages/loginForm';
const loginCover = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkScreen = () => {
            if (typeof window !== "undefined") {
                setIsMobile(window.innerWidth < 768);
            }
        };

        checkScreen(); // now valid
        window.addEventListener("resize", checkScreen);

        return () => window.removeEventListener("resize", checkScreen);
    }, []);
    return (
        <div
            className="relative bg-cover bg-center bg-no-repeat bg-amber-600 h-screen w-full"
            style={{ backgroundImage: "url('/images/bg.jpg')" }}
        >
            {/* Bottom clipped section */}
            <LoginForm />  
            <div
                className="absolute bottom-0 bg-white  w-full "
                style={{
                    height: isMobile ? "300px" : "432px",
                    clipPath: isMobile
                        ? "none"
                        : "polygon(0 0, 50% 150px, 100% 0, 100% 100%, 0 100%)",
                }}
            >
            </div>
        </div>

    )
}
export default loginCover;