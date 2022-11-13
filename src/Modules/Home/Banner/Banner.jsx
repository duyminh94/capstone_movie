import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation, Autoplay } from "swiper"
import { AiOutlineClose, AiOutlinePlayCircle } from "react-icons/ai"
import React, { useEffect, useState } from 'react'
import movieAPI from '../../../Services/movieAPI';
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import ReactPlayer from "react-player/lazy"
import { HashLoader } from "react-spinners"
import style from "./banner.module.css"

const TRAILERS = [
    "https://www.youtube.com/watch?v=uoKSzOuPcfY",
    "https://www.youtube.com/watch?v=kBY2k3G6LsM&t",
    "https://www.youtube.com/watch?v=tKASVDh_G68",
];



const Banner = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [video, setVideo] = useState("");
    const [playVideo, setPlayVideo] = useState(false);

    const showModal = (trailer) => {
        setIsModalOpen(true);
        setVideo(trailer);
        setPlayVideo(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setVideo("");
    };

    const [banners, setBanners] = useState([])
    
    useEffect(() => {
        /* IIFE */
        (async () => {
            const data = await movieAPI.getBanners()
            setBanners(data)
        })()
        
    }, [])

    const bannerTrailer = banners?.map((banner, index) => {
        return { ...banner, trailer: TRAILERS[index] }
    })
    return (
        <>
            <div className={style.banner}>
                <Swiper slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className={style.mySwiper}>
                    {bannerTrailer?.map((banner, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <img src={banner.hinhAnh} alt={`banner-${banner.maBanner}`} />
                                <button className={style.banner_icon_play}
                                    onClick={() => showModal(banner.trailer)}>
                                    <AiOutlinePlayCircle />
                                </button>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
                <div style={{ display: isModalOpen ? "block" : "none" }} className={style.main}>
                    <div className={style.banner_overlay} onClick={closeModal}></div>

                    <div className={style.banner_modal}>
                        <div className={style.banner_close} onClick={closeModal}>
                            <button className={style.button_trailer}>
                                <AiOutlineClose />
                            </button>
                        </div>
                        <ReactPlayer playing={playVideo} controls url={video} />
                    </div>
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "50px",
                    }}
                >
                    <HashLoader
                        style={{
                            margin: "0 auto",
                            borderColor: "#fff",
                            display: "block",
                        }}
                        color={"red"}
                        loading={banners}
                        size={30}
                    />
                </div>
            </div>
        </>


    )
}

export default Banner

