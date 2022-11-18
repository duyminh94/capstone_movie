import fetcher from "./fetcher";

const authAPI = {
  login: (values) => {
    return fetcher.post("QuanLyNguoiDung/DangNhap", values);
  },
  register: (values) => {
    return fetcher.post("QuanLyNguoiDung/DangKy", {
      ...values,
      maNhom: "GP04",
    });
  },

  getUsers: () => {
    return fetcher.get("QuanLyNguoiDung/LayDanhSachNguoiDung", {
      params: {
        maNhom: "GP04",
      },
    });
  },
  
};
export default authAPI;
