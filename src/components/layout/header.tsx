import Logo from "@/components/layout/logo";
import NavigationBar from "@/components/layout/navbar";
// import { useRef } from "react";




const Header = () => {

    //header sticky when scroll down

    // const headerRef = useRef<HTMLElement | null>(null); // Add type annotation to useRef

    // const scrollFunction = () => {
    //     if (headerRef.current !== null) {
    //         if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    //             headerRef.current.classList.add("sticky" as never); // Add type assertion
    //         } else {
    //             headerRef.current.classList.remove("sticky" as never); // Add type assertion
    //         }
    //     }
    // }

    // window.onscroll = function () {
    //     scrollFunction();
    // };

    return (
        <header id="header" className="container flex h-16 max-w-screen-2xl items-center"
        // ref={headerRef}
        >
            <Logo />
            <NavigationBar />
        </header>
    );
}

export default Header;