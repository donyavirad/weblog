import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import logo from "../../public/images/logo.svg";
import smallLogo from "../../public/images/logo-small.svg";
const Logo = () => {
    const mediaLg = useMediaQuery("lg");

    if (mediaLg) {
        return (
            <div>
                <Link href={"/"}>
                    <Image src={logo} className={"w-40"} alt="my blog logo" />
                </Link>
            </div>
        );
    }
    return (
        <div>
            <Link href={"/"}>
                <Image src={smallLogo} className={"w-8"} alt="my blog logo" />
            </Link>
        </div>
    );
};

export default Logo;