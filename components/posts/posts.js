import Container from "../UI/container";
import Image from "next/image";
import { posts } from "../../data/posts";
import Link from "next/link";
import { Button } from "@material-tailwind/react/components/Button";
const Posts = () => {
    return (
        <Container>
            <div className="flex flex-col items-center">
                <div>
                    {posts.map((item) => (
                        <div className="flex flex-col py-8 border-y border-gray-200 lg:flex-row-reverse lg:items-center lg:justify-between">
                            <div className="mb-4 lg:m-0 lg:w-2/5">
                                <Image src={item.image.url} fill={true} alt={item.image.alt} className="!static !h-[unset]" />
                            </div>
                            <div className="lg:w-2/5">
                                <span className="font-Montserrat-Regular text-gray-800 font tracking-[.5em] ">category tag</span>
                                <h2 className="font-Montserrat-Bold text-4xl my-4">{item.title}</h2>
                                <p className="font-Lato-Regular">{item.summery}
                                    <Link href={"/"} className={"text-green-brighter"}>
                                        {" "}
                                        Read more
                                    </Link>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="py-8">
                    <Button variant="text" color="gray" className="font-Montserrat-Medium text-black bg-[#F4F7F5] border border-[#CBC9C9]  rounded px-12 py-4">
                        Load More
                    </Button>
                </div>
            </div>
        </Container>
    );
};

export default Posts;
