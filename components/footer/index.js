import SubscribeEmail from "./SubscribeEmail";
import Image from "next/image";
import Link from "next/link";
import Container from "../UI/container";
import phoneSvg from "../../public/images/phone.svg"
import emailSvg from "../../public/images/email.svg"
const Footer = () => {
    return (
        <div>
            <SubscribeEmail />
            <Container>
                <div className="flex flex-col items-center py-8 lg:flex-row font-Montserrat-Regular">
                    <div className="flex flex-col space-y-4 w-full">
                        <span className="font-bold">Contacts</span>
                        <p>Esfarayen, North Khorasan, Iran</p>
                        <div className="flex items-center space-x-2">
                            <Image src={phoneSvg} alt="phone number"/>
                            <span>9024431024</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Image src={emailSvg} alt="email"/>
                            <span>hamed@gmail.com</span>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4 w-full mt-4">
                        <span className=" font-bold">Popular</span>
                        <Link href="/">Free travel video</Link>
                        <Link href="/">Maps</Link>
                        <Link href="/">Hotel contact book</Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
