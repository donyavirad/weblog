import { IconButton } from "@material-tailwind/react";
import Link from "next/link";
import { MdNotifications } from "react-icons/md";

const Notification = () => {
    return (
        <div>
            <Link href={"/"}>
                <IconButton variant="text">
                    <MdNotifications className="w-8 h-8 text-black" />
                </IconButton>
            </Link>
        </div>
    );
};

export default Notification;
