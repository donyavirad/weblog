import { useMediaQuery } from "../../hooks/useMediaQuery";

const NavbarList = () => {
    const menuItems = ["Hotel Experiences", "Best travel places", "Cheap traveling ideas", "Wildlife Safari", "Best Street food"];
    const mediaLg = useMediaQuery("lg");
    if (mediaLg) {
        return (
            <nav>
                <ul className="flex space-x-4">
                    {menuItems.map((item, id) => (
                        <li
                            key={id}
                            className="relative transition-all duration-300 font-Lato-Regular text-gray-800  cursor-pointer  hover:text-green-darker hover:font-Lato-Bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:transition-all after:duration-300 after:h-0.5 after:bg-green-darker hover:after:w-1/2 "
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </nav>
        );
    }
    return (
        <nav>
            <ul className="flex flex-col mt-4">
                {menuItems.map((item, id) => (
                    <li
                        key={id}
                        className="relative py-1 transition-all duration-300 font-Lato-Regular text-gray-800  cursor-pointer  hover:text-green-darker hover:font-Lato-Bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:transition-all after:duration-300 after:h-0.5 after:bg-green-darker hover:after:w-full "
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavbarList;
