import Container from "../UI/container";
import Carousel from "./carousel";
import Search from "./search";

const Hero = () => {
    return (
        <Container>
        <div className="flex justify-between items-center">
            <div className="flex flex-col justify-center items-center">
                <div>
                    <span>My Experience Blog</span>
                </div>
                <Carousel/>
                <div>
                    <Search/>
                </div>
            </div>
            <div>Hero Image</div>
        </div>
        </Container>
    );
};

export default Hero;
