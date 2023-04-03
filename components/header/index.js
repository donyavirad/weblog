import { useState } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import Hamberger from "./hamberger";
import Logo from "./logo";
import NavbarList from "./navbar";
import Notification from "./notification";
import Subscribe from "./subscribe";

const Header = () => {
    const mediaLg = useMediaQuery("lg");
    const [openNav, setOpenNav] = useState(false)
    if (mediaLg) {
        return (
            <div className="px-8">
                <header className="flex justify-between items-center py-4 border-b border-gray-400">
                    <Logo />
                    <NavbarList />
                    <Subscribe />
                </header>
            </div>
        );
    }
    return (
        <div className="px-4">
            <header className="flex flex-col py-4 border-b border-gray-400">
                <div className="flex justify-between items-center">
                    <Hamberger openNav={openNav} setOpenNav={setOpenNav}/>
                    <Logo />
                    <Notification />
                </div>
                <div>
                    <NavbarList  openNav={openNav}/>
                </div>
            </header>
        </div>
    );
};

export default Header;
