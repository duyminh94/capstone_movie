import fetcher from "./fetcher"


const tickerAPI = {
    getMovieRap: () => {
        return fetcher.get("QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP03",{
            params: {
                maNhom: "GP03"
            }
        })
    }
}

export default tickerAPI