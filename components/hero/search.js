import { Button } from "@material-tailwind/react/components/Button";

const Search = () => {
    return (
        <div className="flex items-center">
            <input
                type={"text"}
                className="h-10 w-full px-4 shadow-box rounded-none rounded-tl-lg rounded-bl-lg font-Montserrat-Regular text-gray-800 focus-visible:outline-none placeholder:text-[#00000020] lg:w-auto"
                placeholder="Search Blog"
            />
            <Button variant="text" color="white" className="h-10 px-8  bg-gradient-to-r from-green-brighter to-green-darker  font-Montserrat-Regular rounded-none rounded-tr-lg rounded-br-lg ">
                Search
            </Button>
        </div>
    );
};

export default Search;
