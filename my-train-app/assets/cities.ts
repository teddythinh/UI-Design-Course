type City = {
  title: string;
  body: string;
  imgUrl: string;
  introduction: string;
  prices: string;
};

const cities: City[] = [
  {
    title: "Hà Nội",
    body: "Hà Nội là thủ đô, đồng thời là thành phố đứng đầu Việt Nam về diện tích tự nhiên và dân số. Hà Nội là trung tâm chính trị, văn hóa, khoa học kỹ thuật và kinh tế của cả nước.",
    imgUrl:
      "https://booking.muongthanh.com/upload_images/images/2022/06/du-lich-ho-hoan-kiem-gan-ha-noi.jpg",
    introduction:
      "Hà Nội là thủ đô của Việt Nam, là một thành phố có lịch sử lâu đời và văn hóa phong phú. Thành phố nằm ở đồng bằng sông Hồng, cách biển Đông khoảng 100 km về phía bắc. Hà Nội có diện tích 3.324,92 km² và dân số khoảng 8,6 triệu người. Hà Nội là một thành phố năng động và hiện đại, là trung tâm kinh tế, văn hóa, giáo dục, khoa học của Việt Nam.",
    prices: "Giá vé máy bay khứ hồi từ TP.HCM: 2.000.000đ - 3.000.000đ",
  },
  {
    title: "Hồ Chí Minh",
    body: "Thành phố Hồ Chí Minh, thường được gọi là Sài Gòn, là thành phố lớn nhất tại Việt Nam. Đây là trung tâm kinh tế, văn hóa, giáo dục và du lịch của Việt Nam.",
    imgUrl:
      "https://www.visithcmc.vn/uploads/0000/6/2021/08/22/hcmc-1120046774-1.jpg",
    introduction:
      "Thành phố Hồ Chí Minh là thành phố lớn nhất và là trung tâm kinh tế, văn hóa, giáo dục, khoa học lớn nhất của Việt Nam. Thành phố nằm ở cửa ngõ phía Đông Nam, cách thủ đô Hà Nội 1.730 km về phía Nam. Thành phố có diện tích 2.095 km2 và dân số hơn 9 triệu người.",
    prices: "Giá vé máy bay khứ hồi từ Hà Nội: 2.000.000đ - 3.000.000đ",
  },
  {
    title: "Đà Nẵng",
    body: "Đà Nẵng là thành phố trực thuộc trung ương và là trung tâm kinh tế, chính trị, văn hóa, giáo dục, khoa học kỹ thuật và du lịch của miền Trung và Tây Nguyên Việt Nam.",
    imgUrl:
      "https://images2.thanhnien.vn/528068263637045248/2023/4/23/cau-vang-da-nang-16822248307311159361992.jpg",
    introduction:
      "Đà Nẵng là một thành phố trực thuộc trung ương của Việt Nam, nằm ở khu vực miền Trung Việt Nam. Thành phố có diện tích 1.285 km2 và dân số khoảng 1,134 triệu người. Đà Nẵng là một thành phố có vị trí chiến lược quan trọng, là cửa ngõ ra biển của miền Trung Việt Nam. Thành phố cũng là một trung tâm kinh tế, văn hóa, giáo dục và du lịch lớn của Việt Nam.",
    prices: "Giá vé máy bay khứ hồi từ Hà Nội: 1.500.000đ - 2.000.000đ",
  },
  {
    title: "Hải Phòng",
    body: "Hải Phòng là thành phố trực thuộc trung ương và là trung tâm kinh tế, chính trị, văn hóa, giáo dục, khoa học kỹ thuật và du lịch của miền Trung và Tây Nguyên Việt Nam.",
    imgUrl:
      "https://media.vneconomy.vn/images/upload/2022/04/28/hai-phong-no-luc-doi-moi-53744.jpg",
    introduction:
      "Hải Phòng là một thành phố cảng lớn ở miền Bắc Việt Nam, cách thủ đô Hà Nội khoảng 120 km về phía đông. Thành phố có diện tích 1.562 km2 và dân số khoảng 2,1 triệu người. Hải Phòng là một thành phố có lịch sử lâu đời, có từ thời nhà Lý (thế kỷ thứ 11). Thành phố là một trung tâm kinh tế, văn hóa, giáo dục, khoa học và du lịch lớn của Việt Nam.",
    prices: "Giá vé máy bay khứ hồi từ Hồ Chí Minh: 2.500.000đ - 3.500.000đ",
  },
  {
    title: "Huế",
    body: "Huế là thành phố trực thuộc trung ương và là trung tâm kinh tế, chính trị, văn hóa, giáo dục, khoa học kỹ thuật và du lịch của miền Trung và Tây Nguyên Việt Nam.",
    imgUrl:
      "https://vietsensetravel.com/view/at_nen-di-du-lich-hue-vao-thang-nao_5a06d2932d1bc437a73d2d3eaf127369.jpg",
    introduction:
      "Huế là một thành phố trực thuộc trung ương của Việt Nam, nằm ở khu vực miền Trung Việt Nam. Thành phố có diện tích 70,67 km2 và dân số khoảng 340.000 người. Huế là một thành phố có lịch sử lâu đời, là kinh đô của triều đại Nguyễn từ năm 1802 đến năm 1945. Thành phố là một trung tâm văn hóa, giáo dục và du lịch lớn của Việt Nam.",
    prices: "Giá vé máy bay khứ hồi từ Hồ Chí Minh: 1.500.000đ - 2.000.000đ",
  },
  {
    title: "Hạ Long",
    body: "Hạ Long là thành phố trực thuộc trung ương và là trung tâm kinh tế, chính trị, văn hóa, giáo dục, khoa học kỹ thuật và du lịch của miền Trung và Tây Nguyên Việt Nam.",
    imgUrl:
      "https://ik.imagekit.io/tvlk/blog/2022/10/kinh-nghiem-du-lich-vinh-ha-long-1.jpg",
    introduction:
      "Hạ Long là một thành phố trực thuộc trung ương của Việt Nam, nằm ở khu vực miền Trung Việt Nam. Thành phố có diện tích 70,67 km2 và dân số khoảng 340.000 người. Huế là một thành phố có lịch sử lâu đời, là kinh đô của triều đại Nguyễn từ năm 1802 đến năm 1945. Thành phố là một trung tâm văn hóa, giáo dục và du lịch lớn của Việt Nam.",
    prices: "Giá vé máy bay khứ hồi từ Hồ Chí Minh: 3.500.000đ - 4.000.000đ",
  },
];

export default cities;
