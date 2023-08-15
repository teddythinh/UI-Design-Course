# My Train App

<p>
  <!-- iOS -->
  <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
  <!-- Android -->
  <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
</p>

[Vietnamese](https://github.com/teddythinh/UI-Design-Course/blob/main/my-train-app/HuongDanSuDung.md)

> **IMPORTANT NOTE:** Because the Kitten UI package is conflicting with the Expo SDK 49, you may install with `--force` flag. Or you can downgrade the Expo SDK to 48.

## My configuration

- Windows 11
- MacOS Ventura 13.5
- Xcode 14.3.1 (14E300c)
- gitmoji-cli 8.4.0

## Techstack

- [React Native](https://reactnative.dev/): A library for building native apps using React
- [Expo](https://expo.dev/): A framework and a platform for universal React applications
- [React Navigation](https://reactnavigation.org/): Routing and navigation for React Native apps.
- [TypeScript](https://www.typescriptlang.org/): A typed superset of JavaScript that compiles to plain JavaScript.
- [React Native Elements](https://reactnativeelements.com/): A cross-platform UI toolkit for React Native.
- [UI Kitten](https://akveo.github.io/react-native-ui-kitten/): A React Native implementation of the Eva Design System.
- [Font Awesome](https://fontawesome.com/): The web's most popular icon set and toolkit.
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons): Customizable Icons for React Native.
- [react-native-maps](https://github.com/react-native-maps/react-native-maps): React Native Mapview component for iOS + Android.
- [react-native-paper](https://reactnativepaper.com/): Material Design for React Native.
- [react-native-dotenv](https://github.com/goatandsheep/react-native-dotenv): Loads environment variables from .env file.

## Installation

```bash
npm install
```

or

```bash
yarn install
```

## Usage

There are two ways to start the app that I use:

### 1. Using Expo Go

- Install Expo Go on your device
- Run
  - `npx expo start` or
  - `yarn start` or
  - `npm start`
- Scan the QR code with Expo Go (Android) or Camera (iOS)
- Enjoy!

### 2. Using Android Emulator or iOS Simulator

Refer to this [React Native doc](https://reactnative.dev/docs/environment-setup) for detailed installation.

Refer to this [Android Studio Emulator doc](https://docs.expo.dev/workflow/android-studio-emulator/) and [iOS Simulator doc](https://docs.expo.dev/workflow/ios-simulator/) for detailed installation.

Because I use MacOS, I will only instruct how to run on iOS Simulator.

- **Install Node and Watchman.** If you have already installed Node on your system, make sure it is Node 16 or newer.

> Note: I suggest using [Homebrew](https://brew.sh/).

```bash
brew install node
brew install watchman
```

- Install Xcode via the [Mac App Store](https://apps.apple.com/us/app/xcode/id497799835?mt=12). If you have already installed Xcode on your system, make sure it is version 10 or newer.

- Install Command Line Tools in Xcode.
  - Open Xcode, then choose Settings... (or Preferences...) from the Xcode menu.
  - Go to the Locations panel and install the tools by selecting the most recent version in the Command Line Tools dropdown.

- Install CocoaPods.

```bash
sudo gem install cocoapods
```

> Note: If CocoaPods requires to install `activesupport` or any package of Gem, you must use `sudo` before `gem`.

- Run
  - `npx expo start` or
  - `yarn start` or
  - `npm start`

- Press `i` to open iOS Simulator.
- Enjoy!

> Note: If you use VSCode like me, you can install Android iOS Emulator extension to quick start the emulator.
