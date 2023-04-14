import Image from "next/image";
import Link from "next/link";
const Card = ({ category, title, summary, link }) => {
    return (
        <div>
            <div>
                <Image />
            </div>
            <div>
                <span>{category}</span>
                <h2>{title}</h2>
                <p>
                    {summary} <Link href={link}>Read more</Link>
                </p>
            </div>
        </div>
    );
};

export default Card;
