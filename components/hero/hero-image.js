import Image from "next/image";
import heroImg from "../../public/images/hero.svg";
const HeroImage = () => {
    return (
        <div>
            <Image src={heroImg} alt="hero image" />
        </div>
    );
};

export default HeroImage;
