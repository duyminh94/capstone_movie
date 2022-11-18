import fetcher from "./fetcher";

const ticketboxAPI = {
  getTicket: (ticketId) => {
    return fetcher.get("QuanLyDatVe/LayDanhSachPhongVe", {
      params: {
        MaLichChieu: ticketId,
      },
    });
  },
};

export default ticketboxAPI