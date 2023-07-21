type Station = {
  name: string;
  address: string;
  phone: string;
  lat: number;
  lng: number;
  img: string;
};

const stations: Station[] = [
  {
    name: "Lào Cai",
    address: "Thị xã Lào Cai, phường Phố Mới, tỉnh Lào Cai",
    phone: "020830093",
    lat: 22.492351212950847,
    lng: 103.97822399970688,
    img: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Ga_L%C3%A0o_Cai.jpg",
  },
  {
    name: "Đồng Đăng",
    address: "Thị trấn Đồng Đăng, huyện Cao Lộc, tỉnh Lạng Sơn",
    phone: "0253851077",
    lat: 21.94404069758953,
    lng: 106.69709444630752,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Dong_Dang_Railway_Station_%28Sep_15%2C_2018%29.jpg/1200px-Dong_Dang_Railway_Station_%28Sep_15%2C_2018%29.jpg",
  },
  {
    name: "Hải Phòng",
    address: "75 đường Lương Khánh Thiện, quận Ngô Quyền, thành phố Hải Phòng",
    phone: "031921333",
    lat: 20.85626963014586,
    lng: 106.687546519189,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Ga_Hai_Phong.JPG/1200px-Ga_Hai_Phong.JPG",
  },
  {
    name: "Hà Nội",
    address: "120 đường Lê Duẩn, quận Hoàn Kiếm, thành phố Hà Nội",
    phone: "",
    lat: 21.024503227352305,
    lng: 105.84098608849577,
    img: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Ga_H%C3%A0_N%E1%BB%99i_-_NKS.jpg",
  },
  {
    name: "Vinh",
    address: "01 đường Lệ Ninh, phường Quán Bầu, thành phố Vinh, tỉnh Nghệ An",
    phone: "0383853426",
    lat: 18.68844163366085,
    lng: 105.6640772197683,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Vinh_Station.jpg/640px-Vinh_Station.jpg",
  },
  {
    name: "Huế",
    address: "02 đường Bùi Thị Xuân, thành phố Huế, tỉnh Thừa Thiên Huế",
    phone: "0543822175",
    lat: 16.456682913611,
    lng: 107.57801565855124,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Bahnhof_Hue_%287068918447%29.jpg/1200px-Bahnhof_Hue_%287068918447%29.jpg",
  },
  {
    name: "Đà Nẵng",
    address: "202 đường Hải Phòng, thành phố Đà Nẵng",
    phone: "05113823810",
    lat: 16.07164807059192,
    lng: 108.2092022819836,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Da_Nang_Train_Stn_Front.JPG/1200px-Da_Nang_Train_Stn_Front.JPG",
  },
  {
    name: "Quảng Ngãi",
    address:
      "204 đường Nguyễn Chí Thanh, phường Quảng Phú, thị xã Quảng Ngãi, tỉnh Quảng Ngãi",
    phone: "0553820280",
    lat: 15.121288775839073,
    lng: 108.78152276585658,
    img: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Qu%E1%BA%A3ng_Ng%C3%A3i_Railway_Station.JPG",
  },
  {
    name: "Nha Trang",
    address:
      "17 đường Thái Nguyên, phường Phước Tân, thành phố Nha Trang, tỉnh Khánh Hòa",
    phone: "0583822113",
    lat: 12.248724591009005,
    lng: 109.1843227335716,
    img: "https://cdn1.nhatrangtoday.vn/images/photos/ga-nha-trang-top.jpg",
  },
  {
    name: "Sài Gòn",
    address: "01 đường Nguyễn Thông, phường 9, quận 3, thành phố Hồ Chí Minh",
    phone: "",
    lat: 10.782465327454593,
    lng: 106.67913200377494,
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Ga_S%C3%A0i_G%C3%B2n.jpg",
  },
];

export default stations;
