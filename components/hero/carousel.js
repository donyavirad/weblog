import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar } from "swiper";
import "swiper/css";

const Carousel = () => {
    const carouselItems = [
        {
            title: "My travel Ideas",
            description:
                "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
        },
        {
            title: "Best travel places",
            description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. St.",
        },
        {
            title: "Best Street food",
            description:
                "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth.",
        },
        {
            title: "Everyday tricks",
            description:
                "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him.",
        },
    ];
    return (
        <div>
            <Swiper
                slidesPerView={1}
                pagination={{
                    enabled: true,
                    clickable: true,
                    bulletClass: "bulletClass",
                    horizontalClass: "horizontalClass",
                    bulletActiveClass: "bulletActiveClass",
                }}
                modules={[Pagination, Scrollbar]}
            >
                {carouselItems.map((item, id) => (
                    <SwiperSlide key={id}>
                        <h3 className="py-2 text-4xl font-Montserrat-Bold">{item.title}</h3>
                        <p className="text-gray-800 font-Lato-Regular">{item.description}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;
