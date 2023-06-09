import { useMediaQuery } from "../../hooks/useMediaQuery";

const Hamberger = ({ openNav, setOpenNav }) => {
    const mediaLg = useMediaQuery("lg");

    if (!mediaLg)
        return (
            <div className="flex justify-center items-center">
                {openNav ? (
                    <button onClick={() => setOpenNav(false)} className="hover:bg-transparent focus:bg-transparent active:bg-transparent">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="#000" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                ) : (
                    <button onClick={() => setOpenNav(true)} className="hover:bg-transparent focus:bg-transparent active:bg-transparent">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="#000" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                )}
            </div>
        );
};

export default Hamberger;
