import { IconButton } from "@material-tailwind/react";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const Hamberger = ({ openNav, setOpenNav }) => {
    const mediaLg = useMediaQuery("lg");

    if (!mediaLg)
        return (
            <div>
                {openNav ? (
                    <IconButton onClick={() => setOpenNav(false)} variant="text" ripple={false} className="hover:bg-transparent focus:bg-transparent active:bg-transparent">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="#000" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </IconButton>
                ) : (
                    <IconButton onClick={() => setOpenNav(true)} variant="text" ripple={false} className="hover:bg-transparent focus:bg-transparent active:bg-transparent">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="#000" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </IconButton>
                )}
            </div>
        );
};

export default Hamberger;
