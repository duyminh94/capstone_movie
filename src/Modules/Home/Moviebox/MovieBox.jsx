import React, { useEffect, useState } from 'react'
import { Tabs } from 'antd'
import { useNavigate } from "react-router-dom"
import tickerAPI from '../../../Services/tickerAPI'



import dayjs from "dayjs"
import "./MovieBox.css"

const MovieBox = () => {
    const navigate = useNavigate()
    const [cinemas, setCinemas] = useState([])

    useEffect(() => {
        (async () => {
            const data = await tickerAPI.getMovieRap()
            setCinemas(data)
        })()
    }, [])

    const items = cinemas?.map((cinebox) => {
        const subItems = cinebox.lstCumRap?.slice(0, 10).map((cineComplex, index) => {
            // console.log(cineComplex.tenCumRap)
            return {
                label: <div className='cine-info'>
                    <h3 className='cine-name'>
                        {cineComplex.tenCumRap}
                    </h3>
                    <p className='cine-address'>
                        {cineComplex.diaChi}
                    </p>
                    <span className='cine-detail'>Chi Tiết</span>
                </div>,
                key: index,
                children:
                    cineComplex.danhSachPhim.map((flim, index) => {
                        return (
                            <div key={index} className="cine-flim">
                                <div className='cine-img'>
                                    <img
                                        src={flim.hinhAnh}
                                        alt={flim.maPhim}
                                        width={100}
                                        height={150}
                                    />
                                </div>
                                <div className='cine-title'>
                                    <h1>
                                        {flim.hot && (
                                            <span className='cine-sub'>Hot</span>
                                        )}
                                        {flim.tenPhim}
                                    </h1>
                                    {flim.lstLichChieuTheoPhim
                                        ?.slice(0, 4)
                                        .map((showtimes, idx) => {
                                            return (
                                                <button
                                                    key={idx}
                                                    className="cine-date" onClick={() => navigate(`/ticket/${showtimes.maLichChieu}`)}
                                                >
                                                    {dayjs(showtimes.ngayChieuGioChieu).format("DD/MM/YYYY - hh:mm A")}
                                                </button>
                                            )
                                        })}
                                </div>
                            </div>
                        )

                    }),
                className: "cinema-scroll"
            }
        })
        return {
            label: (
                <div className='logo'>
                    <img width={50} height={50}
                        src={cinebox.logo}
                        alt={cinebox.tenHeThongRap} />
                </div>
            ),
            key: cinebox.maHeThongRap,
            children:
                <Tabs className='cine-info'
                    defaultActiveKey='1'
                    tabPosition='left' items={subItems} />,
            className: "cinema-scroll"


        }
    })

    return (
        <div id='cinemax' className='cinemax'>
            <div className='cinemax_box'>
                <Tabs defaultActiveKey='1' tabPosition='left' items={items} />
            </div>
        </div>
    )
}

export default MovieBox