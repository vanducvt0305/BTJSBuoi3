function getElement(selector) {
  return document.querySelector(selector);
}
// Xác Định Chẵn Lẽ
let soTuNhienDom = getElement("#soTuNhien");
let xacDinhKetQua = getElement("#xacDinhKetQua");
let inKetQua = getElement("#inKetQua");

xacDinhKetQua.onclick = () => {
  if (soTuNhienDom.value % 2 == 0) {
    inKetQua.classList.remove("hidden");
    inKetQua.classList.add("block");
    inKetQua.innerHTML = "Đây là số chẵn!";
  } else {
    inKetQua.classList.remove("hidden");
    inKetQua.classList.add("block");
    inKetQua.innerHTML = "Đây là số lẽ!";
  }
};

// Xét thưởng nhân viên đạt đủ doanh số

let soLuongBan = getElement("#soLuongBan");
let tongDoanhSo = getElement("#tongDoanhSo");
let tinhThuong = getElement("#tinhThuong");
let inThuong = getElement("#inThuong");

tinhThuong.onclick = () => {
  if (parseInt(soLuongBan.value) >= 100) {
    if (tongDoanhSo.value == "") {
      inThuong.classList.remove("hidden");
      inThuong.classList.add("block");
      inThuong.innerHTML = "Bạn chưa nhập doanh số";
    } else {
      inThuong.classList.remove("hidden");
      inThuong.classList.add("block");
      inThuong.innerHTML = `Bạn đạt thưởng: ${
        parseInt(tongDoanhSo.value) * 0.1
      } $`;
    }
  } else {
    inThuong.classList.remove("hidden");
    inThuong.classList.add("block");
    inThuong.innerHTML = "Bạn không đạt doanh số !";
  }
};

// Tính Chiết Khấu
let soTienMuaHang = getElement("#soTienMuaHang");
let tinhChietKhau = getElement("#tinhChietKhau");
let inChietKhau = getElement("#inChietKhau");

tinhChietKhau.onclick = () => {
  inChietKhau.classList.remove("hidden");
  inChietKhau.classList.add("block");
  if (+soTienMuaHang.value > 500) {
    inChietKhau.innerHTML = `Bạn được chiết khấu ${
      parseFloat(soTienMuaHang.value) * 0.2
    } $`;
  } else {
    inChietKhau.innerHTML = "Bạn không được chiết khấu";
  }
};

// Kiểm tra mật khẩu mạnh hay yếu

let password = getElement("#password");
let register = getElement("#register");
let inThongBao = getElement("#inThongBao");

register.onclick = () => {
  inThongBao.classList.remove("hidden");
  inThongBao.classList.add("block");
  if (password.value.length >= 8) {
    inThongBao.innerHTML = "Chúc mừng bạn đã tạo tài khoản thành công";
  } else {
    inThongBao.innerHTML = "Mật khẩu không đủ mạnh(Ít nhất 8 kí tự)";
  }
};
