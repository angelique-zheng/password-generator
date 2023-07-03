# Password Generator

[React Native](https://reactnative.dev/) application for generating passwords.

## Installation

### Prerequisites

-   Follow the [React Native](https://reactnative.dev/docs/environment-setup) documentation to configure the development environment.

-   You must install [Node.js](https://nodejs.org/fr/download) and [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)

### Dependencies

In the project directory, run `yarn install` or `yarn` to install dependencies.

## Run

### Android

Follow these steps to launch the application on Android :

-   Launch Android emulator or connect Android device to the laptop
-   Run the command `adb reverse tcp:8081 tcp:8081`
-   Build and install the application with Android Studio
-   Run the `yarn start` command in the project root directory

### iOS

Follow these steps to launch the application on iOS :

-   Launch iOS simulator or connect iOS device to the laptop
-   Run the command `pod install`
-   Build and install the application with Xcode

## Notes

This project uses [zxcvbn](https://github.com/dropbox/zxcvbn) to check password strength.
