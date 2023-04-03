import Link from "next/link";
import { MdNotifications } from "react-icons/md";

const Notification = () => {
    return (
        <div>
            <Link href={"/"} className={"block"}>
                <MdNotifications className="w-6 h-6 text-black" />
            </Link>
        </div>
    );
};

export default Notification;
