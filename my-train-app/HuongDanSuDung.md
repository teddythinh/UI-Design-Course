# Hướng dẫn sử dụng

## Cấu hình

- Windows 11
- MacOS Ventura 13.5
- Xcode 14.3.1 (14E300c)

### Điều kiện cần

- NodeJS phiên bản mới nhất hoặc từ 16 trở lên.

> **CHÚ Ý:** Vì thư viện Kitten UI bị conflict với Expo SDK 49 nên có thể phải install các packages với cờ `--force` hoặc có thể hạ phiên bản Expo SDK xuống 48.

## Cài đặt

Ta dùng lệnh này để clone repo xuống:

```bash
git clone https://github.com/teddythinh/UI-Design-Course.git
```

Sau đó, ta chuyển vào thư mục `my-train-app`:

```bash
cd my-train-app
```
Ta cài đặt các packages qua lệnh:

```bash
npm install
```

hoặc nếu sử dụng yarn

```bash
yarn install
```

## Sử dụng

Có hai cách chạy app mà nhóm sử dụng:

### 1. Sử dụng ứng dụng Expo Go thông qua thiết bị thật **(Recommend)**

1. Ta cần cài ứng dụng Expo Go thông qua Google Play Store trên thiết bị Android hoặc Appstore trên thiết bị iOS.
2. Ta chạy lệnh:

- `npm start` hoặc
- `npx expo start`

3. Lúc này, trên terminal sẽ xuất hiện mã QR code, bạn cần quét mã thông qua ứng dụng Expo Go (Android) hoặc máy ảnh (iOS).
4. Ứng dụng sẽ cài đặt và chạy.

### 2. Sử dụng các máy ảo Android hoặc iOS

Theo dõi [React Native doc](https://reactnative.dev/docs/environment-setup) để xem chi tiết cài đặt.

Theo dõi [Android Studio Emulator doc](https://docs.expo.dev/workflow/android-studio-emulator/) và [iOS Simulator doc](https://docs.expo.dev/workflow/ios-simulator/) để xem chi tiết cài đặt.

Vì project này sử dụng MacOS, nhóm sẽ hướng dẫn cài đặt trên máy ảo iOS.

1. Cài đặt Node và Watchman: Nếu bạn đã cài đặt Node từ trước thì chỉ cần cài đặt Watchman.

> Lưu ý: Nhóm cài đặt các package thông qua [Homebrew](https://brew.sh/).

```bash
brew install node
brew install watchman
```

2. Cài đặt Xcode thông qua [Mac App Store](https://apps.apple.com/us/app/xcode/id497799835?mt=12).

3. Cài đặt Command Line Tools trong Xcode:

- Mở Xcode, chọn Settings (hoặc Preferences) từ menu.
- Chọn panel Locations, chọn version gần nhất từ Command Line Tools.

4. Cài đặt CocoaPods:

```bash
sudo gem install cocoapods
```

> Lưu ý: Nếu CocoaPods yêu cầu cài đặt `activesupport` hoặc các package liên quan từ Gem, bạn cần dùng lệnh `sudo` trước lệnh `gem`.

5. Ta chạy lệnh:

- `npm start` hoặc
- `npx expo start`

6. Bấm phím `i` để mở trình máy ảo iOS.
