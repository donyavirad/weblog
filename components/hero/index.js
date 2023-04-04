import Carousel from "./carousel";

const Hero = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex flex-col justify-center items-center">
                <div>
                    <span>My Experience Blog</span>
                </div>
                <Carousel/>
                <div>search</div>
            </div>
            <div>Hero Image</div>
        </div>
    );
};

export default Hero;
