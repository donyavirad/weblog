import Image from "next/image"
import heroImg from "../../public/images/hero.svg"
const HeroImage = () => {
  return (
    <div className="w-full lg:w-1/2 ">
        <Image src={heroImg} alt="hero image"/>
    </div>
  )
}

export default HeroImage