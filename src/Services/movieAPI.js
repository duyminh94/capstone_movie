import fetcher from "./fetcher";

const movieAPI = {
  // getBanners: () => {
  //   return fetcher.get("QuanLyPhim/LayDanhSachBanner");
  // },
  getMovies: () => {
    return fetcher.get("QuanLyPhim/LayDanhSachPhim?maNhom=GP04", {
      params: {
        maNhom: "GP04",
        /* GP 01 - 015 */
      },
    });
  },
};

export default movieAPI;
