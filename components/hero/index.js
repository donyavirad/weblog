import Container from "../UI/container";
import Carousel from "./carousel";
import HeroImage from "./hero-image";
import Search from "./search";

const Hero = () => {
    return (
        <Container>
            <div className="flex flex-col-reverse justify-between items-center py-8 lg:flex-row lg:space-x-16 lg:py-12">
                <div className="flex flex-col justify-center w-full lg:w-2/5">
                    <div>
                        <span className="text-gray-800">My Experience Blog</span>
                    </div>
                    <Carousel />
                    <div className="mt-4">
                        <Search />
                    </div>
                </div>
                <div className="mb-8 lg:mb-0">
                    <HeroImage />
                </div>
            </div>
        </Container>
    );
};

export default Hero;
