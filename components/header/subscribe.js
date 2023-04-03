import Button from "@material-tailwind/react/components/Button";
import { useMediaQuery } from "../../hooks/useMediaQuery";
const Subscribe = () => {
    const mediaLg = useMediaQuery("lg");
    if (mediaLg) {
        return (
            <div>
                <Button className="px-4 py-2 font-Montserrat-Medium bg-gradient-to-r from-green-brighter to-green-darker rounded shadow-none hover:shadow-none">Subscribe</Button>
            </div>
        );
    }
    return (
        <div>
            <Button className="w-full py-2 font-Montserrat-Medium bg-gradient-to-r from-green-brighter to-green-darker rounded shadow-none hover:shadow-none">Subscribe</Button>
        </div>
    );
};

export default Subscribe;
