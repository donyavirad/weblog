import Container from "../UI/container";
import Carousel from "./carousel";
import HeroImage from "./hero-image";
import Search from "./search";

const Hero = () => {
    return (
        <Container>
            <div className="flex justify-between items-center">
                <div className="flex flex-col justify-center items-center">
                    <div>
                        <span>My Experience Blog</span>
                    </div>
                    <Carousel />
                    <div>
                        <Search />
                    </div>
                </div>
                <HeroImage />
            </div>
        </Container>
    );
};

export default Hero;
