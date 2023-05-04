import Container from "../UI/container";
import Button from "@material-tailwind/react/components/Button";
const SubscribeEmail = () => {
    return (
        <div className="bg-[#383941] py-8">
            <Container>
                <div className="flex flex-col items-center justify-between space-y-6">
                    <span className="text-white font-Montserrat-Bold">Subscribe and join thousands like you!</span>
                    <div className="w-full flex items-center lg:w-auto lg:justify-center">
                        <input
                            type={"text"}
                            className="w-full h-10 px-4 rounded-none rounded-tl-lg rounded-bl-lg text-gray-800 font-Montserrat-Regular focus-visible:outline-none placeholder:text-[#00000020] placeholder:font-Montserrat-Regular lg:w-80"
                            placeholder="example@bussines.com"
                        />
                        <Button variant="text" className="h-10 px-0 w-36 bg-gradient-to-r from-green-brighter to-green-darker font-Montserrat-Bold text-white rounded-none rounded-tr-lg rounded-br-lg">
                            Subscribe
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SubscribeEmail;
