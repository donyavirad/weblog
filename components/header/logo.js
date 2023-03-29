import Image from "next/image";
import logo from "../../public/images/logo.svg";
const Logo = () => {
    return (
        <div>
            <Image src={logo} alt="my blog logo" />
        </div>
    );
};

export default Logo;
